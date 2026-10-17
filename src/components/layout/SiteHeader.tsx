
"use client";

import { useState } from "react";
import {
    motion,
    useReducedMotion,
    AnimatePresence,
    useMotionValueEvent,
    useScroll,
} from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ScrollProgress } from "@/components/motion/HeroMotion";

const EASE_OUT_QUART: [number, number, number, number] = [0.25, 1, 0.5, 1];

export function SiteHeader() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const reduceMotion = useReducedMotion();
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const nextScrolled = latest > 60;
        setScrolled((current) => current === nextScrolled ? current : nextScrolled);
    });

    const links = [
        ["Residences", "#projects"],
        ["Architecture", "#approach"],
        ["Amenities", "#amenities"],
        ["Plans", "#plans"],
        ["Connectivity", "#location"],
    ];

    return (
        <>
            <ScrollProgress />

            <motion.header
                className={`site-header ${scrolled ? "header-scrolled" : ""}`}
                initial={reduceMotion ? {} : { y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT_QUART }}
            >
                <a href="#home" className="brand-logo-link" aria-label="Vanae home">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/logos/VANAE_logo_transparent.png"
                        alt="Vanae"
                        className="brand-logo"
                    />
                </a>

                <nav className="desktop-nav" aria-label="Main navigation">
                    {links.map(([label, href], i) => (
                        <motion.a
                            key={href}
                            href={href}
                            initial={reduceMotion ? {} : { opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.3 + i * 0.06,
                                ease: EASE_OUT_QUART,
                            }}
                            className="nav-link"
                        >
                            <span className="nav-link-text">{label}</span>
                            <span className="nav-link-indicator" />
                        </motion.a>
                    ))}
                </nav>

                <motion.a
                    href="#enquire"
                    className="header-cta"
                    initial={reduceMotion ? {} : { opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7, ease: EASE_OUT_QUART }}
                >
                    Start a conversation <ArrowUpRight size={15} />
                </motion.a>

                <button
                    className="mobile-menu"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={23} /> : <Menu size={23} />}
                </button>

                <AnimatePresence>
                    {open && (
                        <motion.nav
                            className="mobile-nav"
                            aria-label="Mobile navigation"
                            initial={reduceMotion ? {} : { opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={reduceMotion ? {} : { opacity: 0, y: -8 }}
                            transition={{ duration: 0.3, ease: EASE_OUT_QUART }}
                        >
                            {links.map(([label, href], i) => (
                                <motion.a
                                    key={href}
                                    href={href}
                                    onClick={() => setOpen(false)}
                                    initial={reduceMotion ? {} : { opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.35,
                                        delay: 0.05 + i * 0.06,
                                        ease: EASE_OUT_QUART,
                                    }}
                                >
                                    {label}
                                </motion.a>
                            ))}

                            <motion.a
                                href="#enquire"
                                className="mobile-cta"
                                onClick={() => setOpen(false)}
                                initial={reduceMotion ? {} : { opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.35,
                                    delay: 0.35,
                                    ease: EASE_OUT_QUART,
                                }}
                            >
                                Enquire
                            </motion.a>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </motion.header>
        </>
    );
}
