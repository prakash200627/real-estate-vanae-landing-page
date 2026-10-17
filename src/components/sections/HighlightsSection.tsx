
"use client";

import {
    StaggerContainer,
    StaggerItem,
} from "@/components/motion/Reveal";

export function HighlightsSection() {
    return (
        <section
            className="highlights-bar"
            aria-label="Development Highlights"
        >
            <StaggerContainer
                className="highlights-grid"
                stagger={0.1}
            >
                <StaggerItem className="highlight-stat" mode="up">
                    <span className="highlight-num">6</span>
                    <span className="highlight-label">
                        Architectural Towers
                    </span>
                </StaggerItem>

                <StaggerItem className="highlight-stat" mode="up">
                    <span className="highlight-num">36</span>
                    <span className="highlight-label">
                        Storeys of Living
                    </span>
                </StaggerItem>

                <StaggerItem className="highlight-stat" mode="up">
                    <span className="highlight-num">11 Ft.</span>
                    <span className="highlight-label">
                        Grand Ceiling Height
                    </span>
                </StaggerItem>

                <StaggerItem className="highlight-stat" mode="up">
                    <span className="highlight-num">1,00,000+</span>
                    <span className="highlight-label">
                        Sq. Ft. Grand Clubhouse
                    </span>
                </StaggerItem>
            </StaggerContainer>
        </section>
    );
}
