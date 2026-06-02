# FAB DeckKeeper

Static web app for tracking Flesh and Blood TCG decks on mobile and laptop screens.

## Features

- Add and edit decks with hero, class, talents, format, notes, and favorite status.
- Filter by hero, talent, class, format, and search text.
- Randomly select two saved decks for matchup testing.
- Import and export your deck collection as JSON.
- Starts with current-format legal hero shells for `CC` and `Silver Age` only.
- Uses official FAB card image thumbnails for seeded hero shells.
- Stores data locally in the browser with `localStorage`.
- Deploys directly to GitHub Pages because it has no backend or build step.

## Legality Notes

Default data was seeded on June 1, 2026. The app uses only `CC` and `Silver Age`, following the official FAB Card Legality Policy and Silver Age product pages:

- Classic Constructed excludes young heroes and Living Legend heroes.
- Silver Age uses young heroes and common/rare/basic card pools.
- Silver Age Chapter 3 is listed as coming June 5, 2026, so its heroes were not treated as currently released on June 1, 2026.

## GitHub Pages

1. Push this repository to GitHub.
2. Open repository settings.
3. Go to Pages.
4. Set the source to the branch and root folder containing `index.html`.

The app will be available at the GitHub Pages URL for the repository.
