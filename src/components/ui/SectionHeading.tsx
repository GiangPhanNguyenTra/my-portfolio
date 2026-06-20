import type { LucideIcon } from "lucide-react";

type SectionHeadingProps = {
  title: string;
  Icon: LucideIcon;
  iconClassName?: string;
  centered?: boolean;
};

export function SectionHeading({
  title,
  Icon,
  iconClassName,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white inline-flex items-center">
        <Icon className={iconClassName ?? "text-emerald-500 mr-3"} />
        {title}
      </h2>
    </div>
  );
}
