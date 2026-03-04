import { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  actions?: ReactNode;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  actions
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between`}>
      <div className={`flex flex-col gap-3 ${alignment}`}>
        {eyebrow && (
          <span className="badge-soft">{eyebrow}</span>
        )}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="max-w-2xl text-sm sm:text-base text-white/75">
            {description}
          </p>
        )}
        <span className="mt-1 h-[2px] w-16 bg-gradient-to-r from-accent to-transparent" />
      </div>
      {actions && <div className="mt-4 sm:mt-0">{actions}</div>}
    </div>
  );
}

