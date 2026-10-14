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
      let divs = document.querySelectorAll(".daygrid90");
      divs.forEach((div) => {
        div.scrollLeft = div.scrollWidth;
      });
    }, 1000 * 0.2);
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
  let dateFetchedFor = "";
  let dayUptime = "NA";
  let loadingDayData = false;

  function dailyDataGetter(e, bar, incidentObj) {
    if (embed) {
      return;
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

<div class="monitor relative {showDailyDataModal ? 'z-40' : 'z-0'} grid w-full max-w-[655px] grid-cols-12 gap-2 pb-2 pt-0">
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
        }}
      >
        <div class="daygrid90 flex w-full min-h-[50px] items-center justify-between gap-[1px] md:gap-[2px] py-1">
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
              class="oneline h-[34px] flex-1 min-w-0 {bar.border ? 'opacity-100' : 'opacity-20'} pb-1"
            >
              <div
                class="oneline-in h-[30px] w-full max-w-[6px] bg-{bar.cssClass} mx-auto rounded-{monitor.pageData.barRoundness.toUpperCase() ==
                'SHARP'
                  ? 'none'
                  : 'sm'}"
              ></div>
              <!-- incident dot -->
              {#if !!incidents[ts]}
                <div
                  class="bg-api-{incidents[
                    ts
                  ].monitor_impact.toLowerCase()} comein absolute -bottom-[3px] left-1/2 -translate-x-1/2 h-[4px] w-[4px] rounded-full"
                ></div>
              {/if}
            </button>
            {#if bar.showDetails}
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
        {#if monitor.monitor_type === "GROUP" && !!!embed}
          <div class="-mt-4 flex justify-end">
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
            transition:slide={{ direction: "bottom" }}
            class="daily-data-modal absolute left-0 right-0 top-full mt-2 z-50 mx-auto w-full max-w-full sm:max-w-[560px] rounded-xl border bg-card p-3.5 shadow-2xl backdrop-blur-xl"
          >
            <div class="mb-2.5 flex items-center justify-between text-xs font-semibold">
              <span class="font-bold text-foreground">{dateFetchedFor}</span>
              <div class="flex items-center gap-2">
                {#if !loadingDayData}
                  <span class="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                    <TrendingUp class="mr-1 inline h-3 w-3" />
                    {dayUptime}%
                  </span>
                {/if}
                <button
                  type="button"
                  class="flex h-5 w-5 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-all"
                  on:click={() => { showDailyDataModal = false; }}
                >
                  <X class="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
            {#if dayIncidentsFull.length > 0}
              <div class="-mx-2 mb-4 grid grid-cols-1">
                <div class="col-span-1 px-2">
                  <Badge variant="outline" class="border-0 pl-0">
                    {l(lang, "Incident Updates")}
                  </Badge>
                </div>
                {#each dayIncidentsFull as incident, index}
                  <div class="col-span-1">
                    <Incident {incident} {lang} index="incident-{index}" />
                  </div>
                {/each}
              </div>
            {/if}
            <div class="flex flex-wrap">
              {#if loadingDayData}
                <LoaderBoxes />
              {:else}
                {#each Object.entries(_0Day) as [ts, bar]}
                  <div data-index={bar.index} class="bg-{bar.cssClass} today-sq m-[1px] h-[10px] w-[10px]"></div>
                  <div class="hiddenx relative">
                    <div
                      data-index={ts.index}
                      class="message rounded border bg-black p-2 text-xs font-semibold text-white"
                    >
                      <p>
                        <span class="text-{bar.cssClass}"> ● </span>

                        {f(new Date(bar.timestamp * 1000), "hh:mm a", selectedLang, $page.data.localTz)}
                      </p>
                      {#if bar.status != "NO_DATA"}
                        <p class="pl-2">
                          {l(lang, bar.status)}
                        </p>
                      {:else}
                        <p class="pl-2">-</p>
                      {/if}
                    </div>
                  </div>
                {/each}
              {/if}
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
