import Link from "next/link";
import Image from "next/image";

import me from "./me.jpeg";
import saw from "./saw.svg";
import { Block } from "../";

export const PageHeader = () => (
  <Block columns={2} className="col-span-5">
    <Link href="/" className="flex flex-row gap-4 items-center">
      <div className="w-12 h-12 md:w-28 md:h-28 relative rounded-full overflow-hidden border-2 border-black hover:border-green-800 shadow-xl">
        <Image src={me} alt="Mark Cipolla" className="w-12 h-12 md:w-28 md:h-28"/>
        <Image src={saw} alt="Logo" className="w-12 h-12 md:w-28 md:h-28 transition-opacity opacity-0 hover:opacity-80 absolute top-0 left-0" />
      </div>
      <h1 className="max-w-[140px] md:max-w-[240px] text-4xl md:text-7xl font-thin leading-[29px] md:leading-[56px] hover:text-green-800 font-heading uppercase">
        Mark C<span className="tracking-[-.045em]">ipol</span>la
      </h1>
    </Link>
  </Block>
);
