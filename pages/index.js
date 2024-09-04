import Link from 'next/link'
import converter from 'number-to-words'
function Home() {
  return (
    <>
      <h1>Hi. I'm Mark.</h1>

      <p>
        I'm passionate about <strong>building</strong> things.
      </p>

      <p>
        I'm a full-stack product-thinking software engineer with an art and graphic design background.
      </p>

      <p>
        I have deep knowledge in building web applications,
        with over {converter.toWords(new Date().getFullYear() - yearStarted)} years in the industry across a number of business domains, and
        writing {languages.join(" / ")} to successfully deliver large scale projects.
      </p>

      <p>
        I'm currently working with <a href="https://carbonplus.earth">Carbon Plus</a> on the <a href="https://planr.gov.au">Platform for Land and Nature Repair</a>, and 
        have worked previously with <CommaSeparate companies={previousCompanies} />.
      </p>

      <p>
        Outside of my day-to-day:
        <ul>
          <li>
            <Link href="/remoteretro.io"><a>RemoteRetro</a></Link> is a SAAS that 
            helps (mainly software development) teams run better agile retrospective meetings, especially 
            when team members are working remote.
          </li>
          <li>
            <Link href="/grizzlyguts.com.au"><a>Grizzly Guts</a></Link>, a platform for coeliacs / gluten intolerant / dairy 
            intolerant  / vegans to find and recommend places to eat and shop.
          </li>
          {/* <li>
            <Link href="/suburbapi.com.au"><a>SuburbAPI</a></Link>, an API for fetching (surprise surprise) Australian suburb data, specifically
            GeoJSON and surrounding suburbs data used for mapping and geospatial web applications.
          </li> */}
          <li>
            I like to build wooden furniture using fancy joinery techniques; I'm <a href="https://www.instagram.com/dmaerk/">slowly replacing all my furniture with stuff I've made.</a>
          </li>
          <li>
            I'm a purple belt in Brazilian Jiu Jitsu.
          </li>
        </ul>
      </p>
    </>
  )
}

const yearStarted = 2008;
  const languages = ["Javascript", "Typescript", "React", "Ruby", ".Net", "Kotlin"]

  const previousCompanies = [
    {
      name: "Cash App",
      url: "https://cash.app/"
    },
    {
      name: "Cogent",
      url: "https://cogent.co/"
    },
    {
      name: "Flux",
      url: "https://www.fluxfederation.com/"
    },
    {
      name: "Clover",
      url: "https://www.clover.com.au/"
    },
    {
      name: "The Conversation",
      url: "https://theconversation.com/"
    },
    {
      name: "SitePoint",
      url: "https://www.sitepoint.com/"
    },
    {
      name: "realestate.com.au",
      url: "https://www.realestate.com.au/"
    }
  ]

  const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const CommaSeparate = ({ companies, separator = ', ' }) => {
    return companies.map((company, index) => [
        index > 0 && separator,
        index == companies.length - 1 && "and ",
        <a key={`company-${slugify(company.name)}`} href={company.url}>{company.name}</a>
      ]
    )
  }

export default Home
