
"use client";

import {
    SectionHeading,
} from "@/components/ui/SectionHeading";
import { AmenityCard } from "@/components/ui/InteractiveCards";

const amenitiesList = [
    {
        title: "1,00,000 Sq. Ft. Grand Clubhouse",
        category: "COMMUNITY & WELLNESS",
        image: "/images/amenities-13.png",
        description:
            "An expansive social centerpiece offering resort-grade lounges, celebration halls, and wellness spas.",
    },
    {
        title: "Infinity Pool & Hydrotherapy",
        category: "WATER & RELAXATION",
        image: "/images/amenities-1.png",
        description:
            "Cascading water bodies, lap pools, and curated poolside decks sheltered by lush botanical canopies.",
    },
    {
        title: "Active Sports & Fitness Arenas",
        category: "SPORTS & MOVEMENT",
        image: "/images/amenities-6.png",
        description:
            "State-of-the-art indoor and outdoor courts engineered for peak sporting and recreational excellence.",
    },
    {
        title: "Sky Gardens & Walking Podia",
        category: "LANDSCAPE & NATURE",
        image: "/images/amenities-8.png",
        description:
            "Elevated green tiers designed for dawn strolls, meditation, and seamless connection with nature.",
    },
    {
        title: "Dedicated Children's Play Realm",
        category: "FAMILY & PLAY",
        image: "/images/amenities-11.png",
        description:
            "Thoughtfully themed outdoor playgrounds and soft indoor play areas fostering joyful discovery.",
    },
    {
        title: "Wellness & Spa Pavilions",
        category: "MINDFUL LIVING",
        image: "/images/amenities-4.png",
        description:
            "Quiet spaces dedicated to yoga, mindfulness, and restorative rejuvenation amidst landscaped gardens.",
    },
];

export function AmenitiesSection() {
    return (
        <section
            className="amenities-section section-pad"
            id="amenities"
        >
            <SectionHeading
                eyebrow="LIFESTYLE & AMENITIES"
                eyebrowSuffix="— 04"
                heading="More than 50 amenities."
                headingEmphasis="Endless recreation."
                note="Anchored by a 1,00,000 sq. ft. signature clubhouse with world-class wellness, leisure, and family spaces."
            />

            <div className="amenities-grid">
                {amenitiesList.map((item, idx) => (
                    <AmenityCard
                        key={idx}
                        item={item}
                        index={idx}
                    />
                ))}
            </div>
        </section>
    );
}
