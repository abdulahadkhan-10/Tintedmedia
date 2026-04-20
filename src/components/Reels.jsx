"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

const videos = [
  "/showreel/Video0.mp4",
  "/showreel/Video1.mp4",
  "/showreel/Video2.mp4",
  "/showreel/Video4.mp4",
  "/showreel/Video5.mp4",
  "/showreel/Video6.mp4",
];

const N = videos.length;
const AUTO_DELAY = 4500;

/* Returns shortest circular offset from center */
const getOffset = (i, active) => {
  let d = i - active;
  if (d > N / 2) d -= N;
  if (d < -N / 2) d += N;
  return d;
};

/* Per-card 3D style */
const cardStyle = (d, isMobile) => {
  const absD = Math.abs(d);
  const spacing = isMobile ? 130 : 215;
  const rotateY = -d * 42;
  const scale = Math.max(0.68, 1 - absD * 0.17);
  const opacity = absD > 2 ? 0 : Math.max(0.25, 1 - absD * 0.38);
  const brightness = absD === 0 ? 1 : Math.max(0.52, 1 - absD * 0.24);
  const saturate = absD === 0 ? 1 : Math.max(0.55, 1 - absD * 0.28);

  return {
    position: "absolute",
    left: "50%",
    top: "0",
    transform: `translateX(calc(-50% + ${d * spacing}px)) rotateY(${rotateY}deg) scale(${scale})`,
    opacity,
    zIndex: absD > 2 ? -1 : 10 - absD,
    filter: `brightness(${brightness}) saturate(${saturate})`,
    pointerEvents: absD > 2 ? "none" : "auto",
    cursor: d !== 0 ? "pointer" : "default",
    transition:
      "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.45s ease, filter 0.45s ease",
    willChange: "transform, opacity",
  };
};

export default function Reels() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);

  /* Responsive check */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  /* Navigation */
  const go = useCallback((dir) => {
    setActive((prev) => (prev + dir + N) % N);
  }, []);

  const goTo = useCallback(
    (i) => {
      setActive(i);
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => go(1), AUTO_DELAY);
    },
    [go]
  );

  /* Auto-advance */
  useEffect(() => {
    intervalRef.current = setInterval(() => go(1), AUTO_DELAY);
    return () => clearInterval(intervalRef.current);
  }, [go]);

  /* Swipe */
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 45) {
      go(dx < 0 ? 1 : -1);
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => go(1), AUTO_DELAY);
    }
    touchStartX.current = null;
  };

  /* Card height = width * (16/9) */
  const cardW = isMobile ? 150 : 200;
  const stageH = Math.round(cardW * (16 / 9));

  return (
    <section className="cf-section">
      {/* ── Heading ── */}
      <div className="cf-heading">
        <h1>
          Our <em>Work</em>
        </h1>
        {/* <p className="cf-sub">Click a reel or use the arrows</p> */}
      </div>

      {/* ── Stage ── */}
      <div
        className="cf-stage"
        style={{ perspective: "1300px", height: `${stageH}px` }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="cf-track" style={{ transformStyle: "preserve-3d" }}>
          {videos.map((src, i) => {
            const d = getOffset(i, active);
            return (
              <div
                key={i}
                className="cf-card"
                style={{
                  ...cardStyle(d, isMobile),
                  width: `${cardW}px`,
                }}
                onClick={() => d !== 0 && goTo(i)}
              >
                <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="cf-video"
                />
                <div className="cf-gloss" />
                {/* Reflection strip on active card */}
                {d === 0 && <div className="cf-active-ring" />}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Arrows ── */}
      <button
        className="cf-arrow cf-arrow--prev"
        onClick={() => { go(-1); clearInterval(intervalRef.current); intervalRef.current = setInterval(() => go(1), AUTO_DELAY); }}
        aria-label="Previous reel"
      >
        ‹
      </button>
      <button
        className="cf-arrow cf-arrow--next"
        onClick={() => { go(1); clearInterval(intervalRef.current); intervalRef.current = setInterval(() => go(1), AUTO_DELAY); }}
        aria-label="Next reel"
      >
        ›
      </button>

      {/* ── Dots ── */}
      <div className="cf-dots">
        {videos.map((_, i) => (
          <button
            key={i}
            className={`cf-dot ${i === active ? "cf-dot--active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to reel ${i + 1}`}
          />
        ))}
      </div>

      <style>{`
        /* ─── SECTION ─── */
        .cf-section {
          width: 100%;
          background: #fff;
          padding: 5.5rem 0 5rem;
          position: relative;
          overflow: hidden;
        }

        /* ─── HEADING ─── */
        .cf-heading {
          text-align: center;
          margin-bottom: 3rem;
          padding: 0 1rem;
        }
        .cf-heading h1 {
          font-size: clamp(3rem, 9vw, 7rem);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.03em;
          color: #0a0a0a;
          font-style: normal;
          line-height: 1;
          margin: 0 0 0.55rem;
        }
        .cf-heading h1 em {
          font-style: italic;
          font-weight: 300;
          color: #2563eb;
        }
        .cf-sub {
          font-size: 0.78rem;
          color: #9ca3af;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 500;
          margin: 0;
        }

        /* ─── STAGE ─── */
        .cf-stage {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          user-select: none;
        }
        .cf-track {
          position: absolute;
          inset: 0;
        }

        /* ─── CARD ─── */
        .cf-card {
          height: 100%;
          border-radius: 1.75rem;
          overflow: hidden;
          background: #18181b;
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.18),
            0 4px 16px rgba(0, 0, 0, 0.10);
        }
        .cf-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          pointer-events: none;
        }
        .cf-gloss {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            rgba(255,255,255,0.08) 0%,
            transparent 45%,
            rgba(0,0,0,0.42) 100%
          );
          pointer-events: none;
        }
        .cf-active-ring {
          position: absolute;
          inset: 0;
          border-radius: 1.75rem;
          box-shadow: inset 0 0 0 2px rgba(255,255,255,0.18);
          pointer-events: none;
        }

        /* ─── ARROWS ─── */
        .cf-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(10,10,10,0.08);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 50%;
          width: 48px;
          height: 48px;
          font-size: 1.8rem;
          line-height: 1;
          color: #111;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, transform 0.2s;
          z-index: 50;
          padding-bottom: 2px;
        }
        .cf-arrow:hover {
          background: rgba(37,99,235,0.12);
          border-color: rgba(37,99,235,0.25);
          transform: translateY(-50%) scale(1.08);
        }
        .cf-arrow--prev { left: clamp(8px, 3vw, 40px); }
        .cf-arrow--next { right: clamp(8px, 3vw, 40px); }

        /* ─── DOTS ─── */
        .cf-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 2.2rem;
        }
        .cf-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(0,0,0,0.15);
          border: none;
          cursor: pointer;
          transition: background 0.25s, transform 0.25s, width 0.3s;
          padding: 0;
        }
        .cf-dot--active {
          background: #2563eb;
          width: 24px;
          border-radius: 4px;
        }

        @media (max-width: 640px) {
          .cf-arrow { width: 38px; height: 38px; font-size: 1.5rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cf-card { transition: none !important; }
        }
      `}</style>
    </section>
  );
}