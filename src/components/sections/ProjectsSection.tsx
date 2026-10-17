
"use client";

import {
    StaggerContainer,
} from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/InteractiveCards";

const projects = [
    {
        number: "01",
        category: "VERTICAL SANCTUARY",
        title: "Sculpted towers in harmonious greenery.",
        image: "/images/project-exterior-1.png",
    },
    {
        number: "02",
        category: "CONTEMPORARY RESIDENCES",
        title: "Expansive 3 & 4 BHK sky residences.",
        image: "/images/project-exterior-2.png",
    },
    {
        number: "03",
        category: "ARCHITECTURAL PROPORTION",
        title: "11-foot grand ceilings and light.",
        image: "/images/project-exterior-3.png",
    },
];

export function ProjectsSection() {
    return (
        <section className="projects section-pad" id="projects">
            <SectionHeading
                eyebrow="CURATED RESIDENCES"
                eyebrowSuffix="— 02"
                heading="Crafted for the way"
                headingEmphasis="life unfolds."
                note="Thoughtful 3 & 4 BHK residences designed with generous proportions and panoramic horizons."
            />

            <StaggerContainer
                className="project-grid"
                stagger={0.12}
            >
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.number}
                        project={project}
                        index={index}
                    />
                ))}
            </StaggerContainer>
        </section>
    );
}
