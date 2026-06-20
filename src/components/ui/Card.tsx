import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800",
        className,
      )}
    >
      {children}
    </div>
  );
}
