export default function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`label inline-flex items-center gap-3 ${
        light ? "text-brand-light" : "text-brand"
      }`}
    >
      <span className="h-px w-8 bg-current" />
      {children}
    </span>
  );
}
