import Link from "next/link";

export const InternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href} className="text-orange-500 hover:text-orange-800 hover:underline">
    {children}
  </Link>
);