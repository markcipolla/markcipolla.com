import Image from "next/image";
import { Section, Block, Header, ExternalLink } from "@/components";
import logo from "./logo.svg";
export default function RemoteRetro() {
  return (
    <>
      <Section>
        <Block columns={3}>
          <p>
            Retrospectives, if done regularly, are a great opportunities to gently steer the ship as a team, with only small adjustments. They highlight new ideas, call out successes, and to help
            solve small problems and conflicts before they become larger issues.
          </p>
        </Block>
      </Section>
      <Section>
        <Header label="RemoteRetro">
          <div className="flex flex-col gap-8 items-end">
            <ExternalLink href="https://remoteretro.io">remoteretro.io</ExternalLink>
            <Image src={logo} alt="RemoteRetro logo" />
          </div>
        </Header>
        <Block columns={3}>
          <p>
            When I was working at <ExternalLink href="https://theconversation.com">The Conversation</ExternalLink>, the team has has almost always had remote team members.
          </p>
          <p>
            While attending <ExternalLink href="https://rubyconf.org.au/2016/">RubyConf 2016</ExternalLink> my colleague <ExternalLink href="https://keithpitty.com">Keith Pitty</ExternalLink> and I
            noted that using a whiteboard, or other analog ways of running a retrospective, that made it difficult to fully join in the conversation. We thought that we needed a tool to have online
            retro boards.
          </p>
          <p>So, being software engineers, we engineered some software.</p>
          <p>
            In building <ExternalLink href="https://remoteretro.io">RemoteRetro</ExternalLink>, we used it to run retrospectives on the progress of the development of it. We&lsquo;ve built the tool to
            scratch our itch, to solve our problem. We&lsquo;ve helped other teams also run excellent agile retrospectives, where every team member feels heard and included.
          </p>

          <video preload="auto" autoPlay controls loop className="shadow-xl border-[5px] border-black rounded">
            <source src="https://remoteretro.io/remoteretro-example.webm" type="video/webm" />
            <source src="https://remoteretro.io/remoteretro-example.mp4" type="video/mp4" />
          </video>
          <p>
            Everyone logs in, both remote and in-person team members. Or, throw it up on a tv/screen/projector, and have only remote team members join in while local members are guided by a
            facilitator. Or, no remote team members, and use it to like a scribe to keep a record of the sprint/iteration&lsquo;s retro items.
          </p>
          <p>Up to you. Lots of ways to use it.</p>
          <p>It&lsquo;s got a bunch of common formats, plus you can customise them. It&lsquo;s got timers, so you can guide your team to add their items, or to vote on ones important to the team.</p>
        </Block>
      </Section>
    </>
  );
}
