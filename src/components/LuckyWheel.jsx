import React, { useRef, useEffect, useState } from 'react';

const LuckyWheel = ({ onSpinEnd }) => {
  const canvasRef = useRef(null);
  const audioRef = useRef(null); // 🔊 ADD
  const [isSpinning, setIsSpinning] = useState(false);
  const rotationRef = useRef(0);

  const segments = [
    'RESILIENT', 'LUMINOUS', 'SERENDIPITY', 'ELOCUTION',
    'EPHEMERAL', 'ETHEREAL', 'MELLIFLUOUS', 'ASTUTE'
  ];

  const colors = ['#E5E7EB', '#CBD5F5'];
  const textColor = '#1E40AF';
  const numSegments = segments.length;
  const segmentAngle = (2 * Math.PI) / numSegments;

  const drawWheel = (currentRotation) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const dpr = window.devicePixelRatio || 1;
    const size = canvas.offsetWidth;

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2 - 10;

    ctx.clearRect(0, 0, size, size);

    for (let i = 0; i < numSegments; i++) {
      const angle = i * segmentAngle + currentRotation;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, angle, angle + segmentAngle);
      ctx.fillStyle = colors[i % 2];
      ctx.fill();

      ctx.strokeStyle = 'rgba(30, 64, 175, 0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle + segmentAngle / 2);

      ctx.fillStyle = textColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const word = segments[i];
      ctx.font = `bold 14px Plus Jakarta Sans`;

      ctx.fillText(word, radius - 100, 0);

      ctx.restore();
    }
  };

  // 👉 init + draw
  useEffect(() => {
    const resize = () => {
      drawWheel(rotationRef.current);
    };

    resize();
    window.addEventListener('resize', resize);

    // 🔊 INIT AUDIO
    audioRef.current = new Audio('/audios/spin.mp3');
    audioRef.current.loop = true;

    return () => window.removeEventListener('resize', resize);
  }, []);

  const spin = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    // 🔊 PLAY SOUND
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }

    const startRotation = rotationRef.current;

    const extraSpins = 6 + Math.random() * 4;
    const randomOffset = Math.random() * 2 * Math.PI;

    const targetRotation =
      startRotation + extraSpins * 2 * Math.PI + randomOffset;

    const duration = 4000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      const currentRotation =
        startRotation + (targetRotation - startRotation) * eased;

      rotationRef.current = currentRotation;

      drawWheel(currentRotation);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);

        // 🔊 STOP SOUND
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }

        const finalRotation =
          rotationRef.current % (2 * Math.PI);

        let pointerAngle =
          (1.5 * Math.PI - finalRotation) % (2 * Math.PI);

        if (pointerAngle < 0) pointerAngle += 2 * Math.PI;

        const index = Math.floor(pointerAngle / segmentAngle);

        onSpinEnd && onSpinEnd(segments[index]);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto">
      {/* Pointer */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-40">
        <svg width="48" height="60" viewBox="0 0 48 60">
          <path d="M24 60L0 0H48L24 60Z" fill="#1E40AF"/>
        </svg>
      </div>

      {/* Wheel */}
      <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
        />

        {/* Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={spin}
            disabled={isSpinning}
            className="w-24 h-24 rounded-full bg-blue-800 text-white font-bold"
          >
            SPIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default LuckyWheel;
