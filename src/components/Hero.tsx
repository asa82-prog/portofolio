import { useCallback, useEffect, useRef, useState } from 'react';
import { PROFILE } from '../data/portfolio';
import { PainterlyArtwork } from './PainterlyArtwork';

const LIGHT_MOTES = [
  { size: 5, left: '18%', bottom: '12%', duration: '14s', delay: '1s' },
  { size: 7, left: '32%', bottom: '8%', duration: '18s', delay: '3s' },
  { size: 4, left: '48%', bottom: '15%', duration: '16s', delay: '0.5s' },
  { size: 6, left: '62%', bottom: '6%', duration: '20s', delay: '4s' },
  { size: 5, left: '75%', bottom: '10%', duration: '15s', delay: '2s' },
  { size: 8, left: '86%', bottom: '14%', duration: '22s', delay: '5s' },
];

export function Hero() {
  const artStageRef = useRef<HTMLDivElement>(null);
  const isInViewRef = useRef(true);
  const [motionActive, setMotionActive] = useState(false);

  const replayForwardMotion = useCallback(() => {
    setMotionActive(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setMotionActive(true);
      });
    });
  }, []);

  useEffect(() => {
    const el = artStageRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          replayForwardMotion();
        } else {
          setMotionActive(false);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [replayForwardMotion]);

  const handleImageLoad = useCallback(() => {
    if (isInViewRef.current) {
      replayForwardMotion();
    }
  }, [replayForwardMotion]);

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-white pt-[76px]"
    >
      <div className="relative z-10 mx-auto max-w-[920px] px-6 pt-12 md:pt-16 pb-8 text-center">
        <span className="mb-5 inline-block text-[12px] font-semibold uppercase tracking-[0.18em] text-[#686D76]">
          {PROFILE.eyebrow}
        </span>

        <h1 className="editorial-title mb-6 text-[clamp(42px,6vw,82px)] leading-[1.12] text-[#111315]">
          <span className="serif-light">Hello, I&apos;m</span>{' '}
          <strong>{PROFILE.brand}.</strong>
          <br />
          <span className="serif-light">Crafting</span>{' '}
          <strong>visual clarity</strong>{' '}
          <span className="serif-light">&amp;</span> <strong>code.</strong>
        </h1>

        <p className="mx-auto mb-9 max-w-[580px] text-[16px] font-normal leading-[1.75] text-[#686D76]">
          Informatics Engineering student with two terms of experience in visual
          documentation &amp; digital communication. Blending structured
          TypeScript logic with thoughtful design.
        </p>

        <a
          href="#about"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111315] px-7 py-3.5 text-[13.5px] font-medium tracking-[0.01em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1E3A2F] hover:shadow-[0_10px_24px_-8px_rgba(30,58,47,0.3)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A2F]"
        >
          Explore Portfolio <span aria-hidden="true">↓</span>
        </a>
      </div>

      {/* Painterly Landscape Art Stage */}
      <div
        ref={artStageRef}
        aria-hidden="true"
        className="relative z-0 mt-auto flex h-[clamp(320px,46vh,540px)] w-full items-end overflow-hidden"
      >
        {/* Seamless white dissolve mask at top */}
        <div
          className="pointer-events-none absolute top-0 right-0 left-0 z-20 h-[44%]"
          style={{
            background:
              'linear-gradient(to bottom, #FFFFFF 0%, rgba(255, 255, 255, 0.88) 35%, rgba(255, 255, 255, 0) 100%)',
          }}
        />

        <div className="h-full w-full">
          <PainterlyArtwork
            alt="Ghibli-inspired painterly lush valley landscape"
            onImageLoad={handleImageLoad}
            className={motionActive ? 'animate-valley-drift' : ''}
            style={{ objectPosition: 'center 38%' }}
          />
        </div>

        {/* Floating light & pollen motes */}
        {LIGHT_MOTES.map((mote, index) => (
          <span
            key={index}
            className="hero-mote"
            style={{
              width: `${mote.size}px`,
              height: `${mote.size}px`,
              left: mote.left,
              bottom: mote.bottom,
              animationDuration: mote.duration,
              animationDelay: mote.delay,
            }}
          />
        ))}
      </div>
    </section>
  );
}
