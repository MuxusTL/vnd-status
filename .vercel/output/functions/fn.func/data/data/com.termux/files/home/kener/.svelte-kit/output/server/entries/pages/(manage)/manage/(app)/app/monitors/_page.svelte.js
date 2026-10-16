import { c as create_ssr_component, v as validate_component, a as subscribe, b as each, e as escape } from "../../../../../../../chunks/ssr.js";
import "../../../../../../../chunks/index3.js";
import "clsx";
import { L as Label } from "../../../../../../../chunks/label.js";
import { b as base } from "../../../../../../../chunks/paths.js";
import "../../../../../../../chunks/index4.js";
import "canvas-confetti";
import { S as Select, a as Select_trigger, V as Value, b as Select_content, G as Group, c as Select_label, d as Select_item } from "../../../../../../../chunks/index8.js";
import { G as Gmi } from "../../../../../../../chunks/gmi.js";
import { p as page } from "../../../../../../../chunks/stores.js";
/* empty css                                                                    */import "@uiw/codemirror-theme-github";
import "../../../../../../../chunks/stores2.js";
import { S as SortMonitor } from "../../../../../../../chunks/clientTools.js";
import "../../../../../../../chunks/anywhere.js";
import { C as Card } from "../../../../../../../chunks/card.js";
import { C as Card_content } from "../../../../../../../chunks/card-content.js";
import { C as Card_description } from "../../../../../../../chunks/card-description.js";
import { C as Card_header, a as Card_title } from "../../../../../../../chunks/card-title.js";
import { R as Root, T as Trigger, D as Dropdown_menu_content, G as Group$1 } from "../../../../../../../chunks/index5.js";
/* empty css                                                                   */import { B as Button } from "../../../../../../../chunks/button.js";
import { I as Icon } from "../../../../../../../chunks/Icon.js";
import { P as Plus } from "../../../../../../../chunks/plus.js";
import { D as Dropdown_menu_label, a as Dropdown_menu_separator } from "../../../../../../../chunks/dropdown-menu-separator.js";
import { L as Loader } from "../../../../../../../chunks/loader.js";
import { E as ExternalLink } from "../../../../../../../chunks/external-link.js";
import { S as Settings } from "../../../../../../../chunks/settings.js";
const Bell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M10.268 21a2 2 0 0 0 3.464 0" }],
    [
      "path",
      {
        "d": "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "bell" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Bell$1 = Bell;
const Database_zap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "ellipse",
      {
        "cx": "12",
        "cy": "5",
        "rx": "9",
        "ry": "3"
      }
    ],
    ["path", { "d": "M3 5V19A9 3 0 0 0 15 21.84" }],
    ["path", { "d": "M21 5V8" }],
    ["path", { "d": "M21 12L18 17H22L19 22" }],
    ["path", { "d": "M3 12A9 3 0 0 0 14.59 14.87" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "database-zap" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const DatabaseZap = Database_zap;
const Arrow_down_up = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "m3 16 4 4 4-4" }],
    ["path", { "d": "M7 20V4" }],
    ["path", { "d": "m21 8-4-4-4 4" }],
    ["path", { "d": "M17 4v16" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-down-up" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ArrowDownUp = Arrow_down_up;
const AllGamesListRaw = `[
  { "id": "sdtd", "name": "7 Days to Die", "isValve": true },
  { "id": "arma2", "name": "ARMA 2", "isValve": true },
  { "id": "a2oa", "name": "ARMA 2: Operation Arrowhead", "isValve": true },
  { "id": "arma3", "name": "ARMA 3", "isValve": true },
  { "id": "aaa", "name": "ARMA: Armed Assault" },
  { "id": "acwa", "name": "ARMA: Cold War Assault" },
  { "id": "armareforger", "name": "ARMA: Reforger", "isValve": true },
  { "id": "armaresistance", "name": "ARMA: Resistance" },
  { "id": "abioticfactor", "name": "Abiotic Factor", "isValve": true },
  { "id": "aosc", "name": "Ace of Spades Classic" },
  { "id": "ahl", "name": "Action Half-Life", "isValve": true },
  { "id": "actionsource", "name": "Action: Source", "isValve": true },
  { "id": "aoc", "name": "Age of Chivalry", "isValve": true },
  { "id": "aoe2", "name": "Age of Empires 2" },
  { "id": "alienarena", "name": "Alien Arena" },
  { "id": "alienswarm", "name": "Alien Swarm", "isValve": true },
  { "id": "avp2", "name": "Aliens versus Predator 2" },
  { "id": "avp2010", "name": "Aliens vs. Predator 2010", "isValve": true },
  { "id": "americasarmy", "name": "America's Army" },
  { "id": "americasarmy2", "name": "America's Army 2" },
  { "id": "americasarmy3", "name": "America's Army 3", "isValve": true },
  { "id": "aapg", "name": "America's Army: Proving Grounds", "isValve": true },
  { "id": "asr08", "name": "Arca Sim Racing '08" },
  { "id": "asa", "name": "Ark: Survival Ascended" },
  { "id": "ase", "name": "Ark: Survival Evolved", "isValve": true },
  { "id": "armagetronadvanced", "name": "Armagetron Advanced" },
  { "id": "assettocorsa", "name": "Assetto Corsa" },
  { "id": "atlas", "name": "Atlas", "isValve": true },
  { "id": "avorion", "name": "Avorion", "isValve": true },
  { "id": "brokeprotocol", "name": "BROKE PROTOCOL" },
  { "id": "baldursgate", "name": "Baldur's Gate" },
  { "id": "ballisticoverkill", "name": "Ballistic Overkill", "isValve": true },
  { "id": "barotrauma", "name": "Barotrauma", "isValve": true },
  { "id": "basedefense", "name": "Base Defense", "isValve": true },
  { "id": "battalion1944", "name": "Battalion 1944", "isValve": true },
  { "id": "battlefield1942", "name": "Battlefield 1942" },
  { "id": "battlefield2", "name": "Battlefield 2" },
  { "id": "battlefield2142", "name": "Battlefield 2142" },
  { "id": "battlefield3", "name": "Battlefield 3" },
  { "id": "battlefield4", "name": "Battlefield 4" },
  { "id": "battlefieldhardline", "name": "Battlefield Hardline" },
  { "id": "battlefieldvietnam", "name": "Battlefield Vietnam" },
  { "id": "bbc2", "name": "Battlefield: Bad Company 2" },
  { "id": "beammp", "name": "BeamMP (2021)" },
  { "id": "blackmesa", "name": "Black Mesa", "isValve": true },
  { "id": "bladesymphony", "name": "Blade Symphony", "isValve": true },
  { "id": "brainbread", "name": "BrainBread", "isValve": true },
  { "id": "brainbread2", "name": "BrainBread 2", "isValve": true },
  { "id": "breach", "name": "Breach", "isValve": true },
  { "id": "breed", "name": "Breed" },
  { "id": "brink", "name": "Brink", "isValve": true },
  { "id": "bas", "name": "Build and Shoot" },
  { "id": "c2d", "name": "CS2D" },
  { "id": "cod", "name": "Call of Duty" },
  { "id": "cod2", "name": "Call of Duty 2" },
  { "id": "cod3", "name": "Call of Duty 3" },
  { "id": "cod4mw", "name": "Call of Duty 4: Modern Warfare" },
  { "id": "codbo3", "name": "Call of Duty: Black Ops 3", "isValve": true },
  { "id": "codmw2", "name": "Call of Duty: Modern Warfare 2" },
  { "id": "codmw3", "name": "Call of Duty: Modern Warfare 3", "isValve": true },
  { "id": "coduo", "name": "Call of Duty: United Offensive" },
  { "id": "codwaw", "name": "Call of Duty: World at War" },
  { "id": "coj", "name": "Call of Juarez" },
  { "id": "chaser", "name": "Chaser" },
  { "id": "cmw", "name": "Chivalry: Medieval Warfare", "isValve": true },
  { "id": "chrome", "name": "Chrome" },
  { "id": "codenamecure", "name": "Codename CURE", "isValve": true },
  { "id": "codenameeagle", "name": "Codename Eagle" },
  { "id": "colonysurvival", "name": "Colony Survival", "isValve": true },
  { "id": "cacr", "name": "Command and Conquer: Renegade" },
  { "id": "c3db", "name": "Commandos 3: Destination Berlin" },
  { "id": "conanexiles", "name": "Conan Exiles", "isValve": true },
  { "id": "contagion", "name": "Contagion", "isValve": true },
  { "id": "contractjack", "name": "Contract J.A.C.K." },
  { "id": "corekeeper", "name": "Core Keeper", "isValve": true },
  { "id": "counterstrike15", "name": "Counter-Strike 1.5" },
  { "id": "counterstrike16", "name": "Counter-Strike 1.6", "isValve": true },
  { "id": "counterstrike2", "name": "Counter-Strike 2", "isValve": true },
  { "id": "cscz", "name": "Counter-Strike: Condition Zero", "isValve": true },
  { "id": "csgo", "name": "Counter-Strike: Global Offensive", "isValve": true },
  { "id": "css", "name": "Counter-Strike: Source", "isValve": true },
  { "id": "creativerse", "name": "Creativerse", "isValve": true },
  { "id": "crce", "name": "Cross Racing Championship Extreme" },
  { "id": "crysis", "name": "Crysis" },
  { "id": "crysis2", "name": "Crysis 2" },
  { "id": "crysiswars", "name": "Crysis Wars" },
  { "id": "daikatana", "name": "Daikatana" },
  { "id": "dmomam", "name": "Dark Messiah of Might and Magic", "isValve": true },
  { "id": "dal", "name": "Dark and Light", "isValve": true },
  { "id": "dhe4445", "name": "Darkest Hour: Europe '44-'45" },
  { "id": "dod", "name": "Day of Defeat", "isValve": true },
  { "id": "dods", "name": "Day of Defeat: Source", "isValve": true },
  { "id": "dayofdragons", "name": "Day of Dragons", "isValve": true },
  { "id": "doi", "name": "Day of Infamy", "isValve": true },
  { "id": "dayz", "name": "DayZ", "isValve": true },
  { "id": "dayzmod", "name": "DayZ Mod", "isValve": true },
  { "id": "dow", "name": "Days of War", "isValve": true },
  { "id": "ddpt", "name": "Deadly Dozen: Pacific Theater" },
  { "id": "deathmatchclassic", "name": "Deathmatch Classic", "isValve": true },
  { "id": "deerhunter2005", "name": "Deer Hunter 2005" },
  { "id": "descent3", "name": "Descent 3" },
  { "id": "deusex", "name": "Deus Ex" },
  { "id": "devastation", "name": "Devastation" },
  { "id": "ddd", "name": "Dino D-Day", "isValve": true },
  { "id": "dtr2", "name": "Dirt Track Racing 2" },
  { "id": "discord", "name": "Discord" },
  { "id": "dst", "name": "Don't Starve Together", "isValve": true },
  { "id": "doom3", "name": "Doom 3" },
  { "id": "dota2", "name": "Dota 2", "isValve": true },
  { "id": "dab", "name": "Double Action: Boogaloo", "isValve": true },
  { "id": "dootf", "name": "Drakan: Order of the Flame" },
  { "id": "dnf2001", "name": "Duke Nukem Forever 2001" },
  { "id": "dystopia", "name": "Dystopia", "isValve": true },
  { "id": "eco", "name": "Eco" },
  { "id": "empiresmod", "name": "Empires Mod", "isValve": true },
  { "id": "egs", "name": "Empyrion - Galactic Survival", "isValve": true },
  { "id": "etqw", "name": "Enemy Territory: Quake Wars" },
  { "id": "ets2", "name": "Euro Truck Simulator 2", "isValve": true },
  { "id": "exfil", "name": "Exfil", "isValve": true },
  { "id": "fear", "name": "F.E.A.R." },
  { "id": "f1c9902", "name": "F1 Challenge '99-'02" },
  { "id": "foundry", "name": "FOUNDRY", "isValve": true },
  { "id": "factorio", "name": "Factorio" },
  { "id": "farcry", "name": "Far Cry" },
  { "id": "farcry2", "name": "Far Cry 2" },
  { "id": "farmingsimulator19", "name": "Farming Simulator 19" },
  { "id": "farmingsimulator22", "name": "Farming Simulator 22" },
  { "id": "farmingsimulator25", "name": "Farming Simulator 25" },
  { "id": "fof", "name": "Fistful of Frags", "isValve": true },
  { "id": "formulaone2002", "name": "Formula One 2002" },
  { "id": "fortressforever", "name": "Fortress Forever", "isValve": true },
  { "id": "ffow", "name": "Frontlines: Fuel of War" },
  { "id": "garrysmod", "name": "Garry's Mod", "isValve": true },
  { "id": "geneshift", "name": "Geneshift" },
  { "id": "gck", "name": "Giants: Citizen Kabuto" },
  { "id": "globaloperations", "name": "Global Operations" },
  { "id": "goldeneyesource", "name": "GoldenEye: Source", "isValve": true },
  { "id": "gus", "name": "Gore: Ultimate Soldier" },
  { "id": "gta5f", "name": "Grand Theft Auto V - FiveM" },
  { "id": "gta5r", "name": "Grand Theft Auto V - RageMP" },
  { "id": "gta5am", "name": "Grand Theft Auto V - alt:V Multiplayer" },
  { "id": "gtasamta", "name": "Grand Theft Auto: San Andreas - Multi Theft Auto" },
  { "id": "gtasam", "name": "Grand Theft Auto: San Andreas Multiplayer" },
  { "id": "gtasao", "name": "Grand Theft Auto: San Andreas OpenMP" },
  { "id": "gtavcmta", "name": "Grand Theft Auto: Vice City - Multi Theft Auto" },
  { "id": "groundbreach", "name": "Ground Breach", "isValve": true },
  { "id": "gunmanchronicles", "name": "Gunman Chronicles", "isValve": true },
  { "id": "hl2d", "name": "Half-Life 2: Deathmatch", "isValve": true },
  { "id": "hld", "name": "Half-Life Deathmatch", "isValve": true },
  { "id": "hlds", "name": "Half-Life Deathmatch: Source", "isValve": true },
  { "id": "hlof", "name": "Half-Life: Opposing Force", "isValve": true },
  { "id": "halo", "name": "Halo" },
  { "id": "halo2", "name": "Halo 2" },
  { "id": "eldewrito", "name": "Halo Online - ElDewrito" },
  { "id": "hawakening", "name": "Hawakening" },
  { "id": "hll", "name": "Hell Let Loose", "isValve": true },
  { "id": "heretic2", "name": "Heretic II" },
  { "id": "hexen2", "name": "Hexen II" },
  { "id": "hiddendangerous2", "name": "Hidden & Dangerous 2" },
  { "id": "homefront", "name": "Homefront", "isValve": true },
  { "id": "homeworld2", "name": "Homeworld 2" },
  { "id": "hurtworld", "name": "Hurtworld", "isValve": true },
  { "id": "i2cs", "name": "IGI 2: Covert Strike" },
  { "id": "i2s", "name": "IL-2 Sturmovik" },
  { "id": "icarus", "name": "Icarus", "isValve": true },
  { "id": "insurgency", "name": "Insurgency", "isValve": true },
  { "id": "imic", "name": "Insurgency: Modern Infantry Combat", "isValve": true },
  { "id": "insurgencysandstorm", "name": "Insurgency: Sandstorm", "isValve": true },
  { "id": "ironstorm", "name": "Iron Storm" },
  { "id": "jb0n", "name": "James Bond 007: Nightfire" },
  { "id": "jc2m", "name": "Just Cause 2 - Multiplayer" },
  { "id": "jc3m", "name": "Just Cause 3 - Multiplayer", "isValve": true },
  { "id": "kspd", "name": "Kerbal Space Program - DMP" },
  { "id": "killingfloor", "name": "Killing Floor" },
  { "id": "killingfloor2", "name": "Killing Floor 2", "isValve": true },
  { "id": "kloc", "name": "Kingpin: Life of Crime" },
  { "id": "kpctnc", "name": "Kiss: Psycho Circus: The Nightmare Child" },
  { "id": "kreedzclimbing", "name": "Kreedz Climbing", "isValve": true },
  { "id": "l4d", "name": "Left 4 Dead", "isValve": true },
  { "id": "l4d2", "name": "Left 4 Dead 2", "isValve": true },
  { "id": "m2m", "name": "Mafia II - Multiplayer" },
  { "id": "m2o", "name": "Mafia II - Online" },
  { "id": "moh", "name": "Medal of Honor" },
  { "id": "moha", "name": "Medal of Honor: Airborne" },
  { "id": "mohaa", "name": "Medal of Honor: Allied Assault" },
  { "id": "mohaab", "name": "Medal of Honor: Allied Assault Breakthrough" },
  { "id": "mohaas", "name": "Medal of Honor: Allied Assault Spearhead" },
  { "id": "mohpa", "name": "Medal of Honor: Pacific Assault" },
  { "id": "mohw", "name": "Medal of Honor: Warfighter" },
  { "id": "medievalengineers", "name": "Medieval Engineers", "isValve": true },
  { "id": "minecraft", "name": "Minecraft" },
  { "id": "mbe", "name": "Minecraft: Bedrock Edition" },
  { "id": "minetest", "name": "Minetest" },
  { "id": "mnc", "name": "Monday Night Combat", "isValve": true },
  { "id": "mordhau", "name": "Mordhau", "isValve": true },
  { "id": "mumble", "name": "Mumble" },
  { "id": "mgm", "name": "Mumble - GT Murmur" },
  { "id": "mutantfactions", "name": "Mutant Factions" },
  { "id": "moe", "name": "Myth of Empires", "isValve": true },
  { "id": "nascarthunder2004", "name": "NASCAR Thunder 2004" },
  { "id": "naturalselection", "name": "Natural Selection", "isValve": true },
  { "id": "naturalselection2", "name": "Natural Selection 2", "isValve": true },
  { "id": "nfshp2", "name": "Need for Speed: Hot Pursuit 2" },
  { "id": "nab", "name": "Nerf Arena Blast" },
  { "id": "neverwinternights", "name": "Neverwinter Nights" },
  { "id": "neverwinternights2", "name": "Neverwinter Nights 2" },
  { "id": "nexuiz", "name": "Nexuiz" },
  { "id": "nitrofamily", "name": "Nitro Family" },
  { "id": "nmrih", "name": "No More Room in Hell", "isValve": true },
  { "id": "nolf2asihw", "name": "No One Lives Forever 2: A Spy in H.A.R.M.'s Way" },
  { "id": "nla", "name": "Nova-Life: Amboise", "isValve": true },
  { "id": "nucleardawn", "name": "Nuclear Dawn", "isValve": true },
  { "id": "onset", "name": "Onset", "isValve": true },
  { "id": "openarena", "name": "OpenArena" },
  { "id": "openttd", "name": "OpenTTD" },
  { "id": "ofcwc", "name": "Operation Flashpoint: Cold War Crisis" },
  { "id": "ofr", "name": "Operation Flashpoint: Resistance" },
  { "id": "ohd", "name": "Operation: Harsh Doorstop", "isValve": true },
  { "id": "painkiller", "name": "Painkiller" },
  { "id": "palworld", "name": "Palworld" },
  { "id": "pvak2", "name": "Pirates, Vikings, and Knights II", "isValve": true },
  { "id": "pixark", "name": "PixARK", "isValve": true },
  { "id": "postscriptum", "name": "Post Scriptum", "isValve": true },
  { "id": "postal2", "name": "Postal 2" },
  { "id": "prey", "name": "Prey" },
  { "id": "pce", "name": "Primal Carnage: Extinction", "isValve": true },
  { "id": "projectcars", "name": "Project Cars", "isValve": true },
  { "id": "projectcars2", "name": "Project Cars 2", "isValve": true },
  { "id": "prb2", "name": "Project Reality: Battlefield 2" },
  { "id": "projectzomboid", "name": "Project Zomboid", "isValve": true },
  { "id": "quake", "name": "Quake" },
  { "id": "quake2", "name": "Quake 2" },
  { "id": "q3a", "name": "Quake 3: Arena" },
  { "id": "quake4", "name": "Quake 4" },
  { "id": "quakelive", "name": "Quake Live", "isValve": true },
  { "id": "rdkf", "name": "Rag Doll Kung Fu", "isValve": true },
  { "id": "rainbowsix", "name": "Rainbow Six" },
  { "id": "rs2rs", "name": "Rainbow Six 2: Rogue Spear" },
  { "id": "rs3rs", "name": "Rainbow Six 3: Raven Shield" },
  { "id": "rallisportchallenge", "name": "RalliSport Challenge" },
  { "id": "rallymasters", "name": "Rally Masters" },
  { "id": "rdr2r", "name": "Red Dead Redemption 2 - RedM" },
  { "id": "redorchestra", "name": "Red Orchestra" },
  { "id": "redorchestra2", "name": "Red Orchestra 2", "isValve": true },
  { "id": "roo4145", "name": "Red Orchestra: Ostfront 41-45" },
  { "id": "redline", "name": "Redline" },
  { "id": "renegade10", "name": "Renegade X" },
  { "id": "renown", "name": "Renown" },
  { "id": "rtcw", "name": "Return to Castle Wolfenstein" },
  { "id": "ricochet", "name": "Ricochet", "isValve": true },
  { "id": "ron", "name": "Rise of Nations" },
  { "id": "rs2v", "name": "Rising Storm 2: Vietnam", "isValve": true },
  { "id": "risingworld", "name": "Rising World", "isValve": true },
  { "id": "ror2", "name": "Risk of Rain 2", "isValve": true },
  { "id": "rune", "name": "Rune" },
  { "id": "rust", "name": "Rust", "isValve": true },
  { "id": "stalker", "name": "S.T.A.L.K.E.R." },
  { "id": "swat4", "name": "SWAT 4" },
  { "id": "satisfactory", "name": "Satisfactory" },
  { "id": "s2ats", "name": "Savage 2: A Tortured Soul" },
  { "id": "serioussam", "name": "Serious Sam" },
  { "id": "serioussam2", "name": "Serious Sam 2" },
  { "id": "sstse", "name": "Serious Sam: The Second Encounter" },
  { "id": "shatteredhorizon", "name": "Shattered Horizon", "isValve": true },
  { "id": "shogo", "name": "Shogo" },
  { "id": "shootmania", "name": "Shootmania" },
  { "id": "sin", "name": "SiN" },
  { "id": "sinepisodes", "name": "SiN Episodes", "isValve": true },
  { "id": "soldat", "name": "Soldat" },
  { "id": "sof", "name": "Soldier of Fortune" },
  { "id": "sof2", "name": "Soldier of Fortune 2" },
  { "id": "sotf", "name": "Sons Of The Forest", "isValve": true },
  { "id": "soulmask", "name": "Soulmask", "isValve": true },
  { "id": "spaceengineers", "name": "Space Engineers", "isValve": true },
  { "id": "squad", "name": "Squad", "isValve": true },
  { "id": "stbc", "name": "Star Trek: Bridge Commander" },
  { "id": "stvef", "name": "Star Trek: Voyager - Elite Force" },
  { "id": "stvef2", "name": "Star Trek: Voyager - Elite Force 2" },
  { "id": "swjk2jo", "name": "Star Wars Jedi Knight II: Jedi Outcast" },
  { "id": "swjkja", "name": "Star Wars Jedi Knight: Jedi Academy" },
  { "id": "swb", "name": "Star Wars: Battlefront" },
  { "id": "swb2", "name": "Star Wars: Battlefront 2" },
  { "id": "swrc", "name": "Star Wars: Republic Commando" },
  { "id": "starmade", "name": "StarMade" },
  { "id": "starbound", "name": "Starbound", "isValve": true },
  { "id": "starsiege", "name": "Starsiege" },
  { "id": "suicidesurvival", "name": "Suicide Survival", "isValve": true },
  { "id": "stn", "name": "Survive the Nights", "isValve": true },
  { "id": "svencoop", "name": "Sven Coop", "isValve": true },
  { "id": "synergy", "name": "Synergy", "isValve": true },
  { "id": "toxikk", "name": "TOXIKK" },
  { "id": "tacticalops", "name": "Tactical Ops" },
  { "id": "toh", "name": "Take On Helicopters" },
  { "id": "teamfactor", "name": "Team Factor" },
  { "id": "teamfortress2", "name": "Team Fortress 2", "isValve": true },
  { "id": "tfc", "name": "Team Fortress Classic", "isValve": true },
  { "id": "teamspeak2", "name": "Teamspeak 2" },
  { "id": "teamspeak3", "name": "Teamspeak 3" },
  { "id": "terminus", "name": "Terminus" },
  { "id": "terrariatshock", "name": "Terraria - TShock" },
  { "id": "theforest", "name": "The Forest", "isValve": true },
  { "id": "thefront", "name": "The Front", "isValve": true },
  { "id": "thehidden", "name": "The Hidden", "isValve": true },
  { "id": "theisle", "name": "The Isle", "isValve": true },
  { "id": "tie", "name": "The Isle Evrima" },
  { "id": "tonolf", "name": "The Operative: No One Lives Forever" },
  { "id": "theship", "name": "The Ship", "isValve": true },
  { "id": "thespecialists", "name": "The Specialists", "isValve": true },
  { "id": "tcgraw", "name": "Tom Clancy's Ghost Recon Advanced Warfighter" },
  { "id": "tcgraw2", "name": "Tom Clancy's Ghost Recon Advanced Warfighter 2" },
  { "id": "thps3", "name": "Tony Hawk's Pro Skater 3" },
  { "id": "thps4", "name": "Tony Hawk's Pro Skater 4" },
  { "id": "thu2", "name": "Tony Hawk's Underground 2" },
  { "id": "towerunite", "name": "Tower Unite", "isValve": true },
  { "id": "trackmania2", "name": "Trackmania 2" },
  { "id": "trackmaniaforever", "name": "Trackmania Forever" },
  { "id": "tremulous", "name": "Tremulous" },
  { "id": "t1s", "name": "Tribes 1: Starsiege" },
  { "id": "tribesvengeance", "name": "Tribes: Vengeance" },
  { "id": "tron20", "name": "Tron 2.0" },
  { "id": "turok2", "name": "Turok 2" },
  { "id": "universalcombat", "name": "Universal Combat" },
  { "id": "unreal", "name": "Unreal" },
  { "id": "u2tax", "name": "Unreal 2: The Awakening - XMP" },
  { "id": "unrealtournament", "name": "Unreal Tournament" },
  { "id": "unrealtournament2003", "name": "Unreal Tournament 2003" },
  { "id": "unrealtournament2004", "name": "Unreal Tournament 2004" },
  { "id": "unrealtournament3", "name": "Unreal Tournament 3" },
  { "id": "urbanterror", "name": "Urban Terror" },
  { "id": "vrising", "name": "V Rising", "isValve": true },
  { "id": "v8sc", "name": "V8 Supercar Challenge" },
  { "id": "valheim", "name": "Valheim", "isValve": true },
  { "id": "vampireslayer", "name": "Vampire Slayer", "isValve": true },
  { "id": "ventrilo", "name": "Ventrilo" },
  { "id": "vcm", "name": "Vice City Multiplayer" },
  { "id": "vietcong", "name": "Vietcong" },
  { "id": "vietcong2", "name": "Vietcong 2" },
  { "id": "vintagestory", "name": "Vintage Story" },
  { "id": "warfork", "name": "Warfork" },
  { "id": "warsow", "name": "Warsow" },
  { "id": "wot", "name": "Wheel of Time" },
  { "id": "wolfenstein", "name": "Wolfenstein" },
  { "id": "wet", "name": "Wolfenstein: Enemy Territory" },
  { "id": "wop", "name": "World Of Padman" },
  { "id": "wurmunlimited", "name": "Wurm Unlimited", "isValve": true },
  { "id": "xonotic", "name": "Xonotic" },
  { "id": "xpandrally", "name": "Xpand Rally" },
  { "id": "zombiemaster", "name": "Zombie Master", "isValve": true },
  { "id": "zps", "name": "Zombie Panic: Source", "isValve": true },
  { "id": "enshrouded", "name": "enshrouded", "isValve": true },
  { "id": "netpanzer", "name": "netPanzer" },
  { "id": "rfactor", "name": "rFactor" },
  { "id": "rfactor2", "name": "rFactor 2", "isValve": true },
  { "id": "unturned", "name": "unturned", "isValve": true }
]
`;
const FEATURE_FLAG_NAMES = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
({
  [FEATURE_FLAG_NAMES.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT]: false
});
const MonitorsAdd = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { categories = [] } = $$props;
  let { colorDown = "#777" } = $$props;
  let { colorDegraded = "#777" } = $$props;
  let { monitorSort = [] } = $$props;
  JSON.parse(AllGamesListRaw);
  let monitors = [];
  let status = "ACTIVE";
  let loadingData = false;
  let selectedCategory = "All Categories";
  async function loadData() {
    loadingData = true;
    try {
      let apiResp = await fetch(base + "/manage/app/api/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "getMonitors",
          data: { status, category_name: selectedCategory }
        })
      });
      let resp = await apiResp.json();
      resp = resp.map((m) => {
        m.down_trigger = JSON.parse(m.down_trigger);
        m.degraded_trigger = JSON.parse(m.degraded_trigger);
        return m;
      });
      monitors = SortMonitor(monitorSort, resp);
    } catch (error) {
      alert("Err2or: " + error);
    } finally {
      loadingData = false;
    }
  }
  if ($$props.categories === void 0 && $$bindings.categories && categories !== void 0)
    $$bindings.categories(categories);
  if ($$props.colorDown === void 0 && $$bindings.colorDown && colorDown !== void 0)
    $$bindings.colorDown(colorDown);
  if ($$props.colorDegraded === void 0 && $$bindings.colorDegraded && colorDegraded !== void 0)
    $$bindings.colorDegraded(colorDegraded);
  if ($$props.monitorSort === void 0 && $$bindings.monitorSort && monitorSort !== void 0)
    $$bindings.monitorSort(monitorSort);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${``} ${``} <div class="mt-4 flex justify-between"><div class="flex w-1/3 gap-x-2">${validate_component(Select, "Select.Root").$$render(
      $$result,
      {
        portal: null,
        onSelectedChange: (e) => {
          status = e.value;
          loadData();
        },
        selected: { value: status, label: status }
      },
      {},
      {
        default: () => {
          return `${validate_component(Select_trigger, "Select.Trigger").$$render($$result, { id: "statusmonitor" }, {}, {
            default: () => {
              return `${validate_component(Value, "Select.Value").$$render(
                $$result,
                { placeholder: "Status", value: status },
                {
                  value: ($$value) => {
                    status = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Group, "Select.Group").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Select_label, "Select.Label").$$render($$result, {}, {}, {
                    default: () => {
                      return `Status`;
                    }
                  })} ${validate_component(Select_item, "Select.Item").$$render(
                    $$result,
                    {
                      value: "ACTIVE",
                      label: "ACTIVE",
                      class: "text-sm font-medium"
                    },
                    {},
                    {
                      default: () => {
                        return `ACTIVE`;
                      }
                    }
                  )} ${validate_component(Select_item, "Select.Item").$$render(
                    $$result,
                    {
                      value: "INACTIVE",
                      label: "INACTIVE",
                      class: "text-sm font-medium"
                    },
                    {},
                    {
                      default: () => {
                        return `INACTIVE`;
                      }
                    }
                  )}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )} ${validate_component(Select, "Select.Root").$$render(
      $$result,
      {
        portal: null,
        onSelectedChange: (e) => {
          selectedCategory = e.value;
          loadData();
        },
        selected: {
          value: selectedCategory,
          label: selectedCategory
        }
      },
      {},
      {
        default: () => {
          return `${validate_component(Select_trigger, "Select.Trigger").$$render($$result, { id: "catemonitor" }, {}, {
            default: () => {
              return `${validate_component(Value, "Select.Value").$$render(
                $$result,
                {
                  placeholder: "Category",
                  value: selectedCategory
                },
                {
                  value: ($$value) => {
                    selectedCategory = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Group, "Select.Group").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Select_label, "Select.Label").$$render($$result, {}, {}, {
                    default: () => {
                      return `Category`;
                    }
                  })} ${validate_component(Select_item, "Select.Item").$$render(
                    $$result,
                    {
                      value: "All Categories",
                      label: "All Categories",
                      class: "text-sm font-medium"
                    },
                    {},
                    {
                      default: () => {
                        return `All Categories`;
                      }
                    }
                  )} ${each(categories, (category) => {
                    return `${validate_component(Select_item, "Select.Item").$$render(
                      $$result,
                      {
                        value: category.name,
                        label: category.name,
                        class: "text-sm font-medium"
                      },
                      {},
                      {
                        default: () => {
                          return `${escape(category.name)} `;
                        }
                      }
                    )}`;
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )} <div>${loadingData ? `${validate_component(Loader, "Loader").$$render(
      $$result,
      {
        class: "ml-2 mt-2 inline h-6 w-6 animate-spin"
      },
      {},
      {}
    )}` : ``}</div></div> ${$page.data.user.role != "member" ? `<div>${status == "ACTIVE" ? `${validate_component(Button, "Button").$$render($$result, { size: "icon", variant: "secondary" }, {}, {
      default: () => {
        return `${validate_component(ArrowDownUp, "ArrowDownUp").$$render($$result, { class: " " }, {}, {})}`;
      }
    })}` : ``} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Plus, "Plus").$$render($$result, { class: "mr-2 inline h-6 w-6" }, {}, {})}
        Add Monitor`;
      }
    })}</div>` : ``}</div> <div class="mt-4">${each(monitors, (monitor, i) => {
      return `${validate_component(Card, "Card.Root").$$render($$result, { class: "mb-4" }, {}, {
        default: () => {
          return `${validate_component(Card_header, "Card.Header").$$render($$result, { class: "relative" }, {}, {
            default: () => {
              return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
                default: () => {
                  return `${!!monitor.image ? `${validate_component(Gmi, "GMI").$$render(
                    $$result,
                    {
                      src: monitor.image,
                      alt: monitor.name,
                      classList: "mr-2 inline-block h-8 w-8"
                    },
                    {},
                    {}
                  )}` : ``} ${escape(monitor.name)} `;
                }
              })} ${!!monitor.description ? `${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
                default: () => {
                  return `<!-- HTML_TAG_START -->${monitor.description}<!-- HTML_TAG_END -->`;
                }
              })}` : ``} <div class="absolute right-2 top-0.5 flex gap-x-1">${validate_component(Root, "DropdownMenu.Root").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Trigger, "DropdownMenu.Trigger").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Button, "Button").$$render(
                        $$result,
                        {
                          variant: "secondary",
                          class: "h-8 p-2 text-xs"
                        },
                        {},
                        {
                          default: () => {
                            return `Test Monitor`;
                          }
                        }
                      )} `;
                    }
                  })} ${validate_component(Dropdown_menu_content, "DropdownMenu.Content").$$render($$result, { class: "max-w-md" }, {}, {
                    default: () => {
                      return `${validate_component(Group$1, "DropdownMenu.Group").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Dropdown_menu_label, "DropdownMenu.Label").$$render($$result, { class: "text-xs" }, {}, {
                            default: () => {
                              return `Test Result`;
                            }
                          })} ${validate_component(Dropdown_menu_separator, "DropdownMenu.Separator").$$render($$result, {}, {}, {})} <div class="px-2 text-xs">${monitor.isTestRunning ? `<div class="text-center">${validate_component(Loader, "Loader").$$render(
                            $$result,
                            {
                              class: "mx-auto inline h-4 w-4 animate-spin"
                            },
                            {},
                            {}
                          )} </div>` : `${!!monitor.testResult ? `${!!monitor.testResult.error ? `<div class="text-red-500">${escape(monitor.testResult.error)} </div>` : `${monitor.testResult.status != void 0 && monitor.testResult.latency != void 0 ? `<p class="text-muted-foreground">Status: <span class="${"text-api-" + escape(monitor.testResult.status.toLowerCase(), true)}">${escape(monitor.testResult.status)}</span><br> Response Time: <span class="text-card-foreground">${escape(monitor.testResult.latency)}ms</span> </p>` : `<div class="text-muted-foreground" data-svelte-h="svelte-117qs3k">No Test Result</div>`}`}` : ``}`}</div> `;
                        }
                      })} `;
                    }
                  })} `;
                }
              })} ${$page.data.user.role != "member" ? `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  variant: "secondary",
                  class: "h-8 w-8 p-2 " + (monitor.down_trigger?.active || monitor.degraded_trigger?.active ? "text-yellow-500" : "")
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Bell$1, "Bell").$$render($$result, { class: "inline h-4 w-4" }, {}, {})} `;
                  }
                }
              )} ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  variant: "secondary",
                  class: "h-8 w-8 p-2"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(DatabaseZap, "DatabaseZap").$$render($$result, { class: "inline h-4 w-4" }, {}, {})} `;
                  }
                }
              )}` : ``} ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  variant: "secondary",
                  class: "h-8 w-8 p-2",
                  rel: "external",
                  href: base + "/?monitor=" + monitor.tag
                },
                {},
                {
                  default: () => {
                    return `${validate_component(ExternalLink, "ExternalLink").$$render($$result, { class: "inline h-4 w-4" }, {}, {})} `;
                  }
                }
              )} ${$page.data.user.role != "member" ? `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  variant: "secondary",
                  class: "h-8 w-8 p-2",
                  href: "#" + monitor.tag
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Settings, "Settings").$$render($$result, { class: "inline h-4 w-4" }, {}, {})} `;
                  }
                }
              )}` : ``}</div> `;
            }
          })} ${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="flex justify-between gap-4"><div class="">${validate_component(Label, "Label").$$render(
                $$result,
                {
                  class: "text-xs font-semibold text-muted-foreground"
                },
                {},
                {
                  default: () => {
                    return `Tag`;
                  }
                }
              )} <p class="text-sm font-semibold">${escape(monitor.tag)} </p></div> <div class="">${validate_component(Label, "Label").$$render(
                $$result,
                {
                  class: "text-xs font-semibold text-muted-foreground"
                },
                {},
                {
                  default: () => {
                    return `Monitor Type`;
                  }
                }
              )} <p class="text-sm font-semibold">${escape(monitor.monitor_type)} </p></div> <div class="">${validate_component(Label, "Label").$$render(
                $$result,
                {
                  class: "text-xs font-semibold text-muted-foreground"
                },
                {},
                {
                  default: () => {
                    return `Cron`;
                  }
                }
              )} <p class="text-sm font-semibold">${escape(monitor.cron)} </p></div> <div class="">${validate_component(Label, "Label").$$render(
                $$result,
                {
                  class: "text-xs font-semibold text-muted-foreground"
                },
                {},
                {
                  default: () => {
                    return `Category`;
                  }
                }
              )} <p class="text-sm font-semibold">${escape(!!monitor.category_name ? monitor.category_name : "-")}</p> </div></div> `;
            }
          })} `;
        }
      })}`;
    })}</div> ${``} ${``}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="min-h-[70vh]"><div class="flex justify-end">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "outline",
      href: "https://kener.ing/docs/monitors",
      class: " text-sm"
    },
    {},
    {
      default: () => {
        return `Documentation ${validate_component(ExternalLink, "ExternalLink").$$render($$result, { size: "12", class: "ml-1" }, {}, {})}`;
      }
    }
  )}</div> ${validate_component(MonitorsAdd, "MonitorsAdd").$$render(
    $$result,
    {
      monitorSort: data.siteData?.monitorSort,
      categories: data.categories,
      colorDown: data.siteData?.colors?.DOWN || "#ca3038",
      colorDegraded: data.siteData?.colors?.DEGRADED || "#e6ca61"
    },
    {},
    {}
  )}</div>`;
});
export {
  Page as default
};
