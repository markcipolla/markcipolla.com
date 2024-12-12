export const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a href={href} target="_blank" className="text-blue-600 hover:text-blue-800 hover:underline">
    {children}
  </a>
);