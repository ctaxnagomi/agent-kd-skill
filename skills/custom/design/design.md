---
title: Design
id: custom-design
role: custom
category: design-system
platform: universal
description: "UI/UX design system — skewed glass cards, neon border-trace buttons, translucent iOS aesthetic with per-category color gradients."
---

# Design — Skewed Glass + Neon Border System

## Overview

A unified design system combining:
1. **Skewed glass cards** — translucent panels with floating orbs and per-category color gradients
2. **Neon border-trace buttons** — animated border lines that chase clockwise, with glow on hover

Both systems use the same accent token `#0AF700` for consistency.

---

## Component 1: Skewed Glass Cards

### Architecture

```
.skill-card           ← relative wrapper, no padding
  ::before            ← skewed solid gradient (z:0)
  ::after             ← skewed blurred glow (z:0, opacity:0.5)
  .card-orb-top       ← floating glass sphere (top-left)
  .card-orb-bottom    ← floating glass sphere (bottom-right)
  .card-content       ← frosted glass content panel (z:2)
```

### Color Tokens (per category)

| Category   | Gradient                                    |
|------------|---------------------------------------------|
| plan       | `linear-gradient(315deg, #0AF700, #023A00)` |
| build      | `linear-gradient(315deg, #ABFFA7, #07AE00)` |
| compact    | `linear-gradient(315deg, #8FBA92, #14301A)` |
| capability | `linear-gradient(315deg, #00D237, #023A00)` |
| sub        | `linear-gradient(315deg, #56FFC0, #07AE00)` |
| deep       | `linear-gradient(315deg, #9BFF5A, #023A00)` |
| micro      | `linear-gradient(315deg, #4DD8FF, #07AE00)` |
| custom     | `linear-gradient(315deg, #FFB347, #FF6B00)` |

### Interaction States

- **Default**: skewed 12deg, orbs hidden, content padding tight
- **Hover**: skew 0deg, panels expand, orbs fade in + grow, content padding increases
- **Active**: `scale(0.97)` on content panel
- **Reduced motion**: all transitions and animations disabled

### Content Panel

- `backdrop-filter: blur(16px) saturate(1.3)`
- `background: rgba(10, 18, 11, 0.55)`
- `border: 1px solid rgba(10, 247, 0, 0.08)`
- `border-radius: 8px`

### Usage

```html
<article class="skill-card" data-role="plan">
  <span class="card-orb card-orb-top"></span>
  <span class="card-orb card-orb-bottom"></span>
  <div class="card-content">
    <!-- card contents -->
  </div>
</article>
```

---

## Component 2: Neon Border-Trace Buttons

### Architecture

```
.btn                  ← relative, overflow hidden, no border
  span:nth-child(1)   ← top border line (left → right)
  span:nth-child(2)   ← right border line (top → bottom)
  span:nth-child(3)   ← bottom border line (right → left)
  span:nth-child(4)   ← left border line (bottom → top)
```

### Token

| Token              | Value                              |
|--------------------|------------------------------------|
| accent-bright      | `#0AF700`                          |
| btn-border-speed   | `1.5s linear infinite`             |
| btn-glow-hover     | `0 0 5px, 0 0 20px, 0 0 40px`     |

### Border Animation

Four `<span>` elements positioned absolutely, each rendering one edge as a 1.5px gradient line. They animate sequentially with 0.375s delay offsets, tracing clockwise around the button perimeter.

| Edge    | Direction        | Keyframe         | Delay    |
|---------|------------------|------------------|----------|
| top     | left → right     | `btn-border-top`    | 0s       |
| right   | top → bottom     | `btn-border-right`  | 0.375s   |
| bottom  | right → left     | `btn-border-bottom` | 0.75s    |
| left    | bottom → top     | `btn-border-left`   | 1.125s   |

### Interaction States

- **Default**: transparent bg, neon-green text, border traces animate
- **Hover**: bg fills `#0AF700`, text inverts to `#010502`, triple-layer box-shadow glow, `-webkit-box-reflect` below
- **Active**: `scale(0.97)`
- **Reduced motion**: `span { animation: none; }`

### Usage

```html
<button class="btn">
  <span></span><span></span><span></span><span></span>
  Click me
</button>

<a href="#" class="btn btn-primary">
  <span></span><span></span><span></span><span></span>
  Download
</a>
```

Every `.btn` requires exactly 4 empty `<span>` children for the border-trace animation. Content goes after the spans as normal text.

