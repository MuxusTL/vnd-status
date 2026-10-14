<script>
  import "../../app.postcss";
  import "../../kener.css";
  import "../../theme.css";
  import "../../vnd.css";
  import Nav from "$lib/components/nav.svelte";
  import { onMount } from "svelte";
  import { Input } from "$lib/components/ui/input";
  import { base } from "$app/paths";
  import { Button } from "$lib/components/ui/button";
  import Sun from "lucide-svelte/icons/sun";
  import Moon from "lucide-svelte/icons/moon";
  import Languages from "lucide-svelte/icons/languages";
  import Globe from "lucide-svelte/icons/globe";
  import * as Popover from "$lib/components/ui/popover";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { analyticsEvent } from "$lib/boringOne";
  import { setMode, mode, ModeWatcher } from "mode-watcher";
  import { l } from "$lib/i18n/client";

  export let data;
  let defaultLocaleKey = data.selectedLang;
  let allTimezones = Intl.supportedValuesOf("timeZone");
  let searchTzValue = "";
  let defaultTheme = data.site.theme;
  const allLocales = data.site.i18n?.locales.filter((locale) => locale.selected === true);

  function toggleMode() {
    if ($mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }

    analyticsEvent("theme_change", {
      theme: $mode
    });
  }
  let defaultLocaleValue;
  if (!allLocales) {
    defaultLocaleValue = "English";
  } else {
    let lclFi = allLocales.find((locale) => locale.code === defaultLocaleKey);
    if (lclFi) {
      defaultLocaleValue = lclFi.name;
    }
  }
  /**
   * @param {string} locale
   */
  function setLanguage(locale) {
    document.cookie = `localLang=${locale};max-age=${60 * 60 * 24 * 365 * 30};path=${base ? "base" : "/"};`;
    if (locale === defaultLocaleKey) return;
    defaultLocaleValue = allLocales[locale];
    analyticsEvent("language_change", {
      locale: locale
    });
    location.reload();
  }

  //set timezone
  function setTz(tz) {
    document.cookie = `localTz=${tz};max-age=${60 * 60 * 24 * 365 * 30};path=${base ? "base" : "/"};`;
    analyticsEvent("timezone_changed", {
      time_zone: tz
    });
    location.reload();
  }

  let myTimezone = data.localTz;
  onMount(async () => {
    myTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (data.localTz === "UTC") {
      if (data.isBot === false) {
        setTz(myTimezone);
      }
    }
    if (defaultTheme != "none") {
      setMode("dark");
    }

    if (!!data.bgc && data.bgc[0] == "#") {
      document.body.style.backgroundColor = data.bgc;
    }
  });

  let customCSS = `<style>${data.site.customCSS}</style>`;
  if (!!data.site.favicon && !data.site.favicon.startsWith("http")) data.site.favicon = `${base}${data.site.favicon}`;

  let kenerTheme = data.site.kenerTheme || "default";
</script>

