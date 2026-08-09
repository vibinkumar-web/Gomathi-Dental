import { useEffect, useRef, useState } from 'react';

export function MouseFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const position = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide on mobile
    const checkMobile = () => {
      setIsVisible(window.innerWidth >= 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    function animate() {
      const lerp = 0.08;
      position.current.x += (target.current.x - position.current.x) * lerp;
      position.current.y += (target.current.y - position.current.y) * lerp;

      if (divRef.current) {
        divRef.current.style.transform = `translate3d(${position.current.x - 150}px, ${position.current.y - 150}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={divRef}
      className="fixed pointer-events-none z-[-1]"
      style={{
        width: 300,
        height: 300,
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(255,45,143,0.06) 0%, rgba(0,87,231,0.04) 50%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  );
}
