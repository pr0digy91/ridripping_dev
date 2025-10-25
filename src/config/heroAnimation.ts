// Hero animation configuration
export const HERO_ANIMATION_OPACITY = 0.35;

// Number of floating bubbles (adjustable from 10 to 80) - Now dynamically generated in Hero component
export const BUBBLE_COUNT = 35; // Current: 15 bubbles, can be increased to 80

// Physics-based floating speeds (pixels per frame)
export const PHYSICS_SPEEDS = {
  verySlow: { upward: -0.5, horizontal: 0.3 },
  slow: { upward: -0.8, horizontal: 0.5 },
  medium: { upward: -1.2, horizontal: 0.8 },
  fast: { upward: -1.8, horizontal: 1.2 },
  veryFast: { upward: -2.5, horizontal: 1.8 },
  ultraFast: { upward: -3.5, horizontal: 2.5 }
};

// Default physics speed
export const DEFAULT_PHYSICS_SPEED = PHYSICS_SPEEDS.verySlow;

// Bounce speed (restitution) - how bouncy collisions are (0.1 = soft, 1.0 = very bouncy)
export const BOUNCE_SPEED = 0.2;

// Bubble radius range (in pixels)
export const LOWER_RADIUS = 24; // Minimum bubble size
export const HIGHER_RADIUS = 120; // Maximum bubble size

// Random horizontal movement range (in pixels)
export const HORIZONTAL_MOVEMENT_RANGE = 100; // Max horizontal drift in pixels