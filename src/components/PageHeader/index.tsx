import Link from "next/link";
import Image from "next/image";

import me from "./me.jpeg";
import saw from "./saw.svg";
import { Block } from "../";

export const PageHeader = () => (
  <Block columns={2}>
    <Link href="/" className="flex flex-row gap-4">
      <div className="relative w-28 rounded-full overflow-hidden border-2 border-black hover:border-green-800 shadow-xl">
        <Image src={me} alt="Mark Cipolla" className="w-28"/>
        <Image src={saw} alt="Logo" className="w-28 transition-opacity opacity-0 hover:opacity-80 absolute top-0 left-0" />
      </div>
      <h1 className="max-w-[240px] text-7xl font-thin leading-[56px] hover:text-green-800 font-heading uppercase">
        Mark C<span className="tracking-[-.045em]">ipol</span>la
      </h1>
    </Link>
  </Block>
);
