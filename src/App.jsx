import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealText, LetterTitle, Reveal, ease } from './motion.jsx';
import { profile, disciplines, projects, services, steps, stack } from './data.js';

const Arrow = ({ size = 16, diag = false }) => (
  <svg className="arrow" width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    {diag ? <path d="M4 12L12 4M6 4h6v6" /> : <path d="M3 8h10M9 4l4 4-4 4" />}
  </svg>
);

const ServiceIcon = ({ name }) => {
  const p = { width: 32, height: 32, viewBox: '0 0 32 32', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, 'aria-hidden': true };
  if (name === 'phone') return (<svg {...p}><rect x="9" y="3" width="14" height="26" rx="3" /><path d="M14 25h4" /></svg>);
  if (name === 'table') return (<svg {...p}><rect x="3" y="5" width="26" height="22" rx="3" /><path d="M3 11h26M11 11v16" /></svg>);
  return (<svg {...p}><circle cx="16" cy="16" r="12" /><path d="M4 16h24M16 4c4 4 4 20 0 24M16 4c-4 4-4 20 0 24" /></svg>);
};

/* ---------- Header ---------- */
function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a href="#top" className="logo">
          <span className="logo-mark" aria-hidden="true" />
          {profile.name}
        </a>
        <nav aria-label="Primary" className="nav">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact" className="nav-cta">Let’s talk</a>
        </nav>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="wrap hero">
      <motion.p
        className="status mono"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        <span className="pulse" aria-hidden="true" />
        Available for freelance &amp; full-time roles
      </motion.p>
      <RevealText
        as="h1"
        onLoad
        delay={0.15}
        stagger={0.07}
        className="hero-title"
        segments={[{ text: 'I design interfaces, then I ' }, { text: 'build them', accent: true }, { text: ' in React.' }]}
      />
      <div className="hero-foot">
        <motion.p
          className="lede"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.9 }}
        >
          Designer and UI developer working across mobile apps, CRM platforms, enterprise dashboards and websites for
          clients and agencies. One person from first wireframe to shipped product, so nothing gets lost in handoff.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.05 }}
        >
          <a href="#work" className="btn btn-solid">See selected work <Arrow /></a>
          <a href={profile.resumeUrl} className="btn btn-line">Download résumé</a>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Scrolling disciplines strip ---------- */
function Marquee() {
  const row = disciplines.flatMap((d, i) => [
    <span key={`d${i}`}>{d}</span>,
    <span key={`s${i}`} className="slash" aria-hidden="true">/</span>,
  ]);
  return (
    <section className="marquee" aria-label="Disciplines">
      <div className="marquee-track">
        <div className="marquee-row">{row}</div>
        <div className="marquee-row" aria-hidden="true">{row}</div>
      </div>
    </section>
  );
}

/* ---------- Project visuals ---------- */
function Visual({ visual, progress }) {
  // Parallax: images drift at slightly different speeds as the card scrolls past.
  const yA = useTransform(progress, [0, 1], [28, -28]);
  const yB = useTransform(progress, [0, 1], [56, -40]);
  const { type, images, tone } = visual;

  if (type === 'phones') {
    return (
      <div className={`visual tone-${tone} visual-phones count-${images.length}`}>
        {images.map((im, i) => (
          <motion.div
            key={im.src}
            className="phone"
            style={{ y: i % 2 ? yB : yA }}
            variants={{
              rest: { rotate: 0, x: 0 },
              hover: {
                rotate: images.length === 3 ? (i - 1) * 4 : i === 0 ? -4 : 4,
                x: images.length === 3 ? (i - 1) * 12 : i === 0 ? -10 : 10,
                transition: { type: 'spring', stiffness: 220, damping: 18 },
              },
            }}
          >
            <img src={im.src} alt={im.alt} loading="lazy" />
          </motion.div>
        ))}
      </div>
    );
  }

  if (type === 'stack') {
    return (
      <div className={`visual tone-${tone} visual-stack`}>
        <motion.img
          src={images[0].src}
          alt={images[0].alt}
          loading="lazy"
          className="shot shot-back"
          style={{ y: yA }}
          variants={{ rest: { x: 0 }, hover: { x: -10, transition: { type: 'spring', stiffness: 200, damping: 20 } } }}
        />
        <motion.img
          src={images[1].src}
          alt={images[1].alt}
          loading="lazy"
          className="shot shot-front"
          style={{ y: yB }}
          variants={{ rest: { x: 0 }, hover: { x: 14, transition: { type: 'spring', stiffness: 200, damping: 20 } } }}
        />
      </div>
    );
  }

  // browser
  return (
    <div className={`visual tone-${tone} visual-browser`}>
      <motion.div className="browser" style={{ y: yA }} variants={{ rest: { y: 0 }, hover: { scale: 1.02 } }}>
        <div className="browser-bar" aria-hidden="true"><i /><i /><i /></div>
        <img src={images[0].src} alt={images[0].alt} loading="lazy" />
      </motion.div>
    </div>
  );
}

