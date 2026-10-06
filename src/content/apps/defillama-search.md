---
title: DefiLlama Search
subtitle: A tiny macOS menu bar app for fast, keyboard-first access to DefiLlama Search.
metaTitle: DefiLlama Search — Menu Bar Search for macOS
metaDescription: DefiLlama Search is an unofficial macOS menu bar app. Type a query, pick a result, and open the official DefiLlama page in your browser.
pubDate: '2026-10-06'
platforms:
  - macOS
requirement: Requires macOS 10.15 or later
priceLabel: Free
isMenuBarApp: true
repoUrl: https://github.com/brenopolanski/defillama-search
mainLinks:
  'Download': https://github.com/brenopolanski/defillama-search/releases/latest
links:
  'GitHub': https://github.com/brenopolanski/defillama-search
---

DefiLlama Search is a tiny macOS menu bar app for fast, keyboard-first access to [DefiLlama Search](https://search.defillama.com).

Click the menu bar icon (or press <kbd>⌘⇧L</kbd>) to open a compact popover, type a query, and press Enter to open the official project link in your default browser.

<br>

> [!IMPORTANT]
> This is an independent open-source client. It is not developed, maintained, or endorsed by [DefiLlama](https://defillama.com).

## Features

### Menu bar

DefiLlama Search lives in the macOS menu bar and has no Dock icon.

Left-click the tray icon to show or hide the popover. The popover is anchored near the icon. Right-click for the tray menu.

A packaged build starts at login on first launch. You can turn that off from the tray menu.

### Search

The popover searches the public DefiLlama Search directory.

Move through results with <kbd>↑</kbd> and <kbd>↓</kbd>. Press <kbd>Enter</kbd> to open the selected result in your default browser.

### Recent searches and favorites

Recent queries are remembered locally, up to 8.

Pin a search result or a query as a favorite, up to 20. Favorites are stored in `localStorage`. When the field is empty, **Favorites** appear above **Recent searches**.

Pin buttons on a result or a recent row do not open that row. Clear history or favorites from the tray menu.

### About

Open an **About** window from the tray menu. Close it with <kbd>⌘W</kbd> or <kbd>Escape</kbd>.

---

## Tips

### Menu bar

Right-click the tray icon:

| Item                     | Action                                    |
| ------------------------ | ----------------------------------------- |
| `Open Search`            | Show the popover (<kbd>⌘⇧L</kbd>)         |
| `Clear Favorites`        | Remove pinned items from `localStorage`   |
| `Clear Search History`   | Remove recent queries from `localStorage` |
| `Start at Login`         | Toggle launch at login                    |
| `About DefiLlama Search` | Open the About window                     |
| `Quit`                   | Exit the app (<kbd>⌘Q</kbd>)              |

### Keyboard shortcuts

| Shortcut                          | Action                                              |
| --------------------------------- | --------------------------------------------------- |
| <kbd>⌘⇧L</kbd>                    | Toggle the search popover                           |
| <kbd>↑</kbd> / <kbd>↓</kbd>       | Move the selected row                               |
| <kbd>Enter</kbd>                  | Open the selected result, or restore a pinned query |
| <kbd>Escape</kbd>                 | Clear the search field (the popover stays open)     |
| Click outside the popover         | Hide the popover                                    |
| <kbd>⌘W</kbd> / <kbd>Escape</kbd> | Close the About window                              |

<kbd>⌘⇧L</kbd> is registered system-wide. During development, macOS may ask for Accessibility permission so the terminal can register it.

## Frequently Asked Questions {#faq}

#### Is it free? {#free}

Yes. Download the latest `.dmg` from [GitHub Releases](https://github.com/brenopolanski/defillama-search/releases/latest). The source is MIT licensed.

#### Is this an official DefiLlama app? {#unofficial}

No. It is an independent open-source client. It is not developed, maintained, or endorsed by [DefiLlama](https://defillama.com).

#### macOS says the app was blocked {#gatekeeper}

The GitHub Release build is unsigned, so Gatekeeper blocks the first launch. Click **Done**, not Move to Trash. Then open **System Settings → Privacy & Security**, find the message that DefiLlama Search was blocked, and click **Open Anyway**.

#### Does search work offline? {#offline}

No. A query searches the public DefiLlama Search directory, so that needs a connection. Favorites and recent queries stay in `localStorage` on your Mac.

#### Where do my searches go? {#privacy}

Recent queries and favorites stay in `localStorage` on your Mac, up to 8 recent queries and 20 favorites. Opening a result leaves the app and opens the official link in your default browser.

#### Why does development ask for Accessibility permission? {#accessibility}

<kbd>⌘⇧L</kbd> is registered system-wide. During `tauri dev`, macOS may ask for Accessibility permission so the terminal can register that shortcut.

#### Can you support Windows or Linux? {#platforms}

Not today. The app is a macOS menu bar client.

#### Can you add a feature? {#features}

If you have any questions or suggestions, do not hesitate to [contact me](mailto:breno.polanski@gmail.com).

Feel free to create an issue on the [GitHub repository](https://github.com/brenopolanski/defillama-search/issues) or send a pull request.
