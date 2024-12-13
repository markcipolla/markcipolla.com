export const Block = ({
  children,
  columns,
  className
}: {
  children: React.ReactNode;
  columns: 2 | 3;
  className?: string;
}) => {

  const columnClass = columns === 2 ? "col-span-2" : "col-span-3 col-start-3";
  return <div className={`p-4 md:p-12 flex flex-col gap-4 md:gap-12 ${columnClass} ${className}`}>{children}</div>;
};