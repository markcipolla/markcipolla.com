import { Block } from "@/components";

export const Header = ({ label }: { label: string }) => (
  <Block columns={2}>
    <h2 className="text-3xl text-green-700 text-right font-heading">{label}</h2>
  </Block>
);