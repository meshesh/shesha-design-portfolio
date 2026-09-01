import { useCursor } from '@/hooks/useCursor';

export function CustomCursor() {
  const { ringRef, enabled, hovering } = useCursor();

  if (!enabled) return null;

  return (
    <div
      ref={ringRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full"
      style={{
        width: hovering ? '28px' : '16px',
        height: hovering ? '28px' : '16px',
        border: hovering ? 'none' : '1.5px solid #ffffff',
        background: hovering ? 'rgba(255, 90, 31, 0.6)' : 'transparent',
        mixBlendMode: hovering ? 'normal' : 'difference',
        transition: 'width 180ms ease, height 180ms ease, background 180ms ease, border 180ms ease',
      }}
    />
  );
}
