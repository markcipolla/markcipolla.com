import React from "react";
import { Section, Block, Header, ExternalLink, Tags } from "@/components";
import ReactMarkdown from "react-markdown";

interface Role {
  company: string;
  url: string | null;
  role: string;
  started: string;
  ended: string | null;
  capabilities: string[];
  description: string;
}

const roles: Role[] = [
  {
    company: "Fresho",
    url: "https://fresho.com",
    role: "Staff Software Engineer",
    started: "March 2025",
    ended: null,
    capabilities: ["Ruby on Rails", "React", "Bootstrap", "TypeScript", "AWS", "Heroku"],
    description: `
Fresho is a market-leading wholesale food order management platform, designed as a Closed Marketplace for fresh food suppliers and their customers.

Introduced TypeScript to the codebases, refactoring a shared set of React components, and added a gem of [View Components](https://viewcomponents.org/) to share Rails components, all being displayed in [Storybook](https://storybook.js.org/) together.

Built an infrastructure documentation app that reads a Github Organisation's repositories and builds a [React Flow](https://reactflow.dev/) diagram of the dependencies, events and APIs between them.
`,
  },
  {
    company: "Carbon Plus",
    url: null,
    role: "Lead Engineer",
    started: "Feb 2024",
    ended: "Feb 2025",
    capabilities: ["Next.js", "React", "Node.js", "Redux", "Tailwind", "TypeScript", "Mapping", "Azure", "Cypress", ".NET", "Geoman"],
    description: `
Carbon Plus was a team focused on growing environmental markets, &ldquo;to leave behind a planet more capable of sustaining healthy human life.&rdquo;

Leading the development of the [Platform for Land and Nature Repair](https://planr.gov.au) for the [Department of Climate Change, Energy, the Environment and Water](https://www.dcceew.gov.au/), in
collaboration with [Australian National University](https://www.anu.edu.au). 

PLANR helps landowners and farmers:
- understand how parts of their land can be used for carbon abatement and biodiversity projects and the prospective outcomes
- apply for programs and certification
- list their approved offerings in various environmental units, including [ACCUs](https://cer.gov.au/schemes/australian-carbon-credit-unit-scheme/australian-carbon-credit-units), on the marketplace platform
- receive and manage enquiries from buyers

Built complex mapping interfaces displaying data layers of program eligibility, carbon sequestration potential, property boundaries, and distribution of native vegetation.
Rebuilt the drawing tool interface to improve accessibility & usability; rebuilding from [geoman](https://geoman.io/) to a custom-controlled interface, including a custom-built circle-drawn exclusion zones.

Improved the CI build: stabilising a rather unstable build process, reorganised the pipeline into groupings of roughly equal length, parallelised the [Cypress](https://www.cypress.io/) E2E, and reducing build times by a third (shaving off about ~10 mins).

Identified and implemented a solution saving ~35% of Azure hosting costs, by analysing usage, rearchitecting the App Service plans into environment-consistent groups, scaling instances to better match workload, and incrementally rolled out changes (starting with non-prod environments) assuring safety of change.
`,
  },
  {
    company: "Cash App / Block",
    url: "https://cash.app",
    role: "Senior Software Engineer",
    started: "May 2022",
    ended: "Feb 2024",
    capabilities: ["Kotlin", "Java", "Armeria", "Next.js", "Tailwind"],
    description: `
Cash App is a peer-to-peer payment app, enabling payments, investments in the US stock market and bitcoin, and is a subsidiary of Block. 

Worked on the team bringing Cash App globally, including the UK, Canada and Australia:
- Built an improved set of screens for Cash App users to send money cross border, including a currency selector, and a screen to confirm the exchange rate and fees. It tied into a shared interface with the remittances team for sending out-of-network.
- Prepared beta launches for Canada and Australia, with microsites for each country to sign up for a friends-and-family beta program.
- Lead work on implementing i18n ahead of globalising the app, extracting hardcoded strings in a number of component systems for both Android and iOS platforms.
- Refactored the fetching code for an exchange rates service, so all fetchers used a unified implementation, reducing code duplication and improving maintainability. It also improved logging to make diganosing issues with future exchange rate providers easier.

Improved a widely-used [Swift](https://developer.apple.com/swift/) internal tool to enable proxying to production (in specific use cases to enable testing) rather then testing/staging environments only.

Built an internal tool that fetches feature flag information from [LaunchDarkly](https://launchdarkly.com), and introduced a process for teams to identify and remove unused flags, and tag which teams are responsible for which flags.

Built an internal tool that generates a documentation site (hosted on Github pages) from a single command in an [Armeria](https://armeria.dev/docs/advanced-kotlin/)-driven microservice app repository. It let the engineers write markdown docs inside the repo (keeping documentation near the code), and automagically displays current protobuf definitions and API endpoints.
`,
  },
  {
    company: "Cogent.co",
    url: "https://cogent.co",
    role: "Senior Developer",
    started: "Aug 2020",
    ended: "Apr 2022",
    capabilities: ["React", "Node.js", "TypeScript", "Mapping", "Ruby on Rails", ".NET", "Azure"],
    description: `
Cogent was a Melbourne based consulting firm that was acquired by Block in May 2022. The consulting firm put team culture first and provided product-focused engineering teams to Australian and international companies. 

Worked with [Flux Federation](https://www.fluxfederation.com/) on a transformational project to build billing features to their energy retail platform for [Powershop](https://www.powershop.com.au/).

Rebuilt [AgSteward](https://agsteward.com.au), now the [Platform for Land and Nature Repair](https://planr.gov.au/), from a Ruby on Rails pilot app to a .Net app hosted on Azure, to meet government requirements. Enabled landowners to apply for starting [Enhancing Remnant Vegetation](https://planr.gov.au/program-info/erv) and [Carbon + Biodiversity Pilot](https://planr.gov.au/program-info/cb) projects.
`,
  },
  {
    company: "Clover.com.au",
    url: "https://clover.com.au",
    role: "Senior Developer",
    started: "Jan 2020",
    ended: "Jul 2020",
    capabilities: ["React", "Typescript", "Ruby on Rails", "Elixir"],
    description: `
Clover was a B2C fintech investment platform, one of Australia's first "robo-advice" digital advice and automated investment services, that helped novice investors and [SMSFs](https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/self-managed-super-funds-smsf) get into the [Exchange traded funds](https://moneysmart.gov.au/managed-funds-and-etfs/exchange-traded-funds-etfs) market, and was acquired by SuperEd in mid 2020.

A short contract building new features, implenting the roadmap, and improving the existing codebase. 
`,
  },
  {
    company: "The Conversation",
    url: "https://theconversation.com",
    role: "Senior Developer",
    started: "Nov 2012",
    ended: "Jan 2020",
    capabilities: ["Ruby on Rails", "React", "Typescript", "i18n", "CoffeeScript", "Backbone", "HTML", "CSS", "jQuery"],
    description: `
The Conversation is a unique collaboration between academics and journalists that has become a the leasing publisher of research-based news and analysis. It has no advertising nor paywalls, allows free republication of articles under a [Creative Commons](https://creativecommons.org/) license, and is funded by universities and research institutions.

Design and full stack engineer on a number of Ruby on Rails applications, including the main site, a writing and publishing platform, and a donations platform.

Designed and lead implementation of a homepage and primary article view redesign. The article page is largely unchanged from my design even today.

Implemented i18n, enabling translation of site into multiple languages for a number of regions. This, and documenting the process thoroughly, was a factor enabling reducing the deployment of a new region from six months (with a team of six) to a week (with a solo engineer).

Created internal tooling to build dashboards for editorial staff to monitor article performance and readership reach.

Designed and built critical internal [table tennis tooling](https://theconversation.com/how-we-built-an-arduino-powered-ping-pong-scoreboard-69401).
`,
  },
  {
    company: "Classified Ad Ventures",
    url: "https://classifiedadventures.com",
    role: "Front End Designer & Developer",
    started: "Jan 2011",
    ended: "Nov 2012",
    capabilities: ["Ruby on Rails", "React"],
    description: `
Classified Ad Ventures provided digital marketing products and services to the global real estate industry.

Full stack role building  Front end design through to implementing HTML + CSS + JS, and backend work with Ruby on Rails.
`,
  },
  {
    company: "SitePoint",
    url: "https://sitepoint.com",
    role: "Web Designer / Developer",
    started: "Jun 2010",
    ended: "Feb 2011",
    capabilities: ["jQuery", "PHP"],
    description: `
SitePoint was a large online community, education resourse, and publisher of books and articles for web developers.

Responsible for the UI/UX of SitePoint.com and learnable.com, as well as promotional material for various initiatives.
`,
  },
  {
    company: "Realestate.com.au",
    url: "https://realestate.com.au",
    role: "UI Developer",
    started: "Feb 2008",
    ended: "Aug 2010",
    capabilities: ["Ruby on Rails", "HTML", "CSS", "Javacript", "Agile", "Adobe Fireworks", "Adobe Illustrator"],
    description: `
Realstate.com.au is Australia's leading property listing site.

Built the UI elements of the website, whilst maintaining excellent code quality standards and optimised for performance for a site with millions of unique browsers monthly.

Worked on the pilot Agile / Ruby on Rails project, building suburb profile pages for over 15k suburbs with property price and demographic information.

Lead development as a hack project to build the first mobile-focused site (around the time of the first iPhone launch) for a property listing site in Australia. Pilot launch was a success, with 14x over expected audience.

Optimised CSS payload cutting 50% of the file size, and reducing page load times, and saving file serving costs over $20k annually.
`,
  },
];

