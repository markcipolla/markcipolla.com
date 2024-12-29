import Image from "next/image";
import screenshot from "./grizzlyguts.png";
import { Section, Block, Header, ExternalLink, Tags } from "@/components";

export default function GrizzlyGuts() {
  return (
    <>
      <Section>
        <Block columns={3}>
          <p>Helping people find allergen-free and -friendly restaurants, cafes and shops across Australia.</p>
        </Block>
      </Section>
      <Section>
        <Header label="Grizzly Guts">
          <div className="flex flex-col gap-8 items-end">
            <ExternalLink href="https://grizzlyguts.com.au">grizzlyguts.com.au</ExternalLink>
            <Tags tags={["Svelte", "TypeScript", "Tailwind", "NocoDB"]} />
          </div>
        </Header>
        <Block columns={3}>
          <p>
            It&apos;s hard to find places to eat when you have dietary restrictions. Grizzly Guts came about when a friend was diagnosed with Coeliac disease, and I wanted to help us find where our
            friendship group could eat.
          </p>

          <p>
            Grizzly Guts began as a way to find gluten-free restaurants, cafes and shops across Australia. It will expand to include other dietary restrictions, such as vegan, vegetarian, dairy-free,
            halal, fructose-friendly, and general allergen-friendly businesses, and is a work in progress. It&apos;s built with <ExternalLink href="https://svelte.dev/">Svelte</ExternalLink>,{" "}
            <ExternalLink href="https://www.typescriptlang.org/">TypeScript</ExternalLink>, <ExternalLink href="https://tailwindcss.com/">Tailwind</ExternalLink> and{" "}
            <ExternalLink href="https://nocodb.com/">NocoDB</ExternalLink>. I&apos;ve been using it as a chance to learn Svelte, and how low-code tools like NocoDB can be used to get interfaces to
            databases up quickly and made accessible by non-engineering easily.
          </p>

          <div className="flex justify-center">
            <Image src={screenshot} alt="GrizzlyGuts" />
          </div>

          <p>
            <ExternalLink href="https://coeliac.org.au/">Coeliac Australia</ExternalLink> is the national body that supports Australians diagnosed with coeliac disease and associated conditions
            requiring a gluten-free diet. They have an accreditation process that restaurants, cafés, bakeries, butchers and food service businesses can follow.
          </p>
        </Block>
      </Section>
    </>
  );
}
