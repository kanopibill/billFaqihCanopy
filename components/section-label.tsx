export default function SectionLabel({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={`label inline-flex items-center gap-3 ${
        tone === "dark" ? "text-brand" : "text-brand-dark"
      }`}
    >
      <span className="h-px w-8 bg-current" />
      {children}
    </span>
  );
}
