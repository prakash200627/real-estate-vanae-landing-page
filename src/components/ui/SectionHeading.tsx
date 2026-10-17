"use client";

import { useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal, TextLine } from "@/components/motion/TextReveal";

export function SectionHeading({
  eyebrow,
  eyebrowSuffix,
  heading,
  headingEmphasis,
  note,
  className = "",
}: {
  eyebrow: string;
  eyebrowSuffix?: string;
  heading: string;
  headingEmphasis: string;
  note?: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`section-heading ${className}`}>
      <div>
        <Reveal mode="fade" duration={0.5}>
          <p className="eyebrow">
            {eyebrow} {eyebrowSuffix && <span>{eyebrowSuffix}</span>}
          </p>
        </Reveal>

        {reduceMotion ? (
          <h2>
            {heading}
            <br />
            <em>{headingEmphasis}</em>
          </h2>
        ) : (
          <TextReveal delay={0.1} stagger={0.12}>
            <TextLine>{heading}</TextLine>
            <TextLine>
              <em>{headingEmphasis}</em>
            </TextLine>
          </TextReveal>
        )}
      </div>

      {note && (
        <Reveal mode="fade" delay={0.3} duration={0.6}>
          <p className="heading-note">{note}</p>
        </Reveal>
      )}
    </div>
  );
}
