import { createContext, useCallback, useContext, useRef, useState } from "react";

interface SnackbarContextValue {
  showSnackbar: (message: string) => void;
}

const SnackbarContext = createContext<SnackbarContextValue | null>(null);

export function SnackbarProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const showSnackbar = useCallback((msg: string) => {
    clearTimeout(timeoutRef.current);
    setMessage(msg);
    timeoutRef.current = setTimeout(() => setMessage(null), 2500);
  }, []);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
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
    </SnackbarContext.Provider>
  );
}

export function useSnackbar() {
  const ctx = useContext(SnackbarContext);
  if (!ctx) throw new Error("useSnackbar must be used within a SnackbarProvider");
  return ctx;
}
