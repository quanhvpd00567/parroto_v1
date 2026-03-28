import React, { useRef, useEffect, useState, useCallback } from 'react';

const segments = [
  'RESILIENT', 'LUMINOUS', 'SERENDIPITY', 'ELOCUTION',
  'EPHEMERAL', 'ETHEREAL', 'MELLIFLUOUS', 'ASTUTE'
];

const segmentColors = ['#ffffff', '#DBEAFE'];

const LuckyWheel = ({ onSpinEnd }) => {
  const canvasRef = useRef(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const drawWheel = useCallback((angle) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 10;

    ctx.clearRect(0, 0, width, height);

    const segmentAngle = (2 * Math.PI) / segments.length;

    segments.forEach((segment, i) => {
      // Offset by -90 degrees so index 0 is at the top when angle=0
      const startAngle = angle + i * segmentAngle - Math.PI / 2;
      const endAngle = startAngle + segmentAngle;

      // Draw segment
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = segmentColors[i % segmentColors.length];
      ctx.fill();

      // Draw border
      ctx.strokeStyle = '#1E40AF';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.2;
      ctx.stroke();
      ctx.globalAlpha = 1.0;

      // Draw text
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + segmentAngle / 2);

      ctx.fillStyle = '#1E40AF';
      ctx.font = 'bold 14px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillText(segment, radius - 30, 0);
      ctx.restore();
    });

    // Outer ring decoration
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#1E40AF';
    ctx.lineWidth = 8;
    ctx.globalAlpha = 0.1;
    ctx.stroke();
    ctx.globalAlpha = 1.0;
  }, []);

  useEffect(() => {
    drawWheel(rotation);
  }, [rotation, drawWheel]);

  const spin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const spinDuration = 5000;
    const startTime = Date.now();

    // Multi-turn rotation + random final offset
    const minRotations = 8;
    const extraRotation = Math.random() * 2 * Math.PI;
    const targetRotation = rotation + (minRotations * 2 * Math.PI) + extraRotation;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / spinDuration, 1);

      // Ease out cubic
      const easeOut = (t) => 1 - Math.pow(1 - t, 3);
      const currentRotation = rotation + (targetRotation - rotation) * easeOut(progress);

      setRotation(currentRotation);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);

        // Winning segment calculation
        // Pointer is at -PI/2 (top).
        // Initial segment 0 is centered at (-PI/2 + segmentAngle/2) ?
        // No, my drawing loop says: startAngle = angle + i*segAngle - PI/2
        // So segment 0 starts at -PI/2 and ends at -PI/2 + segAngle.
        // Thus when angle=0, the pointer (-PI/2) is exactly at the start of segment 0.
        // If angle increases (clockwise rotation), segment 0 moves away from the pointer.
        // The pointer effectively moves "backwards" through segments.
        const totalAngle = 2 * Math.PI;
        const normalizedRotation = currentRotation % totalAngle;
        const segmentAngle = totalAngle / segments.length;

        // Index is (segments.length - Math.floor(normalizedRotation / segmentAngle)) % segments.length
        const segmentIdx = (segments.length - Math.floor(normalizedRotation / segmentAngle)) % segments.length;

        if (onSpinEnd) onSpinEnd(segments[segmentIdx]);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto p-4 bg-white/40 backdrop-blur-sm border border-white rounded-full shadow-2xl">
      {/* Pointer */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-40 drop-shadow-lg">
        <svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 50L0 0H40L20 50Z" fill="#1E40AF"/>
          <circle cx="20" cy="5" r="3" fill="white"/>
        </svg>
      </div>

      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#1E40AF]/10">
        <canvas
          ref={canvasRef}
          width={600}
          height={600}
          className="w-full h-full"
        />

        {/* Center Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={spin}
            disabled={isSpinning}
            className="group relative w-24 h-24 rounded-full bg-[#1E40AF] text-white font-headline font-extrabold text-lg tracking-widest shadow-[0_0_20px_rgba(30,64,175,0.4)] hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed z-20"
          >
            <span className="relative z-10">SPIN</span>
            <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          <div className="absolute w-32 h-32 rounded-full border border-white/30 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default LuckyWheel;
