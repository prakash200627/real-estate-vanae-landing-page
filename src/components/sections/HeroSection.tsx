
"use client";

import {
    ArrowDown,
    ArrowRight,
} from "lucide-react";

import {
    HeroIntro,
    HeroElement,
    HeroHeading,
    HeroLine,
    HeroVideo,
    HeroBottom,
} from "@/components/motion/HeroMotion";

export function HeroSection() {
    return (
        <section className="hero" id="home">
            <HeroVideo />
            <div className="hero-shade" />

            <div className="hero-content">
                <HeroIntro>
                    <HeroElement index={0}>
                        <p className="eyebrow light">
                            ROOTED LIVING · KOLLUR, HYDERABAD
                        </p>
                    </HeroElement>

                    <HeroHeading>
                        <HeroLine>Space to live.</HeroLine>
                        <HeroLine>
                            <em>Room to become.</em>
                        </HeroLine>
                    </HeroHeading>

                    <HeroElement
                        index={1}
                        className="hero-description-wrap"
                    >
                        <p className="hero-description">
                            Experience 3 &amp; 4 BHK luxury residences
                            across 6 majestic 36-floor towers in Kollur,
                            Hyderabad. Rooted in nature and elevated by design.
                        </p>
                    </HeroElement>

                    <HeroElement index={2} className="hero-actions">
                        <a href="#projects" className="button button-light">
                            Explore Residences <ArrowRight size={16} />
                        </a>

                        <a href="#enquire" className="hero-text-link">
                            Schedule a visit <ArrowDown size={15} />
                        </a>
                    </HeroElement>
                </HeroIntro>
            </div>

            <HeroBottom className="hero-bottom">
                <span>6 TOWERS · 36 FLOORS · 3 &amp; 4 BHK</span>
                <a href="#intro">SCROLL TO DISCOVER ↓</a>
                <span>ORR EXIT 2 · KOLLUR</span>
            </HeroBottom>

            <div className="hero-side-label">
                VANAE / KOLLUR / HYDERABAD
            </div>
        </section>
    );
}
