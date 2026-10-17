"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useSpring } from "motion/react";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_OUT_QUART: [number, number, number, number] = [0.25, 1, 0.5, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.76, 0, 0.24, 1];

export function HeroIntro({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.22,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroElement({
  children,
  className = "",
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
            hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: index * 0.06,
            ease: EASE_OUT_EXPO,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* Hero heading with clip-mask line reveal */
export function HeroHeading({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <h1 className={className}>{children}</h1>;
  }

  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1, delayChildren: 0.42 },
        },
      }}
    >
      {children}
    </motion.h1>
  );
}

export function HeroLine({ children }: { children: ReactNode }) {
  return (
    <span className="text-reveal-line hero-line">
      <motion.span
        className="text-reveal-inner"
        variants={{
          hidden: { y: "110%" },
          visible: {
            y: "0%",
            transition: { duration: 1, ease: EASE_IN_OUT },
          },
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* Hero video with initial scale effect + scroll-linked parallax */
export function HeroVideo() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.045]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -34]);
  const opacity = useTransform(scrollYProgress, [0, 0.72, 1], [1, 0.82, 0.48]);

  return (
    <motion.div
      ref={ref}
      className="hero-video-wrap"
      style={reduceMotion ? {} : { scale, y, opacity }}
    >
      <motion.video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
        initial={reduceMotion ? {} : { scale: 1.055, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.85, ease: EASE_OUT_EXPO }}
      >
        <source src="/videos/vanae-hero.mp4" type="video/mp4" />
      </motion.video>
    </motion.div>
  );
}

/* Hero scroll cue + bottom bar with scroll-linked fade */
export function HeroBottom({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 280], [1, 0]);

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? {} : { y: 8 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.65, delay: 1.05, ease: EASE_OUT_QUART }}
      style={reduceMotion ? {} : { opacity }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 170, damping: 34, mass: 0.4, restDelta: 0.001 });
  if (reduceMotion) return null;

  return <motion.div className="scroll-progress" style={{ scaleX, transformOrigin: "0%" }} />;
}
