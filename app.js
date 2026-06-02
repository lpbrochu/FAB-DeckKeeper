const STORAGE_KEY = "fab-deckkeeper-decks-v5";

const sourceNote = "Legality seeded June 1, 2026 from official FAB Card Legality Policy and Silver Age product pages.";

const heroCatalog = [
  hero("Arakni", "Assassin", [], [
    variant("CC", "Arakni, Marionette", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HNT001.webp"),
    variant("Silver Age", "Arakni, Web of Deceit", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/WOD001-RF.webp")
  ]),
  hero("Azalea", "Ranger", [], [
    variant("Silver Age", "Azalea", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/ARC039.webp")
  ]),
  hero("Betsy", "Guardian", [], [
    variant("CC", "Betsy, Skin in the Game", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HVY045.webp")
  ]),
  hero("Boltyn", "Warrior", ["Light"], [
    variant("CC", "Ser Boltyn, Breaker of Dawn", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/MON029.webp"),
    variant("Silver Age", "Boltyn", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/MON030.webp")
  ]),
  hero("Bravo", "Guardian", [], [
    variant("CC", "Bravo, Showstopper", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/WTR038.webp"),
    variant("Silver Age", "Bravo, Flattering Showman", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/BDD001.webp")
  ]),
  hero("Cindra", "Ninja", ["Draconic"], [
    variant("CC", "Cindra, Dracai of Retribution", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HNT054.webp")
  ]),
  hero("Dash", "Mechanologist", [], [
    variant("CC", "Dash I/O", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/EVO001.webp"),
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
  hero("Jarl Vetreidi", "Guardian", ["Elemental", "Ice", "Earth"], [
    variant("CC", "Jarl Vetreidi", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/AJV001-RF.webp")
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
  hero("Levia", "Brute", ["Shadow"], [
    variant("CC", "Levia, Shadowborn Abomination", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/MON119.webp")
  ]),
  hero("Lyath Goldmane", "Wizard", [], [
    variant("CC", "Lyath Goldmane, Vile Savant", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/FR_SUP071.webp")
  ]),
  hero("Maxx", "Mechanologist", [], [
    variant("CC", "Maxx \"The Hype\" Nitro", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/EVO004.webp")
  ]),
  hero("Nuu", "Assassin", ["Mystic"], [
    variant("CC", "Nuu, Alluring Desire", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/DE_MST001.webp")
  ]),
  hero("Olympia", "Warrior", [], [
    variant("CC", "Olympia, Prized Fighter", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HVY092.webp")
  ]),
  hero("Oscilio", "Wizard", ["Elemental", "Lightning"], [
    variant("CC", "Oscilio, Constella Intelligence", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/ROS019.webp")
  ]),
  hero("Prism", "Illusionist", ["Light"], [
    variant("CC", "Prism, Awakener of Sol", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HER086-CF.webp")
  ]),
  hero("Rhinar", "Brute", [], [
    variant("CC", "Rhinar, Reckless Rampage", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/WTR001.webp")
  ]),
  hero("Riptide", "Ranger", [], [
    variant("CC", "Riptide, Lurker of the Deep", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HER078-CF.webp")
  ]),
  hero("Teklovossen", "Mechanologist", [], [
    variant("CC", "Teklovossen, Esteemed Magnate", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/EVO007.webp")
  ]),
  hero("Uzuri", "Assassin", [], [
    variant("CC", "Uzuri, Switchblade", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/HER077-CF.webp")
  ]),
  hero("Valda", "Guardian", [], [
    variant("CC", "Valda, Seismic Impact", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/MPG001.webp")
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
  hero("Iyslander", "Wizard", ["Elemental", "Ice"], [
    variant("Silver Age", "Iyslander", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/EVR120.webp")
  ]),
  hero("Enigma", "Illusionist", ["Mystic"], [
    variant("Silver Age", "Enigma", "https://legendstory-production-s3-public.s3.amazonaws.com/media/cards/small/ENG001-RF.webp")
  ])
];

function hero(heroName, className, talents, variants) {
  return { hero: heroName, className, talents, variants };
}

function variant(format, fullName, imageUrl) {
  return { format, fullName, imageUrl };
}

function thumbnailUrl(url) {
  return String(url || "").replace("/media/cards/large/", "/media/cards/small/");
}

const starterDecks = heroCatalog.flatMap((entry, index) =>
  entry.variants.map((deckVariant, formatIndex) => ({
    id: crypto.randomUUID(),
    name: deckVariant.fullName,
    hero: entry.hero,
    className: entry.className,
    talents: entry.talents,
    format: deckVariant.format,
    imageUrl: deckVariant.imageUrl,
    notes: deckVariant.format === "Silver Age" ? "Legal young hero shell" : "Legal CC hero shell",
    favorite: index < 4 && formatIndex === 0,
    updatedAt: Date.now() - (index * 1000 * 60),
    color: colorForSeed(`${entry.hero}${entry.className}`)
  }))
);

const chipPalette = ["#e8eef5", "#f1e9d7", "#eadfe8", "#e3eee4", "#ebe6df", "#dfe9ea"];
const $ = (selector) => document.querySelector(selector);

let decks = loadDecks();
let matchupIds = [];
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
    format: ["CC", "Silver Age"].includes(deck.format) ? deck.format : "CC",
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
    const normalized = parsed.map(normalizeDeck);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    return normalized;
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(starterDecks));
    return starterDecks;
  }
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
  fillSelect(elements.formatFilter, ["CC", "Silver Age"], "All");
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
  const eligibleGroups = Object.entries(decks.reduce((groups, deck) => {
    groups[deck.format] = groups[deck.format] || [];
    groups[deck.format].push(deck);
    return groups;
  }, {})).filter(([, group]) => group.length >= 2);

  if (!eligibleGroups.length) {
    matchupIds = [];
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
  const pair = matchupIds.map((id) => decks.find((deck) => deck.id === id)).filter(Boolean);

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
    <div class="matchup-format">${escapeHtml(matchupFormat || pair[0].format)}</div>
    ${pair.map((deck) => `
      <article class="match-deck">
        ${portraitHtml(deck)}
        <h3>${escapeHtml(deck.name)}</h3>
        <p>${escapeHtml(deck.hero)} · ${escapeHtml(deck.className)}</p>
        <div class="chips">${chipHtml(deck)}</div>
      </article>
    `).join('<div class="vs">VS</div>')}
  `;
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
