<script>
  import * as Popover from "$lib/components/ui/popover";
  import { onMount } from "svelte";
  import { Badge } from "$lib/components/ui/badge";
  import { Button } from "$lib/components/ui/button";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { base } from "$app/paths";
  import { sub, startOfDay, getUnixTime } from "date-fns";
  import GMI from "$lib/components/gmi.svelte";
  import { page } from "$app/stores";
  import { analyticsEvent } from "$lib/boringOne";
  import Share2 from "lucide-svelte/icons/share-2";
  import ArrowRight from "lucide-svelte/icons/arrow-right";
  import Settings from "lucide-svelte/icons/settings";
  import TrendingUp from "lucide-svelte/icons/trending-up";
  import Loader from "lucide-svelte/icons/loader";
  import ChevronLeft from "lucide-svelte/icons/chevron-left";
  import ChevronRight from "lucide-svelte/icons/chevron-right";
  import X from "lucide-svelte/icons/x";
  import { buttonVariants } from "$lib/components/ui/button";
  import { createEventDispatcher } from "svelte";
  import { afterUpdate } from "svelte";
  import axios from "axios";
  import { l, summaryTime, f } from "$lib/i18n/client";
  import { hoverAction, clickOutsideAction, slide } from "svelte-legos";
  import LoaderBoxes from "$lib/components/loaderbox.svelte";
  import NumberFlow from "@number-flow/svelte";
  import Incident from "$lib/components/IncidentNew.svelte";

  const dispatch = createEventDispatcher();

  export let monitor;
  export let localTz;
  export let lang;
  export let embed = false;
  export let selectedLang = "en";

  let _0Day = {};
  let _90Day = monitor.pageData._90Day;
  let uptime90Day = monitor.pageData.uptime90Day;
  let incidents = {};
  let dayIncidentsFull = [];
  let homeDataMaxDays = monitor.pageData.homeDataMaxDays;
  let daygridEl;

  let dimension = {
    x1: 6,
    x2: 4
  };

  dimension.x1 = ($page.data.isMobile ? 346 : 546) / homeDataMaxDays.maxDays;
  dimension.x2 = (4 / 6) * dimension.x1;

  function loadIncidents() {
    axios
      .post(`${base}/api/today/incidents`, {
        tag: monitor.tag,
        startTs: monitor.pageData.midnight90DaysAgo,
        endTs: monitor.pageData.maxDateTodayTimestamp,
        localTz: localTz
      })
      .then((response) => {
        if (response.data) {
          incidents = response.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getToday(startTs, incidentIDs) {
    let endTs = Math.min(startTs + 86400, monitor.pageData.maxDateTodayTimestamp);

    axios
      .post(`${base}/api/today`, {
        monitor: monitor,
        localTz: localTz,
        endTs: endTs,
        startTs: startTs,
        incidentIDs: incidentIDs
      })
      .then((response) => {
        if (response.data) {
          _0Day = response.data._0Day;
          dayUptime = response.data.uptime;
          dayIncidentsFull = response.data.incidents;
        }
        loadingDayData = false;
      })
      .catch((error) => {
        console.log(error);
        loadingDayData = false;
      });
  }

  function scrollToRight() {
    setTimeout(() => {
      if (daygridEl) {
        daygridEl.scrollLeft = daygridEl.scrollWidth;
      }
      let divs = document.querySelectorAll(".daygrid90");
      divs.forEach((div) => {
        div.scrollLeft = div.scrollWidth;
      });
    }, 120);
  }

  function returnUptimeRollers() {
    let rollers = homeDataMaxDays.selectableDays;
    //sort descending
    rollers.sort((a, b) => b - a);
    let ret = [];
    for (let i = 0; i < rollers.length; i++) {
      let roller = rollers[i];
      if (roller == 1) {
        ret.push({
          text: `${l(lang, "Today")}`,
          startTs: monitor.pageData.startOfTheDay,
          endTs: monitor.pageData.maxDateTodayTimestamp
        });
      } else {
        ret.push({
          text: `${roller} ${l(lang, "Days")}`,
          startTs: monitor.pageData.startOfTheDay - 86400 * (roller - 1),
          endTs: monitor.pageData.maxDateTodayTimestamp
        });
      }
      //if last index
      if (i == 0) {
        ret[i].value = uptime90Day;
      }
    }

    return ret;
  }

  let uptimesRollers = returnUptimeRollers();

  //start of the week moment
  let rolledAt = 0;
  let rollerLoading = false;
  async function rollSummary(r) {
    let newRolledAt = r;
    analyticsEvent("monitor_interval_switch", {
      tag: monitor.tag,
      interval: uptimesRollers[newRolledAt].text
    });

    if (uptimesRollers[newRolledAt].value === undefined) {
      rollerLoading = true;
      uptimesRollers[newRolledAt].loading = true;

      let resp = await axios.post(`${base}/api/today/aggregated`, {
        monitor: {
          tag: monitor.tag,
          include_degraded_in_downtime: monitor.include_degraded_in_downtime
        },
        startTs: uptimesRollers[newRolledAt].startTs,
        endTs: uptimesRollers[newRolledAt].endTs
      });
      uptimesRollers[newRolledAt].value = resp.data.uptime;
      rollerLoading = false;
    }
    rolledAt = newRolledAt;
    for (const key in _90Day) {
      if (Object.prototype.hasOwnProperty.call(_90Day, key)) {
        const element = _90Day[key];
        if (key >= uptimesRollers[rolledAt].startTs) {
          _90Day[key].border = true;
        } else {
          _90Day[key].border = false;
        }
      }
    }
  }

  onMount(async () => {
    scrollToRight();
    loadIncidents();
  });
  afterUpdate(() => {
    dispatch("heightChange", {});
  });
  function show90Inline(e, bar) {
    if (e.detail.hover) {
      _90Day[bar.timestamp].showDetails = true;
    } else {
      _90Day[bar.timestamp].showDetails = false;
    }
  }
  let showDailyDataModal = false;
  let selectedTs = null;
  let selectedBar = null;
  let selectedBarLeftPercent = null;
  let dateFetchedFor = "";
  let dayUptime = "NA";
  let loadingDayData = false;

  function dailyDataGetter(e, bar, incidentObj) {
    if (embed) {
      return;
    }

    if (selectedTs === bar.timestamp && showDailyDataModal) {
      showDailyDataModal = false;
      selectedTs = null;
      selectedBar = null;
      return;
    }

    selectedTs = bar.timestamp;
    selectedBar = bar;

    try {
      const button = e?.currentTarget || e?.target?.closest("button");
      const container = button?.parentElement;
      if (button && container) {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();
        const percent = ((buttonRect.left + buttonRect.width / 2 - containerRect.left) / containerRect.width) * 100;
        selectedBarLeftPercent = Math.max(8, Math.min(92, percent));
      }
    } catch (err) {
      selectedBarLeftPercent = 50;
    }

    let incidentIDs = incidentObj?.ids || [];
    dayUptime = "NA";
    dateFetchedFor = f(new Date(bar.timestamp * 1000), "EEEE, MMMM do, yyyy", selectedLang, $page.data.localTz);
    showDailyDataModal = true;

    loadingDayData = true;
    dayIncidentsFull = [];
    analyticsEvent("monitor_day_data", {
      tag: monitor.tag,
      data_date: dateFetchedFor
    });
    setTimeout(() => {
      getToday(bar.timestamp, incidentIDs);
    }, 50);
  }
</script>

<div class="monitor relative {showDailyDataModal ? 'z-40' : 'z-0'} grid w-full max-w-[740px] grid-cols-12 gap-2 pb-2 pt-0">
  {#if !!!embed}
    <div class="col-span-12 w-full">
      <div class="pt-0">
        <div class="scroll-m-20 pr-16">
          <div class="flex items-center gap-2.5">
            {#if monitor.image}
              <div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-secondary/50 p-0.5 overflow-hidden border border-border/40">
                <GMI
                  src={monitor.image}
                  classList="h-full w-full object-contain"
                  alt={monitor.name}
                  srcset=""
                />
              </div>
            {/if}
            <p class="min-w-0 flex-1 truncate font-['Space_Grotesk'] text-base md:text-lg font-bold text-foreground">
              {monitor.name}
            </p>
          </div>

          <p class="mt-1 text-xs font-medium text-muted-foreground">
            {#if !!monitor.description}
              {@html monitor.description}
            {/if}
          </p>
          <div class="absolute right-4 top-4 flex gap-x-1.5 md:right-6">
            {#if $page.data.isLoggedIn}
              <Button
                href="{base}/manage/app/monitors#{monitor.tag}"
                class="h-7 w-7 rounded-full p-0 flex items-center justify-center border border-border/60 bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground transition-all"
                variant="ghost"
                rel="external"
              >
                <Settings class="h-3.5 w-3.5" />
              </Button>
            {/if}
            <Button
              class="h-7 w-7 rounded-full p-0 flex items-center justify-center border border-border/60 bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground transition-all"
              variant="ghost"
              on:click={(e) => {
                dispatch("show_shareMenu", {
                  monitor: monitor
                });
              }}
            >
              <Share2 class="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  {/if}
  <div class="col-span-12 w-full min-h-[94px] pt-2">
    <div class="col-span-12">
      <div class="flex flex-wrap items-center justify-between gap-x-1 pb-1">
        <div>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger class="mr-2 flex">
              <Button variant="secondary" class="h-6 rounded-md border border-border/60 bg-secondary/60 px-2.5 text-xs font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-all">
                {uptimesRollers[rolledAt].text}
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content class="{!!embed ? 'h-[60px] overflow-y-auto' : ''} rounded-xl border border-border bg-popover shadow-xl">
              {#each uptimesRollers as roller, i}
                <DropdownMenu.Group>
                  <DropdownMenu.Item
                    class="text-xs {rolledAt == i ? 'bg-secondary' : ''} font-semibold"
                    on:click={() => rollSummary(i)}
                  >
                    {roller.text}
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
              {/each}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
        <div class="flex items-center gap-x-2 pt-1 text-right">
          {#if rollerLoading}
            <Loader class="inline h-3.5 w-3.5 animate-spin text-muted-foreground" />
          {/if}
          {#if !isNaN(uptimesRollers[rolledAt].value)}
            <NumberFlow
              class="border-r border-border/60 pr-2 font-mono text-xs font-semibold"
              value={uptimesRollers[rolledAt].value}
              format={{
                notation: "standard",
                minimumFractionDigits: 4,
                maximumFractionDigits: 4
              }}
              suffix="%"
            />
          {/if}
          <div class="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-semibold text-{monitor.pageData.summaryColorClass} bg-secondary/60 border border-border/60">
            <span class="h-1.5 w-1.5 rounded-full bg-{monitor.pageData.summaryColorClass}"></span>
            {monitor.pageData.summaryStatus}
          </div>
        </div>
      </div>
      <div
        class="relative col-span-12 mt-0.5"
        use:clickOutsideAction
        on:clickoutside={(e) => {
          showDailyDataModal = false;
          selectedTs = null;
          selectedBar = null;
        }}
      >
        <div
          bind:this={daygridEl}
          class="daygrid90 flex w-full min-h-[48px] items-center justify-start gap-[2px] sm:gap-[2.5px] py-1.5 overflow-x-auto overflow-y-visible scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {#each Object.entries(_90Day) as [ts, bar]}
            <button
              data-ts={ts}
              use:hoverAction
              on:hover={(e) => {
                show90Inline(e, bar);
              }}
              on:click={(e) => {
                dailyDataGetter(e, bar, incidents[ts]);
              }}
              class="oneline h-[40px] sm:h-[44px] flex-1 min-w-[6.5px] sm:min-w-[7px] max-w-[14px] shrink-0 sm:shrink {bar.border ? 'opacity-100' : 'opacity-25'} {selectedTs == ts ? 'is-active' : ''} p-0 flex items-center justify-center transition-all group"
            >
              <div
                class="oneline-in h-[34px] sm:h-[38px] w-full bg-{bar.cssClass} mx-auto rounded-[2.5px] sm:rounded-[3px] group-hover:scale-y-110 group-hover:brightness-110 transition-all {selectedTs == ts ? 'scale-y-110 brightness-125 ring-2 ring-primary ring-offset-1 ring-offset-background' : ''}"
              ></div>
              <!-- incident dot -->
              {#if !!incidents[ts]}
                <div
                  class="bg-api-{incidents[
                    ts
                  ].monitor_impact.toLowerCase()} comein absolute -bottom-[4px] left-1/2 -translate-x-1/2 h-[4px] w-[4px] rounded-full ring-1 ring-background"
                ></div>
              {/if}
            </button>
            {#if bar.showDetails && !showDailyDataModal}
              <div class="show-hover absolute text-sm">
                <div class="text-{bar.textClass} text-xs font-semibold">
                  {f(new Date(bar.timestamp * 1000), "EEEE, MMMM do, yyyy", selectedLang, $page.data.localTz)}
                  -
                  {bar.summaryStatus}
                </div>
              </div>
            {/if}
          {/each}
        </div>

        <!-- OpenAI / Statuspage 90-day timeline footer -->
        <div class="flex items-center justify-between text-[11px] font-medium text-muted-foreground/75 px-0.5 pt-1 pb-0.5 select-none">
          <span>{uptimesRollers[rolledAt]?.text.includes("Today") ? l(lang, "Today") : `${uptimesRollers[rolledAt]?.text || "90 Days"} ${l(lang, "ago")}`}</span>
          <div class="h-px flex-1 mx-3 bg-border/40"></div>
          <span>{l(lang, "Today")}</span>
        </div>

        {#if monitor.monitor_type === "GROUP" && !!!embed}
          <div class="mt-2 flex justify-end">
            <Button
              variant="secondary"
              href="{base}?group={monitor.tag}"
              rel="external"
              class="bounce-right h-8 text-xs"
              on:click={scrollToRight}
            >
              {l(lang, "View in detail")}
              <ArrowRight class="arrow ml-1.5 h-4 w-4" />
            </Button>
          </div>
        {/if}

        {#if showDailyDataModal}
          <div
            transition:slide={{ direction: "bottom", duration: 180 }}
            class="daily-data-modal absolute left-0 right-0 top-full mt-3 z-50 mx-auto w-full max-w-full sm:max-w-[480px] rounded-2xl border border-border/80 bg-card/95 p-4 shadow-2xl backdrop-blur-xl"
          >
            {#if selectedBarLeftPercent !== null}
              <div
                class="pointer-events-none absolute -top-1.5 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-border/80 bg-card"
                style="left: {selectedBarLeftPercent}%"
              ></div>
            {/if}

            <!-- Header: Date and Close Button -->
            <div class="mb-3 flex items-start justify-between gap-2 border-b border-border/50 pb-2.5">
              <div>
                <p class="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {l(lang, "System Status")}
                </p>
                <p class="text-sm font-bold text-foreground">
                  {dateFetchedFor}
                </p>
              </div>
              <button
                type="button"
                class="flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-all"
                on:click={() => {
                  showDailyDataModal = false;
                  selectedTs = null;
                  selectedBar = null;
                }}
              >
                <X class="h-4 w-4" />
              </button>
            </div>

            <!-- Status Overview Box (OpenAI / Statuspage design) -->
            <div class="flex items-center justify-between rounded-xl bg-secondary/50 p-3 border border-border/40">
              <div class="flex items-center gap-3">
                {#if selectedBar?.cssClass === 'api-up' || selectedBar?.summaryStatus === 'Status OK' || dayUptime === '100.0000' || dayUptime === '100'}
                  <!-- Operational Icon (OpenAI checkmark circle) -->
                  <div class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500 shrink-0">
                    <svg width="18" height="18" viewBox="2 2 16 16" fill="none">
                      <path d="M10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18C14.411 18 18 14.411 18 10C18 5.589 14.411 2 10 2ZM13.843 7.708L9.593 13.208C9.457 13.384 9.25 13.491 9.028 13.499C9.018 13.499 9.009 13.499 9 13.499C8.788 13.499 8.585 13.409 8.442 13.251L6.192 10.751C5.915 10.443 5.94 9.969 6.248 9.691C6.557 9.415 7.029 9.439 7.308 9.747L8.956 11.579L12.657 6.79C12.91 6.462 13.382 6.402 13.709 6.655C14.037 6.908 14.097 7.379 13.844 7.707L13.843 7.708Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs font-bold text-foreground">
                      {l(lang, "Operational")}
                    </p>
                    <p class="text-[11px] text-muted-foreground">
                      {l(lang, "No downtime recorded on this day")}
                    </p>
                  </div>
                {:else if selectedBar?.cssClass?.includes('degraded')}
                  <div class="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/15 text-amber-500 shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs font-bold text-amber-600 dark:text-amber-400">
                      {l(lang, "Degraded Performance")}
                    </p>
                    <p class="text-[11px] text-muted-foreground">
                      {selectedBar?.summaryStatus || l(lang, "Performance issues recorded")}
                    </p>
                  </div>
                {:else if selectedBar?.cssClass?.includes('down')}
                  <div class="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/15 text-rose-500 shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs font-bold text-rose-600 dark:text-rose-400">
                      {l(lang, "Service Outage")}
                    </p>
                    <p class="text-[11px] text-muted-foreground">
                      {selectedBar?.summaryStatus || l(lang, "Outage recorded")}
                    </p>
                  </div>
                {:else if selectedBar?.cssClass?.includes('maintenance')}
                  <div class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-500 shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5a2.25 2.25 0 00-2.25 2.25v3.25" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      {l(lang, "Maintenance")}
                    </p>
                    <p class="text-[11px] text-muted-foreground">
                      {selectedBar?.summaryStatus || l(lang, "Scheduled maintenance")}
                    </p>
                  </div>
                {:else}
                  <div class="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs font-bold text-muted-foreground">
                      {l(lang, "No Data")}
                    </p>
                    <p class="text-[11px] text-muted-foreground">
                      {l(lang, "No data available")}
                    </p>
                  </div>
                {/if}
              </div>

              <div>
                {#if loadingDayData}
                  <div class="flex items-center gap-1.5 px-2.5 py-1 text-xs text-muted-foreground">
                    <Loader class="h-3.5 w-3.5 animate-spin" />
                  </div>
                {:else if dayUptime !== "NA" && !isNaN(Number(dayUptime))}
                  <span class="font-mono text-xs font-semibold px-2.5 py-1 rounded-lg border {Number(dayUptime) >= 99 ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' : Number(dayUptime) >= 95 ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20' : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20'}">
                    {Number(dayUptime).toFixed(2)}%
                  </span>
                {/if}
              </div>
            </div>

            <!-- Incident Updates on this day (if any) -->
            {#if dayIncidentsFull.length > 0}
              <div class="mt-3 space-y-2">
                <div class="flex items-center justify-between text-[11px] font-semibold text-muted-foreground">
                  <span>{l(lang, "Incidents on this date")}</span>
                  <span class="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-bold text-foreground">
                    {dayIncidentsFull.length}
                  </span>
                </div>
                <div class="max-h-[220px] space-y-1.5 overflow-y-auto pr-0.5">
                  {#each dayIncidentsFull as incident, index}
                    <div class="rounded-xl border border-border/60 bg-card/60 p-2 text-xs">
                      <Incident {incident} {lang} index="incident-{index}" />
                    </div>
                  {/each}
                </div>
              </div>
            {:else if !loadingDayData && selectedBar?.cssClass !== 'api-up' && selectedBar?.summaryStatus !== 'Status OK'}
              <div class="mt-2.5 rounded-lg border border-border/40 bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
                {l(lang, selectedBar?.summaryStatus || "Recorded service disruption")}
              </div>
            {/if}
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
