---
version: alpha
name: Home Massage Danang
description: Gentle, elegant design system for a massage service business
colors:
  background: "#F8F7F5"
  surface: "#FFFFFF"
  surfaceRaised: "#F5F5F5"
  text: "#2D2D2D"
  muted: "#6B6B6B"
  border: "#E0E0E0"
  accent: "#5285A4"
  accentLight: "#E6EFF5"
  secondary: "#86AAB9"
typography:
  display:
    fontFamily: "Georgia, serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.01em
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  heading:
    fontFamily: "Georgia, serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.02em
  subheading:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  xxxl: 64px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.xl}"
    padding: 24px
---

## Overview

A gentle, elegant design system for Home Massage Danang - a professional at-home
massage service in Đà Nẵng. The system emphasizes calm, trust, and luxury through
soft colors, editorial typography, and refined whitespace.

## Colors

Use background and surface for page depth, text and muted for hierarchy, border
for quiet separation, and accent for primary actions or data highlights.

## Typography

Display type carries high-emphasis headings. Body type should stay practical and
readable for navigation, tables, controls, and explanatory copy.

## Layout

Use a 12-column desktop rhythm, a two-column tablet rhythm, and a single-column
mobile rhythm. Keep content max widths explicit and avoid accidental horizontal
scroll.

## Elevation & Depth

Prefer tonal separation and fine borders before large shadows. Raised surfaces
should feel attached to the system, not floating above it.

## Shapes

Use small radii for controls and medium-to-large radii for panels. Nested
surfaces should never have a larger radius than their parent.

## Components

Primary buttons are direct and high contrast. Cards hold one clear job: status,
record detail, comparison, form group, or content module.

## Do's and Don'ts

Do promote repeated visual choices back into this file. Don't paste transient
task notes, long source files, or unverified brand values here.
