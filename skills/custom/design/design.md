---
title: Design
id: custom-design
role: custom
category: design-system
platform: universal
description: "UI/UX design capability — skewed glass card system with translucent iOS aesthetic and per-category color gradients."
---

# Design — Skewed Glass Card System

## Overview

A card-based design system that uses skewed translucent glass panels, floating orbs, and category-specific color gradients. Each card has two pseudo-element layers (solid + blur glow) that unskew on hover, creating a reveal effect. Content sits in a frosted glass panel centered between the layers.

## Architecture

```
.skill-card           ← relative wrapper, no padding
  ::before            ← skewed solid gradient (z:0)
  ::after             ← skewed blurred glow (z:0, opacity:0.5)
  .card-orb-top       ← floating glass sphere (top-left)
  .card-orb-bottom    ← floating glass sphere (bottom-right)
  .card-content       ← frosted glass content panel (z:2)
```

## Color Tokens (per category)

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

## Interaction States

- **Default**: skewed 12deg, orbs hidden, content padding tight
- **Hover**: skew 0deg, panels expand to full width, orbs fade in + grow, content padding increases
- **Active/Click**: `scale(0.97)` on content panel
- **Reduced motion**: all transitions and animations disabled

## Floating Orbs

- Two per card: top-left and bottom-right
- Background: `rgba(255,255,255,0.08)` with `backdrop-filter: blur(10px)`
- Animate on `card-float` keyframe: 3s ease-in-out infinite, offset by 1.5s
- Grow from 60px to 80px on hover

## Content Panel

- `backdrop-filter: blur(16px) saturate(1.3)`
- `background: rgba(10, 18, 11, 0.55)`
- `border: 1px solid rgba(10, 247, 0, 0.08)`
- `border-radius: 8px`
- Box shadow: `0 8px 32px rgba(0,0,0,0.3)` + inset top highlight

## Usage

Cards use `data-role` attribute matching the category key to apply the correct gradient via CSS attribute selectors. No per-card inline styles needed.

```html
<article class="skill-card" data-role="plan">
  <span class="card-orb card-orb-top"></span>
  <span class="card-orb card-orb-bottom"></span>
  <div class="card-content">
    <!-- card contents -->
  </div>
</article>
```
