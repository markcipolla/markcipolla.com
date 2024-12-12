export const Section = ({ children }: { children: React.ReactNode }) => (
  <div className="text-xl md:grid grid-cols-5 divide-x divide-green-300 font-body">
    {children}
  </div>
)