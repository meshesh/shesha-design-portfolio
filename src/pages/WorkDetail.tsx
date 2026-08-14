import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Placeholder } from '@/components/Placeholder';
import { Reveal } from '@/components/Reveal';
import { useSEO } from '@/hooks/useSEO';

type Project = {
  title: string;
  role: string;
  company: string;
  timeline: string;
  scope: string;
  problem: string;
  constraints: string;
  decisions: string[];
  outcome: string;
  reflection: string;
};

const projectData: Record<string, Project> = {
  growcoins: {
    title: 'Growcoins',
    role: 'Lead Product Designer',
    company: 'Xyenta',
    timeline: '0→1 product design',
    scope: 'Product strategy · UX/UI · Design system',
    problem: 'Beginner and casual investors struggle to build consistent saving and investing habits. Growcoins simplifies saving, investing, and goal-setting so building financial momentum feels approachable.',
    constraints: 'I was the lead designer working with a small team of junior developers. I introduced Neomorphism, which was new to the whole team, while balancing the ambition of the visual direction against what we could realistically implement.',
    decisions: [
      'Committed to Neomorphism as the system language and kept it consistent through close, continuous iteration with development.',
      'Structured the product around three pillars: Intelligent Savings, Goal-Driven Investing, and Unified Money Management.',
      'Iterated designs against real development constraints throughout the process instead of waiting until handoff to test feasibility.',
    ],
    outcome: 'Delivered the full platform: onboarding, goal-setting, round-up savings, and a unified dashboard. The visual and interaction system was built from scratch to make a complex financial product feel clear and welcoming.',
    reflection: '[Add reflection text here.]',
  },
  trustlypay: {
    title: 'TrustlyPay',
    role: 'Product Designer, acting design lead',
    company: 'TrustlyPay',
    timeline: 'Mar 2025–Mar 2026',
    scope: 'Dashboard redesign + platform migration',
    problem: 'The vendor dashboard was slow, difficult to customize, and missing critical reports. Leadership chose a full rebuild, and I helped scope what to keep, cut, and redesign.',
    constraints: 'This was a five-person team: three developers, one QA, and one designer — me. I owned the full planning process, including feature gathering, sitemaps, user flows, prototyping, and the leadership review loop.',
    decisions: [
      'Rebuilt the design system from the brand and logo colors with new typography and spacing to give the product a more professional, coherent look.',
      'Collapsed multi-tab operations onboarding into one form flow, cutting the process from 30–45 minutes to 15–20 minutes, eliminating data blanks, and making ramp-up easier for new hires.',
      'Added role-based access and per-action work logs to make accountability clear across the platform.',
    ],
    outcome: 'Validated the redesign iteratively with the operations team, the primary users. The result was a faster, easier-to-navigate dashboard with critical reporting, color-coded scanning, and onboarding time roughly cut in half.',
    reflection: 'In hindsight, I\'d use stored procedures instead of API calls in a few places — they\'d perform faster there. I learned about this after the fact.',
  },
};

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-ink">{value}</p>
    </div>
  );
}

export function WorkDetail() {
  const { slug } = useParams();
  const project = slug ? projectData[slug] : undefined;

  useSEO({
    title: project
      ? `${project.title} — Shesha Magi | Product Design Case Study`
      : "Project not found — Shesha Magi",
    description: project
      ? `${project.problem} A case study by Shesha Ram Magi, ${project.role} at ${project.company}.`
      : "This project could not be found.",
    path: `/work/${slug ?? ""}`,
  });

  if (!project) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-24 text-center sm:px-8">
        <h1 className="font-serif text-4xl text-ink">Project not found</h1>
        <Link to="/work" className="mt-6 inline-flex items-center gap-1.5 text-sm text-accent">
          <ArrowLeft size={16} /> Back to work
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <Link to="/work" className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-accent">
        <ArrowLeft size={16} /> Back to work
      </Link>

      <header className="pb-16 pt-12 sm:pt-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">Case study · {project.company}</p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-5 max-w-4xl font-serif text-6xl leading-[0.95] text-ink sm:text-8xl">{project.title}</h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{project.scope}</p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
            <MetaItem label="Role" value={project.role} />
            <MetaItem label="Company" value={project.company} />
            <MetaItem label="Timeline" value={project.timeline} />
            <MetaItem label="Scope" value={project.scope} />
          </div>
        </Reveal>
      </header>

      <Reveal>
        <Placeholder label={`${project.title} cover image`} className="w-full rounded-xl" aspectRatio="16/8" />
      </Reveal>

      <div className="mx-auto max-w-3xl py-20 sm:py-28">
        <Reveal>
          <section className="grid grid-cols-1 gap-5 border-t border-line pt-6 sm:grid-cols-4">
            <h2 className="font-mono text-xs uppercase tracking-wide text-ink-soft">01 — Problem</h2>
            <p className="text-lg leading-relaxed text-ink sm:col-span-3">{project.problem}</p>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-20 grid grid-cols-1 gap-5 border-t border-line pt-6 sm:grid-cols-4">
            <h2 className="font-mono text-xs uppercase tracking-wide text-ink-soft">02 — Constraints</h2>
            <p className="text-lg leading-relaxed text-ink sm:col-span-3">{project.constraints}</p>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-20 border-t border-line pt-6">
            <h2 className="font-mono text-xs uppercase tracking-wide text-ink-soft">03 — Key decisions</h2>
            <div className="mt-8 space-y-8">
              {project.decisions.map((decision, index) => (
                <div key={decision} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line pb-8 last:border-0">
                  <span className="font-serif text-3xl text-accent">0{index + 1}</span>
                  <p className="text-lg leading-relaxed text-ink">{decision}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <Placeholder label={`${project.title} supporting image`} className="mt-16 w-full rounded-xl" aspectRatio="16/10" />
        </Reveal>

        <Reveal>
          <section className="mt-20 grid grid-cols-1 gap-5 border-t border-line pt-6 sm:grid-cols-4">
            <h2 className="font-mono text-xs uppercase tracking-wide text-ink-soft">04 — Outcome</h2>
            <p className="text-lg leading-relaxed text-ink sm:col-span-3">{project.outcome}</p>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-20 grid grid-cols-1 gap-5 border-t border-line pt-6 sm:grid-cols-4">
            <h2 className="font-mono text-xs uppercase tracking-wide text-ink-soft">05 — Reflection</h2>
            <p className="text-lg leading-relaxed text-ink sm:col-span-3">{project.reflection}</p>
          </section>
        </Reveal>
      </div>

      <Reveal>
        <div className="flex justify-center border-t border-line pt-10">
          <Link to="/work" className="group inline-flex items-center gap-2 text-sm text-ink hover:text-accent">
            Explore more work <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
          </Link>
        </div>
      </Reveal>
    </article>
  );
}
