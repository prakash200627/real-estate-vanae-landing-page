
"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const EASE_OUT_EXPO: [number, number, number, number] = [
    0.16, 1, 0.3, 1,
];
const REVEAL_DISTANCE = 24;

export type RevealMode = "fade" | "up" | "left" | "right" | "scale";

const revealVariants: Record<
    RevealMode,
    { hidden: Record<string, number>; visible: Record<string, number> }
> = {
    fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    up: {
        hidden: { opacity: 0, y: REVEAL_DISTANCE },
        visible: { opacity: 1, y: 0 },
    },
    left: {
        hidden: { opacity: 0, x: -REVEAL_DISTANCE },
        visible: { opacity: 1, x: 0 },
    },
    right: {
        hidden: { opacity: 0, x: REVEAL_DISTANCE },
        visible: { opacity: 1, x: 0 },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.92 },
        visible: { opacity: 1, scale: 1 },
    },
};

export function Reveal({
    children,
    className = "",
    delay = 0,
    duration = 0.7,
    mode = "up",
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    mode?: RevealMode;
}) {
    const reduceMotion = useReducedMotion();

    if (reduceMotion) {
        return <div className={className}>{children}</div>;
    }

    const variant = revealVariants[mode];

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={{
                hidden: variant.hidden,
                visible: variant.visible,
            }}
            transition={{
                duration: Math.max(duration, 0.75),
                delay: Math.min(delay, 0.6),
                ease: EASE_OUT_EXPO,
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerContainer({
    children,
    className = "",
    stagger = 0.08,
    delay = 0,
}: {
    children: ReactNode;
    className?: string;
    stagger?: number;
    delay?: number;
}) {
    const reduceMotion = useReducedMotion();

    if (reduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
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

export function StaggerItem({
    children,
    className = "",
    mode = "up",
}: {
    children: ReactNode;
    className?: string;
    mode?: RevealMode;
}) {
    const variant = revealVariants[mode];

    return (
        <motion.div
            className={className}
            variants={{
                hidden: variant.hidden,
                visible: {
                    ...variant.visible,
                    transition: {
                        duration: 0.75,
                        ease: EASE_OUT_EXPO,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}
