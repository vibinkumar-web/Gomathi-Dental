import { useScrollProgress } from '@/hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[9999]">
      <div
        className="h-full origin-left"
        style={{
          background: 'linear-gradient(90deg, #FF2D8F, #0057E7)',
          transform: `scaleX(${progress})`,
          willChange: 'transform',
        }}
      />
    </div>
  );
}
