
"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";

export function LocationSection() {
    return (
        <section
            className="location-section section-pad"
            id="location"
        >
            <SectionHeading
                eyebrow="LOCATION & CONNECTIVITY"
                eyebrowSuffix="— 06"
                heading="Connected to"
                headingEmphasis="everything."
                note="A considered address in Kollur, Hyderabad, with convenient access to the city's key destinations."
            />

            <div className="location-grid">
                <Reveal className="location-content" mode="left">
                    <span className="eyebrow">
                        THE NEIGHBOURHOOD
                    </span>

                    <h3 className="location-title">
                        A quieter address.
                        <br />
                        A more connected life.
                    </h3>

                    <p className="location-description">
                        Set in Kollur, Vanae offers a residential
                        setting with access to important
                        neighbourhoods, everyday conveniences,
                        and major routes across Hyderabad.
                    </p>

                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Kollur%2C+Hyderabad%2C+Telangana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="location-map-link"
                    >
                        EXPLORE THE LOCATION
                        <span aria-hidden="true"> ↗</span>
                    </a>
                </Reveal>

                <Reveal className="location-visual" mode="right">
                    <ImageReveal
                        src="/images/location-1.png"
                        alt="Location map for Vanae in Kollur, Hyderabad"
                        className="location-image-wrap"
                    />
                </Reveal>
            </div>
        </section>
    );
}
