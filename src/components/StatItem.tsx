interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}

import { useCountUp } from '@/hooks/useCountUp';

export function StatItem({ value, suffix, label, start }: StatItemProps) {
  const count = useCountUp(value, 1800, start);
  const display = Number.isInteger(value) ? Math.round(count) : count.toFixed(1);

  return (
    <div className="text-center sm:text-left">
      <div className="count-up font-serif text-5xl text-ink sm:text-6xl">
        {display}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-1 text-sm text-ink-soft">{label}</div>
    </div>
  );
}
