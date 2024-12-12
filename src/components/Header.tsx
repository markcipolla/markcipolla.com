import { Block } from "@/components";

export const Header = ({
  label,
  children,
}: {
  label: string;
  children?: React.ReactNode;
}) => (
  <Block columns={2} className="text-right">
    <div className="flex flex-col gap-6 sticky top-12">
      <h2 className="text-4xl font-heading  font-extrabold text-green-700">
        {label}
      </h2>
      {children}
    </div>
  </Block>
);
