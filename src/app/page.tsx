import converter from "number-to-words";
import { Section, Block, Header, ExternalLink, InternalLink } from "@/components";
import React from "react";

interface Company {
  name: string;
  url: string;
}

const previousCompanies: Company[] = [
  {
    name: "Cash App",
    url: "https://cash.app/",
  },
  {
    name: "Cogent",
    url: "https://cogent.co/",
  },
  {
    name: "Flux",
    url: "https://www.fluxfederation.com/",
  },
  {
    name: "Clover",
    url: "https://www.clover.com.au/",
  },
  {
    name: "The Conversation",
    url: "https://theconversation.com/",
  },
  {
    name: "SitePoint",
    url: "https://www.sitepoint.com/",
  },
  {
    name: "realestate.com.au",
    url: "https://www.realestate.com.au/",
  },
];

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const CommaSeparate = ({ companies, separator = ", " }: { companies: Company[]; separator?: string }) => {
  return companies.map((company, index) => [
    index > 0 && separator,
    index == companies.length - 1 && "and ",
    <ExternalLink key={`company-${slugify(company.name)}`} href={company.url}>
      {company.name}
    </ExternalLink>,
  ]);
};

const yearStarted = 2008;

export default function Home() {
  const yearsExperience = converter.toWords(new Date().getFullYear() - yearStarted);
  return (
    <>
      <Section>
        <Block columns={3}>
          <p>I&lsquo;m passionate about building things.</p>
          <p>I&lsquo;m a full-stack, product-thinking software engineer with an art and graphic design background.</p>
          <p>
            I have extensive knowledge and experience in building web applications, with over {yearsExperience} years in the industry across a number of business domains, and successfully delivering
            large scale projects to millions of users.
          </p>
        </Block>
      </Section>

      <Section>
        <Header label="Projects" />

        <Block columns={3}>
          <p>
            <InternalLink href="/homebutler">HomeButler</InternalLink> is an effort to find use for my {converter.toWords(new Date().getFullYear() - 2012)} year old 1st gen iPad mini by building a teeny, scrappy app for an incredibly old iOS version to have an interface to control my home automation. 
          </p>
          <p>
            <InternalLink href="/remoteretro">RemoteRetro</InternalLink> is a small, profitable SaaS product that helps (mostly software development) teams run better Agile retrospective meetings
            (especially when team members are working remote).
          </p>
          <p>
            <InternalLink href="/grizzlyguts">Grizzly Guts</InternalLink> is an early-stage project to help people with dietary restrictions find restaurants, cafes and shops that cater to their
            needs.
          </p>
        </Block>
      </Section>

      <Section>
        <Header label="Technical capabilities" />
        <Block columns={3}>
          <dl className="grid grid-cols-3">
            <Technology category="Frontend" technologies="Deep knowledge of HTML/CSS, React, Typescript / Javascript, Tailwind, Bootstrap, Material Design, Formik & Yup, Svelte, jQuery" />
            <Technology category="Backend" technologies="Ruby, Node, Prisma, .Net, Kotlin" />
            <Technology category="Design" technologies="Figma, Sketch, Adobe Illustrator & Photoshop" />
            <Technology category="Databases" technologies="PostgreSQL, mySQL" />
            <Technology category="Mapping" technologies="Leaflet, Geoman, Google Maps" />
            <Technology category="Testing" technologies="RSpec, Playwright, Cypress" />
            <Technology category="DevOps" technologies="Github CI, Buildkite, Jenkins, CircleCI" />
            <Technology category="Containers" technologies="Docker, Docker Composer" />
          </dl>
        </Block>
      </Section>

      <Section>
        <Header label="Work" />
        <Block columns={3}>
          <p>
            I&lsquo;m currently working as a staff engineer with <ExternalLink href="https://fresho.com">Fresho</ExternalLink>.
          </p>
          <p>I have worked previously with{" "}
            Carbon Plus on the{" "}
            <ExternalLink href="https://planr.gov.au">Platform for Land and Nature Repair</ExternalLink> for the{" "}
            <ExternalLink href="https://www.dcceew.gov.au/">Department of Climate Change, Energy, the Environment and Water</ExternalLink> and{" "}
            <ExternalLink href="https://www.anu.edu.au/">Australian National University</ExternalLink>, and before that{" "}
            <CommaSeparate companies={previousCompanies} />.
          </p>

          <p>
            Read my full <InternalLink href="/cv">curriculum vitæ</InternalLink>.
          </p>
        </Block>
      </Section>
    </>
  );
}

const Technology = ({ category, technologies }: { category: string; technologies: string }) => (
  <>
    <dt className="font-bold">{category}</dt>
    <dd className="col-span-2">{technologies}</dd>
  </>
);
