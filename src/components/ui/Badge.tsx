import { cn } from "../../lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "sky" | "white";
  className?: string;
}

export function Badge({ children, variant = "blue", className }: BadgeProps) {
  const variantClass = {
    blue: "bg-blue-500/10 text-blue-700 border-blue-200/60 backdrop-blur-md",
    sky: "bg-sky-50 text-sky-700 border-sky-100",
    white: "bg-white/60 text-blue-700 border-white/60 backdrop-blur-sm",
  }[variant];

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border",
        variantClass,
        className
      )}
    >
      {children}
    </span>
  );
}
