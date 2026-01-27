import { Image } from "@unpic/react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useCallback } from "react";

export interface HeroSlide {
  id: number;
  url: string;
  alt: string;
  headline: string;
  subheading: string;
}

interface HeroProps {
  slides: HeroSlide[];
}

export const Hero = ({ slides }: HeroProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Simple autoplay effect
  useEffect(() => {
    if (!emblaApi) return;
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [emblaApi]);

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Carousel */}
      <div className="h-screen w-full" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {slides.map((slide, index) => (
            <div key={slide.id} className="relative min-w-full flex-[0_0_100%]">
              <Image
                src={slide.url}
                layout="fullWidth"
                height={1080}
                alt={slide.alt}
                className="h-full w-full object-cover"
                fetchPriority={index === 0 ? "high" : "auto"}
                loading={index === 0 ? "eager" : "lazy"}
              />
              {/* Overlays for better text readability */}
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Content specific to this slide */}
              <div className="absolute bottom-0 left-0 z-10 w-full p-6 pb-12 sm:p-[60px] sm:pb-24">
                <div className="mx-auto max-w-3xl space-y-6 text-center sm:mx-0 sm:text-left">
                  <h1 className="font-manrope text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
                    {slide.headline}
                  </h1>
                  <p className="mx-auto max-w-xl text-lg text-gray-200 sm:mx-0 sm:text-xl font-urbanist">
                    {slide.subheading}
                  </p>

                  <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:gap-4">
                    <Link
                      to="/"
                      className="w-full rounded-lg bg-black px-8 py-3.5 text-base font-semibold text-white transition-transform hover:scale-105 hover:bg-neutral-900 active:scale-95 border border-white/20 sm:w-auto"
                    >
                      Shop now
                    </Link>
                    <Link
                      to="/"
                      className="w-full rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-black transition-transform hover:scale-105 hover:bg-gray-100 active:scale-95 sm:w-auto"
                    >
                      Sell now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
