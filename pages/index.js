import Link from 'next/link'

function Home() {
  return (
    <>
      <h1>Mark Cipolla</h1>

      <p>
        Hi. I'm passionate about building things.
      </p>

      <p>
        By trade, I'm a full-stack software engineer, with deep knowledge of HTML/CSS,
        over a decade in the industry across a number of domains, and skills across
        Javascript / React / Ruby on Rails to deliver large scale projects.
      </p>

      <p>
        Alongside that, I trained as a graphic designer and really like to wear
        all the hats. 🎩
      </p>

      <p>
        Outside of my day-to-day, I have a startup SaaS
        called <Link href="/remoteretro.io"><a>RemoteRetro</a></Link> that helps (<em>mostly</em> software) teams
        run Agile retrospective meetings (especially when the team
        is remote), and I like to build wooden furniture using fancy joinery techniques. I'm
        slowly replacing all my furniture with stuff I've made.
      </p>
    </>
  )
}

export default Home
