import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  patterned?: boolean;
  className?: string;
  children: ReactNode;
};

export default function Section({
  id,
  patterned,
  className,
  children
}: SectionProps) {
  return (
    <section
      id={id}
      className={`page-section ${patterned ? "section-pattern" : ""} ${className ?? ""}`}
    >
      <div className="section-inner">{children}</div>
    </section>
  );
}

