
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import {
  EnquiryForm,
  Reveal,
  SiteHeader,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  TextLine,
  ImageReveal,
  ParallaxImage,
  HeroIntro,
  HeroElement,
  HeroHeading,
  HeroLine,
  HeroVideo,
  HeroBottom,
  SectionHeading,
  ProjectCard,
  AmenityCard,
} from "@/components/interactive";

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

const amenitiesList = [
  {
    title: "1,00,000 Sq. Ft. Grand Clubhouse",
    category: "COMMUNITY & WELLNESS",
    image: "/images/amenities-13.png",
    description: "An expansive social centerpiece offering resort-grade lounges, celebration halls, and wellness spas.",
  },
  {
    title: "Infinity Pool & Hydrotherapy",
    category: "WATER & RELAXATION",
    image: "/images/amenities-1.png",
    description: "Cascading water bodies, lap pools, and curated poolside decks sheltered by lush botanical canopies.",
  },
  {
    title: "Active Sports & Fitness Arenas",
    category: "SPORTS & MOVEMENT",
    image: "/images/amenities-6.png",
    description: "State-of-the-art indoor and outdoor courts engineered for peak sporting and recreational excellence.",
  },
  {
    title: "Sky Gardens & Walking Podia",
    category: "LANDSCAPE & NATURE",
    image: "/images/amenities-8.png",
    description: "Elevated green tiers designed for dawn strolls, meditation, and seamless connection with nature.",
  },
  {
    title: "Dedicated Children's Play Realm",
    category: "FAMILY & PLAY",
    image: "/images/amenities-11.png",
    description: "Thoughtfully themed outdoor playgrounds and soft indoor play areas fostering joyful discovery.",
  },
  {
    title: "Wellness & Spa Pavilions",
    category: "MINDFUL LIVING",
    image: "/images/amenities-4.png",
    description: "Quiet spaces dedicated to yoga, mindfulness, and restorative rejuvenation amidst landscaped gardens.",
  },
];

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

