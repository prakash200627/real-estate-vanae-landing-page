
"use client";

import { ArrowUpRight } from "lucide-react";

import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/motion/ImageReveal";
import { TextReveal, TextLine } from "@/components/motion/TextReveal";

const principles = [
  {
    number: "01",
    title: "Considered by design",
    description:
      "Every detail has a reason. Every residence has room to breathe with 11-foot ceiling heights.",
  },
  {
    number: "02",
    title: "Connected to place",
    description:
      "Architecture in Kollur that responds directly to Hyderabad's growing IT corridor and natural surroundings.",
  },
  {
    number: "03",
    title: "Made to last",
    description:
      "A timeless point of view across 36 residential floors, shaped around how people truly live.",
  },
];

export function ArchitectureSection() {
  return (
    <section className="manifesto" id="approach">
      <div className="manifesto-image">
        <ParallaxImage
          src="/images/project-exterior-4.png"
          alt="Vanae vertical greenery and tower architecture"
          speed={0.1}
        />

        <span className="image-caption">
          VERTICAL GREENERY &amp; ARCHITECTURAL INTEGRITY
        </span>
      </div>

      <div className="manifesto-content">
        <Reveal mode="fade" duration={0.5}>
          <p className="eyebrow light">
            ARCHITECTURE &amp; NATURE <span>— 03</span>
          </p>
        </Reveal>

        <TextReveal delay={0.15} stagger={0.12}>
          <TextLine>Living in harmony</TextLine>
          <TextLine>
            <em>with the vertical horizon.</em>
          </TextLine>
        </TextReveal>

        <Reveal mode="up" delay={0.35}>
          <p className="manifesto-copy">
            Six towers rising 36 floors, interwoven with
            landscaped garden pods and natural airflow.
            Every home is positioned to receive uninterrupted
            natural illumination, gentle cross breezes, and
            sweeping vistas over Kollur&apos;s green expanses.
          </p>
        </Reveal>

        <Reveal mode="fade" delay={0.45}>
          <a
            href="#amenities"
            className="underlined-link light-link"
          >
            Explore 50+ Amenities <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <div className="principles" id="philosophy">
          <StaggerContainer stagger={0.08} delay={0.2}>
            {principles.map((principle) => (
              <StaggerItem
                key={principle.number}
                mode="up"
              >
                <div className="principle">
                  <span className="principle-number">
                    {principle.number}
                  </span>

                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>

                  <ArrowUpRight size={16} />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
