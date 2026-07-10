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
      {/* 3D Blue Diamond (Top) */}
      {/* Left side: Royal Blue */}
      <path
        d="M50 15 L25 40 L50 65 Z"
        fill="#1E51C7"
      />
      {/* Right side: Darker Navy Blue */}
      <path
        d="M50 15 L50 65 L75 40 Z"
        fill="#13388E"
      />

      {/* 3D Grey Chevron (Bottom) */}
      {/* Left side: Light Cool Grey */}
      <path
        d="M50 70 L25 45 L25 63 L50 88 Z"
        fill="#949AA5"
      />
      {/* Right side: Darker Cool Grey */}
      <path
        d="M50 70 L50 88 L75 63 L75 45 Z"
        fill="#7A808C"
      />
    </svg>
  );
}
