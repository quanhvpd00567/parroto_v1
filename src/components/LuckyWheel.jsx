import React, { useRef, useEffect, useState } from 'react';

const LuckyWheel = ({ onSpinEnd }) => {
  const canvasRef = useRef(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const rotationRef = useRef(0);

  const segments = [
    'RESILIENT', 'LUMINOUS', 'SERENDIPITY', 'ELOCUTION',
    'EPHEMERAL', 'ETHEREAL', 'MELLIFLUOUS', 'ASTUTE'
  ];

  const colors = ['#ffffff', '#F8F9FF'];
  const textColor = '#1E40AF';
  const numSegments = segments.length;
  const segmentAngle = (2 * Math.PI) / numSegments;

  const drawWheel = (currentRotation) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2 - 10;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw segments
    for (let i = 0; i < numSegments; i++) {
      const angle = i * segmentAngle + currentRotation;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, angle, angle + segmentAngle);
      ctx.fillStyle = colors[i % 2];
      ctx.fill();

      // Draw segment border
      ctx.strokeStyle = 'rgba(30, 64, 175, 0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw text
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle + segmentAngle / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = textColor;
      ctx.font = 'bold 32px "Plus Jakarta Sans"';
      ctx.fillText(segments[i], radius - 60, 10);
      ctx.restore();
    }
  };

  useEffect(() => {
    drawWheel(rotationRef.current);
  }, []);

  const spin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const startRotation = rotationRef.current;
    const extraSpins = 5 + Math.random() * 5;
    const targetRotation = startRotation + extraSpins * 2 * Math.PI;
    const duration = 4000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentRotation = startRotation + (targetRotation - startRotation) * easedProgress;

      rotationRef.current = currentRotation;
      drawWheel(currentRotation);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        const finalRotation = currentRotation % (2 * Math.PI);
        // Calculate winner: the pointer is at the top (3/2 * PI)
        // Adjust for rotation: pointer relative to wheel is (1.5*PI - finalRotation)
        let pointerAngle = (1.5 * Math.PI - finalRotation) % (2 * Math.PI);
        if (pointerAngle < 0) pointerAngle += 2 * Math.PI;

        const winningIndex = Math.floor(pointerAngle / segmentAngle) % numSegments;
        if (onSpinEnd) {
          onSpinEnd(segments[winningIndex]);
        }
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto">
      {/* Outer Ring Frame */}
      <div className="absolute inset-0 border-[24px] border-surface-container-high rounded-full bg-gradient-to-br from-surface-container-high to-white shadow-inner pointer-events-none z-10"></div>

      {/* Pointer */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-40 drop-shadow-md">
        <svg width="48" height="60" viewBox="0 0 48 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 60L0 0H48L24 60Z" fill="#1E40AF"/>
          <path d="M24 50L8 0H40L24 50Z" fill="#3755C3" fillOpacity="0.5"/>
          <circle cx="24" cy="5" r="3" fill="white"/>
        </svg>
      </div>

      {/* Wheel Canvas */}
      <div className="relative w-full h-full rounded-full shadow-2xl overflow-hidden border-4 border-[#1E40AF]/10 bg-white p-4">
        <canvas
          ref={canvasRef}
          width={1000}
          height={1000}
          className="w-full h-full"
        />

        {/* Central SPIN Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150"></div>
            <button
              onClick={spin}
              disabled={isSpinning}
              className={`relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-[rgba(30,64,175,0.9)] backdrop-blur-md shadow-[0_0_0_8px_rgba(30,64,175,0.1),0_8px_32px_rgba(30,64,175,0.3)] border border-white/20 text-white font-headline font-extrabold text-lg md:text-xl tracking-widest transition-all z-20 flex items-center justify-center cursor-pointer ${isSpinning ? 'opacity-80 scale-95' : 'hover:scale-105 active:scale-90'}`}
            >
              SPIN
            </button>
            <div className="absolute inset-0 -m-3 border border-white/30 rounded-full pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuckyWheel;
