import Link from 'next/link'

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
        with over fifteen years in the industry across a number of business domains, and writing
        Javascript / Typescript / React / Ruby / .Net / Kotlin to successfully deliver large scale projects.
      </p>

      <p>
        I'm currently working with <a href="https://carbonplus.earth">Carbon Plus</a> on the <a href="https://agsteward.com.au">National Stewardship Trading Platform</a>, and have worked previously
        with <a href="https://cash.app/">Cash App</a>, <a href="https://cogent.co/">Cogent</a>, <a href="https://www.fluxfederation.com/">Flux</a>, <a href="https://www.clover.com.au/">Clover</a>, <a href="https://theconversation.com/">The Conversation</a> and <a href="https://www.realestate.com.au/">realestate.com.au</a>, amongst others.
      </p>

      <p>
        Outside of my day-to-day, I have a handy SaaS app
        called <Link href="/remoteretro.io"><a>RemoteRetro</a></Link> that helps (<em>mostly</em> software development) teams
        run Agile retrospective meetings (especially when team members are working remote), and I like to build wooden furniture using
        fancy joinery techniques.

        I'm <a href="https://www.instagram.com/dmaerk/">slowly replacing all my furniture with stuff I've made.</a>
      </p>
    </>
  )
}

export default Home
