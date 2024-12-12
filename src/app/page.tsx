import {
  Section,
  Block,
  Header,
  ExternalLink,
  InternalLink,
} from "@/components";
import React from "react";

export default function Home() {
  return (
    <>
      <Section>
        <Block columns={3}>
          <p>I&lsquo;m passionate about building things.</p>
          <p>
            I&lsquo;m a full-stack, product-thinking software engineer with an
            art and graphic design background.
          </p>
          <p>
            I have extensive knowledge and experience in building web applications, with over
            sixteen years in the industry across a number of business domains,
            and successfully delivering large scale projects to millions of
            users.
          </p>
        </Block>
      </Section>

      <Section>
        <Header label="Work" />
        <Block columns={3}>
          <p>
            I&lsquo;m currently working with{" "}
            <ExternalLink href="https://carbonplus.earth">
              Carbon Plus
            </ExternalLink>{" "}
            on the{" "}
            <ExternalLink href="https://planr.gov.au">
              Platform for Land and Nature Repair
            </ExternalLink>{" "}
            for the{" "}
            <ExternalLink href="https://www.dcceew.gov.au/">
              Department of Climate Change, Energy, the Environment and Water
            </ExternalLink>{" "}
            and{" "}
            <ExternalLink href="https://www.anu.edu.au/">
              Australian National University
            </ExternalLink>
            .
          </p>
          <p>
            I have worked previously with{" "}
            <ExternalLink href="https://cash.app/">Cash App</ExternalLink>,{" "}
            <ExternalLink href="https://cogent.co/">Cogent</ExternalLink>,{" "}
            <ExternalLink href="https://www.fluxfederation.com/">
              Flux
            </ExternalLink>
            ,{" "}
            <ExternalLink href="https://www.clover.com.au/">
              Clover
            </ExternalLink>
            ,{" "}
            <ExternalLink href="https://theconversation.com/">
              The Conversation
            </ExternalLink>
            ,{" "}
            <ExternalLink href="https://www.sitepoint.com/">
              SitePoint
            </ExternalLink>
            , and{" "}
            <ExternalLink href="https://www.realestate.com.au/">
              realestate.com.au
            </ExternalLink>
            .
          </p>
        </Block>
      </Section>

      <Section>
        <Header label="Technical capabilities" />
        <Block columns={3}>
          <dl className="grid grid-cols-3">
            <Technology
              category="Frontend"
              technologies="Deep knowledge of HTML/CSS, React, Typescript / Javascript, Tailwind, Material Design, Formik & Yup, Svelte, jQuery"
            />
            <Technology category="Backend" technologies="Ruby, Node, Prisma, .Net, Kotlin" />
            <Technology category="Design" technologies="Figma, Sketch, Adobe Illustrator & Photoshop" />
            <Technology category="Databases" technologies="PostgreSQL, mySQL" />
            <Technology
              category="Testing"
              technologies="RSpec, Playwright, Cypress"
            />
            <Technology
              category="DevOps"
              technologies="Github CI, Buildkite, Jenkins, CircleCI"
            />
            <Technology
              category="Mapping"
              technologies="Leaflet, Google Maps"
            />
            <Technology
              category="Containers"
              technologies="Docker, Docker Composer"
            />
          </dl>
        </Block>
      </Section>

      <Section>
        <Header label="Projects" />

        <Block columns={3}>
          <p>
            <InternalLink href="/remoteretro">RemoteRetro</InternalLink> is a
            small, profitable SaaS product that helps (mostly software
            development) teams run better Agile retrospective meetings
            (especially when team members are working remote).
          </p>
        </Block>
      </Section>
    </>
  );
}

const Technology = ({
  category,
  technologies,
}: {
  category: string;
  technologies: string;
}) => (
  <>
    <dt className="font-bold">{category}</dt>
    <dd className="col-span-2">{technologies}</dd>
  </>
);