<svelte:head>
  <script src="{base}/api/js/capture.js"></script>
  {#if data.site.favicon}
    <link rel="icon" id="kener-app-favicon" href={data.site.favicon} />
  {/if}
  {#if !!data.site.font.cssSrc}
    <link href={data.site.font.cssSrc} rel="stylesheet" />
  {/if}

  {#if !!data.site.customCSS}
    {@html customCSS}
  {/if}
</svelte:head>
<ModeWatcher />
<main
  style="
	--font-family: {data.site.font.family};
	--bg-custom: {data.bgc};
	--up-color: {data.site.colors.UP};
	--down-color: {data.site.colors.DOWN};
	--degraded-color: {data.site.colors.DEGRADED};
	--maintenance-color: {data.site.colors.MAINTENANCE};
	"
  class="kener-theme-{kenerTheme}"
>
  <Nav {data} />
  <div class="main-content min-h-[70vh] px-3.5 sm:px-6">
    <slot />
  </div>

  {#if !!data.site.footerHTML}
    <footer class="kener-footer z-10 py-6 md:px-8 md:py-0">
      {@html data.site.footerHTML}
    </footer>
  {/if}
  <div class="fixed bottom-4 right-4 z-30 floating-dock flex flex-row items-center gap-1 rounded-full border border-border/80 bg-card/85 p-1 backdrop-blur-xl shadow-lg">
    {#if !!data.site.tzToggle && data.site.tzToggle === "YES"}
      <Popover.Root>
        <Popover.Trigger asChild let:builder>
          <Button
            builders={[builder]}
            variant="ghost"
            size="icon"
            class="flex h-8 w-8 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
          >
            <Globe class="h-4 w-4" />
          </Button>
        </Popover.Trigger>
        <Popover.Content class="px-0 py-2 rounded-xl border border-border bg-popover shadow-xl">
          <div class="flex flex-col gap-2">
            <div class="flex px-2 pb-1 text-xs font-semibold">
              <span class="flex-1">
                {@html l(data.lang, "Timezone set to %tz", {
                  tz: "<i>" + data.localTz + "</i>"
                })}
              </span>
            </div>
            <div class="flex flex-col gap-2">
              <div class="border-b px-2 pb-2">
                <Input
                  placeholder="Search for a timezone"
                  class="h-8 px-2 py-1 text-xs"
                  value={searchTzValue}
                  on:input={(e) => {
                    searchTzValue = e.target.value;
                  }}
                />
              </div>
              <div class="flex h-[200px] flex-col overflow-y-auto">
                {#each allTimezones as tz}
                  {#if tz.toLowerCase().includes(searchTzValue.toLowerCase())}
                    <div class="text-xs font-semibold">
                      <Button
                        variant={tz === data.localTz ? "primary" : "ghost"}
                        class="h-8 w-full justify-start rounded-none text-xs {tz === data.localTz
                          ? 'text-background'
                          : 'text-muted-foreground'}"
                        on:click={() => setTz(tz)}
                      >
                        {tz}
                      </Button>
                    </div>
                  {/if}
                {/each}
              </div>
              {#if myTimezone !== data.localTz}
                <div class="px-2">
                  <Button
                    variant="outline"
                    class="h-6 w-full bg-transparent px-2 text-xs"
                    on:click={() => setTz(myTimezone)}
                  >
                    {l(data.lang, "Switch to your timezone")}
                  </Button>
                </div>
              {/if}
            </div>
          </div>
        </Popover.Content>
      </Popover.Root>
    {/if}
    {#if data.site.i18n && data.site.i18n.locales && allLocales.length > 1}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild let:builder>
          <Button
            builders={[builder]}
            variant="ghost"
            size="icon"
            class="flex h-8 w-8 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
          >
            <Languages class="h-4 w-4" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="max-h-[250px] overflow-y-auto rounded-xl border border-border bg-popover shadow-xl">
          <DropdownMenu.Group>
            {#each allLocales as locale}
              <DropdownMenu.Item
                class={defaultLocaleKey == locale.code ? "bg-input" : ""}
                on:click={(e) => {
                  setLanguage(locale.code);
                }}>{locale.name}</DropdownMenu.Item
              >
            {/each}
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    {/if}
    {#if !!data.site.themeToggle && data.site.themeToggle === "YES"}
      <Button
        on:click={toggleMode}
        variant="ghost"
        size="icon"
        class="flex h-8 w-8 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
      >
        <Sun class="h-4 w-4 rotate-0 scale-100 transition-transform duration-200 dark:-rotate-90 dark:scale-0" />
        <Moon class="absolute h-4 w-4 rotate-90 scale-0 transition-transform duration-200 dark:rotate-0 dark:scale-100" />
        <span class="sr-only">Toggle theme</span>
      </Button>
    {/if}
  </div>
  {#if data.isLoggedIn}
    <div class="fixed bottom-4 left-4 z-30">
      <a
        href="{base}/manage/app/site"
        rel="external"
        class="flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-semibold text-indigo-600 dark:text-indigo-300 backdrop-blur-xl shadow-lg transition-all hover:bg-indigo-500/20 hover:text-indigo-900 dark:hover:text-white hover:border-indigo-500/50"
        role="button"
      >
        <span class="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
        Manage
      </a>
    </div>
  {/if}
</main>

<style>
  /* Apply the global font family using the CSS variable */
  * {
    font-family: var(--font-family);
  }
</style>
