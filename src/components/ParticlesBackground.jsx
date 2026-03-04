import React from "react";

const ParticlesBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full opacity-60"
          style={{
            backgroundColor: "#20B2A6",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
