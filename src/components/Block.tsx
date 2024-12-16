export const Block = ({
  children,
  columns,
  className,
  noPadding = false,
  noGap = false,
}: {
  children: React.ReactNode;
  columns: 2 | 3;
  className?: string;
  noPadding?: boolean;
  noGap?: boolean;
}) => {

  const columnClass = columns === 2 ? "col-span-2" : "col-span-3 col-start-3";
  const paddingClass = noPadding ? "" : "px-4 py-12 md:p-12";
  const gapClass = noGap ? "" : "gap-4 md:gap-12";
  return <div className={`flex flex-col ${columnClass} ${paddingClass} ${gapClass} ${className}`}>{children}</div>;
};