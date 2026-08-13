import { Mail, Dribbble, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const socials = [
    { label: 'Dribbble', href: 'https://dribbble.com', icon: Dribbble },
    { label: 'Behance', href: 'https://behance.net', icon: BehanceIcon },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  ];

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <a
              href="mailto:sheshamagi18@gmail.com"
              className="font-serif text-3xl text-ink hover:text-accent"
            >
              sheshamagi18@gmail.com
            </a>
            <p className="mt-2 text-sm text-ink-soft">Available for freelance & full-time roles</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft transition-all duration-200 hover:border-accent hover:text-accent"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-10 text-xs text-ink-soft">
          © {new Date().getFullYear()} Shesha Magi. Designed & built with care.
        </p>
      </div>
    </footer>
  );
}

function BehanceIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-1.635 2-3.156 2-2.296 0-4.07-1.838-4.07-4.073 0-2.236 1.774-4.073 4.07-4.073 2.105 0 3.682 1.59 3.682 3.99 0 .34-.036.61-.072.81h-5.316c.09.95.81 1.51 1.706 1.51.654 0 1.2-.29 1.44-.81h1.716zm-5.546-2.39h3.214c-.072-.83-.72-1.4-1.58-1.4-.91 0-1.526.55-1.634 1.4zM7.684 6.6c1.46 0 2.71.39 3.62 1.17.91.78 1.36 1.86 1.36 3.24 0 .85-.2 1.59-.6 2.22-.4.63-.99 1.12-1.77 1.47L13 18H9.78l-2.26-3.16H5.72V18H3V6.6h4.684zm-1.964 5.84h1.93c.72 0 1.26-.17 1.62-.51.36-.34.54-.79.54-1.35 0-.57-.18-1.02-.54-1.36-.36-.34-.9-.51-1.62-.51h-1.93v3.73z" />
    </svg>
  );
}
