import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { WorkRow } from "@/components/WorkRow";
import { EmailLink } from "@/components/EmailLink";
import { useSEO } from "@/hooks/useSEO";

const lighterProjects = [
  {
    title: "Apple Messages Redesign",
    description: "A quieter, more considered take on everyday messaging.",
    image: "/imessage.png",
    href: "https://www.behance.net/gallery/223395871/Apple-Messages-Redesign",
  },
  {
    title: "Bookutopia",
    description: "A marketplace experience for buying and selling used books.",
    image: "/bookutopia.png",
    href: "https://www.behance.net/gallery/158817909/Bookutopia-Buy-and-Sell-Used-Books-Case-Study",
  },
  {
    title: "Amazon Return Complexity",
    description: "When Self Service Fails Silently.",
    image: "/amazon-return.png",
    href: "https://www.behance.net/gallery/240757657/When-Self-Service-Fails-Silently",
  },
  {
    title: "Dome",
    description: "A smart home app designed around calm, clear control.",
    image: "/dome.png",
    href: "https://www.behance.net/gallery/217652015/Dome-Smart-Home-App",
  },
  {
    title: "Candidate Assessment Automation",
    description: "Making candidate evaluation more consistent and efficient.",
    image: "/candidate-assessment.png",
    href: "https://www.behance.net/gallery/222691785/Automating-Candidate-Assessments",
  },
];

export function WorkList() {
  useSEO({
    title: "Selected Work — Shesha Magi | Product & UI/UX Design Portfolio",
    description:
      "Product design case studies by Shesha Ram Magi, including TrustlyPay's fintech dashboard redesign and Growcoins, a savings and investment platform.",
    path: "/work",
  });

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-accent"
      >
        <ArrowLeft size={16} /> Back home
      </Link>

      <Reveal>
        <p className="mt-12 font-mono text-xs uppercase tracking-wide text-ink-soft">
          Work
        </p>
      </Reveal>
      <Reveal delay={100}>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight text-ink sm:text-7xl">
          Selected Projects
        </h1>
      </Reveal>
      <Reveal delay={200}>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
          Products, platforms, and interfaces shaped through strategy, systems
          thinking, and close collaboration.
        </p>
      </Reveal>

      <section className="mt-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
            01 — Deep dives
          </p>
        </Reveal>
        <div className="mt-6 border-t border-line">
          <WorkRow
            index="01"
            title="TrustlyPay Fintech Dashboard"
            subtitle="Cross-border payments dashboard redesign"
            tags={["Product Design", "Dashboard", "React"]}
            imageLabel="Add TrustlyPay cover"
            image="/tp-dashboard.jpg"
            to="/work/trustlypay"
          />
          <WorkRow
            index="02"
            title="Growcoins"
            subtitle="A savings and investment platform for Gen-Z"
            tags={["UI/UX", "Product Design", "Design System"]}
            imageLabel="Add Growcoins cover"
            image="/growcoins.jpg"
            to="/work/growcoins"
          />
        </div>
      </section>

      <section className="mt-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
            02 — Pet projects
          </p>
        </Reveal>
        <div className="mt-6 border-t border-line">
          <WorkRow
            index="01"
            title="TakeOne"
            subtitle="A project management tool for filmmakers"
            tags={["Product Design", "0→1", "Side Project"]}
            imageLabel="Add TakeOne cover"
            image="/takeone.jpg"
            to="/work/take-one"
          />
          <WorkRow
            index="02"
            title="Vano"
            subtitle="A transportation app for private van drivers who transport children to school"
            tags={["Product Design", "Mobile", "Side Project"]}
            imageLabel="Add Vano cover"
            image="/vano.png"
            to="/work/vano"
          />
        </div>
      </section>

      <section className="mt-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
            03 — More work
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
            Smaller Explorations
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {lighterProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 80}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-line bg-surface/40 p-3 transition-transform duration-300 hover:-translate-y-1"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[16/10] w-full rounded-lg object-cover"
                  />
                ) : (
                  <Placeholder
                    label="Project image"
                    className="w-full rounded-lg"
                    aspectRatio="16/10"
                  />
                )}
                <div className="flex items-start justify-between gap-4 px-2 pb-2 pt-5">
                  <div>
                    <h3 className="font-serif text-2xl text-ink transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {project.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-ink-soft transition-transform group-hover:rotate-45 group-hover:text-accent"
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* <Reveal>
        <section className="mt-24 border-y border-line py-10">
          <p className="max-w-3xl font-serif text-3xl leading-snug text-ink sm:text-4xl">
            As UX Designer I on Amazon Music, I partnered with Product,
            Engineering, and User Research to design user flows, wireframes, and
            prototypes, and contributed to the Amazon Music design system.
            Design artifacts from this role are confidential.
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-wide text-ink-soft">
            Amazon Music · UX Designer I
          </p>
        </section>
      </Reveal> */}

      <Reveal>
        <section className="py-28 text-center">
          <p className="mx-auto max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
            I can create you anything from a simple website to a custom complex
            ERP system.
          </p>
          <EmailLink
            email="hello@sheshamagi.in"
            className="mt-6 inline-block font-mono text-xs uppercase tracking-wide text-accent hover:underline"
          >
            Let&apos;s talk →
          </EmailLink>
        </section>
      </Reveal>
    </div>
  );
}
