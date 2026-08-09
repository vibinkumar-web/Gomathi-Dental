interface GradientMeshProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export function GradientMesh({ className = '', variant = 'dark' }: GradientMeshProps) {
  const isDark = variant === 'dark';

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Blob 1 - Pink */}
      <div
        className="absolute w-[600px] h-[600px] lg:w-[900px] lg:h-[900px] rounded-full animate-drift"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(255,45,143,0.12) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255,45,143,0.06) 0%, transparent 70%)',
          filter: 'blur(120px)',
          top: '10%',
          left: '-10%',
        }}
      />
      {/* Blob 2 - Blue */}
      <div
        className="absolute w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] rounded-full animate-drift-slow"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(0,87,231,0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(0,87,231,0.05) 0%, transparent 70%)',
          filter: 'blur(120px)',
          top: '50%',
          right: '-10%',
          animationDelay: '-5s',
        }}
      />
      {/* Blob 3 - Light Blue */}
      <div
        className="absolute w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] rounded-full animate-drift"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(47,127,255,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(47,127,255,0.04) 0%, transparent 70%)',
          filter: 'blur(100px)',
          bottom: '10%',
          left: '30%',
          animationDelay: '-10s',
        }}
      />
    </div>
  );
}
