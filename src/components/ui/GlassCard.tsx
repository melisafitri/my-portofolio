import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "../../lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  hover?: boolean;
  rounded?: "2xl" | "3xl" | "4xl";
}

export function GlassCard({
  children,
  className,
  hover = true,
  rounded = "2xl",
  ...props
}: GlassCardProps) {
  const roundedClass = {
    "2xl": "rounded-2xl",
    "3xl": "rounded-[2rem]",
    "4xl": "rounded-[2.5rem]",
  }[rounded];

  return (
    <motion.div
      className={cn(
        "bg-white/20 backdrop-blur-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
        roundedClass,
        hover && "hover:bg-white/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
