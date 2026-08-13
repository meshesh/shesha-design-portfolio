interface PolaroidFrameProps {
  src: string;
  caption: string;
  rotation: number;
}

export function PolaroidFrame({ src, caption, rotation }: PolaroidFrameProps) {
  return (
    <div
      className="polaroid-frame group relative bg-white p-3 pb-14 shadow-md hover:shadow-xl"
      style={{ '--polaroid-rotation': `${rotation}deg` } as React.CSSProperties}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={src}
          alt={caption}
          className="h-full w-full object-cover"
        />
      </div>

      <p className="font-polaroid absolute bottom-3 left-0 right-0 text-center text-lg text-ink">
        {caption}
      </p>
    </div>
  );
}