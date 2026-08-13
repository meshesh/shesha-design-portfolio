import { Placeholder } from '@/components/Placeholder';

interface WorkRowProps {
  index: string;
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  imageLabel: string;
  to: string;
}

import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export function WorkRow({ index, title, subtitle, tags, year, imageLabel, to }: WorkRowProps) {
  return (
    <Link to={to} className="work-row group block border-b border-line py-8">
      <div className="grid grid-cols-12 items-center gap-4">
        <div className="col-span-1 hidden font-mono text-sm text-ink-soft sm:block">{index}</div>

        <div className="col-span-12 sm:col-span-5">
          <div className="row-title font-serif text-3xl text-ink sm:text-4xl">{title}</div>
          <div className="mt-1 text-sm text-ink-soft">{subtitle}</div>
        </div>

        <div className="col-span-7 hidden flex-wrap gap-2 sm:col-span-3 sm:flex">
          {tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>

        <div className="col-span-3 hidden text-right font-mono text-sm text-ink-soft sm:col-span-2 sm:block">
          {year}
        </div>

        <div className="col-span-1 hidden justify-end sm:flex">
          <div className="h-20 w-32 overflow-hidden">
            <Placeholder label={imageLabel} className="h-full w-full" />
          </div>
        </div>

        <div className="col-span-1 hidden items-center justify-end sm:flex">
          <ArrowUpRight
            size={20}
            className="text-ink-soft transition-all duration-300 group-hover:text-accent group-hover:rotate-45"
          />
        </div>
      </div>
    </Link>
  );
}
