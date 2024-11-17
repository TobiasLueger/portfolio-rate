'use client'

import { useState } from "react";
import Image from "next/image";

export function ImageWithFallback({ src, fallbackSrc, alt, ...props }: { src: string; fallbackSrc: string; alt: string; [key: string]: unknown }) {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      fill
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
}