
"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";

export function PlansSection() {
    return (
        <section
            className="plans-section section-pad"
            id="plans"
        >
            <SectionHeading
                eyebrow="MASTER PLAN & FLOOR LAYOUTS"
                eyebrowSuffix="— 05"
                heading="Meticulous planning."
                headingEmphasis="Seamless balance."
                note="Spacious 3 & 4 BHK residential arrangements offering private vestibules and uncompromised light."
            />

            <div className="plans-grid">
                <Reveal className="plan-card" mode="left">
                    <span
                        className="eyebrow"
                        style={{
                            marginBottom: "16px",
                            display: "block",
                        }}
                    >
                        INTEGRATED MASTER DEVELOPMENT
                    </span>

                    <ImageReveal
                        src="/images/master-plan-1.png"
                        alt="Vanae Master Plan layout"
                        className="plan-image-wrap"
                    />

                    <p
                        className="heading-note"
                        style={{ marginTop: "16px" }}
                    >
                        Comprehensive master layout showing tower
                        placement, vehicular-free podias, and
                        recreational zones.
                    </p>
                </Reveal>

                <div className="floor-plans-stack">
                    <Reveal
                        className="plan-card"
                        mode="right"
                        delay={0.15}
                    >
                        <span
                            className="eyebrow"
                            style={{
                                marginBottom: "12px",
                                display: "block",
                            }}
                        >
                            3 BHK TYPICAL RESIDENCE
                        </span>

                        <ImageReveal
                            src="/images/floor-plan-1.png"
                            alt="3 BHK Residence Floor Plan"
                            className="plan-image-wrap"
                            delay={0.1}
                        />
                    </Reveal>

                    <Reveal
                        className="plan-card"
                        mode="right"
                        delay={0.25}
                    >
                        <span
                            className="eyebrow"
                            style={{
                                marginBottom: "12px",
                                display: "block",
                            }}
                        >
                            4 BHK LUXURY RESIDENCE
                        </span>

                        <ImageReveal
                            src="/images/floor-plan-2.png"
                            alt="4 BHK Residence Floor Plan"
                            className="plan-image-wrap"
                            delay={0.1}
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
