import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = '', size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none ${className}`}
    >
      <defs>
        {/* Metallic Bezel Gradient (Silver/Chrome) */}
        <linearGradient id="metalBezel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#d1d5db" />
          <stop offset="50%" stopColor="#9ca3af" />
          <stop offset="75%" stopColor="#e5e7eb" />
          <stop offset="100%" stopColor="#4b5563" />
        </linearGradient>

        {/* Inner Metallic Chevron Gradient */}
        <linearGradient id="metalChevron" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#e2e8f0" />
          <stop offset="70%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>

        {/* Royal Blue Shield Core Gradient */}
        <linearGradient id="royalBlue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="40%" stopColor="#1d4ed8" />
          <stop offset="80%" stopColor="#111827" />
          <stop offset="100%" stopColor="#0B132B" />
        </linearGradient>

        {/* Glossy Overlay Gradient */}
        <linearGradient id="gloss" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.2" />
        </linearGradient>

        {/* Soft 3D drop shadow */}
        <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Main Shield Path (Outer Silver Bezel) */}
      <path
        d="M50 6 C69 6 85 12 87 23 C87 55 69 85 50 95 C31 85 13 55 13 23 C15 12 31 6 50 6 Z"
        fill="url(#metalBezel)"
        filter="url(#logoShadow)"
      />

      {/* Inner Shield (Slightly smaller, filled with Royal Blue Gradient) */}
      <path
        d="M50 10.5 C66 10.5 80.5 15.5 82 25 C82 52.5 66 79 50 88 C34 79 18 52.5 18 25 C19.5 15.5 34 10.5 50 10.5 Z"
        fill="url(#royalBlue)"
      />

      {/* Metallic Chevron V Shape (Fits beautifully inside the blue core) */}
      {/* Side 1 (Left Wing) */}
      <path
        d="M26 29 L50 53 L74 29 L74 41 L50 65 L26 41 Z"
        fill="url(#metalChevron)"
      />

      {/* Top Center Infill Divider (giving it a 3D faceted shield look) */}
      <path
        d="M50 10.5 L50 88"
        stroke="#ffffff"
        strokeOpacity="0.12"
        strokeWidth="1.5"
      />

      {/* Left-Half Highlight Overlay to mimic the 3D matte reflection on left facet */}
      <path
        d="M50 10.5 C34 19 18 45.5 18 25 C19.5 15.5 34 10.5 50 10.5 Z"
        fill="#ffffff"
        opacity="0.04"
      />

      {/* Highlight glow on outer rim */}
      <path
        d="M50 6 C69 6 85 12 87 23"
        stroke="#ffffff"
        strokeOpacity="0.25"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
