import Link from "next/link";

export const PageHeader = () => (
  <div className="p-6 md:p-12 col-span-2">
    <h1 className="max-w-[240px] text-7xl font-thin leading-[56px] hover:text-orange-800 font-heading uppercase">
      <Link href="/">Mark C<span className="tracking-[-.045em]">ipol</span>la</Link>
    </h1>
  </div>
);
