import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  iconClassName?: string;
  className?: string;
}

export function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  iconClassName = "text-blue-500",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn("mb-12", className)}
    >
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
        <Icon className={cn("w-8 h-8", iconClassName)} />
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-slate-600 max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
