import { useSnackbar } from "@/components/Snackbar";

interface EmailLinkProps {
  email: string;
  className?: string;
  children: React.ReactNode;
}

function isDesktop() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function EmailLink({ email, className, children }: EmailLinkProps) {
  const { showSnackbar } = useSnackbar();

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isDesktop()) return;

    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    try {
      await navigator.clipboard.writeText(email);
      showSnackbar("Email copied to clipboard", {
        top: rect.bottom + 10,
        left: rect.left,
        width: rect.width,
      });
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <a href={`mailto:${email}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
