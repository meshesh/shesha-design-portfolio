import { Link, useLocation } from "react-router-dom";
import { EmailLink } from "@/components/EmailLink";
import { useLayoutEffect, useRef, useState } from "react";

export function Navbar() {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState<{
    left: number;
    width: number;
  } | null>(null);

  const navItems = [
    { label: "Intro", path: "/" },
    { label: "Work", path: "/work" },
    { label: "Life", path: "/life" },
  ];

  const isActive = (path: string) => {
    if (path.startsWith("/#")) return location.pathname === "/";
    return location.pathname === path;
  };

  const activeItem =
    navItems.find((item) => isActive(item.path)) ?? navItems[0];

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const el = itemRefs.current[activeItem.label];
      const container = containerRef.current;
      if (!el || !container) return;
      const elRect = el.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setIndicator({
        left: elRect.left - containerRect.left,
        width: elRect.width,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeItem.label]);

  return (
    <nav className="nav-blur fixed top-0 left-0 z-50 w-full border-b border-line">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:px-8">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2"
          aria-label="Home"
        >
          <img
            src="/logo.png"
            alt="Shesha"
            width={28}
            height={28}
            className="h-9 w-9 sm:h-24 sm:w-24"
          />
        </Link>

        <div
          ref={containerRef}
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 rounded-full border border-line bg-surface/50 p-1 sm:gap-1"
        >
          {indicator && (
            <span
              className="absolute inset-y-1 rounded-full bg-ink transition-[left,width] duration-300 ease-out"
              style={{ left: indicator.left, width: indicator.width }}
            />
          )}
          {navItems.map((item) => (
            <Link
              key={item.label}
              ref={(el) => {
                itemRefs.current[item.label] = el;
              }}
              to={item.path}
              className={`relative z-10 rounded-full px-3 py-1.5 text-xs transition-colors duration-300 sm:px-4 sm:text-sm ${
                isActive(item.path) ? "text-bg" : "text-ink-soft hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <EmailLink
          email="sheshamagi18@gmail.com"
          className="shrink-0 rounded-full bg-accent px-4 py-2 text-xs font-medium text-white transition-transform duration-200 hover:scale-[1.03] sm:px-5 sm:text-sm"
        >
          Contact
        </EmailLink>
      </div>
    </nav>
  );
}
