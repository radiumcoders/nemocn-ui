// Import necessary dependencies
import { Link, useLocation } from "@tanstack/react-router"; // Router components for navigation and location tracking
import { cn } from "@/lib/utils"; // Utility function for conditional class names
import { ComponentPropsWithoutRef, useState, useEffect } from "react"; // React hooks and types
import { Menu, X } from "lucide-react"; // Menu icon component
import { motion } from "motion/react"; // Animation library for smooth transitions
import { div } from "motion/react-client";

/**
 * Main Navbar component that provides navigation across the application
 * Features:
 * - Responsive design (desktop and mobile versions)
 * - Active state management with visual indicators
 * - Smooth animations for active state transitions
 * - Route-aware highlighting (syncs with current page)
 */
function Navbar() {
  // Create a motion-enabled Link component for smooth animations
  const MotionLink = motion(Link);
  
  // Define navigation items with their display names and routes
  const navitems = [
    { name: "Home", path: "/" },
    { name: "Getting Started", path: "/getting-started" },
    { name: "Components", path: "/components" },
  ];

  // Get current location/route from TanStack Router
  const location = useLocation();
  
  // State to track which navigation item is currently active
  // Initially set to the first item (Home)
  const [active, setActive] = useState(navitems[0].name);

  const [isOpen, setIsOpen] = useState(false)
  // Effect to sync active state with current route
  // This ensures the correct nav item is highlighted even after page refresh
  useEffect(() => {
    const currentItem = navitems.find(item => item.path === location.pathname);
    if (currentItem) {
      setActive(currentItem.name);
    }
  }, [location.pathname]); // Re-run when pathname changes

  return (
    <div>
      {/* Desktop Navigation Bar */}
      <div
        className={cn(
          // Background with transparency, high z-index for layering, shadow and border styling
          "bg-background/60 relative z-[9999999] shadow-xl ring-2 ring-neutral-800/70",
          // Layout: centered, full width with max constraint, flexbox with spacing, rounded pill shape
          "mx-auto mt-2 flex w-full max-w-xl items-center justify-between gap-4 rounded-[9999px] p-4",
          // Responsive: hidden on mobile, visible on medium screens and up
          "hidden md:flex",
        )}
      >
        {/* Logo component on the left side */}
        <Logo />
        
        {/* Navigation links container */}
        <div className="flex gap-2">
          {navitems.map((item, index) => (
            // Animated navigation link with motion capabilities
            <MotionLink
              className="relative rounded-xl px-2 py-1" // Relative positioning for absolute children, padding and border radius
              to={item.path} // Route destination
              key={index}
              onClick={() => setActive(item.name)} // Update active state on click
            >
              {/* Animated background indicator for active state */}
              {active === item.name && (
                <motion.div
                  layoutId="navbar-link" // Shared layout ID for smooth transitions between active states
                  className="absolute inset-0 z-0 h-full w-full bg-neutral-50" // Full coverage background
                  style={{ borderRadius: "9999px" }} // Pill-shaped background
                  transition={{ duration: 0.6 , type: "spring"}} // Spring animation with 0.6s duration
                />
              )}
              {/* Link text with conditional styling */}
              <span className={cn(
                "mix-blend-exclusion", // Blend mode for text visibility over background
                active === item.name ? "" : "hover:text-primary/70" // Hover effect only for inactive items
              )}>
                {item.name}
              </span>
            </MotionLink>
          ))}
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <HamburgurMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default Navbar;

// Type definition for HamburgurMenu props, extending standard div props
interface HamburgurMenuProps extends ComponentPropsWithoutRef<"div"> {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

/**
 * Mobile navigation menu component
 * Displays a simplified header with logo and hamburger menu icon
 * Only visible on mobile devices (hidden on desktop)
 */
const HamburgurMenu = ({ isOpen, setIsOpen, ...props }: HamburgurMenuProps) => {
  return (
    <div
      {...props} // Spread any additional props passed to the component
      className={cn(
        // Background styling and layout
        "bg-background/60 flex items-center justify-between",
        // Positioning, spacing, and responsive visibility (hidden on medium+ screens)
        "relative z-10 mb-4 w-full p-4 md:hidden",
        props.className, // Allow className override from props
      )}
    >
      {/* Logo on the left side */}
      <Logo />
      {/* Hamburger menu icon on the right side */}
      <HamburgurSVG isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

/**
 * Hamburger menu icon component
 * Simple wrapper around the Menu icon from Lucide React
 */
interface HamburgurSVGProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const HamburgurSVG = ({ isOpen, setIsOpen }: HamburgurSVGProps) => {
  const MotionMenu = motion(Menu);
  const MotionX = motion(X);
  
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <MotionX 
          initial={{ rotate: 45, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
        />
      ) : (
        <MotionMenu 
          initial={{ rotate: 0, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
        />
      )}
    </div>
  );
};

/**
 * Logo component used in both desktop and mobile navigation
 * Displays the application logo with consistent styling
 */
const Logo = () => {
  return (
    <div className="rounded-xl bg-neutral-50 p-1"> {/* Container with rounded corners, light background, and padding */}
      <img className="h-8" src="/nemocn.svg" alt="logo" /> {/* Logo image with fixed height */}
    </div>
  );
};
