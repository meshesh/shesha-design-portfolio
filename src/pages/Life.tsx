import { Reveal } from '@/components/Reveal';
import { PolaroidFrame } from '@/components/PolaroidFrame';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const photos = Array.from({ length: 15 }, (_, i) => ({
  label: `life-photo-${i + 1}.jpg`,
  caption: 'Image Caption',
  rotation: ((i % 2 === 0 ? 1 : -1) * (2 + ((i * 7) % 3))) as number,
}));

export function Life() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
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
          quiet moments — or reading up on automobiles and the engineering that shapes them.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-8 px-2 sm:grid-cols-2 sm:px-4 lg:grid-cols-3 lg:px-8 xl:grid-cols-4">
        {photos.map((photo, index) => (
          <Reveal key={photo.label} delay={(index % 4) * 80}>
            <div className="mx-auto max-w-[260px]">
              <PolaroidFrame
                label={photo.label}
                caption={photo.caption}
                rotation={photo.rotation}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
