import Link from 'next/link'

function Home() {
  return (
    <>
      <h1>Hi. I'm Mark.</h1>

      <p>
        I'm passionate about <strong>building</strong> things.
      </p>

      <p>
        By trade, I'm a full-stack software engineer. I have deep knowledge in building web applications,
        with over a decade in the industry across a number of business domains, and writing
        Javascript / React / Ruby on Rails to deliver large scale projects.
      </p>

      <p>
        Alongside that, depending on the job, I also sometimes work as a designer (coming from an art and design background at university),
         and <em>really</em> like to wear all the hats. 🎩
      </p>

      <p>
        I'm currently working with <a href="https://cogent.co/">Cogent</a>, and have worked previously
        with <a href="https://www.clover.com.au/">Clover</a>, <a href="https://theconversation.com/">The Conversation</a> and <a href="https://www.realestate.com.au/">REA</a>, amongst others.
      </p>

      <p>
        Outside of my day-to-day, I have a handy SaaS app
        called <Link href="/remoteretro.io"><a>RemoteRetro</a></Link> that helps (<em>mostly</em> software-development) teams
        run Agile retrospective meetings (especially when team members are working remote), and I like to build wooden furniture using
        fancy joinery techniques. I'm <a href="https://www.instagram.com/dmaerk/">slowly replacing all my furniture with
        stuff I've made.</a>
      </p>
    </>
  )
}

export default Home
