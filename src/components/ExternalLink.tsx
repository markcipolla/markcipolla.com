export const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a href={href} target="_blank" className="text-blue-600 underline-offset-8 underline decoration-from-font hover:text-blue-800 hover:decoration-wavy">
    {children}
  </a>
);