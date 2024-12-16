export const Section = ({ children }: { children: React.ReactNode }) => (
  <div className="text-md sm:text-lg lg:text-xl md:grid grid-cols-5 divide-x divide-green-200 font-body leading-relaxed">
    {children}
  </div>
)