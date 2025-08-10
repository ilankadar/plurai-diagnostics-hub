import React from 'react';

const AnimatedDots = () => {
  // Create an array of 50 hexagons with random positions
  const hexagons = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 4, // Random size between 4-12px
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`, // Random delay for more natural movement
    rotation: Math.random() * 360, // Random rotation for variety
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hexagons.map((hexagon) => (
        <div
          key={hexagon.id}
          className="absolute animate-float"
          style={{
            left: hexagon.left,
            top: hexagon.top,
            width: `${hexagon.size}px`,
            height: `${hexagon.size * 0.866}px`, // Height of a regular hexagon
            animationDelay: hexagon.animationDelay,
            transform: `rotate(${hexagon.rotation}deg)`,
          }}
        >
          <div
            className="w-full h-full bg-gray-300/20"
            style={{
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default AnimatedDots;