const STORAGE_KEY = "fab-deckkeeper-decks-v5";

const sourceNote = "Legality seeded June 2, 2026 from official FAB Card Legality Policy and product pages. Latest heroes refreshed June 4, 2026 from Fabrary public deck facets and Card Vault hero records.";
const deckFormats = ["CC", "Blitz", "Silver Age", "Open", "Living Legend", "Ultimate Pit Fight", "Clash", "Draft", "Sealed", "Golden Age"];

const heroCatalog = [
  hero("Arakni", "Assassin", [], [
    variant("CC", "Arakni, Huntsman", ""),
    variant("CC", "Arakni, Marionette", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HNT001.webp"),
    variant("Silver Age", "Arakni, Web of Deceit", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/WOD001-RF.webp")
  ]),
  hero("Azalea", "Ranger", [], [
    variant("Silver Age", "Azalea", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/ARC039.webp")
  ]),
  hero("Aurora", "Runeblade", ["Lightning"], [
    variant("CC", "Aurora, Legacy of Tempest", ""),
    variant("Silver Age", "Aurora, Emissary of Lightning", ""),
    variant("Living Legend", "Aurora, Shooting Star", "")
  ]),
  hero("Betsy", "Guardian", [], [
    variant("CC", "Betsy, Skin in the Game", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HVY045.webp")
  ]),
  hero("Blaze", "Wizard", [], [
    variant("Silver Age", "Blaze, Firemind", "")
  ]),
  hero("Boltyn", "Warrior", ["Light"], [
    variant("CC", "Ser Boltyn, Breaker of Dawn", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/MON029.webp"),
    variant("Silver Age", "Boltyn", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/MON030.webp")
  ]),
  hero("Bravo", "Guardian", [], [
    variant("CC", "Bravo, Showstopper", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/WTR038.webp"),
    variant("Silver Age", "Bravo, Flattering Showman", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/BDD001.webp")
  ]),
  hero("Briar", "Runeblade", ["Elemental", "Earth", "Lightning"], [
    variant("Silver Age", "Briar", "")
  ]),
  hero("Chane", "Runeblade", ["Shadow"], [
    variant("Silver Age", "Chane", "")
  ]),
  hero("Cindra", "Ninja", ["Draconic"], [
    variant("CC", "Cindra, Dracai of Retribution", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HNT054.webp"),
    variant("Silver Age", "Cindra", "")
  ]),
  hero("Dash", "Mechanologist", [], [
    variant("CC", "Dash I/O", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/EVO001.webp"),
    variant("Silver Age", "Dash, Database", ""),
    variant("Silver Age", "Dash", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/ARC002.webp")
  ]),
  hero("Dorinthea", "Warrior", [], [
    variant("CC", "Dorinthea Ironsong", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/WTR113.webp"),
    variant("Silver Age", "Dorinthea", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/WTR114.webp")
  ]),
  hero("Emperor", "Wizard", ["Draconic", "Royal"], [
    variant("CC", "Emperor, Dracai of Aesir", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/DYN001-CF.webp")
  ]),
  hero("Fai", "Ninja", ["Draconic"], [
    variant("CC", "Fai, Rising Rebellion", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/UPR044.webp"),
    variant("Silver Age", "Fai", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/UPR045.webp")
  ]),
  hero("Fang", "Ninja", ["Draconic"], [
    variant("CC", "Fang, Dracai of Blades", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HNT098.webp")
  ]),
  hero("Gravy Bones", "Pirate", [], [
    variant("CC", "Gravy Bones, Shipwrecked Looter", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/FR_SEA043-MV.webp")
  ]),
  hero("Hala", "Warrior", [], [
    variant("CC", "Hala, Bladesaint of the Vow", "https://d2wlb52bya4y8z.cloudfront.net/media/cards/small/AHA001-RF.webp", "Armory Deck Origins: Hala preconstructed deck")
  ]),
  hero("Jarl Vetreidi", "Guardian", ["Elemental", "Ice", "Earth"], [
    variant("CC", "Jarl Vetreiði", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/AJV001-RF.webp")
  ]),
  hero("Ira", "Ninja", [], [
    variant("CC", "Ira, Scarlet Revenger", "")
  ]),
  hero("Kassai", "Warrior", [], [
    variant("CC", "Kassai of the Golden Sand", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HVY090.webp")
  ]),
  hero("Katsu", "Ninja", [], [
    variant("CC", "Katsu, the Wanderer", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/WTR076.webp")
  ]),
  hero("Kayo", "Brute", [], [
    variant("CC", "Kayo, Armed and Dangerous", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HVY001.webp"),
    variant("Silver Age", "Kayo", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HVY002.webp")
  ]),
  hero("Kayo", "Brute", ["Reviled"], [
    variant("CC", "Kayo, Underhanded Cheat", "")
  ]),
  hero("Levia", "Brute", ["Shadow"], [
    variant("CC", "Levia, Shadowborn Abomination", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/MON119.webp")
  ]),
  hero("Lexi", "Ranger", ["Elemental", "Ice", "Lightning"], [
    variant("Silver Age", "Lexi", ""),
    variant("Living Legend", "Lexi, Livewire", "")
  ]),
  hero("Lyath Goldmane", "Wizard", [], [
    variant("CC", "Lyath Goldmane, Vile Savant", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/FR_SUP071.webp")
  ]),
  hero("Marlynn", "Ranger", ["Pirate"], [
    variant("CC", "Marlynn, Treasure Hunter", "")
  ]),
  hero("Maxx", "Mechanologist", [], [
    variant("CC", "Maxx 'The Hype' Nitro", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/EVO004.webp")
  ]),
  hero("Nuu", "Assassin", ["Mystic"], [
    variant("CC", "Nuu, Alluring Desire", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/DE_MST001.webp")
  ]),
  hero("Olympia", "Warrior", [], [
    variant("CC", "Olympia, Prized Fighter", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HVY092.webp")
  ]),
  hero("Oldhim", "Guardian", ["Elemental", "Earth", "Ice"], [
    variant("Silver Age", "Oldhim", "")
  ]),
  hero("Oscilio", "Wizard", ["Elemental", "Lightning"], [
    variant("CC", "Oscilio, Constella Intelligence", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/ROS019.webp")
  ]),
  hero("Oscilio", "Wizard", ["Lightning"], [
    variant("CC", "Oscilio, Forked Continuum", "")
  ]),
  hero("Prism", "Illusionist", ["Light"], [
    variant("CC", "Prism, Awakener of Sol", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HER086-CF.webp"),
    variant("Living Legend", "Prism, Sculptor of Arc Light", "")
  ]),
  hero("Pleiades", "Guardian", ["Revered"], [
    variant("CC", "Pleiades, Superstar", "")
  ]),
  hero("Puffin", "Mechanologist", ["Pirate"], [
    variant("CC", "Puffin, Hightail", "")
  ]),
  hero("Rhinar", "Brute", [], [
    variant("CC", "Rhinar, Reckless Rampage", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/WTR001.webp"),
    variant("Silver Age", "Rhinar", "")
  ]),
  hero("Riptide", "Ranger", [], [
    variant("CC", "Riptide, Lurker of the Deep", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HER078-CF.webp")
  ]),
  hero("Teklovossen", "Mechanologist", [], [
    variant("CC", "Teklovossen, Esteemed Magnate", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/EVO007.webp")
  ]),
  hero("Uzuri", "Assassin", [], [
    variant("CC", "Uzuri, Switchblade", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HER077-CF.webp"),
    variant("Silver Age", "Uzuri", "")
  ]),
  hero("Valda", "Guardian", [], [
    variant("CC", "Valda, Seismic Impact", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/MPG001.webp"),
    variant("Silver Age", "Valda Brightaxe", "")
  ]),
  hero("Verdance", "Wizard", ["Elemental", "Earth"], [
    variant("CC", "Verdance, Thorn of the Rose", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/ROS013.webp")
  ]),
  hero("Victor Goldmane", "Guardian", [], [
    variant("CC", "Victor Goldmane, High and Mighty", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HVY047.webp")
  ]),
  hero("Viserai", "Runeblade", [], [
    variant("Silver Age", "Viserai", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/ARC076.webp")
  ]),
  hero("Vynnset", "Runeblade", ["Shadow"], [
    variant("CC", "Vynnset, Iron Maiden", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HER087-CF.webp")
  ]),
  hero("Yoji", "Guardian", [], [
    variant("CC", "Yoji, Royal Protector", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/DYN025-RF.webp")
  ]),
  hero("Zyggy Starlight", "Illusionist", ["Lightning"], [
    variant("CC", "Zyggy Starlight", "")
  ]),
  hero("Iyslander", "Wizard", ["Elemental", "Ice"], [
    variant("Silver Age", "Iyslander", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/EVR120.webp")
  ]),
  hero("Enigma", "Illusionist", ["Mystic"], [
    variant("Silver Age", "Enigma", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/ENG001-RF.webp")
  ])
];

const fabraryHeroAdditions = [
  hero("Arakni", "Assassin", ["Chaos"], [
    variant("Silver Age", "Arakni", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/ARK001.webp"),
    variant("CC", "Arakni, 5L!p3d 7hRu 7h3 cR4X", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/AAC001.webp"),
    variant("Silver Age", "Arakni, Solitary Confinement", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HNT262-MV.webp")
  ]),
  hero("Aurora", "Runeblade", ["Elemental"], [
    variant("Silver Age", "Aurora", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/ROS008.webp")
  ]),
  hero("Azalea", "Ranger", [], [
    variant("Living Legend", "Azalea, Ace in the Hole", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/AAZ001.webp")
  ]),
  hero("Baalghor", "Unknown", ["Shadow"], [
    variant("Silver Age", "Baalghor, Omen of the End", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/IAR159-MV.webp")
  ]),
  hero("Benji", "Ninja", [], [
    variant("Silver Age", "Benji, the Piercing Wind", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/OUT047.webp")
  ]),
  hero("Betsy", "Guardian", [], [
    variant("Silver Age", "Betsy", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HVY046.webp")
  ]),
  hero("Bolfar", "Guardian", [], [
    variant("Ultimate Pit Fight", "Bolfar, Bear Hands", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/SMP001.webp")
  ]),
  hero("Bravo", "Guardian", ["Elemental"], [
    variant("Silver Age", "Bravo", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/1HB001.webp"),
    variant("Open", "Bravo, Star of the Show", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/EVR017.webp")
  ]),
  hero("Brevant", "Guardian", [], [
    variant("Ultimate Pit Fight", "Brevant, Civic Protector", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/TCC027-RF.webp")
  ]),
  hero("Briar", "Runeblade", ["Elemental"], [
    variant("Living Legend", "Briar, Warden of Thorns", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/ROS254-MV.webp")
  ]),
  hero("Brutus", "Unknown", [], [
    variant("Ultimate Pit Fight", "Brutus, Summa Rudis", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/JDG077.webp")
  ]),
  hero("Chane", "Runeblade", ["Shadow"], [
    variant("Open", "Chane, Bound by Shadow", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/ART002.webp")
  ]),
  hero("Dash", "Mechanologist", [], [
    variant("Golden Age", "Dash, Inventor Extraordinaire", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/U-CRU098.webp")
  ]),
  hero("Data Doll MKII", "Mechanologist", [], [
    variant("Silver Age", "Data Doll MKII", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/U-CRU099.webp")
  ]),
  hero("Dorinthea", "Warrior", [], [
    variant("Silver Age", "Dorinthea, Quicksilver Prodigy", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/DDD001.webp")
  ]),
  hero("Dromai", "Illusionist", ["Draconic"], [
    variant("Silver Age", "Dromai", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/UPR002.webp"),
    variant("CC", "Dromai, Ash Artist", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/UPR001.webp")
  ]),
  hero("Enigma", "Illusionist", ["Mystic"], [
    variant("Golden Age", "Enigma, Ledger of Ancestry", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/MST025.webp"),
    variant("Blitz", "Enigma, New Moon", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/MST238-RF.webp")
  ]),
  hero("Fang", "Warrior", ["Royal", "Draconic"], [
    variant("Silver Age", "Fang", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HNT099.webp")
  ]),
  hero("Fightmaster Kox", "Guardian", [], [
    variant("Ultimate Pit Fight", "Fightmaster Kox", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/SMP003.webp")
  ]),
  hero("Florian", "Runeblade", ["Elemental"], [
    variant("Silver Age", "Florian", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/ROS002.webp"),
    variant("Living Legend", "Florian, Rotwood Harbinger", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/ROS001.webp")
  ]),
  hero("Frankie", "Necromancer", [], [
    variant("Ultimate Pit Fight", "Frankie, Make Ends Meat", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/LSS021-MV.webp")
  ]),
  hero("Genis Wotchuneed", "Merchant", [], [
    variant("Ultimate Pit Fight", "Genis Wotchuneed", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/EVR085.webp")
  ]),
  hero("Gravy Bones", "Pirate", [], [
    variant("Silver Age", "Gravy Bones", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/SGB001.webp")
  ]),
  hero("Groundbreaker Crix", "Guardian", [], [
    variant("Ultimate Pit Fight", "Groundbreaker Crix", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/SMP004.webp")
  ]),
  hero("Hala", "Warrior", [], [
    variant("Silver Age", "Hala", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/MPW004-MV.webp")
  ]),
  hero("Ira", "Ninja", [], [
    variant("Silver Age", "Ira, Crimson Haze", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/I-CRU046.webp")
  ]),
  hero("Iyslander", "Wizard", ["Elemental"], [
    variant("Golden Age", "Iyslander, Stormbind", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/UPR102.webp")
  ]),
  hero("Kano", "Wizard", [], [
    variant("Silver Age", "Kano", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/1HK001.webp"),
    variant("Golden Age", "Kano, Dracai of Aether", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/U-CRU158.webp")
  ]),
  hero("Kassai", "Warrior", [], [
    variant("Silver Age", "Kassai", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HVY091.webp"),
    variant("Silver Age", "Kassai, Cintari Sellsword", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/U-CRU077.webp")
  ]),
  hero("Katsu", "Ninja", [], [
    variant("Silver Age", "Katsu", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/KAT001.webp")
  ]),
  hero("Kavdaen", "Merchant", [], [
    variant("Silver Age", "Kavdaen, Trader of Skins", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/U-CRU118.webp")
  ]),
  hero("Kayo", "Brute", ["Reviled"], [
    variant("Ultimate Pit Fight", "Kayo, Berserker Runt", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/U-CRU002.webp"),
    variant("Silver Age", "Kayo, Strong-arm", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/SUP064.webp")
  ]),
  hero("Levia", "Brute", ["Shadow"], [
    variant("Silver Age", "Levia", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/DTD104.webp")
  ]),
  hero("Lyath Goldmane", "Guardian", ["Reviled"], [
    variant("Silver Age", "Lyath Goldmane", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/SLY001.webp")
  ]),
  hero("Marlynn", "Pirate", [], [
    variant("Silver Age", "Marlynn", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/SEA083.webp")
  ]),
  hero("Maxx Nitro", "Mechanologist", [], [
    variant("Silver Age", "Maxx Nitro", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/EVO005.webp")
  ]),
  hero("Melody", "Bard", [], [
    variant("Ultimate Pit Fight", "Melody, Sing-along", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/TCC049-RF.webp")
  ]),
  hero("Nuu", "Assassin", ["Mystic"], [
    variant("Silver Age", "Nuu", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/MST002.webp")
  ]),
  hero("Oldhim", "Guardian", ["Elemental"], [
    variant("Golden Age", "Oldhim, Grandfather of Eternity", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/U-ELE001.webp")
  ]),
  hero("Olympia", "Warrior", [], [
    variant("Silver Age", "Olympia", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/MPW006.webp")
  ]),
  hero("Oscilio", "Wizard", ["Elemental", "Lightning"], [
    variant("Silver Age", "Oscilio", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/ROS020.webp"),
    variant("Silver Age", "Oscilio, Scion of the Third Age", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/OMN095.webp")
  ]),
  hero("Pleiades", "Guardian", ["Revered"], [
    variant("Silver Age", "Pleiades", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/SUP010.webp")
  ]),
  hero("Prism", "Illusionist", ["Light"], [
    variant("Silver Age", "Prism", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/U-MON002.webp"),
    variant("Blitz", "Prism, Advent of Thrones", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/DTD002.webp")
  ]),
  hero("Professor Teklovossen", "Mechanologist", [], [
    variant("Ultimate Pit Fight", "Professor Teklovossen", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/TCC001-RF.webp")
  ]),
  hero("Puffin", "Pirate", [], [
    variant("Silver Age", "Puffin", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/SEA002.webp")
  ]),
  hero("Reya", "Guardian", [], [
    variant("Ultimate Pit Fight", "Reya, the Unyielding", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/SMP005.webp")
  ]),
  hero("Riptide", "Ranger", [], [
    variant("Silver Age", "Riptide", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/OUT092.webp")
  ]),
  hero("Scurv", "Pirate", [], [
    variant("Silver Age", "Scurv, Stowaway", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/SEA123.webp")
  ]),
  hero("Shiyana", "Shapeshifter", [], [
    variant("Blitz", "Shiyana, Diamond Gemini", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/U-CRU097-RF.webp")
  ]),
  hero("Squizzy & Floof", "Merchant", [], [
    variant("Open", "Squizzy & Floof", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HER101-RF.webp")
  ]),
  hero("Taipanis", "Unknown", ["Draconic"], [
    variant("Ultimate Pit Fight", "Taipanis, Dracai of Judgement", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/JDG001-CF.webp")
  ]),
  hero("Taylor", "Shapeshifter", [], [
    variant("Open", "Taylor", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/LSS003-CF.webp")
  ]),
  hero("Teklovossen", "Mechanologist", [], [
    variant("Silver Age", "Teklovossen", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/TCC001-RF.webp")
  ]),
  hero("Terra", "Guardian", ["Elemental"], [
    variant("Silver Age", "Terra", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/TER001.webp")
  ]),
  hero("Theryon", "Unknown", ["Light"], [
    variant("Ultimate Pit Fight", "Theryon, Magister of Justice", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/JDG006-CF.webp")
  ]),
  hero("Tuffnut", "Brute", ["Revered"], [
    variant("Silver Age", "Tuffnut", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/SUP002.webp"),
    variant("CC", "Tuffnut, Bumbling Hulkster", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/SUP001.webp")
  ]),
  hero("Verdance", "Wizard", ["Elemental"], [
    variant("Silver Age", "Verdance", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/ROS014.webp")
  ]),
  hero("Victor Goldmane", "Guardian", [], [
    variant("Silver Age", "Victor Goldmane", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HVY048.webp"),
    variant("Ultimate Pit Fight", "Victor Goldmane, Match Fixer", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/SMP006.webp")
  ]),
  hero("Viserai", "Runeblade", [], [
    variant("CC", "Viserai, Rune Blood", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/AVS001.webp")
  ]),
  hero("Vynnset", "Runeblade", ["Shadow"], [
    variant("Silver Age", "Vynnset", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/DTD134.webp")
  ]),
  hero("Yorick", "Bard", [], [
    variant("Ultimate Pit Fight", "Yorick, Weaver of Tales", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/LSS004-CF.webp")
  ]),
  hero("Zen", "Ninja", ["Mystic"], [
    variant("Silver Age", "Zen", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/MST047.webp"),
    variant("Golden Age", "Zen, Tamer of Purpose", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/MST046.webp")
  ]),
  hero("Zyggy", "Illusionist", ["Lightning"], [
    variant("Silver Age", "Zyggy", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/OMN002.webp")
  ])
];

const seededHeroCatalog = [...heroCatalog, ...fabraryHeroAdditions];

function hero(heroName, className, talents, variants) {
  return { hero: heroName, className, talents, variants };
}

function variant(format, fullName, imageUrl, notes = "") {
  return { format, fullName, imageUrl, notes };
}

function defaultDeckNote(format) {
  if (format === "Blitz") return "Blitz hero shell";
  if (format === "Silver Age") return "Legal young hero shell";
  if (format === "Open") return "Open format hero shell";
  if (format === "Living Legend") return "Living Legend hero shell";
  if (format === "Ultimate Pit Fight") return "UPF hero shell";
  if (format === "Clash") return "Clash hero shell";
  if (format === "Draft") return "Draft hero shell";
  if (format === "Sealed") return "Sealed hero shell";
  if (format === "Golden Age") return "Golden Age hero shell";
  return "Legal CC hero shell";
}

function thumbnailUrl(url) {
  return String(url || "").replace("/media/cards/large/", "/media/cards/small/");
}

const starterDecks = seededHeroCatalog.flatMap((entry, index) =>
  entry.variants.map((deckVariant, formatIndex) => ({
    id: crypto.randomUUID(),
    name: deckVariant.fullName,
    hero: entry.hero,
    className: entry.className,
    talents: entry.talents,
    format: deckVariant.format,
    imageUrl: deckVariant.imageUrl,
    notes: deckVariant.notes || defaultDeckNote(deckVariant.format),
    favorite: index < 4 && formatIndex === 0,
    updatedAt: Date.now() - (index * 1000 * 60),
    color: colorForSeed(`${entry.hero}${entry.className}`)
  }))
);

const chipPalette = ["#e8eef5", "#f1e9d7", "#eadfe8", "#e3eee4", "#ebe6df", "#dfe9ea"];
const $ = (selector) => document.querySelector(selector);

let decks = loadDecks();
let matchupIds = [];
let matchupLocks = [false, false];
let matchupFormat = "";

const elements = {
  search: $("#searchInput"),
  heroFilter: $("#heroFilter"),
  talentFilter: $("#talentFilter"),
  classFilter: $("#classFilter"),
  formatFilter: $("#formatFilter"),
  sort: $("#sortSelect"),
  deckList: $("#deckList"),
  deckCount: $("#deckCount"),
  matchupPair: $("#matchupPair"),
  dialog: $("#deckDialog"),
  form: $("#deckForm"),
  importFile: $("#importFile")
};

function normalizeDeck(deck) {
  return {
    id: deck.id || crypto.randomUUID(),
    name: deck.name || `${deck.hero || "Untitled"} Deck`,
    hero: deck.hero || "Unknown",
    className: deck.className || deck.class || "Unknown",
    talents: Array.isArray(deck.talents) ? deck.talents : [],
    format: deckFormats.includes(deck.format) ? deck.format : "CC",
    imageUrl: thumbnailUrl(deck.imageUrl || ""),
    notes: deck.notes || "",
    favorite: Boolean(deck.favorite),
    updatedAt: deck.updatedAt || Date.now(),
    color: deck.color || colorForSeed(`${deck.hero || ""}${deck.className || deck.class || ""}`)
  };
}

function loadDecks() {
  const current = localStorage.getItem(STORAGE_KEY);

  if (!current) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(starterDecks));
    return starterDecks;
  }

  try {
    const parsed = JSON.parse(current);
    if (!Array.isArray(parsed)) throw new Error("Stored data is not an array.");
    const normalized = mergeStarterDecks(parsed.map(normalizeDeck));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    return normalized;
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(starterDecks));
    return starterDecks;
  }
}

function mergeStarterDecks(currentDecks) {
  const deckKeys = new Set(currentDecks.map(deckKey));
  const missingDecks = starterDecks
    .filter((starterDeck) => !deckKeys.has(deckKey(starterDeck)))
    .map((starterDeck) => ({ ...starterDeck, id: crypto.randomUUID(), updatedAt: Date.now() }));

  return missingDecks.length ? [...missingDecks, ...currentDecks] : currentDecks;
}

function deckKey(deck) {
  return [deck.name, deck.hero, deck.className, deck.format].map(normalizeKeyPart).join("::");
}

function normalizeKeyPart(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[ðÐ]/g, "d")
    .toLowerCase();
}

function saveDecks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
}

function uniqueValues(getter) {
  return [...new Set(decks.flatMap((deck) => getter(deck)).filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function fillSelect(select, values, label) {
  const current = select.value;
  select.replaceChildren(new Option(label, "all"), ...values.map((value) => new Option(value, value)));
  select.value = values.includes(current) ? current : "all";
}

function refreshFilters() {
  fillSelect(elements.heroFilter, uniqueValues((deck) => [deck.hero]), "All");
  fillSelect(elements.talentFilter, uniqueValues((deck) => deck.talents), "All");
  fillSelect(elements.classFilter, uniqueValues((deck) => [deck.className]), "All");
  fillSelect(elements.formatFilter, deckFormats, "All");
}

function filteredDecks() {
  const search = elements.search.value.trim().toLowerCase();
  const hero = elements.heroFilter.value;
  const talent = elements.talentFilter.value;
  const className = elements.classFilter.value;
  const format = elements.formatFilter.value;

  return decks
    .filter((deck) => {
      const haystack = [deck.name, deck.hero, deck.className, deck.format, deck.notes, ...deck.talents].join(" ").toLowerCase();
      return (!search || haystack.includes(search))
        && (hero === "all" || deck.hero === hero)
        && (talent === "all" || deck.talents.includes(talent))
        && (className === "all" || deck.className === className)
        && (format === "all" || deck.format === format);
    })
    .sort((a, b) => {
      if (elements.sort.value === "name") return a.name.localeCompare(b.name);
      if (elements.sort.value === "hero") return a.hero.localeCompare(b.hero);
      if (elements.sort.value === "class") return a.className.localeCompare(b.className);
      return b.updatedAt - a.updatedAt;
    });
}

function initials(deck) {
  return deck.hero.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
}

function chipHtml(deck) {
  const chips = [deck.format, deck.className, ...deck.talents];
  return chips.map((chip, index) => {
    const color = chipPalette[Math.abs(hashCode(chip) + index) % chipPalette.length];
    return `<span class="chip" style="--chip:${color}">${escapeHtml(chip)}</span>`;
  }).join("");
}

function hashCode(value) {
  return [...value].reduce((hash, char) => ((hash << 5) - hash) + char.charCodeAt(0), 0);
}

function renderDecks() {
  const visible = filteredDecks();
  elements.deckCount.textContent = `${visible.length} of ${decks.length}`;

  if (!visible.length) {
    elements.deckList.innerHTML = `
      <div class="empty-state">
        <p>No decks match those filters.</p>
        <button type="button" data-action="clear-filters">Clear Filters</button>
      </div>
    `;
    return;
  }

  elements.deckList.innerHTML = visible.map((deck) => `
    <article class="deck-card" data-id="${deck.id}">
      ${portraitHtml(deck)}
      <div class="deck-body">
        <div class="deck-title-row">
          <div>
            <h3>${escapeHtml(deck.name)}</h3>
            <p class="hero-line">${escapeHtml(deck.hero)} <span>${escapeHtml(deck.className)}</span></p>
          </div>
          <div class="deck-actions">
            <button class="star-button ${deck.favorite ? "on" : ""}" type="button" data-action="favorite" aria-label="Toggle favorite">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/></svg>
            </button>
            <button class="mini-button" type="button" data-action="edit" aria-label="Edit deck">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16v4ZM13 7l4 4"/></svg>
            </button>
          </div>
        </div>
        <div class="chips">${chipHtml(deck)}</div>
        <div class="deck-meta-row">
          <span>${escapeHtml(deck.notes || "No notes yet")}</span>
        </div>
      </div>
    </article>
  `).join("");
}

function colorForSeed(seed) {
  const hue = Math.abs(hashCode(seed)) % 360;
  return `linear-gradient(135deg, hsl(${hue} 20% 42%), hsl(${hue} 24% 30%))`;
}

function colorForDeck(deck) {
  return colorForSeed(`${deck.hero}${deck.className}`);
}

function portraitHtml(deck) {
  const fallback = `<span>${initials(deck)}</span>`;
  if (!deck.imageUrl) {
    return `<div class="portrait fallback" style="--portrait:${deck.color || colorForDeck(deck)}">${fallback}</div>`;
  }

  return `
    <div class="portrait has-image" style="--portrait:${deck.color || colorForDeck(deck)}">
      <img src="${escapeHtml(deck.imageUrl)}" alt="${escapeHtml(deck.name)} card art" loading="lazy" onerror="this.remove(); this.parentElement.classList.add('fallback')">
      ${fallback}
    </div>
  `;
}

function randomizeMatchup() {
  const lockedEntries = matchupIds
    .map((id, index) => ({ deck: decks.find((item) => item.id === id), index, locked: matchupLocks[index] }))
    .filter((entry) => entry.locked && entry.deck);

  matchupLocks = matchupLocks.map((locked, index) => locked && Boolean(decks.find((deck) => deck.id === matchupIds[index])));

  if (lockedEntries.length === 2 && lockedEntries[0].deck.format === lockedEntries[1].deck.format) {
    matchupFormat = lockedEntries[0].deck.format;
    renderMatchup();
    return;
  }

  if (lockedEntries.length === 2) {
    matchupLocks = [false, false];
  }

  if (lockedEntries.length === 1) {
    const { deck: lockedDeck, index: lockedIndex } = lockedEntries[0];
    const candidates = decks.filter((deck) => deck.format === lockedDeck.format && deck.id !== lockedDeck.id);

    if (!candidates.length) {
      matchupIds = lockedIndex === 0 ? [lockedDeck.id] : ["", lockedDeck.id];
      matchupFormat = lockedDeck.format;
      renderMatchup();
      return;
    }

    const nextDeck = candidates[Math.floor(Math.random() * candidates.length)];
    matchupIds = lockedIndex === 0 ? [lockedDeck.id, nextDeck.id] : [nextDeck.id, lockedDeck.id];
    matchupFormat = lockedDeck.format;
    renderMatchup();
    return;
  }

  const eligibleGroups = Object.entries(decks.reduce((groups, deck) => {
    groups[deck.format] = groups[deck.format] || [];
    groups[deck.format].push(deck);
    return groups;
  }, {})).filter(([, group]) => group.length >= 2);

  if (!eligibleGroups.length) {
    matchupIds = [];
    matchupLocks = [false, false];
    matchupFormat = "";
  } else {
    const [format, group] = eligibleGroups[Math.floor(Math.random() * eligibleGroups.length)];
    const pool = [...group];
    const first = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];
    const second = pool[Math.floor(Math.random() * pool.length)];
    matchupIds = [first.id, second.id];
    matchupFormat = format;
  }
  renderMatchup();
}

function renderMatchup() {
  const pair = matchupIds.map((id, index) => ({ deck: decks.find((item) => item.id === id), index })).filter((entry) => entry.deck);

  if (pair.length === 2 && pair[0].deck.format !== pair[1].deck.format) {
    matchupIds = [];
    matchupLocks = [false, false];
    matchupFormat = "";
    randomizeMatchup();
    return;
  }

  if (pair.length < 2) {
    elements.matchupPair.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1">
        <p>Add at least two decks in the same format to randomize a matchup.</p>
        <button type="button" data-action="add">Add Deck</button>
      </div>
    `;
    return;
  }

  elements.matchupPair.innerHTML = `
    <div class="matchup-format">${escapeHtml(matchupFormat || pair[0].deck.format)}</div>
    ${pair.map(({ deck, index }) => `
      <article class="match-deck">
        <button class="lock-button ${matchupLocks[index] ? "locked" : ""}" type="button" data-action="lock-matchup" data-index="${index}" aria-label="${matchupLocks[index] ? "Unlock" : "Lock"} ${escapeHtml(deck.name)}" title="${matchupLocks[index] ? "Unlock deck" : "Lock deck"}">
          ${matchupLocks[index] ? lockIcon() : unlockIcon()}
        </button>
        ${portraitHtml(deck)}
        <h3>${escapeHtml(deck.name)}</h3>
        <p>${escapeHtml(deck.hero)} · ${escapeHtml(deck.className)}</p>
        <label class="match-select">
          <span>Deck</span>
          <select data-action="select-matchup" data-index="${index}" aria-label="Choose matchup deck ${index + 1}">
            ${matchupDeckOptionsHtml(deck.id)}
          </select>
        </label>
        <div class="chips">${chipHtml(deck)}</div>
      </article>
    `).join('<div class="vs">VS</div>')}
  `;
}

function matchupDeckOptionsHtml(selectedId) {
  const formats = uniqueValues((deck) => [deck.format]);

  return formats.map((format) => {
    const options = decks
      .filter((deck) => deck.format === format)
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((deck) => `<option value="${escapeHtml(deck.id)}" ${deck.id === selectedId ? "selected" : ""}>${escapeHtml(deck.name)}</option>`)
      .join("");

    return `<optgroup label="${escapeHtml(format)}">${options}</optgroup>`;
  }).join("");
}

function selectMatchupDeck(index, deckId) {
  const selectedDeck = decks.find((deck) => deck.id === deckId);
  if (!selectedDeck) return;

  const otherIndex = index === 0 ? 1 : 0;
  const candidates = decks.filter((deck) => deck.format === selectedDeck.format && deck.id !== selectedDeck.id);

  matchupIds[index] = selectedDeck.id;
  matchupLocks[index] = true;
  matchupLocks[otherIndex] = false;
  matchupFormat = selectedDeck.format;

  if (candidates.length) {
    const nextDeck = candidates[Math.floor(Math.random() * candidates.length)];
    matchupIds[otherIndex] = nextDeck.id;
  } else {
    matchupIds[otherIndex] = "";
  }

  renderMatchup();
}

function lockIcon() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 11V8a5 5 0 0 1 10 0v3M6 11h12v9H6z"/></svg>';
}

function unlockIcon() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 11V8a5 5 0 0 1 8.5-3.6M17 11h1v9H6v-9h7"/></svg>';
}

function openDeckDialog(deck = null) {
  $("#dialogTitle").textContent = deck ? "Edit Deck" : "Add Deck";
  $("#deckId").value = deck?.id || "";
  $("#deckName").value = deck?.name || "";
  $("#deckHero").value = deck?.hero || "";
  $("#deckClass").value = deck?.className || "";
  $("#deckTalents").value = deck?.talents?.join(", ") || "";
  $("#deckFormat").value = deck?.format || "CC";
  $("#deckNotes").value = deck?.notes || "";
  $("#deleteDeckButton").hidden = !deck;
  elements.dialog.showModal();
}

function saveFromForm(event) {
  event.preventDefault();
  const id = $("#deckId").value || crypto.randomUUID();
  const existing = decks.find((deck) => deck.id === id);
  const hero = $("#deckHero").value.trim();
  const className = $("#deckClass").value.trim();
  const next = {
    id,
    name: $("#deckName").value.trim(),
    hero,
    className,
    talents: $("#deckTalents").value.split(",").map((talent) => talent.trim()).filter(Boolean),
    format: $("#deckFormat").value,
    imageUrl: existing?.imageUrl || "",
    notes: $("#deckNotes").value.trim(),
    favorite: existing?.favorite || false,
    updatedAt: Date.now(),
    color: existing?.color || colorForSeed(`${hero}${className}`)
  };

  decks = existing ? decks.map((deck) => deck.id === id ? next : deck) : [next, ...decks];
  saveDecks();
  refresh();
  elements.dialog.close();
}

function exportDecks() {
  const blob = new Blob([JSON.stringify(decks, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `fab-deckkeeper-${new Date().toISOString().slice(0, 10)}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

function importDecks(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!Array.isArray(imported)) throw new Error("Import must be an array.");
      decks = imported.map(normalizeDeck);
      saveDecks();
      randomizeMatchup();
      refresh();
    } catch (error) {
      alert(`Could not import decks: ${error.message}`);
    }
  };
  reader.readAsText(file);
}

function clearFilters() {
  elements.search.value = "";
  elements.heroFilter.value = "all";
  elements.talentFilter.value = "all";
  elements.classFilter.value = "all";
  elements.formatFilter.value = "all";
  renderDecks();
}

function refresh() {
  refreshFilters();
  renderDecks();
  renderMatchup();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

document.addEventListener("input", (event) => {
  if ([elements.search, elements.heroFilter, elements.talentFilter, elements.classFilter, elements.formatFilter, elements.sort].includes(event.target)) {
    renderDecks();
  }
});

elements.deckList.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  const card = event.target.closest(".deck-card");

  if (action === "clear-filters") clearFilters();
  if (!card) return;

  const deck = decks.find((item) => item.id === card.dataset.id);
  if (!deck) return;

  if (action === "favorite") {
    deck.favorite = !deck.favorite;
    deck.updatedAt = Date.now();
    saveDecks();
    renderDecks();
  }

  if (action === "edit") openDeckDialog(deck);
});

elements.matchupPair.addEventListener("click", (event) => {
  if (event.target.closest("[data-action='add']")) openDeckDialog();

  const lockButton = event.target.closest("[data-action='lock-matchup']");
  if (lockButton) {
    const index = Number(lockButton.dataset.index);
    matchupLocks[index] = !matchupLocks[index];
    renderMatchup();
  }
});

elements.matchupPair.addEventListener("change", (event) => {
  if (event.target.dataset.action === "select-matchup") {
    selectMatchupDeck(Number(event.target.dataset.index), event.target.value);
  }
});

document.querySelectorAll(".bottom-tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".bottom-tabs button").forEach((tab) => tab.classList.remove("active"));
    button.classList.add("active");
    $(`#${button.dataset.target}`).scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

$("#addDeckButton").addEventListener("click", () => openDeckDialog());
$("#shuffleButton").addEventListener("click", randomizeMatchup);
$("#exportButton").addEventListener("click", exportDecks);
$("#importButton").addEventListener("click", () => elements.importFile.click());
$("#resetButton").addEventListener("click", () => {
  if (confirm("Replace your current decks with the current legal hero defaults?")) {
    decks = starterDecks.map((deck) => ({ ...deck, id: crypto.randomUUID(), updatedAt: Date.now() }));
    matchupLocks = [false, false];
    saveDecks();
    randomizeMatchup();
    refresh();
  }
});
$("#closeDialogButton").addEventListener("click", () => elements.dialog.close());
$("#cancelDeckButton").addEventListener("click", () => elements.dialog.close());
$("#deleteDeckButton").addEventListener("click", () => {
  const id = $("#deckId").value;
  const deck = decks.find((item) => item.id === id);
  if (!deck) return;
  if (confirm(`Delete ${deck.name}?`)) {
    decks = decks.filter((item) => item.id !== id);
    saveDecks();
    randomizeMatchup();
    refresh();
    elements.dialog.close();
  }
});
elements.form.addEventListener("submit", saveFromForm);
elements.importFile.addEventListener("change", (event) => {
  const [file] = event.target.files;
  if (file) importDecks(file);
  event.target.value = "";
});

randomizeMatchup();
refresh();
console.info(sourceNote);
