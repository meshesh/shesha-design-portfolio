import { Reveal } from '@/components/Reveal';
import { StatItem } from '@/components/StatItem';
import { WorkRow } from '@/components/WorkRow';
import { Placeholder } from '@/components/Placeholder';
import { CircularHero } from '@/components/CircularHero';
import { useInView } from '@/hooks/useInView';
import { ArrowDown, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const tools = ['Figma', 'Adobe XD', 'Illustrator', 'InVision', 'Bolt', 'Replit', 'Claude', 'ChatGPT'];

const experience = [
  {
    company: 'TrustlyPay',
    role: 'Product Designer',
    period: 'Mar 2025 – Current',
    description: 'Leding dashboard redesign through a full tech stack migration (PHP/Java → Node.js + React).',
  },
  {
    company: 'Xyenta',
    role: 'UI/UX Designer',
    period: 'Mar 2023 – Sep 2023',
    description: 'Owned Design Lifecycle end-to-end | 0>1 and helped hire 2 designers.',
  },
  {
    company: 'Amazon',
    role: 'UX Designer I',
    period: 'Jun 2021 – Dec 2022',
    description: 'Amazon Music - Flows, Prototypes, and Design System contributions.',
  },
];

export function Home() {
  const { ref: statsRef, inView: statsInView } = useInView();

  return (
    <div>
      {/* Hero — full viewport */}
      <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-5 py-12">
        <Reveal>
          <div className="origin-center scale-[0.55] sm:scale-75 md:scale-90 lg:scale-100">
            <CircularHero />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-6 flex items-center gap-2.5">
            <span className="status-dot inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: 'var(--success)' }} />
            <span className="font-mono text-xs uppercase tracking-wide text-ink-soft">
              Open to freelance projects
            </span>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <h1 className="mt-8 text-center font-serif text-6xl text-ink sm:text-7xl">
            Hi, I'm Shesha Ram
          </h1>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-4 text-center text-base text-ink-soft sm:text-lg">
            Product Designer | UI/UX | Design Systems | Vibecoding
          </p>
        </Reveal>

        <Reveal delay={500}>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <a href="mailto:sheshamagi18@gmail.com" className="text-sm text-ink hover:text-accent">
              sheshamagi18@gmail.com
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.03]"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={600}>
          <div className="mt-12">
            <ArrowDown size={20} className="text-ink-soft" />
          </div>
        </Reveal>
      </section>

      {/* Intro */}
      <section id="intro" className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">01 — Intro</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug text-ink sm:text-4xl">
            I craft intuitive interfaces where user experience meets product strategy — blending UI/UX
            precision, systems thinking, and a bit of vibe coding to ship products people love.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span key={tool} className="tag-pill">
                {tool}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Stats strip */}
        <div ref={statsRef} className="mt-16 grid grid-cols-1 gap-8 border-y border-line py-10 sm:grid-cols-3">
          <StatItem value={5} suffix="+" label="Products shipped" start={statsInView} />
          <StatItem value={4} suffix="" label="Years experience" start={statsInView} />
          <StatItem value={10} suffix="+" label="Happy clients" start={statsInView} />
        </div>
      </section>

      {/* Experience timeline */}
      <section className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">02 — Experience</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">Where I've worked</h2>
        </Reveal>

        <div className="mt-12 space-y-8">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 100}>
              <div className="timeline-item pl-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-serif text-2xl text-ink">
                    {job.company} <span className="text-ink-soft"> — {job.role}</span>
                  </h3>
                  <span className="font-mono text-xs text-ink-soft">{job.period}</span>
                </div>
                <p className="mt-2 text-sm text-ink-soft">{job.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured work */}
      <section className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">03 — Featured Work</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">Selected projects</h2>
        </Reveal>

        <div className="mt-10 border-t border-line">
          <WorkRow
            index="01"
            title="TrustlyPay Fintech Dashboard"
            subtitle="Cross-border payments dashboard redesign"
            tags={['Product Design', 'Dashboard', 'React']}
            imageLabel="Add TrustlyPay cover"
            to="/work/trustlypay"
          />
           <WorkRow
            index="02"
            title="Growcoins"
            subtitle="A savings and investment platform for Gen-Z"
            tags={['UI/UX', 'Product Design', 'Design System']}
            imageLabel="Add Growcoins cover"
            to="/work/growcoins"
          />
        </div>
      </section>

      {/* Life teaser */}
      <section className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">04 — Life</p>
        </Reveal>
        <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:items-center">
          <Reveal delay={100}>
            <p className="font-serif text-3xl leading-snug text-ink sm:text-4xl">
              When I'm not designing products, I'm usually behind a camera — chasing light, texture, and quiet moments — or collecting Hotwheels.
            </p>
            <Link
              to="/life"
              className="mt-6 inline-flex items-center gap-1 text-sm text-accent hover:underline"
            >
              See more →
            </Link>
          </Reveal>
          <Reveal delay={200}>
  <img
    src="/life-photos/life-home.JPG"
    alt="Life"
    className="w-full rounded-lg aspect-[1] object-cover"
  />
</Reveal>
        </div>
      </section>
    </div>
  );
}
