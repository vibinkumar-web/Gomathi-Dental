import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function MagneticButton({
  children,
  className = '',
  strength = 0.3,
  onClick,
  href,
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    setPosition({
      x: distanceX * strength,
      y: distanceY * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const props = {
    ref,
    className,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick,
    style: {
      transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      transition: 'transform 0.2s ease-out',
    },
  };

  if (href) {
    return (
      <a
        {...props}
        ref={ref}
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <motion.button
      {...props}
      ref={ref}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
