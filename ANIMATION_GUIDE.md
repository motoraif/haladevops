# Animation Configuration Guide

## How to Enable/Disable Animations

Edit `animation-config.js` and set features to `true` or `false`:

```javascript
const ANIMATION_CONFIG = {
    loadingScreen: true,      // Show loading spinner on page load
    typingEffect: true,       // Typing animation for hero title
    parallaxHero: true,       // Parallax scrolling effect on hero
    animatedGradient: true,   // Rotating gradient background
    
    autoHideNavbar: true,     // Hide navbar when scrolling down
    dynamicNavbarShadow: true, // Change navbar shadow on scroll
    
    cardStaggerAnimation: true, // Cards appear one by one
    card3DTilt: true,         // 3D tilt effect on hover
    cardHoverLift: true,      // Cards lift up on hover
    
    floatingIcons: true,      // Tech icons float up and down
    iconHoverScale: true,     // Icons scale on hover
    
    buttonRipple: true,       // Ripple effect on button click
    buttonPulse: true,        // Pulse animation on button hover
    
    animatedCounters: true,   // Numbers count up animation
    
    cursorTrail: false,       // Cursor trail effect (DISABLED)
    
    scrollReveal: true,       // Elements fade in on scroll
};
```

## Timing Adjustments

You can also adjust animation speeds:

```javascript
loadingDelay: 500,        // Loading screen duration (ms)
typingSpeed: 50,          // Typing effect speed (ms per character)
cardStaggerDelay: 100,    // Delay between card animations (ms)
gradientSpeed: 50         // Gradient rotation speed (ms)
```

## Examples

### Disable All Animations
Set all values to `false`

### Minimal Animations
```javascript
loadingScreen: false,
typingEffect: false,
parallaxHero: false,
animatedGradient: false,
autoHideNavbar: false,
cardStaggerAnimation: true,  // Keep this
scrollReveal: true,          // Keep this
// ... rest false
```

### Maximum Performance
```javascript
// Disable heavy animations
animatedGradient: false,
parallaxHero: false,
card3DTilt: false,
cursorTrail: false,
```

## After Making Changes

1. Save `animation-config.js`
2. Commit and push:
   ```bash
   git add animation-config.js
   git commit -m "Update animation settings"
   git push
   ```
3. Wait 2-3 minutes for GitHub Pages to update

## Recommended Settings

**For Best Performance:**
- Disable: `animatedGradient`, `parallaxHero`, `cursorTrail`
- Keep: Everything else

**For Minimal Look:**
- Enable only: `scrollReveal`, `cardHoverLift`, `dynamicNavbarShadow`

**For Maximum Impact:**
- Enable everything except `cursorTrail`
