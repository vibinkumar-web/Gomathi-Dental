import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from '@/hooks/useInView';

export function AnimatedCounter({
  end,
  suffix = '',
  duration = 2500,
  decimals = 0,
  className = '',
}) {
  const [ref, isInView] = useInView({ threshold: 0.5 });
  const count = useCountUp({
    end,
    duration,
    decimals,
    enabled: isInView,
  });

  const formatted = decimals > 0 ? count.toFixed(decimals) : count.toLocaleString();

  return (
    <span ref={ref} className={className}>
      {formatted}{suffix}
    </span>
  );
}