export default function CurriculumVitæ() {
  return (
    <>
      <Section>
        {roles.map((role, index) => (
          <React.Fragment key={index}>
            <Header label={role.company}>
              <div>
                {role.url && (
                  <h2 className="mb-3">
                    <ExternalLink href={role.url}>{role.url}</ExternalLink>
                  </h2>
                )}

                <p>{role.role}</p>

                <p className="text-sm">
                  {role.started} — {role.ended || "Present"} ({calculateDuration(role.started, role.ended)})
                </p>
              </div>
            </Header>
            <Block columns={3} noPadding noGap className="divide-y divide-green-200">
              <Role role={role} />
            </Block>
          </React.Fragment>
        ))}
      </Section>
    </>
  );
}

const calculateDuration = (start: string, end: string | null): string => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const yearString = years === 1 ? `${years} year` : `${years} years`;
  const monthString = months === 1 ? `${months} month` : `${months} months`;

  if (years === 0) return monthString;
  if (months === 0) return yearString;
  return `${yearString}, ${monthString}`;
};

const Role = ({ role }: { role: Role }) => {
  return (
    <div className="px-4 py-8 md:px-12 flex gap-8 flex-col">
      <ReactMarkdown
        className="mt-4 flex flex-col gap-4"
        components={{
          a(props) {
            const { href, children } = props;
            return <ExternalLink href={href}>{children}</ExternalLink>;
          },
          ul(props) {
            const { children } = props;
            return <ul className="list-disc list-outside pl-8">{children}</ul>;
          },
          li(props) {
            const { children } = props;
            return <li className="pl-2">{children}</li>;
          }
        }}
      >
        {role.description}
      </ReactMarkdown>
      <Tags tags={role.capabilities} />
    </div>
  );
};
