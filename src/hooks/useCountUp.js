import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
  enabled?: boolean;
}

export function useCountUp({
  end,
  duration = 2500,
  start = 0,
  decimals = 0,
  enabled = true,
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const startTime = useRef<number | null>(null);
  const rafId = useRef<number>(0);

  useEffect(() => {
    if (!enabled) {
      setCount(start);
      return;
    }

    function animate(timestamp: number) {
      if (!startTime.current) startTime.current = timestamp;
      const progress = Math.min((timestamp - startTime.current) / duration, 1);

      // Ease out expo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = start + (end - start) * eased;

      setCount(Number(current.toFixed(decimals)));

      if (progress < 1) {
        rafId.current = requestAnimationFrame(animate);
      }
    }

    startTime.current = null;
    rafId.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId.current);
  }, [end, duration, start, decimals, enabled]);

  return count;
}
