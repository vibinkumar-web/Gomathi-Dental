import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from '@/hooks/useInView';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({
  end,
  suffix = '',
  duration = 2500,
  decimals = 0,
  className = '',
}: AnimatedCounterProps) {
  const [ref, isInView] = useInView<HTMLSpanElement>({ threshold: 0.5 });
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
