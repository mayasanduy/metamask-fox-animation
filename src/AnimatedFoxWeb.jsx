import React, { useRef } from 'react';
import { useMotionValue, useTransform, motion } from 'framer-motion';
import { ReactComponent as FoxSVG } from './MetaMask_Fox.svg'; // Vite поддерживает

const width = 300, height = 300;

export default function AnimatedFoxTracked() {
  const x = useMotionValue(0), y = useMotionValue(0);
  const rotX = useTransform(y, [-height/2, height/2], [15, -15]);
  const rotY = useTransform(x, [-width/2, width/2], [-15, 15]);
  const ref = useRef();

  return (
    <div
      style={{ width, height, perspective: 1000 }}
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current.getBoundingClientRect();
        x.set(e.clientX - (rect.left + width / 2));
        y.set(e.clientY - (rect.top + height / 2));
      }}
    >
      <motion.div style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}>
        <FoxSVG width={width} height={height} />
      </motion.div>
    </div>
  );
}
