import { useState, useEffect, useRef } from 'react';

export function useCountUp({
  end,
  duration = 2500,
  start = 0,
  decimals = 0,
  enabled = true,
}) {
  const [count, setCount] = useState(start);
  const startTime = useRef(null);
  const rafId = useRef(0);

  useEffect(() => {
    if (!enabled) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- resets the counter when re-disabled after counting (e.g. leaving the viewport)
      setCount(start);
      return;
    }

    function animate(timestamp) {
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
