import React, { useMemo } from "react";

const ParticlesBackground = () => {
  const particles = useMemo(() => {
    return [...Array(30)].map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full opacity-60"
          style={{
            backgroundColor: "#20B2A6",
            top: `${p.top}%`,
            left: `${p.left}%`,
            animation: `slow-drift ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
