import { Reveal } from '@/components/Reveal';
import { PolaroidFrame } from '@/components/PolaroidFrame';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const photos = [
  {
    src: '/life-photos/IMG_0182.JPG',
    caption: 'Caption for photo 1',
    rotation: 2,
  },
  {
    src: '/life-photos/IMG_0608.jpeg',
    caption: 'Caption for photo 2',
    rotation: -3,
  },
  {
    src: '/life-photos/IMG_0674.jpeg',
    caption: 'Caption for photo 3',
    rotation: 2,
  },
  {
    src: '/life-photos/IMG_0928.JPG',
    caption: 'Caption for photo 4',
    rotation: -2,
  },
  {
    src: '/life-photos/IMG_2195.JPG',
    caption: 'Caption for photo 5',
    rotation: 3,
  },
  {
    src: '/life-photos/IMG_2737.JPG',
    caption: 'Caption for photo 6',
    rotation: -2,
  },
  {
    src: '/life-photos/IMG_3487.JPG',
    caption: 'Caption for photo 7',
    rotation: 2,
  },
  {
    src: '/life-photos/IMG_3544.JPG',
    caption: 'Caption for photo 8',
    rotation: -3,
  },
  {
    src: '/life-photos/IMG_3567.jpeg',
    caption: 'Caption for photo 9',
    rotation: 2,
  },
  {
    src: '/life-photos/IMG_3810.JPG',
    caption: 'Caption for photo 10',
    rotation: -2,
  },
  {
    src: '/life-photos/IMG_4550.JPG',
    caption: 'Caption for photo 11',
    rotation: 3,
  },
  {
    src: '/life-photos/IMG_4660.jpeg',
    caption: 'Caption for photo 12',
    rotation: -2,
  },
  {
    src: '/life-photos/IMG_4800.JPG',
    caption: 'Caption for photo 13',
    rotation: 2,
  },
  {
    src: '/life-photos/IMG_5986.JPG',
    caption: 'Caption for photo 14',
    rotation: -3,
  },
  {
    src: '/life-photos/life-home.JPG',
    caption: 'Caption for photo 15',
    rotation: 2,
  },
];

export function Life() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-accent"
      >
        <ArrowLeft size={16} /> Back home
      </Link>

      <Reveal>
        <p className="mt-12 font-mono text-xs uppercase tracking-wide text-ink-soft">
          Life
        </p>
      </Reveal>

      <Reveal delay={100}>
        <h1 className="mt-4 font-serif text-5xl text-ink sm:text-6xl">
          Beyond the screen
        </h1>
      </Reveal>

      <Reveal delay={200}>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
          When I'm not designing products, I'm usually behind a camera — chasing
          light, texture, and quiet moments — or reading up on automobiles and
          the engineering that shapes them.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-8 px-2 sm:grid-cols-2 sm:px-4 lg:grid-cols-3 lg:px-8 xl:grid-cols-4">
        {photos.map((photo, index) => (
          <Reveal key={photo.src} delay={(index % 4) * 80}>
            <div className="mx-auto max-w-[260px]">
              <PolaroidFrame
                src={photo.src}
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