import { useEffect, useRef, useState } from 'react';

export function useCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!finePointer || reducedMotion) return;

    setEnabled(true);

    let rafId: number = 0;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest(
        'a, button, [data-cursor="hover"], input, [role="button"]'
      );
      setHovering(isInteractive);
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.5;
      ringY += (mouseY - ringY) * 0.5;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return { ringRef, enabled, hovering };
}
