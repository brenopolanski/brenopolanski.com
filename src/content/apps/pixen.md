---
title: Pixen
subtitle: Capture, edit, and refine screenshots on your Mac.
pubDate: '2026-08-29'
platforms:
  - macOS
requirement: Requires macOS 10.15 or later
priceLabel: Paid or free
isMenuBarApp: true
repoUrl: https://github.com/brenopolanski/pixen
mainLinks:
  'Apple': https://apps.apple.com
links:
  'Source': https://github.com/brenopolanski/pixen
  'How it Works': https://github.com/brenopolanski/pixen/blob/main/docs/how-it-works.md
  'Privacy Policy': /apps/pixen/privacy-policy
---

Pixen is a lightweight screenshot editor for macOS.

Capture your screen, make quick edits, annotate important details, hide private information, and export the result — all from one simple app.

<br>

> [!TIP]
> Press <kbd>⌘⇧9</kbd> from any app to capture a region straight into the editor. You don't need to switch to Pixen first.

<br>

## Features

### Capture Screenshots

Capture any region of your screen directly into Pixen, from the toolbar, the menu bar, or <kbd>⌘⇧9</kbd>.

![Capture screenshots with Pixen](/apps/pixen/demo-feature-screenshot.png)

### Edit Screenshots

Edit your screenshots with a familiar image editor powered by [Unlayer Image Editor](https://unlayer.com/image-editor).

Crop, resize, apply filters, draw, add text, shapes, stickers, and frames.

![Edit screenshots with Pixen](/apps/pixen/demo-feature-editor.png)

### Annotate with Arrows

Point out exactly what matters. Draw arrows anywhere on the screenshot and add as many as you need.

![Add arrows to screenshots](/apps/pixen/demo-feature-arrows.png)

### Add Numbered Steps

Create step-by-step guides directly on your screenshots. Click each location and Pixen automatically numbers the markers.

![Add numbered steps to screenshots](/apps/pixen/demo-feature-numbered-steps.png)

### Hide private information

Pixelate addresses, tokens, faces, and other private data by dragging a box over it.

![Pixelate private information](/apps/pixen/demo-feature-pixelize.png)

### Remove backgrounds

Remove the background with a local segmentation model. The result is previewed before it is applied, and the image never leaves your Mac.

![Remove image backgrounds](/apps/pixen/feature-background-removal.png)

### Menu bar

Pixen stays in the Dock and adds a menu bar item. Left-click it to capture. Right-click it to start at login, open About, or quit, without leaving the app you are in.

### Recent images

Reopen the last ten images from **File → Open Recent**.

### Tabs

Work on more than one image. A clean tab is replaced when you open something new. A modified tab stays, and Pixen opens another one beside it.

### Light and dark mode

Choose light or dark in Settings. Pixen's chrome and the image editor follow that choice, and it is remembered between launches.

### Export

Save as PNG, JPEG, or WebP. <kbd>⌘S</kbd> saves, <kbd>⌘⇧S</kbd> saves a new copy. Pixen asks where to write the first time and reuses that destination afterwards.

### Clipboard

Copy the edited screenshot to the system clipboard with <kbd>⌘⇧C</kbd>.

---

## Tips

### Build it yourself

No `.dmg` is published. The source is free. Run `pnpm tauri:build` and the unsigned `.app` and `.dmg` land in `src-tauri/target/release/bundle/`. The first launch is right-click the app → **Open**. Requirements (pnpm, Node, Rust, and Xcode Command Line Tools) are in the [README](https://github.com/brenopolanski/pixen#build). The App Store version does not need this.

### Internet on first run

Pixen loads the editor engine from `cdn.unlayer.com`, so the first launch needs an internet connection. Saving, screenshots, and the clipboard stay on your Mac after that.

### Menu bar

| Item              | Action                              |
| ----------------- | ----------------------------------- |
| `Take Screenshot` | Capture into a tab (<kbd>⌘⇧9</kbd>) |
| `Start at Login`  | Toggle launch at login              |
| `About Pixen`     | Open the About window               |
| `Quit Pixen`      | Quit while guarding unsaved work    |

A capture from the menu bar uses the same session as one from the window, so it replaces a clean tab and opens a new one next to a dirty one.

### Keyboard shortcuts

| Shortcut       | Action                          |
| -------------- | ------------------------------- |
| <kbd>⌘S</kbd>  | Save                            |
| <kbd>⌘⇧S</kbd> | Save As                         |
| <kbd>⌘O</kbd>  | Open an image                   |
| <kbd>⌘V</kbd>  | Open the image on the clipboard |
| <kbd>⌘⇧C</kbd> | Copy the image to the clipboard |
| <kbd>⌘⇧A</kbd> | Arrow                           |
| <kbd>⌘⇧P</kbd> | Pixelize                        |
| <kbd>⌘⇧N</kbd> | Numbered steps                  |
| <kbd>⌘⇧B</kbd> | Remove background               |
| <kbd>⌘⇧9</kbd> | Take a screenshot from any app  |
| <kbd>⌘,</kbd>  | Open Settings                   |
| <kbd>⌘?</kbd>  | Open keyboard shortcuts         |
| <kbd>⌘Q</kbd>  | Quit, guarding unsaved work     |
| <kbd>⌘W</kbd>  | Close the About window          |
| `Escape`       | Close the About window          |

<kbd>⌘⇧9</kbd> is registered system-wide, so it can capture while another app is in front. Change it in **Settings → Capture screenshot**. A custom shortcut must include <kbd>⌘</kbd>, and Pixen rejects ones it already uses, including Save, Copy Image, the tool shortcuts, and Quit.

## Frequently Asked Questions {#faq}

#### Is it free?

The App Store version is paid. The source is free. There is no downloadable `.dmg`. You build it with `pnpm tauri:build`.

#### macOS says the app is damaged or from an unidentified developer {#gatekeeper}

That is Gatekeeper on the unsigned `.dmg` you build. Right-click the app → **Open** and confirm. This is a one-time step. The App Store version is signed and opens normally.

#### Does it work offline?

Mostly. The editor engine is loaded from `cdn.unlayer.com` on first launch, so that run needs a connection. Saving, screenshots, and the clipboard are all local.

#### Where do my images go? {#privacy}

Nowhere. Pixen reads and writes files on your Mac. There is no account, no upload, and no telemetry. Background removal runs a local model, so that image never leaves the machine either. The [privacy policy](/apps/pixen/privacy-policy) has the short version.

#### Why does `⌘⇧9` ask for Accessibility permission? {#accessibility}

The shortcut is registered system-wide so it can fire while another app is in front. During development macOS may ask for Accessibility permission so the terminal can register it. A released build asks for screen recording permission the first time you capture.

#### Can I undo a mosaic or an arrow?

No. Those tools flatten the image, the same way a save does, so the editor's undo history goes with them. The document survives — the save path and file name stay, so <kbd>⌘S</kbd> still writes where it wrote before.

#### Why isn't drag and drop a normal web drop zone? {#drop}

Tauri intercepts file drops before the webview sees them, so `dragover` and `drop` never fire. Pixen listens to the window's drop event instead and takes the first PNG, JPEG, or WebP. See [how it works](https://github.com/brenopolanski/pixen/blob/main/docs/how-it-works.md).

#### Can you support Windows or Linux? {#platforms}

Not today. Screen capture goes through macOS's own `screencapture`, and the menu bar behavior is macOS-specific. Both would need a native equivalent first.

#### What is the license? {#license}

Pixen is licensed under **AGPL-3.0**. Third-party pieces keep their own terms: [`@unlayer/react-image-editor`](https://github.com/unlayer/react-image-editor) is MIT, and [`@imgly/background-removal`](https://github.com/imgly/background-removal-js) is AGPL-3.0.

#### How is it built? {#stack}

Tauri 2 for the native shell, React 19 + TypeScript + Vite for the UI, Tailwind CSS with shadcn/ui, and [`@unlayer/react-image-editor`](https://github.com/unlayer/react-image-editor) as the editing engine. The details, and why encoding lives in Rust, are in [how it works](https://github.com/brenopolanski/pixen/blob/main/docs/how-it-works.md).

#### Can you add a feature?

Open an issue or a pull request on [GitHub](https://github.com/brenopolanski/pixen/issues).
