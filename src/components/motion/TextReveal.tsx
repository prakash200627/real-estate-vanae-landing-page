"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const EASE_IN_OUT: [number, number, number, number] = [0.76, 0, 0.24, 1];

export function TextReveal({
  children,
  className = "",
  delay = 0,
    stagger = 0.09,
  tag: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  tag?: "div" | "h1" | "h2" | "h3" | "p";
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function TextLine({ children }: { children: ReactNode }) {
  return (
    <span className="text-reveal-line">
      <motion.span
        className="text-reveal-inner"
        variants={{
          hidden: { y: "110%" },
          visible: {
                        y: "0%",
                        transition: { duration: 0.95, ease: EASE_IN_OUT },
          },
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
