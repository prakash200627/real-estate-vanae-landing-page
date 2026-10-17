
"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function SiteFooter() {
  return (
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
  );
}
