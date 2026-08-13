import { Placeholder } from '@/components/Placeholder';

interface PolaroidFrameProps {
  label: string;
  caption: string;
  rotation: number;
}

export function PolaroidFrame({ label, caption, rotation }: PolaroidFrameProps) {
  return (
    <div
      className="polaroid-frame group relative bg-white p-3 pb-14 shadow-md hover:shadow-xl"
      style={{ '--polaroid-rotation': `${rotation}deg` } as React.CSSProperties}
    >
      <div className="overflow-hidden">
        <Placeholder label={label} className="w-full" aspectRatio="1/1" />
      </div>
      <p className="font-polaroid absolute bottom-3 left-0 right-0 text-center text-lg text-ink">
        {caption}
      </p>
    </div>
  );
}
