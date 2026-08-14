import { Link, useLocation } from "react-router-dom";
import { EmailLink } from "@/components/EmailLink";

export function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: "Intro", path: "/" },
    { label: "Work", path: "/work" },
    { label: "Life", path: "/life" },
  ];

  const isActive = (path: string) => {
    if (path.startsWith("/#")) return location.pathname === "/";
    return location.pathname === path;
  };

  return (
    <nav className="nav-blur fixed top-0 left-0 z-50 w-full border-b border-line">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:px-8">
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

        <div className="flex items-center gap-0.5 rounded-full border border-line bg-surface/50 p-1 sm:gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`rounded-full px-3 py-1.5 text-xs transition-colors duration-200 sm:px-4 sm:text-sm ${
                isActive(item.path)
                  ? "bg-ink text-bg"
                  : "text-ink-soft hover:text-ink"
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
