import React from 'react';
import { Bot } from 'lucide-react';

const PluripotentCells = () => {
  // Increased to 50 cells with more size variety
  const cells = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    size: Math.random() * 40 + 10, // Random size between 10-50px
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 8}s`, // Increased delay range for more natural movement
    opacity: Math.random() * 0.4 + 0.1, // Random opacity between 0.1-0.5
    rotation: Math.random() * 360, // Random rotation for more dynamic movement
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {cells.map((cell) => (
        <div
          key={cell.id}
          className="absolute animate-float"
          style={{
            left: cell.left,
            top: cell.top,
            width: `${cell.size}px`,
            height: `${cell.size}px`,
            animationDelay: cell.animationDelay,
            opacity: cell.opacity,
            transform: `rotate(${cell.rotation}deg)`,
          }}
        >
          <Bot
            className="w-full h-full text-primary/30"
            style={{
              transform: 'scale(1)',
              transition: 'transform 0.3s ease-in-out',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default PluripotentCells;