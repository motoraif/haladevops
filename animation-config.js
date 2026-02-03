// Animation Configuration
// Set to true/false to enable/disable features

const ANIMATION_CONFIG = {
    // Loading & Page Effects
    loadingScreen: true,
    typingEffect: true,
    parallaxHero: true,
    animatedGradient: true,
    
    // Navigation
    autoHideNavbar: true,
    dynamicNavbarShadow: true,
    
    // Card Animations
    cardStaggerAnimation: false,
    card3DTilt: false,
    cardHoverLift: true,
    
    // Icon Effects
    floatingIcons: false,
    iconHoverScale: false,
    
    // Button Effects
    buttonRipple: true,
    buttonPulse: true,
    
    // Counter & Stats
    animatedCounters: true,
    
    // Cursor Effects
    cursorTrail: false, // DISABLED
    
    // Scroll Animations
    scrollReveal: true,
    
    // Timing (in milliseconds)
    loadingDelay: 500,
    typingSpeed: 50,
    cardStaggerDelay: 100,
    gradientSpeed: 50
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ANIMATION_CONFIG;
}
