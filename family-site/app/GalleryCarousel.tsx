"use client";

import { useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";

interface Photo {
  src: StaticImageData;
  alt: string;
  caption: string;
}

export default function GalleryCarousel({ photos }: { photos: Photo[] }) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % photos.length);
  }, [photos.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + photos.length) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [isHovered, next]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative backdrop */}
      <div
        className="absolute -inset-4 rounded-[2rem] opacity-40 blur-xl pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #c084fc, #f472b6, #fb923c)",
        }}
      />

      {/* Main featured image */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl"
        style={{
          height: "360px",
          boxShadow: "0 20px 60px rgba(124,58,237,0.25), 0 4px 16px rgba(0,0,0,0.12)",
        }}
      >
        {photos.map(({ src, alt, caption }, i) => (
          <div
            key={alt}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          >
            <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 640px" />
            {/* Caption gradient overlay */}
            <div
              className="absolute inset-x-0 bottom-0 px-6 pt-12 pb-5"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
              }}
            >
              <p className="text-white font-bold text-lg text-center drop-shadow-md">
                {caption}
              </p>
            </div>
          </div>
        ))}

        {/* Prev arrow */}
        <button
          onClick={prev}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center text-xl font-black text-purple-800 transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          }}
        >
          ‹
        </button>

        {/* Next arrow */}
        <button
          onClick={next}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center text-xl font-black text-purple-800 transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          }}
        >
          ›
        </button>

        {/* Photo counter pill */}
        <div
          className="absolute top-3 right-3 z-10 text-xs font-bold text-white px-3 py-1 rounded-full"
          style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(6px)" }}
        >
          {current + 1} / {photos.length}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 mt-4 justify-center">
        {photos.map(({ src, alt }, i) => (
          <button
            key={alt}
            onClick={() => setCurrent(i)}
            aria-label={`Go to photo ${i + 1}`}
            className="rounded-xl overflow-hidden transition-all duration-300 flex-shrink-0"
            style={{
              width: "56px",
              height: "56px",
              opacity: i === current ? 1 : 0.5,
              transform: i === current ? "scale(1.15)" : "scale(1)",
              boxShadow: i === current
                ? "0 0 0 3px #7c3aed, 0 4px 12px rgba(124,58,237,0.4)"
                : "none",
            }}
          >
            <Image
              src={src}
              alt={alt}
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2 justify-center mt-3 items-center">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to photo ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              background: i === current
                ? "linear-gradient(90deg, #7c3aed, #db2777)"
                : "rgba(124,58,237,0.3)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
