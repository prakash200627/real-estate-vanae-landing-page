"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "motion/react";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ImageReveal({
  src,
  alt,
  className = "",
  delay = 0,
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  aspectRatio?: string;
  loading?: "lazy" | "eager";
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={`image-reveal-wrap ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading={loading} />
      </div>
    );
  }

  return (
    <motion.div
      className={`image-reveal-wrap ${className}`}
      initial={{ opacity: 0, clipPath: "inset(0 0 8% 0)" }}
      whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.9, delay, ease: EASE_OUT_EXPO }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        initial={{ scale: 1.045 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 1.1, delay: delay + 0.04, ease: EASE_OUT_EXPO }}
      />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   PARALLAX IMAGE — scroll-linked vertical parallax
   ═══════════════════════════════════════════════════════ */
export function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.12,
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  loading?: "lazy" | "eager";
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRange = speed * 72;
  const y = useTransform(scrollYProgress, [0, 1], [yRange, -yRange]);
  const smoothY = useSpring(y, { stiffness: 120, damping: 32, mass: 0.45 });

  return (
    <div ref={ref} className={`parallax-wrap ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        style={reduceMotion ? {} : { y: smoothY }}
      />
    </div>
  );
}
