import Link from 'next/link'
import Head from 'next/head'
import styled from '@emotion/styled'
import ReactPlayer from 'react-player'

const Logo = styled('img')`
  margin: 40px 0;
  width: 10vw;

  @media screen and (min-width: 1000px) {
    width: 100px;
  }
`

const Example = styled('div')`
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  margin: 80px -20px;
  max-width: 700px;
  overflow: hidden;
  width: calc(100% + 40px);

  @media screen and (min-width: 660px) {
    margin: 80px auto;
    width: 100%;
  }

  div {
    height: auto !important;
    width: 100% !important;
    line-height: 0;
  }

  video {
    min-width: 100%;
    min-height: 100%;
  }
`

function RemoteRetro() {
  return (
    <>
      <Head>
        <title>RemoteRetro - Mark Cipolla</title>
      </Head>

      <h1>RemoteRetro</h1>

      <p>
        When I was working at <a href="https://www.theconversation.com">The Conversation</a>, the
        team has has almost always had remote team members. After discussions with a
        colleague, <a href="https://twitter.com/keithpitty">Keith Pitty</a>, we noted that using a whiteboard,
        or other analog ways of running a retrospective, that made it difficult to fully join in the conversation.
        We thought that we needed a tool to have online retro boards.
        Hence, <a href="https://www.remoteretro.io">RemoteRetro</a>.
      </p>

      <a text="RemoteRetro" href="https://www.remoteretro.io">
        <Logo alt="Logo of RemoteRetro" src="/remoteretro-logo.svg"/>
      </a>

      <p>
        An online retro board, that everyone can log into. Throw it up on a tv/screen/projector,
        and only the remote team members can join in while local members are guided by a facilitator.
        Or, no remote team members, and use it to like a scribe to keep a record of the sprint/iteration's
        retro items.
      </p>

      <p>
        Up to you. Lots of ways to use it.
      </p>

      <Example>
        <ReactPlayer
          alt="Example video showing a person running a retro, adding items, and moving them from one of four groups to another."
          url="https://www.remoteretro.io/remoteretro-example.webm" playing
          role="application"
          loop
          controls
        />
      </Example>

      <p>
        It's got a bunch of common formats, plus you can customise them. It's got timers, so you can guide
        your team to add their items, or to vote on ones important to the team.
      </p>

      <p>
        It also integrates into with Trello into your regular workflow by creating Action items of a retro as
        cards in your To-Be-Assigned queues.
      </p>

      <p>
        Retrospectives, if done regularly, are a great opportunities to gently steer the ship as a team,
        with only small adjustments. New ideas, and to help solve small problems and conflicts before they
        become larger issues.
      </p>
    </>
  )
}

export default RemoteRetro
