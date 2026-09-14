---
title: Pixen
subtitle: An open-source desktop image editor, ideal for screenshots
pubDate: '2026-08-29'
platforms:
  - macOS
requirement: Requires macOS 10.15 or later
isPaid: false
isMenuBarApp: true
repoUrl: https://github.com/brenopolanski/pixen
mainLinks:
  'Download': https://github.com/brenopolanski/pixen/releases/latest
links:
  'Source': https://github.com/brenopolanski/pixen
  'How it works': https://github.com/brenopolanski/pixen/blob/main/docs/how-it-works.md
---

Crop, annotate, hide private information, and make quick edits. Pixen is a small desktop shell around the [Unlayer Image Editor](https://unlayer.com/image-editor), built with [Tauri](https://tauri.app). The editor does the editing. Pixen owns the window, the native file dialogs, the encoding, and the keyboard shortcuts.

<br>

> [!TIP]
> Press <kbd>⌘⇧9</kbd> from any app to capture a region straight into the editor. You don't need to switch to Pixen first.

<br>

#### Highlights

- Open PNG, JPEG and WebP by dropping on the window, pasting from the clipboard, or through a native file dialog
- Capture a region of the screen straight into the editor, from the toolbar or the menu bar
- Hide private data — an address, a token, a face — behind a mosaic, by dragging a box over it
- Number a screenshot for a step-by-step guide: click each spot and the badge counts itself up
- Point at what matters: drag an arrow towards it, as many as the guide needs
- Cut the background away from the subject with a local segmentation model, previewing before it is applied
- Crop, resize, filters, draw, text, shapes, stickers and frames
- Save as PNG, JPEG or WebP, or copy the result to the clipboard
- Light and dark theme, remembered between launches

#### Tabs

A clean tab is replaced; a dirty one stays and a new tab opens. The tab strip's **+** always opens another tab. The last ten images are reopened from **File → Open Recent**.

---

## Tips

### First launch

Builds are unsigned, so macOS will not open the app on a double-click. Right-click the app → **Open**, then confirm once. After that it launches normally.

### Internet on first run

Pixen loads the editor engine from `cdn.unlayer.com`, so the first launch needs an internet connection.

### Menu bar

Pixen keeps its Dock icon and editor window and adds a menu bar item next to them. Left-click it to capture, right-click it for the menu.

| Item              | Action                                      |
| ----------------- | ------------------------------------------- |
| `Take Screenshot` | Capture into a tab (<kbd>⌘⇧9</kbd>)         |
| `Start at Login`  | Toggle launch at login (checked when on)    |
| `About Pixen`     | Open the About window                       |
| `Quit Pixen`      | Quit, still asking about unsaved work first |

A capture from the tray goes through the same session as one from the toolbar, so it replaces a clean tab, opens a new one next to a dirty one, and asks before dropping unapplied marks.

### Keyboard shortcuts

| Shortcut       | Action                          |
| -------------- | ------------------------------- |
| <kbd>⌘S</kbd>  | Save                            |
| <kbd>⌘⇧S</kbd> | Save As                         |
| <kbd>⌘O</kbd>  | Open an image                   |
| <kbd>⌘V</kbd>  | Open the image on the clipboard |
| <kbd>⌘⇧C</kbd> | Copy the image to the clipboard |
| <kbd>⌘⇧9</kbd> | Take a screenshot, from any app |
| <kbd>⌘Q</kbd>  | Quit, guarding unsaved work     |

## Frequently Asked Questions {#faq}

#### Is it free?

Yes. Pixen is open source under the MIT license. The [source is on GitHub](https://github.com/brenopolanski/pixen).

#### macOS says the app is damaged or from an unidentified developer {#gatekeeper}

Builds are unsigned, so Gatekeeper blocks the first double-click. Right-click the app → **Open** and confirm. This is a one-time step.

#### Does it work offline?

Mostly. The editor engine is loaded from `cdn.unlayer.com` on first launch, so that run needs a connection. Saving, screenshots and the clipboard are all local.

#### Where do my images go? {#privacy}

Nowhere. Pixen reads and writes files on your Mac. There is no account, no upload and no telemetry. Background removal runs a local model, so that image never leaves the machine either.

#### Why does `⌘⇧9` ask for Accessibility permission? {#accessibility}

The shortcut is registered system-wide so it can fire while another app is in front. During development macOS may ask for Accessibility permission so the terminal can register it. A released build asks for screen recording permission the first time you capture.

#### Can I undo a mosaic or an arrow?

No. Those tools flatten the image, the same way a save does, so the editor's undo history goes with them. The document survives — the save path and file name stay, so <kbd>⌘S</kbd> still writes where it wrote before.

#### Why isn't drag and drop a normal web drop zone? {#drop}

Tauri intercepts file drops before the webview sees them, so `dragover` and `drop` never fire. Pixen listens to the window's drop event instead and takes the first PNG, JPEG or WebP. See [how it works](https://github.com/brenopolanski/pixen/blob/main/docs/how-it-works.md).

#### Can you support Windows or Linux? {#platforms}

Not today. Screen capture goes through macOS's own `screencapture`, and the menu bar behavior is macOS-specific. Both would need a native equivalent first.

#### What is the license? {#license}

Pixen's own source is MIT. Background removal uses [`@imgly/background-removal`](https://github.com/imgly/background-removal-js), which is **AGPL-3.0** — those terms apply to anyone distributing a build that includes it. IMG.LY sells a commercial licence for use that AGPL does not cover. Nothing else in the dependency tree is copyleft.

#### How is it built? {#stack}

Tauri 2 for the native shell, React 19 + TypeScript + Vite for the UI, Tailwind CSS with shadcn/ui, and [`@unlayer/react-image-editor`](https://github.com/unlayer/react-image-editor) as the editing engine. The details, and why encoding lives in Rust, are in [how it works](https://github.com/brenopolanski/pixen/blob/main/docs/how-it-works.md).

#### Can you add a feature?

Open an issue or a pull request on [GitHub](https://github.com/brenopolanski/pixen/issues).
