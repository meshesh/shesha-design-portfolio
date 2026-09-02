import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";

export function NotFound() {
  const { pathname } = useLocation();

  useSEO({
    title: "Page not found — Shesha Magi",
    description: "This page could not be found.",
    path: pathname,
  });

  return (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
        404
      </p>
      <h1 className="mt-4 font-serif text-4xl text-ink">Page not found</h1>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-1.5 text-sm text-accent"
      >
        <ArrowLeft size={16} /> Back home
      </Link>
    </div>
  );
}
