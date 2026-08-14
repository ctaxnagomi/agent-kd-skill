---
{
  "name": "html2canvas",
  "description": "Pixel screenshot capability using html2canvas. Renders the live DOM to a canvas and exports it as an image. Use when a true pixel-accurate screenshot of a complex rendered page is required — not for archiving, text preservation, or editing."
}
---

# html2canvas method

A capability that captures a rendered web page as a pixel image using html2canvas, the classic DOM-to-canvas library.

## Use case

Use this skill when a task involves:

- Producing a pixel-accurate image of a rendered page or component (for shares, cards, preview thumbnails).
- Screenshotting complex CSS renders (gradients, transforms, custom fonts) that a plain screenshot may miss.
- Generating exportable image assets of UI states.
- When the deliverable is an image, not an editable page.

Use snapDOM instead when you want a lightweight, searchable, editable page — html2canvas cannot produce that.

## Limitations to know

- Renders from the DOM, so it can approximate — cross-origin images, some CSS (e.g. certain blend modes, `box-shadow` edge cases) and `color-mix`/modern properties may not render faithfully.
- External images must be same-origin or CORS-enabled or they taint the canvas.
- Output is a raster; text is no longer selectable or searchable.
- Large pages produce large images; consider a scale option to keep size sane.

## Workflow

1. **Stabilize** — Wait for fonts, images, and layout to settle before capturing.
2. **Scope** — Capture the target element, not the whole page, unless the full page is the goal.
3. **Configure** — Set `scale` for crispness, `backgroundColor` for a defined backdrop, and `useCORS` when external images are permitted.
4. **Export** — Convert the canvas to the desired format (PNG default, JPEG for photos), then download or pass onward.
5. **Verify** — Open the image and check that text, layout, and images rendered correctly.

## Example

```js
import html2canvas from "html2canvas";
const canvas = await html2canvas(document.getElementById("card"), {
  scale: 2,
  useCORS: true,
  backgroundColor: "#010502"
});
const link = document.createElement("a");
link.download = "card.png";
link.href = canvas.toDataURL("image/png");
link.click();
```

## Rules

- Always wait for content to be ready before capturing.
- Prefer element-scoped capture over full-page when only a region is needed.
- Set an explicit background color; transparent canvases confuse later stages.
- Verify the output — silently broken images are the #1 failure mode.

## Quality gates

- The exported image reflects the on-screen render closely.
- Text is legible, images loaded, and dimensions are correct.
- File size is reasonable for the chosen scale and format.
