
"use client";

import { Reveal } from "@/components/motion/Reveal";
import { TextReveal, TextLine } from "@/components/motion/TextReveal";
import { EnquiryForm } from "@/components/ui/InteractiveCards";

export function EnquirySection() {
  return (
    <section className="enquiry" id="enquire">
      <div className="enquiry-copy">
        <Reveal mode="fade">
          <p className="eyebrow light">EXPERIENCE VANAE</p>
        </Reveal>

        <TextReveal delay={0.15} stagger={0.13}>
          <TextLine>Something good</TextLine>
          <TextLine>
            starts <em>here.</em>
          </TextLine>
        </TextReveal>

        <Reveal mode="up" delay={0.35}>
          <p>
            Register your interest to receive detailed
            brochures, specifications, and private
            appointment scheduling for the preview gallery
            in Kollur.
          </p>
        </Reveal>

        <div className="enquiry-mark" aria-hidden="true">
          V.
        </div>
      </div>

      <Reveal
        mode="right"
        delay={0.2}
        className="enquiry-form-wrap"
      >
        <EnquiryForm />
      </Reveal>
    </section>
  );
}
