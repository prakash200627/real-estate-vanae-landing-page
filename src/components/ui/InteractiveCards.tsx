"use client";

import { useState, useRef, type FormEvent } from "react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { StaggerItem } from "@/components/motion/Reveal";
import { Reveal } from "@/components/motion/Reveal";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_OUT_QUART: [number, number, number, number] = [0.25, 1, 0.5, 1];

export function ProjectCard({
  project,
  index,
}: {
  project: { number: string; category: string; title: string; image: string };
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <StaggerItem
      className={`project-card project-card-${index + 1}`}
      mode="up"
    >
      <motion.article
        whileHover={reduceMotion ? {} : { y: -4 }}
        transition={{ duration: 0.35, ease: EASE_OUT_QUART }}
      >
        <a
          href="#enquire"
          className="project-image-wrap"
          aria-label={`Enquire about ${project.title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.image} alt={project.title} loading="lazy" />
          <span className="project-number">{project.number}</span>
          <span className="project-arrow">
            <ArrowUpRight size={19} />
          </span>
        </a>

        <div className="project-meta">
          <span>{project.category}</span>
          <span>VANAE RESIDENCES</span>
        </div>

        <h3>{project.title}</h3>
      </motion.article>
    </StaggerItem>
  );
}

export function AmenityCard({
  item,
  index,
}: {
  item: {
    title: string;
    category: string;
    image: string;
    description: string;
  };
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      className="amenity-card"
      initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: Math.min(index * 0.1, 0.3),
        ease: EASE_OUT_EXPO,
      }}
    >
      <div className="amenity-image-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
      <div className="amenity-body">
        <div>
          <span
            className="project-meta"
            style={{ marginTop: 0, marginBottom: "8px" }}
          >
            {item.category}
          </span>
          <h3 className="amenity-title">{item.title}</h3>
          <p className="amenity-desc">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <Reveal mode="fade" duration={0.5}>
        <p className="eyebrow light">STAY IN THE KNOW</p>
      </Reveal>
      <Reveal mode="up" delay={0.1}>
        <h3>Let&apos;s keep in touch.</h3>
      </Reveal>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            className="form-success"
            role="status"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT_QUART }}
          >
            <CheckCircle2 size={23} />
            <div>
              <strong>Preview form completed.</strong>
              <p>
                This is a visual prototype. Enquiry storage and delivery
                must be connected before the website goes live.
              </p>
            </div>
            <button
              className="text-button"
              type="button"
              onClick={() => setSubmitted(false)}
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <label>
              Full name <span>*</span>
              <input
                name="name"
                autoComplete="name"
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Email address <span>*</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              Phone number
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+91"
              />
            </label>

            <label>
              I&apos;m interested in
              <select name="interest" defaultValue="projects">
                <option value="projects">Upcoming projects</option>
                <option value="partnership">Partnership opportunities</option>
                <option value="general">General enquiry</option>
              </select>
            </label>

            <button className="button button-light form-submit" type="submit">
              Send an enquiry <ArrowRight size={16} />
            </button>

            <p className="form-note">
              Preview only. Connect a secure backend before collecting real
              enquiries.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
