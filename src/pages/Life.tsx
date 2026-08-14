import { Reveal } from "@/components/Reveal";
import { PolaroidFrame } from "@/components/PolaroidFrame";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const photos = [
  {
    src: "/life-photos/life-01.jpg",
    caption: "Fly Away!",
    rotation: 2,
  },
  {
    src: "/life-photos/life-02.jpg",
    caption: "Party Scenes",
    rotation: -3,
  },
  {
    src: "/life-photos/life-03.jpg",
    caption: "Ethnic",
    rotation: 2,
  },
  {
    src: "/life-photos/life-04.jpg",
    caption: "Camden Market",
    rotation: -2,
  },
  {
    src: "/life-photos/life-05.jpg",
    caption: "When Stressed... Dab!",
    rotation: 3,
  },
  {
    src: "/life-photos/life-06.jpg",
    caption: "Me Myself and I",
    rotation: -2,
  },
  {
    src: "/life-photos/life-07.jpg",
    caption: "Inner Butterfly",
    rotation: 2,
  },
  {
    src: "/life-photos/life-08.jpg",
    caption: "Time Runs",
    rotation: -3,
  },
  {
    src: "/life-photos/life-09.jpg",
    caption: "Garuda!",
    rotation: 2,
  },
  {
    src: "/life-photos/life-10.jpg",
    caption: "Sharp",
    rotation: -2,
  },
  {
    src: "/life-photos/life-11.jpg",
    caption: "Food is Luv",
    rotation: 3,
  },
  {
    src: "/life-photos/life-12.jpg",
    caption: "First Snow",
    rotation: -2,
  },
  {
    src: "/life-photos/life-13.jpg",
    caption: "Take a Break",
    rotation: 2,
  },
  {
    src: "/life-photos/life-14.jpg",
    caption: "Stairs of Life",
    rotation: -3,
  },
  {
    src: "/life-photos/life-15.jpg",
    caption: "Sundari!",
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
          When I'm not Designing products, I'm usually behind a camera — chasing
          light, texture, and quiet moments — or collecting Hotwheels.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-2 gap-4 px-2 sm:gap-8 sm:px-4 lg:grid-cols-3 lg:px-8">
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
