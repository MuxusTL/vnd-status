<script>
  import { Button } from "$lib/components/ui/button";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import Languages from "lucide-svelte/icons/languages";
  import Menu from "lucide-svelte/icons/menu";
  import { base } from "$app/paths";
  import { analyticsEvent } from "$lib/boringOne";
  import GMI from "$lib/components/gmi.svelte";
  export let data;
  let defaultPattern = data.site?.pattern || "squares";
  let allPets = [
    {
      url: base + "/chicken.gif",
      bottom: "-5"
    },
    {
      url: base + "/dog.gif",
      bottom: "-17"
    },
    {
      url: base + "/cockatiel.gif",
      bottom: "-10"
    },
    {
      url: base + "/crab.gif",
      bottom: "-20"
    },
    {
      url: base + "/fox.gif",
      bottom: "-9"
    },
    {
      url: base + "/horse.gif",
      bottom: "-11"
    },
    {
      url: base + "/panda.gif",
      bottom: "0"
    },
    {
      url: base + "/totoro.gif",
      bottom: "-27"
    },
    {
      url: base + "/rabbit.gif",
      bottom: "0"
    },
    {
      url: base + "/duck.gif",
      bottom: "-5"
    },
    {
      url: base + "/snake.gif",
      bottom: "0"
    }
  ];
  let randomPet = allPets[Math.floor(Math.random() * allPets.length)];
</script>

{#if defaultPattern == "pets" && !!randomPet}
  <div class="pets-pattern" style="background-image: url({randomPet.url});bottom: {randomPet.bottom}px"></div>
{:else}
  <div class="{defaultPattern}-pattern"></div>
{/if}

<header class="sticky top-0 z-50 mx-auto px-3 md:mt-3">
  <div class="container flex h-14 max-w-[820px] items-center justify-between border border-border/70 bg-card/80 px-4 backdrop-blur-xl shadow-md rounded-2xl transition-all">
    <a rel="external" href={data.site.home ? data.site.home : base} class="mr-3 sm:mr-6 flex min-w-0 shrink-0 items-center space-x-2.5 whitespace-nowrap">
      {#if data.site.logo}
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-secondary/50 p-1 shadow-sm">
          <GMI src={data.site.logo} classList="h-6 w-6 object-contain" alt={data.site.title} srcset="" />
        </div>
      {/if}
      {#if data.site.siteName}
        <span class="inline-block whitespace-nowrap text-[15px] font-bold tracking-tight text-foreground lg:text-base font-['Space_Grotesk']">
          {data.site.siteName}
        </span>
      {/if}
    </a>
    <div class="flex items-center justify-end ml-auto shrink-0">
      {#if data.site.nav}
        <nav class="hidden flex-nowrap items-center gap-1 text-sm font-medium md:flex">
          {#each data.site.nav as navItem}
            <a
              rel="external"
              href={navItem.url}
              class="flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold text-muted-foreground transition-all ease-linear hover:bg-secondary hover:text-foreground"
              on:click={() =>
                analyticsEvent("navigation", {
                  name: navItem.name
                })}
            >
              {#if navItem.iconURL}
                <GMI src={navItem.iconURL} classList="mr-1.5 inline h-3.5 w-3.5" alt={navItem.name} />
              {/if}
              <span>{navItem.name}</span>
            </a>
          {/each}
        </nav>
        <div class="flex md:hidden">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="outline" size="sm" class="h-8 w-8 rounded-full border-border/60 bg-secondary/50 p-0 text-muted-foreground hover:bg-secondary hover:text-foreground">
                <Menu size={14} />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content class="rounded-xl border border-border bg-popover shadow-xl">
              {#each data.site.nav as navItem}
                <DropdownMenu.Group>
                  <DropdownMenu.Item class="text-xs font-medium">
                    <a rel="external" href={navItem.url} class="w-full"> {navItem.name} </a>
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
              {/each}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      {/if}
    </div>
  </div>
</header>
