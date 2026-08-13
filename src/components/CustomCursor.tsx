import { useCursor } from '@/hooks/useCursor';

export function CustomCursor() {
  const { ringRef, enabled, hovering } = useCursor();

  if (!enabled) return null;

  return (
    <div
      ref={ringRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full"
      style={{
        width: hovering ? '44px' : '16px',
        height: hovering ? '44px' : '16px',
        border: hovering ? 'none' : '1.5px solid #161616',
        background: hovering ? '#FF5A1F' : 'transparent',
        transition: 'width 80ms ease, height 80ms ease, background 80ms ease, border 80ms ease',
      }}
    />
  );
}
