import { Reveal } from '@/components/Reveal';
import { Placeholder } from '@/components/Placeholder';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const photos = [
  { label: 'life-photo-1.jpg', aspect: '4/5' },
  { label: 'life-photo-2.jpg', aspect: '4/5' },
  { label: 'life-photo-3.jpg', aspect: '4/5' },
  { label: 'life-photo-4.jpg', aspect: '4/5' },
];

export function Life() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-accent">
        <ArrowLeft size={16} /> Back home
      </Link>

      <Reveal>
        <p className="mt-12 font-mono text-xs uppercase tracking-wide text-ink-soft">Life</p>
      </Reveal>
      <Reveal delay={100}>
        <h1 className="mt-4 font-serif text-5xl text-ink sm:text-6xl">Beyond the screen</h1>
      </Reveal>
      <Reveal delay={200}>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
          When I'm not designing products, I'm usually behind a camera — chasing light, texture, and
          quiet moments — or collecting Hotwheels.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {photos.map((photo, index) => (
          <Reveal key={photo.label} delay={(index % 2) * 100}>
            <Placeholder label={photo.label} className="w-full rounded-xl" aspectRatio={photo.aspect} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