export default function Home() {
  return (
    <main>
      <SiteHeader />

      {/* ════════════════════════════════════════
          HERO — coordinated cinematic intro
         ════════════════════════════════════════ */}
      <section className="hero" id="home">
        <HeroVideo />
        <div className="hero-shade" />

        <div className="hero-content">
          <HeroIntro>
            <HeroElement index={0}>
              <p className="eyebrow light">
                ROOTED LIVING · KOLLUR, HYDERABAD
              </p>
            </HeroElement>

            <HeroHeading>
              <HeroLine>Space to live.</HeroLine>
              <HeroLine><em>Room to become.</em></HeroLine>
            </HeroHeading>

            <HeroElement index={1} className="hero-description-wrap">
              <p className="hero-description">
                Experience 3 &amp; 4 BHK luxury residences across 6 majestic 36-floor
                towers in Kollur, Hyderabad. Rooted in nature and elevated by design.
              </p>
            </HeroElement>

            <HeroElement index={2} className="hero-actions">
              <a href="#projects" className="button button-light">
                Explore Residences <ArrowRight size={16} />
              </a>
              <a href="#enquire" className="hero-text-link">
                Schedule a visit <ArrowDown size={15} />
              </a>
            </HeroElement>
          </HeroIntro>
        </div>

        <HeroBottom className="hero-bottom">
          <span>6 TOWERS · 36 FLOORS · 3 &amp; 4 BHK</span>
          <a href="#intro">SCROLL TO DISCOVER ↓</a>
          <span>ORR EXIT 2 · KOLLUR</span>
        </HeroBottom>

        <div className="hero-side-label">
          VANAE / KOLLUR / HYDERABAD
        </div>
      </section>

      {/* ════════════════════════════════════════
          HIGHLIGHTS BAR
         ════════════════════════════════════════ */}
      <section className="highlights-bar" aria-label="Development Highlights">
        <StaggerContainer className="highlights-grid" stagger={0.1}>
          <StaggerItem className="highlight-stat" mode="up">
            <span className="highlight-num">6</span>
            <span className="highlight-label">Architectural Towers</span>
          </StaggerItem>
          <StaggerItem className="highlight-stat" mode="up">
            <span className="highlight-num">36</span>
            <span className="highlight-label">Storeys of Living</span>
          </StaggerItem>
          <StaggerItem className="highlight-stat" mode="up">
            <span className="highlight-num">11 Ft.</span>
            <span className="highlight-label">Grand Ceiling Height</span>
          </StaggerItem>
          <StaggerItem className="highlight-stat" mode="up">
            <span className="highlight-num">1,00,000+</span>
            <span className="highlight-label">Sq. Ft. Grand Clubhouse</span>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* ════════════════════════════════════════
          INTRO / PHILOSOPHY
         ════════════════════════════════════════ */}
      <section className="intro section-pad" id="intro">
        <div>
          <Reveal mode="fade" duration={0.5}>
            <p className="eyebrow">
              THE VANAE PHILOSOPHY <span>— 01</span>
            </p>
          </Reveal>

          <div className="intro-grid">
            <TextReveal delay={0.1} stagger={0.13}>
              <TextLine>Not simply a place</TextLine>
              <TextLine>to live. A place to <em>feel.</em></TextLine>
            </TextReveal>

            <Reveal mode="right" delay={0.3} className="intro-copy">
              <p className="large-copy">
                Rooted living where nature intertwines with contemporary architectural scale.
              </p>
              <p>
                Situated in Kollur, near the Nehru Outer Ring Road Exit 2, Vanae is envisioned as a sanctuary of light, expansive greenery, and vertical grace. With 11-foot grand ceilings and over 50 lifestyle amenities, every square foot is shaped to inspire serenity.
              </p>
              <a href="#approach" className="underlined-link">
                Discover our architecture <ArrowUpRight size={16} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROJECT SHOWCASE
         ════════════════════════════════════════ */}
      <section className="projects section-pad" id="projects">
        <SectionHeading
          eyebrow="CURATED RESIDENCES"
          eyebrowSuffix="— 02"
          heading="Crafted for the way"
          headingEmphasis="life unfolds."
          note="Thoughtful 3 & 4 BHK residences designed with generous proportions and panoramic horizons."
        />

        <StaggerContainer className="project-grid" stagger={0.12}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </StaggerContainer>
      </section>

      {/* ════════════════════════════════════════
          ARCHITECTURE & NATURE
         ════════════════════════════════════════ */}
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
            <TextLine><em>with the vertical horizon.</em></TextLine>
          </TextReveal>

          <Reveal mode="up" delay={0.35}>
            <p className="manifesto-copy">
              Six towers rising 36 floors, interwoven with landscaped garden pods and natural airflow. Every home is positioned to receive uninterrupted natural illumination, gentle cross breezes, and sweeping vistas over Kollur&apos;s green expanses.
            </p>
          </Reveal>

          <Reveal mode="fade" delay={0.45}>
            <a href="#amenities" className="underlined-link light-link">
              Explore 50+ Amenities <ArrowUpRight size={16} />
            </a>
          </Reveal>

          <div className="principles" id="philosophy">
            <StaggerContainer stagger={0.08} delay={0.2}>
              {principles.map((principle) => (
                <StaggerItem key={principle.number} mode="up">
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

      {/* ════════════════════════════════════════
          AMENITIES & LIFESTYLE
         ════════════════════════════════════════ */}
      <section className="amenities-section section-pad" id="amenities">
        <SectionHeading
          eyebrow="LIFESTYLE & AMENITIES"
          eyebrowSuffix="— 04"
          heading="More than 50 amenities."
          headingEmphasis="Endless recreation."
          note="Anchored by a 1,00,000 sq. ft. signature clubhouse with world-class wellness, leisure, and family spaces."
        />

        <div className="amenities-grid">
          {amenitiesList.map((item, idx) => (
            <AmenityCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          MASTER PLAN & FLOOR PLANS
         ════════════════════════════════════════ */}
      <section className="plans-section section-pad" id="plans">
        <SectionHeading
          eyebrow="MASTER PLAN & FLOOR LAYOUTS"
          eyebrowSuffix="— 05"
          heading="Meticulous planning."
          headingEmphasis="Seamless balance."
          note="Spacious 3 & 4 BHK residential arrangements offering private vestibules and uncompromised light."
        />

        <div className="plans-grid">
          <Reveal className="plan-card" mode="left">
            <span className="eyebrow" style={{ marginBottom: "16px", display: "block" }}>
              INTEGRATED MASTER DEVELOPMENT
            </span>
            <ImageReveal
              src="/images/master-plan-1.png"
              alt="Vanae Master Plan layout"
              className="plan-image-wrap"
            />
            <p className="heading-note" style={{ marginTop: "16px" }}>
              Comprehensive master layout showing tower placement, vehicular-free podias, and recreational zones.
            </p>
          </Reveal>

          <div className="floor-plans-stack">
            <Reveal className="plan-card" mode="right" delay={0.15}>
              <span className="eyebrow" style={{ marginBottom: "12px", display: "block" }}>
                3 BHK TYPICAL RESIDENCE
              </span>
              <ImageReveal
                src="/images/floor-plan-1.png"
                alt="3 BHK Residence Floor Plan"
                className="plan-image-wrap"
                delay={0.1}
              />
            </Reveal>

            <Reveal className="plan-card" mode="right" delay={0.25}>
              <span className="eyebrow" style={{ marginBottom: "12px", display: "block" }}>
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

      {/* ════════════════════════════════════════
          LOCATION & CONNECTIVITY
         ════════════════════════════════════════ */}
      <section className="location-section section-pad" id="location">
        <Reveal mode="fade">
          <p className="eyebrow light">
            STRATEGIC CONNECTIVITY <span>— 06</span>
          </p>
        </Reveal>

        <div className="location-grid">
          <div>
            <TextReveal delay={0.1} stagger={0.12}>
              <TextLine>Rooted in calm,</TextLine>
              <TextLine><em>connected to everything.</em></TextLine>
            </TextReveal>

            <Reveal mode="up" delay={0.3}>
              <p className="manifesto-copy">
                Positioned in Kollur with direct access to the Nehru Outer Ring Road (Exit 2), Vanae ensures effortless daily transit to the Financial District, Gachibowli, Neopolis, and prestigious international schools.
              </p>
            </Reveal>

            <StaggerContainer className="location-points" stagger={0.1} delay={0.3}>
              <StaggerItem mode="up">
                <div className="location-point">
                  <span className="location-point-num">01</span>
                  <div>
                    <h4>Nehru Outer Ring Road (Exit 2)</h4>
                    <p>Immediate connectivity to Hyderabad&apos;s major growth corridors and transit rings.</p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem mode="up">
                <div className="location-point">
                  <span className="location-point-num">02</span>
                  <div>
                    <h4>Financial District &amp; Neopolis</h4>
                    <p>Seamless commute to the prime business and technology employment centers.</p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem mode="up">
                <div className="location-point">
                  <span className="location-point-num">03</span>
                  <div>
                    <h4>Educational &amp; Healthcare Hubs</h4>
                    <p>Proximity to reputed international schools, multi-speciality hospitals, and daily conveniences.</p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          <Reveal mode="scale" delay={0.2}>
            <div className="location-map-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/location-1.png"
                alt="Vanae Location and Connectivity Map"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ENQUIRY FORM
         ════════════════════════════════════════ */}
      <section className="enquiry" id="enquire">
        <div className="enquiry-copy">
          <Reveal mode="fade">
            <p className="eyebrow light">EXPERIENCE VANAE</p>
          </Reveal>
          <TextReveal delay={0.15} stagger={0.13}>
            <TextLine>Something good</TextLine>
            <TextLine>starts <em>here.</em></TextLine>
          </TextReveal>
          <Reveal mode="up" delay={0.35}>
            <p>
              Register your interest to receive detailed brochures, specifications, and private appointment scheduling for the preview gallery in Kollur.
            </p>
          </Reveal>
          <div className="enquiry-mark" aria-hidden="true">V.</div>
        </div>

        <Reveal mode="right" delay={0.2} className="enquiry-form-wrap">
          <EnquiryForm />
        </Reveal>
      </section>

      {/* ════════════════════════════════════════
          FOOTER
         ════════════════════════════════════════ */}
      <footer className="site-footer">
        <Reveal mode="up">
          <div className="footer-top">
            <div>
              <a href="#home" aria-label="Vanae home">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/VANAE_logo_transparent.png"
                  alt="Vanae"
                  className="footer-logo"
                />
              </a>
              <p>
                Rooted Living · Kollur, Hyderabad.
                <br />
                3 &amp; 4 BHK Luxury Residences.
              </p>
            </div>

            <p>
              Thoughtful spaces.
              <br />
              A more considered way to live.
            </p>

            <a href="#home" className="back-top">
              BACK TO TOP <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>

        <Reveal mode="fade" delay={0.1}>
          <div className="footer-bottom">
            <span>© VANAE. ALL RIGHTS RESERVED.</span>
            <span>KOLLUR · HYDERABAD · INDIA</span>
            <div>
              <a href="#enquire">SCHEDULE VISIT</a>
              <a href="#enquire">PRIVACY</a>
            </div>
          </div>
        </Reveal>
      </footer>
    </main>
  );
}
