import { ImageWithFallback } from '@/components/ImageWithFallback';

export function CircularHero() {
  const radius = 165;
  const words = ['PRODUCT DESIGNER', 'SHESHA', 'AI ENTHUSIAST'];
  const fullText = words.join(' • ');
  const textLength = fullText.length;
  const angleStep = 360 / textLength;
  const startOffset = 0;

  return (
    <div className="relative flex items-center justify-center" style={{ width: 400, height: 400 }}>
      {/* Circular text */}
      <svg className="circular-text absolute inset-0" viewBox="0 0 400 400" width="400" height="400">
        <defs>
          <path
            id="circle-path"
            d={`M 200,200 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
            fill="none"
          />
        </defs>
        <text className="font-mono" fontSize="13" fill="#161616" letterSpacing="4" fontWeight="500">
          <textPath href="#circle-path" startOffset={startOffset}>
            {fullText}
          </textPath>
        </text>
      </svg>

      {/* Circular photo */}
      <div className="overflow-hidden rounded-full border-4 border-bg shadow-xl" style={{ width: 260, height: 260 }}>
        <ImageWithFallback
          src="/profile-photo.JPG"
          alt="Shesha Magi"
          label="profile-photo copy 3.JPG"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