/* ---------- Project card ---------- */
function ProjectCard({ p, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  return (
    <motion.article
      ref={ref}
      className={`card card-${p.layout}${p.flip ? ' flip' : ''}`}
      initial={{ opacity: 0.2, y: 60, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease, delay: p.layout === 'half' ? (index % 2) * 0.12 : 0 }}
      whileHover="hover"
      animate="rest"
    >
      <Visual visual={p.visual} progress={scrollYProgress} />
      <div className="card-body">
        {p.status ? (
          <p className="eyebrow mono"><span className="dot-amber" aria-hidden="true" />{p.status}</p>
        ) : (
          <p className="eyebrow mono">{p.eyebrow}</p>
        )}
        <LetterTitle text={p.title} className="card-title" />
        <Reveal as="p" className="card-text" y={14} delay={0.15}>{p.body}</Reveal>
        {p.bullets && (
          <ul className="bullets">
            {p.bullets.map((b, i) => (
              <Reveal as="li" key={b} y={10} delay={0.25 + i * 0.08}>
                <span className="bullet-arrow" aria-hidden="true">→</span>{b}
              </Reveal>
            ))}
          </ul>
        )}
        {p.tags && (
          <div className="tags mono">
            {p.tags.map((t) => <span key={t}>{t}</span>)}
          </div>
        )}
        {p.layout === 'wide' ? (
          <a href="#contact" className="btn btn-line btn-on-dark">Work with DUGS <Arrow /></a>
        ) : (
          <a href="#contact" className="text-link">Ask me about this project <Arrow /></a>
        )}
      </div>
    </motion.article>
  );
}

function Work() {
  const features = projects.filter((p) => p.layout === 'feature');
  const halves = projects.filter((p) => p.layout === 'half');
  const wide = projects.filter((p) => p.layout === 'wide');
  return (
    <section id="work" className="wrap section">
      <div className="section-head">
        <div>
          <p className="kicker mono">Selected work</p>
          <RevealText segments={[{ text: 'Designed and shipped' }]} className="section-title" />
        </div>
        <Reveal as="p" className="section-note" y={16}>
          Mobile apps, enterprise dashboards, a CRM with an AI agent, an e-commerce site and my own studio, all designed
          in Figma and built for the web and mobile.
        </Reveal>
      </div>
      <div className="work-list">
        {features.map((p, i) => <ProjectCard key={p.id} p={p} index={i} />)}
        <div className="half-row">
          {halves.map((p, i) => <ProjectCard key={p.id} p={p} index={i} />)}
        </div>
        {wide.map((p, i) => <ProjectCard key={p.id} p={p} index={i} />)}
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
function Services() {
  return (
    <section id="services" className="wrap section">
      <p className="kicker mono">What I do</p>
      <RevealText segments={[{ text: 'Design and code, under one roof' }]} className="section-title narrow" />
      <div className="services">
        {services.map((s, i) => (
          <Reveal key={s.title} className="service" delay={i * 0.1}>
            <ServiceIcon name={s.icon} />
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Process (a real sequence, so it's numbered) ---------- */
function Process() {
  return (
    <section id="process" className="band-dark">
      <div className="wrap section">
        <p className="kicker mono on-dark">How I work</p>
        <RevealText segments={[{ text: 'From brief to production' }]} className="section-title narrow" />
        <ol className="steps">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} className="step" delay={i * 0.1}>
              <motion.span
                className="step-line"
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease, delay: 0.2 + i * 0.15 }}
              />
              <span className="step-num mono">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </ol>
        <div className="stack mono" aria-label="Tools I use">
          {stack.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0.2, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.05 }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="wrap contact">
      <p className="kicker mono">Contact</p>
      <RevealText as="h2" segments={[{ text: 'Have a product to design and build?' }]} className="contact-title" stagger={0.08} />
      <Reveal y={16}>
        <a href={`mailto:${profile.email}`} className="email">
          {profile.email} <Arrow size={28} diag />
        </a>
      </Reveal>
      <footer className="footer mono">
        <span>© {new Date().getFullYear()} {profile.name} · {profile.location}</span>
        <div className="footer-links">
          {profile.links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
          ))}
        </div>
      </footer>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <Process />
        <Contact />
      </main>
    </>
  );
}
