---
title: Pixen
subtitle: Capture, edit, and refine screenshots on your Mac.
pubDate: '2026-09-23'
platforms:
  - macOS
requirement: Requires macOS 10.15 or later
priceLabel: Paid or free
isMenuBarApp: true
repoUrl: https://github.com/brenopolanski/pixen
mainLinks:
  'Apple': https://apps.apple.com
links:
  'GitHub': https://github.com/brenopolanski/pixen
  'Support': https://github.com/brenopolanski/pixen/issues
  'Privacy Policy': /apps/pixen/privacy-policy
  'Terms': /apps/terms?from=pixen
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

Create step-by-step guides directly on your screenshots.

Click each location, and Pixen automatically numbers the markers.

![Add numbered steps to screenshots](/apps/pixen/demo-feature-numbered-steps.png)

### Hide Private Information

Protect sensitive information before sharing a screenshot.

Pixelate addresses, tokens, faces, and other private data by simply dragging a box over it.

![Pixelate private information](/apps/pixen/demo-feature-pixelize.png)

### Remove Backgrounds

Remove the background with a local segmentation model.

The result is previewed before it is applied, and the image never leaves your Mac.

![Remove image backgrounds](/apps/pixen/feature-background-removal.png)

### Menu Bar

Pixen stays in the Dock and adds a menu bar item.

Left-click it to capture. Right-click it to start at login, open About, or quit, without leaving the app you are in.

### Recent Images

Reopen the last ten images from **File → Open Recent**.

### Tabs

Work with multiple images at the same time.

A clean tab can be replaced when opening an image, while a modified tab stays open and a new tab is created.

### Light and Dark mode

Choose between light and dark mode from Settings.

Pixen's interface and image editor follow your preference, which is remembered between launches.

### Export Anywhere

Save your work as PNG, JPEG, or WebP.

Use <kbd>⌘S</kbd> to save and <kbd>⌘⇧S</kbd> to save a new copy. Pixen remembers the destination after the first save.

### Clipboard

Copy your edited screenshot directly to the system clipboard with <kbd>⌘⇧C</kbd>.

---

## Tips

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

| Shortcut          | Action                          |
| ----------------- | ------------------------------- |
| <kbd>⌘S</kbd>     | Save                            |
| <kbd>⌘⇧S</kbd>    | Save As                         |
| <kbd>⌘O</kbd>     | Open an image                   |
| <kbd>⌘V</kbd>     | Open the image on the clipboard |
| <kbd>⌘⇧C</kbd>    | Copy the image to the clipboard |
| <kbd>⌘⇧A</kbd>    | Arrow                           |
| <kbd>⌘⇧P</kbd>    | Pixelize                        |
| <kbd>⌘⇧N</kbd>    | Numbered steps                  |
| <kbd>⌘⇧B</kbd>    | Remove background               |
| <kbd>⌘⇧9</kbd>    | Take a screenshot from any app  |
| <kbd>⌘,</kbd>     | Open Settings                   |
| <kbd>⌘?</kbd>     | Open keyboard shortcuts         |
| <kbd>⌘Q</kbd>     | Quit, guarding unsaved work     |
| <kbd>⌘W</kbd>     | Close the About window          |
| <kbd>Escape</kbd> | Close the About window          |

<kbd>⌘⇧9</kbd> is registered system-wide, so it can capture while another app is in front. Change it in **Settings → Capture Screenshot**. A custom shortcut must include <kbd>⌘</kbd>, and Pixen rejects ones it already uses, including Save, Copy Image, the tool shortcuts, and Quit.

## Frequently Asked Questions {#faq}

#### Is it free? {#free}

The App Store version is paid. The source is free. There is no downloadable `.dmg`. You need to build it following the instructions in the [README](https://github.com/brenopolanski/pixen#build) file.

#### macOS says the app is damaged or from an unidentified developer {#gatekeeper}

That is Gatekeeper on the unsigned `.dmg` you build. Right-click the **App → Open** and confirm. This is a one-time step. The App Store version is signed and opens normally.

#### Does it work offline? {#offline}

Mostly. The editor engine is loaded from `cdn.unlayer.com` on first launch, so that run needs a connection. Saving, screenshots, and the clipboard are all local.

#### Where do my images go? {#privacy}

Nowhere. Pixen reads and writes files on your Mac. There is no account, no upload, and no telemetry. Background removal runs a local model, so that image never leaves the machine either. The [privacy policy](/apps/pixen/privacy-policy) has the short version.

#### Why does <kbd>⌘⇧9</kbd> ask for Accessibility permission? {#accessibility}

The shortcut is registered system-wide so it can fire while another app is in front. During development macOS may ask for Accessibility permission so the terminal can register it. A released build asks for screen recording permission the first time you capture.

#### Can I undo pixelize or an arrow? {#undo}

No. Those tools flatten the image, the same way a save does, so the editor's undo history goes with them. The document survives — the save path and file name stay, so <kbd>⌘S</kbd> still writes where it wrote before.

#### Can you support Windows or Linux? {#platforms}

Not today. Screen capture goes through macOS's own `screencapture`, and the menu bar behavior is macOS-specific. Both would need a native equivalent first.

#### Can you add a feature? {#features}

If you have any questions or suggestions, do not hesitate to [contact me](mailto:breno.polanski@gmail.com).

Feel free to create an issue on the [GitHub repository](https://github.com/brenopolanski/pixen/issues) or send a pull request.
