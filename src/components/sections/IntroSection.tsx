
"use client";

import {
    Reveal,
} from "@/components/motion/Reveal";

import { TextReveal, TextLine } from "@/components/motion/TextReveal";
import { ArrowUpRight } from "lucide-react";

export function IntroSection() {
    return (
        <section className="intro section-pad" id="intro">
            <div>
                <Reveal mode="fade" duration={0.5}>
                    <p className="eyebrow">
                        THE VANAE PHILOSOPHY <span>— 01</span>
                    </p>
                </Reveal>

                <div className="intro-grid">
                    <TextReveal delay={0.1} stagger={0.13}>
                        <TextLine>Not simply a place</TextLine>
                        <TextLine>
                            to live. A place to <em>feel.</em>
                        </TextLine>
                    </TextReveal>

                    <Reveal
                        mode="right"
                        delay={0.3}
                        className="intro-copy"
                    >
                        <p className="large-copy">
                            Rooted living where nature intertwines with
                            contemporary architectural scale.
                        </p>

                        <p>
                            Situated in Kollur, near the Nehru Outer Ring
                            Road Exit 2, Vanae is envisioned as a sanctuary
                            of light, expansive greenery, and vertical
                            grace. With 11-foot grand ceilings and over 50
                            lifestyle amenities, every square foot is
                            shaped to inspire serenity.
                        </p>

                        <a href="#approach" className="underlined-link">
                            Discover our architecture{" "}
                            <ArrowUpRight size={16} />
                        </a>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
