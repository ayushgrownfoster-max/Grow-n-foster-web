# Design System & Specification: Home - Inspired Layout Redesign (Updated)

This document details the extracted design tokens, typography specifications, ambient backdrop visuals, and component layout structure extracted **strictly** from the **"Home - Inspired Layout Redesign"** screen (`projects/4979649914788240563/screens/93824d9d76904dc2ae9931eb5a2e98ff`) of the **Modern Digital Agency Website** project.

---

## 1. Brand Identity & Theme Specifications

- **Brand Name**: Grow 'n' Foster (GNF)
- **Theme**: Dark Mode High-Contrast Modern Digital Agency / Verdant Aura System
- **Design Theme Font Standard**:
  - **Headline & Display Font**: `Hanken Grotesk` (weights 400, 500, 600, 700, 800, black)
  - **Body Font**: `Hanken Grotesk` / `Inter`
  - **Monospace Technical & Label Font**: `JetBrains Mono`
- **Key Visual Elements**:
  - **Ambient Radial Back-Glow**: `radial-gradient(circle at 50% 30%, rgba(188, 206, 135, 0.15), rgba(75, 90, 32, 0.08), transparent)`
  - **Grid Overlay Pattern**: 60px subtle 1px opacity square grid overlay (`bg-grid-pattern`).
  - **Glassmorphism**: Backdrop blur with subtle white border opacity (`backdrop-filter: blur(20px)`, `border: 1px solid rgba(255, 255, 255, 0.1)`).
  - **Green Glow**: Soft outer luminescence (`box-shadow: 0 0 60px -10px rgba(188, 206, 135, 0.25)`).
  - **Vibrant Gradient Text**: Lime-to-forest multi-stop gradient (`linear-gradient(135deg, #bcce87 0%, #a3b86c 50%, #4b5a20 100%)`).

---

## 2. Updated Design Tokens

### Color Palette

| Token Name | Hex Code | Usage |
| :--- | :--- | :--- |
| `background` / `surface` / `surface-dim` | `#131313` | Main canvas dark background |
| `primary` / `surface-tint` | `#bcce87` | Lime accent for highlights, active tabs, buttons |
| `primary-container` | `#4b5a20` | Deep forest green container fill |
| `on-primary` | `#283500` | Dark text on primary lime background |
| `on-primary-container` | `#bfd189` | Light lime text for container buttons |
| `secondary` | `#dbc765` | Warm gold accent |
| `surface-container-lowest` | `#0e0e0e` | Deepest surface background |
| `surface-container-low` | `#1c1b1b` | Cards & secondary modules |
| `surface-container` | `#201f1f` | Input containers & forms |
| `surface-container-high` | `#2a2a2a` | Elevated testimonial cards |
| `surface-container-highest` | `#353534` | Arch card bottom containers |
| `on-surface` | `#e5e2e1` | Primary text color |
| `on-surface-variant` | `#c6c8b8` | Subdued secondary body text |

### Typography Scale

- **Display Headline**: `Hanken Grotesk`, 5xl/7xl/8xl, Weight 800/900, Line-height 1.08, Letter-spacing -0.03em
- **Section Headline**: `Hanken Grotesk`, 4xl/5xl, Weight 700/800, Line-height 1.2
- **Body Large**: `Hanken Grotesk` / `Inter`, 18px-20px, Line-height 1.6, Weight 400
- **Technical & Eyebrow Label**: `JetBrains Mono`, 12px-14px, Letter-spacing 0.1em (widest), Uppercase, Weight 500/600
- **Iconography**: `Material Symbols Outlined`

---

## 3. Structural Layout Hierarchy

```
1. Fixed Glassmorphism Navigation Bar
   ├── Brand Logo ("Grow 'n' Foster")
   ├── Monospaced Navigation Links (HOME, SERVICES, PORTFOLIO, ABOUT US)
   └── CTA Action Button ("GET STARTED")

2. Hero Section (Ambient Glow + Grid Overlay)
   ├── Monospaced Pulsing Trust Badge ("TRUSTED BY 200+ BUSINESSES WORLDWIDE")
   ├── Display Headline ("Attract Potential Customers with Targeted Marketing")
   ├── Subtitle Narrative in Hanken Grotesk
   ├── Action Button Group ("Free Consultation" [Primary Pill] + "Explore Services" [Video Play Link])
   ├── Impact Metrics Grid (+28.5% Conversion Growth, 150+ Successful Projects)
   └── Floating Animated Hero Workspace Card with Green Luminescence Glow

3. Our Exclusive Services Section
   ├── Section Eyebrow ("OUR SERVICES") & Headline
   └── 4-Column Service Grid (Arch Top Image [rounded-t-140px] + Arch Bottom Card [rounded-b-140px])

4. Why Choose Us Section
   ├── Section Eyebrow ("WHY CHOOSE US") & Headline
   ├── Left: High-Glow Portrait Image
   └── Right: Monospaced Interactive Tabs (Our Mission / Our Vision / Our Value) + Percentage Progress Bars

5. Work Process Section
   └── 4-Step Linear Flow Grid with numeric highlights & connector arrows

6. Featured Portfolio Section
   └── 4-Column Portfolio Grid with hover scale effects

7. Testimonials Section ("Voices of Trust")
   └── 3-Column Quote Card Grid with offset elevation

8. Final Strategy Call-to-Action Section
   └── Glassmorphism Strategy Card + Email Registration Form

9. Global Footer
   └── Brand Overview, Monospaced Category Links, Contact Info, and Copyright
```
