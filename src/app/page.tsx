import { Section, Block, Header, ExternalLink, PageHeader, InternalLink } from "@/components";

export default function Home() {
  return (
    <>
      <Section>
        <PageHeader />

        <Block columns={3}>
          <p>I'm passionate about building things.</p>
          <p>
            I'm a full-stack product-thinking software engineer with an art and
            graphic design background.
          </p>
          <p>
            I have deep knowledge in building web applications, with over
            sixteen years in the industry across a number of business domains,
            and writing Javascript / Typescript / React / Ruby / .Net / Kotlin
            to successfully deliver large scale projects.
          </p>
        </Block>
      </Section>

      <Section>
        <Header label="Work" />

        <Block columns={3}>
          <p>
            I'm currently working with{" "}
            <ExternalLink href="https://carbonplus.earth">
              Carbon Plus
            </ExternalLink>{" "}
            on the{" "}
            <ExternalLink href="https://planr.gov.au">
              Platform for Land and Nature Repair
            </ExternalLink>.
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
        <Header label="Projects" />

        <Block columns={3}>
          <p>
            <InternalLink href="/remoteretro">RemoteRetro</InternalLink> is a small, profitable SaaS product that helps (mostly
            software development) teams run better Agile retrospective meetings
            (especially when team members are working remote).
          </p>
        </Block>
      </Section>
    </>
  );
}








