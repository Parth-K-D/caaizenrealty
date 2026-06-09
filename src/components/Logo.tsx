import React from "react";

interface LogoProps {
  variant?: "full" | "small" | "text" | "light";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "auto";
}

/**
 * Caaizen Realty Logo (CΛΛIZEN REALTY)
 * High-fidelity vector SVG matching the supplied logo image.
 * Uses the two "A"s (carets) for the small version.
 * Custom built for dark & light background contrast.
 */
export default function Logo({ variant = "full", className = "", size = "auto" }: LogoProps) {
  // Determine width/height classes based on simple size prop
  let sizeClass = "";
  if (size === "sm") {
    sizeClass = variant === "small" ? "w-8 h-6" : "w-28 h-10";
  } else if (size === "md") {
    sizeClass = variant === "small" ? "w-12 h-9" : "w-36 h-14";
  } else if (size === "lg") {
    sizeClass = variant === "small" ? "w-20 h-15" : "w-56 h-22";
  } else if (size === "xl") {
    sizeClass = variant === "small" ? "w-32 h-24" : "w-72 h-28";
  }

  // Exact brand colors derived from image logo adjusted for beautiful legibility on deep dark client bg's
  const greenColor = "#159A1D"; // Vibrant rich green
  const lightBlueColor = "#007F9E"; // Light blue caret
  const navyColor = "#0C2440"; // Dark blue navy
  const darkBgNavyColor = "#77AAFF"; // Adjusted brighter navy for dark background visibility

  if (variant === "small") {
    return (
      <svg
        viewBox="0 0 100 70"
        className={`inline-block select-none ${sizeClass} ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="caaizen-logo-small"
      >
        {/* Short Left Caret (A) - Light Blue */}
        <polygon
          points="8,55 24,18 36,18 20,55"
          fill={lightBlueColor}
        />
        <polygon
          points="20,55 36,18 48,18 32,55"
          fill={lightBlueColor}
        />

        {/* Tall Right Caret (A) - Dark/Brightened Blue */}
        {/* Double layered polygon to handle dark contrast beautifully */}
        <polygon
          points="40,55 58,5 72,5 54,55"
          className="fill-[var(--logo-navy,#5B8CD0)] dark:fill-[#5B8CD0] md:fill-[var(--logo-navy,#5D95EB)]"
          fill={darkBgNavyColor}
        />
        <polygon
          points="54,55 72,5 86,5 68,55"
          className="fill-[var(--logo-navy,#5B8CD0)] dark:fill-[#5B8CD0] md:fill-[var(--logo-navy,#5D95EB)]"
          fill={darkBgNavyColor}
        />
      </svg>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center select-none ${sizeClass} ${className}`} id="caaizen-logo-full">
      <svg
        viewBox="0 0 450 160"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* --- MAIN BRAND NAME (CΛΛIZEN) --- */}
        {/* Letter C (Vibrant Green) */}
        <path
          d="M 68,48 C 58,48 48,56 48,72 C 48,88 58,96 68,96 C 75,96 80,91 82,88 M 84,85"
          stroke={greenColor}
          strokeWidth="12.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Left Caret Peak (A) (Light Blue) */}
        <g>
          <polygon points="94,96 112,48 123,48 105,96" fill={lightBlueColor} />
          <polygon points="105,96 123,48 134,48 116,96" fill={lightBlueColor} />
        </g>

        {/* Right Caret Peak (A) (Navy / Sky Blue on Dark) */}
        <g>
          {/* We use a class variable with a fallback to make sure it looks incredibly clean on the dark app UI */}
          <polygon 
            points="136,96 156,32 168,32 148,96" 
            fill={darkBgNavyColor} 
            className="fill-[var(--logo-navy,#5B8CD0)]"
          />
          <polygon 
            points="148,96 168,32 180,32 160,96" 
            fill={darkBgNavyColor} 
            className="fill-[var(--logo-navy,#5B8CD0)]"
          />
        </g>

        {/* Lighter or vivid green letters: I Z E N */}
        {/* Letter I */}
        <rect x="189" y="48" width="11" height="48" rx="2" fill={greenColor} />

        {/* Letter Z */}
        <path
          d="M 212,54 C 212,50 214,48 218,48 L 244,48 C 248,48 250,51 248,54 L 216,90 C 214,93 216,96 220,96 L 246,96 C 251,96 253,94 253,90"
          stroke={greenColor}
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Letter E */}
        <path
          d="M 292,50 L 268,50 L 268,94 L 292,94 M 268,72 L 286,72"
          stroke={greenColor}
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Letter N */}
        <path
          d="M 306,94 L 306,50 L 334,94 L 334,50"
          stroke={greenColor}
          strokeWidth="11.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* --- SUBTITLE (R E A L T Y) --- */}
        <text
          x="225"
          y="136"
          textAnchor="middle"
          fill={darkBgNavyColor}
          className="fill-[var(--logo-navy,#6F9FE3)] font-sans font-black tracking-[1.1em] uppercase"
          style={{
            fontSize: "27px",
            fontWeight: 800,
            letterSpacing: "0.9em",
            fontFamily: "Inter, system-ui, sans-serif"
          }}
        >
          REALTY
        </text>
      </svg>
    </div>
  );
}
