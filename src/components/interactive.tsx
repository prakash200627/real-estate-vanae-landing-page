
"use client";

import {
  useState,
  useEffect,
  useRef,
  type FormEvent,
  type ReactNode,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  useInView,
  AnimatePresence,
} from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════
   EASING CONSTANTS — consistent cinematic feel
   ═══════════════════════════════════════════════════════ */
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_OUT_QUART: [number, number, number, number] = [0.25, 1, 0.5, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.76, 0, 0.24, 1];

/* ═══════════════════════════════════════════════════════
   REVEAL — viewport-triggered entrance animation
   Supports multiple modes: fade, slide-up, slide-left,
   slide-right, scale. All with once: true.
   ═══════════════════════════════════════════════════════ */
type RevealMode = "fade" | "up" | "left" | "right" | "scale";

const revealVariants: Record<
  RevealMode,
  { hidden: Record<string, number>; visible: Record<string, number> }
> = {
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  mode = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  mode?: RevealMode;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variant = revealVariants[mode];

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: variant.hidden,
        visible: variant.visible,
      }}
      transition={{
        duration,
        delay: Math.min(delay, 0.6),
        ease: EASE_OUT_EXPO,
      }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   STAGGER CONTAINER — staggers children reveals
   ═══════════════════════════════════════════════════════ */
export function StaggerContainer({
  children,
  className = "",
  stagger = 0.08,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  mode = "up",
}: {
  children: ReactNode;
  className?: string;
  mode?: RevealMode;
}) {
  const variant = revealVariants[mode];

  return (
    <motion.div
      className={className}
      variants={{
        hidden: variant.hidden,
        visible: {
          ...variant.visible,
          transition: { duration: 0.65, ease: EASE_OUT_EXPO },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   TEXT REVEAL — clip-mask line-by-line text animation
   Wraps each child line in an overflow-hidden clip
   ═══════════════════════════════════════════════════════ */
export function TextReveal({
  children,
  className = "",
  delay = 0,
  stagger = 0.1,
  tag: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  tag?: "div" | "h1" | "h2" | "h3" | "p";
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function TextLine({ children }: { children: ReactNode }) {
  return (
    <span className="text-reveal-line">
      <motion.span
        className="text-reveal-inner"
        variants={{
          hidden: { y: "110%" },
          visible: {
            y: "0%",
            transition: { duration: 0.8, ease: EASE_IN_OUT },
          },
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* ═══════════════════════════════════════════════════════
   IMAGE REVEAL — overflow-hidden crop + scale entrance
   Reveals image through a mask with inner scale animation
   ═══════════════════════════════════════════════════════ */
export function ImageReveal({
  src,
  alt,
  className = "",
  delay = 0,
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  aspectRatio?: string;
  loading?: "lazy" | "eager";
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={`image-reveal-wrap ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading={loading} />
      </div>
    );
  }

  return (
    <motion.div
      className={`image-reveal-wrap ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay, ease: EASE_OUT_EXPO }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.9, delay: delay + 0.05, ease: EASE_OUT_EXPO }}
      />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   PARALLAX IMAGE — scroll-linked vertical parallax
   ═══════════════════════════════════════════════════════ */
export function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.12,
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  loading?: "lazy" | "eager";
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRange = speed * 100;
  const y = useTransform(scrollYProgress, [0, 1], [yRange, -yRange]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30, mass: 0.5 });

  return (
    <div ref={ref} className={`parallax-wrap ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        style={reduceMotion ? {} : { y: smoothY }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SCROLL PROGRESS BAR — thin top-of-page indicator
   ═══════════════════════════════════════════════════════ */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
}

/* ═══════════════════════════════════════════════════════
   HERO ANIMATION — coordinated intro sequence
   ═══════════════════════════════════════════════════════ */
export function HeroIntro({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
            delayChildren: 0.3,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroElement({
  children,
  className = "",
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: index * 0.05,
            ease: EASE_OUT_EXPO,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* Hero heading with clip-mask line reveal */
export function HeroHeading({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <h1 className={className}>{children}</h1>;
  }

  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.13, delayChildren: 0.55 },
        },
      }}
    >
      {children}
    </motion.h1>
  );
}

export function HeroLine({ children }: { children: ReactNode }) {
  return (
    <span className="text-reveal-line hero-line">
      <motion.span
        className="text-reveal-inner"
        variants={{
          hidden: { y: "110%" },
          visible: {
            y: "0%",
            transition: { duration: 0.9, ease: EASE_IN_OUT },
          },
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* Hero video with initial scale effect + scroll-linked parallax */
export function HeroVideo() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.6, 0.3]);

  return (
    <motion.div
      ref={ref}
      className="hero-video-wrap"
      initial={reduceMotion ? {} : { scale: 1.12, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.8, ease: EASE_OUT_EXPO }}
      style={reduceMotion ? {} : { scale, opacity }}
    >
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/vanae-hero.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
}

/* Hero scroll cue + bottom bar with scroll-linked fade */
export function HeroBottom({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduceMotion ? {} : { opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.6, ease: EASE_OUT_QUART }}
      style={reduceMotion ? {} : { opacity }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   SITE HEADER — scroll-aware with animated background
   ═══════════════════════════════════════════════════════ */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Residences", "#projects"],
    ["Architecture", "#approach"],
    ["Amenities", "#amenities"],
    ["Plans", "#plans"],
    ["Connectivity", "#location"],
  ];

  return (
    <>
      <ScrollProgress />
      <motion.header
        className={`site-header ${scrolled ? "header-scrolled" : ""}`}
        initial={reduceMotion ? {} : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT_QUART }}
      >
        <a href="#home" className="brand-logo-link" aria-label="Vanae home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/VANAE_logo_transparent.png"
            alt="Vanae"
            className="brand-logo"
          />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href], i) => (
            <motion.a
              key={href}
              href={href}
              initial={reduceMotion ? {} : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease: EASE_OUT_QUART }}
              className="nav-link"
            >
              <span className="nav-link-text">{label}</span>
              <span className="nav-link-indicator" />
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="#enquire"
          className="header-cta"
          initial={reduceMotion ? {} : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7, ease: EASE_OUT_QUART }}
        >
          Start a conversation <ArrowUpRight size={15} />
        </motion.a>

        <button
          className="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>

        <AnimatePresence>
          {open && (
            <motion.nav
              className="mobile-nav"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: EASE_OUT_QUART }}
            >
              {links.map(([label, href], i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.05 + i * 0.06,
                    ease: EASE_OUT_QUART,
                  }}
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                href="#enquire"
                className="mobile-cta"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.35, ease: EASE_OUT_QUART }}
              >
                Enquire
              </motion.a>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION HEADING — editorial clip-mask heading reveal
   ═══════════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════════════
   PROJECT CARD — hover zoom + subtle lift
   ═══════════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════════════
   AMENITY CARD — staggered reveal with image crop
   ═══════════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════════════
   ENQUIRY FORM — with animated focus states
   ═══════════════════════════════════════════════════════ */
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
