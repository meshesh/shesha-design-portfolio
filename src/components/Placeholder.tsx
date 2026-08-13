interface PlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: string;
}

export function Placeholder({ label, className = '', aspectRatio = 'auto' }: PlaceholderProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border border-line bg-surface ${className}`}
      style={aspectRatio !== 'auto' ? { aspectRatio } : undefined}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(45deg, transparent 48%, #E2E2DE 48%, #E2E2DE 52%, transparent 52%)',
          backgroundSize: '12px 12px',
          opacity: 0.4,
        }}
      />
      <span className="relative font-mono text-[11px] uppercase tracking-wide text-ink-soft">
        {label}
      </span>
    </div>
  );
}
