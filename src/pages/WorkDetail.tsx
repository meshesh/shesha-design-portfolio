import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { useSEO } from "@/hooks/useSEO";

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
  coverImage?: string;
  displayImage1?: string;
  displayImage2?: string;
};

const projectData: Record<string, Project> = {
  growcoins: {
    title: "Growcoins",
    role: "Lead Product Designer",
    company: "Xyenta",
    timeline: "6 months (project ran 14 months total)",
    scope: "0→1 Product strategy · UX/UI · Design system",
    problem:
      "Beginner and casual investors struggle to build consistent saving and investing habits. Growcoins simplifies saving, investing, and goal-setting so building financial momentum feels approachable.",
    constraints:
      "I was the lead designer working with a small team of junior developers. Leadership wanted a fresh visual direction, and I proposed Neomorphism — new to the whole team — then balanced that ambition against what we could realistically implement, iterating closely with development throughout.",
    decisions: [
      "Proposed and committed to Neomorphism as the system language, keeping it consistent through close, continuous iteration with development.",
      "Owned the visual and UX architecture of the product, structuring it around three pillars — Intelligent Savings, Goal-Driven Investing, and Unified Money Management — in collaboration with product and leadership.",
      "Iterated designs against real development constraints throughout the process instead of waiting until handoff to test feasibility.",
    ],
    outcome:
      "Delivered the full platform: onboarding, goal-setting, round-up savings, and a unified dashboard. The visual and interaction system was built from scratch to make a complex financial product feel clear and welcoming. I was on the project for its first 6 months; the project continued for another 8 months before being shelved due to new RBI and SEBI regulations affecting the fintech space.",
    reflection:
      "Growcoins was my first real hands-on application of Neomorphism, and I learned the style largely on the job. Looking back, I'd push the execution further — tighter shadow/light consistency, more disciplined use of depth — with what I know now. It was also a good lesson in designing ambitious visual systems alongside a small, junior dev team: the strongest results came from staying close to implementation rather than designing in isolation and handing off.",
    coverImage: "/gc-cover.png",
    displayImage1: "/gc01.jpg",
    displayImage2: "/gc02.jpg",
  },

  trustlypay: {
    title: "TrustlyPay Dashboard",
    role: "Product Designer, Acting Design Lead",
    company: "TrustlyPay",
    timeline: "Mar 2025–Mar 2026",
    scope: "Dashboard Redesign + Platform Migration",
    problem:
      "The vendor dashboard was slow, difficult to customize, and missing critical reports. Leadership chose a full rebuild, and I helped scope what to keep, cut, and redesign.",
    constraints:
      "This was a five-person team: three developers, one QA, and one designer — me. I owned the full planning process, including feature gathering, sitemaps, user flows, prototyping, and the leadership review loop. The stack was also migrated from PHP/Java to React, Node, and Java, which meant rebuilding the platform custom to our use case rather than porting it as-is — some functionality was cut, some added.",
    decisions: [
      "Rebuilt the design system from the brand and logo colors with new typography and spacing to give the product a more professional, coherent look. The color direction itself was a leadership call toward brand colors; if it were my decision alone, I'd have pushed for a more user-friendly, fintech-appropriate palette over the more generic brand-led one.",
      "Collapsed multi-tab operations onboarding into one form flow, cutting the process from 30–45 minutes to 15–20 minutes, eliminating data blanks, and making ramp-up easier for new hires.",
      "Added role-based access and per-action work logs to make accountability clear across the platform.",
    ],
    outcome:
      "Validated the redesign iteratively with the operations team, the primary users. Across the 6–8 merchants using the platform, navigation time per functionality dropped by 22%, and load times improved significantly thanks to the new stack. The result was a faster, easier-to-navigate dashboard with critical reporting, color-coded scanning, and onboarding time roughly cut in half.",
    reflection:
      "In hindsight, I'd use stored procedures instead of API calls in a few places — they'd perform faster there. I learned about this after the fact.",
    coverImage: "/trustlypay-cover.png",
    displayImage1: "/tp01.jpg",
    displayImage2: "/tp02.jpg",
  },
  "take-one": {
    title: "TakeOne",
    role: "[Add role]",
    company: "Personal project",
    timeline: "[Add timeline]",
    scope: "[Add scope, e.g. 0→1 Product design · Mobile/Web]",
    problem:
      "[Add problem statement] — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Independent filmmakers juggle scattered tools for scheduling, budgeting, and crew coordination, and TakeOne sets out to bring that into one place.",
    constraints:
      "[Add constraints] — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    decisions: [
      "[Add key decision one] — Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "[Add key decision two] — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "[Add key decision three] — Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    ],
    outcome:
      "[Add outcome] — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reflection:
      "[Add reflection] — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    coverImage: "",
    displayImage1: "",
    displayImage2: "",
  },
  vano: {
    title: "Vano",
    role: "[Add role]",
    company: "Personal project",
    timeline: "[Add timeline]",
    scope: "[Add scope, e.g. 0→1 Product design · Mobile app]",
    problem:
      "[Add problem statement] — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parents need a safer, more transparent way to track private van drivers who transport their children to and from school, and Vano sets out to solve that.",
    constraints:
      "[Add constraints] — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    decisions: [
      "[Add key decision one] — Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "[Add key decision two] — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "[Add key decision three] — Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    ],
    outcome:
      "[Add outcome] — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reflection:
      "[Add reflection] — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    coverImage: "",
    displayImage1: "",
    displayImage2: "",
  },
};

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft">
        {label}
      </p>
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
        <Link
          to="/work"
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-accent"
        >
          <ArrowLeft size={16} /> Back to work
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <Link
        to="/work"
        className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-accent"
      >
        <ArrowLeft size={16} /> Back to work
      </Link>

      <header className="pb-16 pt-12 sm:pt-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
            Case study · {project.company}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-5 max-w-4xl font-serif text-6xl leading-[0.95] text-ink sm:text-8xl">
            {project.title}
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {project.scope}
          </p>
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
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={`${project.title} cover`}
            className="w-full rounded-xl object-cover"
            style={{ aspectRatio: "16/10" }}
          />
        ) : (
          <Placeholder
            label={`${project.title} cover image`}
            className="w-full rounded-xl"
            aspectRatio="16/8"
          />
        )}
      </Reveal>

      <div className="mx-auto max-w-3xl py-20 sm:py-28">
        <Reveal>
          <section className="grid grid-cols-1 gap-5 border-t border-line pt-6 sm:grid-cols-4">
            <h2 className="font-mono text-xs uppercase tracking-wide text-ink-soft">
              01 — Problem
            </h2>
            <p className="text-lg leading-relaxed text-ink sm:col-span-3">
              {project.problem}
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-20 grid grid-cols-1 gap-5 border-t border-line pt-6 sm:grid-cols-4">
            <h2 className="font-mono text-xs uppercase tracking-wide text-ink-soft">
              02 — Constraints
            </h2>
            <p className="text-lg leading-relaxed text-ink sm:col-span-3">
              {project.constraints}
            </p>
          </section>
        </Reveal>
        <Reveal>
          {project.displayImage1 ? (
            <img
              src={project.displayImage1}
              alt={`${project.title} supporting`}
              className="mt-16 w-full rounded-xl object-cover"
              style={{ aspectRatio: "16/10" }}
            />
          ) : (
            <Placeholder
              label={`${project.title} supporting image`}
              className="mt-16 w-full rounded-xl"
              aspectRatio="16/10"
            />
          )}
        </Reveal>

        <Reveal>
          <section className="mt-20 border-t border-line pt-6">
            <h2 className="font-mono text-xs uppercase tracking-wide text-ink-soft">
              03 — Key decisions
            </h2>
            <div className="mt-8 space-y-8">
              {project.decisions.map((decision, index) => (
                <div
                  key={decision}
                  className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line pb-8 last:border-0"
                >
                  <span className="font-serif text-3xl text-accent">
                    0{index + 1}
                  </span>
                  <p className="text-lg leading-relaxed text-ink">{decision}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          {project.displayImage2 ? (
            <img
              src={project.displayImage2}
              alt={`${project.title} supporting`}
              className="mt-16 w-full rounded-xl object-cover"
              style={{ aspectRatio: "16/10" }}
            />
          ) : (
            <Placeholder
              label={`${project.title} supporting image`}
              className="mt-16 w-full rounded-xl"
              aspectRatio="16/10"
            />
          )}
        </Reveal>

        <Reveal>
          <section className="mt-20 grid grid-cols-1 gap-5 border-t border-line pt-6 sm:grid-cols-4">
            <h2 className="font-mono text-xs uppercase tracking-wide text-ink-soft">
              04 — Outcome
            </h2>
            <p className="text-lg leading-relaxed text-ink sm:col-span-3">
              {project.outcome}
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-20 grid grid-cols-1 gap-5 border-t border-line pt-6 sm:grid-cols-4">
            <h2 className="font-mono text-xs uppercase tracking-wide text-ink-soft">
              05 — Reflection
            </h2>
            <p className="text-lg leading-relaxed text-ink sm:col-span-3">
              {project.reflection}
            </p>
          </section>
        </Reveal>
      </div>

      <Reveal>
        <div className="flex justify-center border-t border-line pt-10">
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-sm text-ink hover:text-accent"
          >
            Explore more work{" "}
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:rotate-45"
            />
          </Link>
        </div>
      </Reveal>
    </article>
  );
}
