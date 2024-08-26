import React, { useRef, useEffect } from 'react';

const BulgingBlob = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = (canvas.width = 400);
    const height = (canvas.height = 400);

    let angleOffset = 0;
    const baseRadius = 100;
    const dropletEffectAmplitude = 20; // Амплитуда изменения формы

    const drawBlob = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'white';
      ctx.translate(width / 2, height / 2);

      ctx.beginPath();
      for (let angle = 0; angle < Math.PI * 2; angle += 0.05) {
        // Используем синусоидальные и косинусоидальные колебания для изменения радиуса
        const variation =
          Math.sin(3 * angle + angleOffset) * dropletEffectAmplitude;
        const r = baseRadius + variation;
        const x = r * Math.cos(angle);
        const y = r * Math.sin(angle);
        ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();

      angleOffset += 0.03; // Скорость изменения формы
    };

    const animate = () => {
      drawBlob();
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Сброс трансформации
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '400px', height: '400px', zIndex: '1000' }}></canvas>
  );
};

export default BulgingBlob;
