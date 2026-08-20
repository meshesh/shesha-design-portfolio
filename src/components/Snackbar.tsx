import { createContext, useCallback, useContext, useRef, useState } from "react";

interface Anchor {
  top: number;
  left: number;
  width: number;
}

interface SnackbarContextValue {
  showSnackbar: (message: string, anchor?: Anchor) => void;
}

const SnackbarContext = createContext<SnackbarContextValue | null>(null);

export function SnackbarProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const [anchor, setAnchor] = useState<Anchor | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const showSnackbar = useCallback((msg: string, nextAnchor?: Anchor) => {
    clearTimeout(timeoutRef.current);
    setMessage(msg);
    setAnchor(nextAnchor ?? null);
    timeoutRef.current = setTimeout(() => setMessage(null), 2500);
  }, []);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {anchor ? (
        <div
          className={`pointer-events-none fixed z-[100] transition-all duration-300 ${
            message ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
          }`}
          style={{
            top: anchor.top,
            left: anchor.left + anchor.width / 2,
            transform: "translateX(-50%)",
          }}
          aria-live="polite"
        >
          <div className="whitespace-nowrap rounded-full bg-ink px-5 py-2.5 font-mono text-xs text-bg shadow-lg">
            {message}
          </div>
        </div>
      ) : (
        <div
          className={`pointer-events-none fixed inset-x-0 bottom-6 z-[100] flex justify-center px-4 transition-all duration-300 ${
            message ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
          aria-live="polite"
        >
          <div className="rounded-full bg-ink px-5 py-2.5 font-mono text-xs text-bg shadow-lg">
            {message}
          </div>
        </div>
      )}
    </SnackbarContext.Provider>
  );
}

export function useSnackbar() {
  const ctx = useContext(SnackbarContext);
  if (!ctx) throw new Error("useSnackbar must be used within a SnackbarProvider");
  return ctx;
}
