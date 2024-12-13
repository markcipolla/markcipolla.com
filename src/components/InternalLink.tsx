import Link from "next/link";

export const InternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href} className="text-orange-500 underline-offset-8 underline decoration-from-font hover:text-orange-800 hover:decoration-wavy">
    {children}
  </Link>
);