import { useState } from 'react';
import { Placeholder } from '@/components/Placeholder';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  label: string;
  className?: string;
  aspectRatio?: string;
}

export function ImageWithFallback({ src, alt, label, className = '', aspectRatio = 'auto' }: ImageWithFallbackProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return <Placeholder label={label} className={className} aspectRatio={aspectRatio} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      className={className}
    />
  );
}
