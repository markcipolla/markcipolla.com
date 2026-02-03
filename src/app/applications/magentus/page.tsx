'use client';

import dynamic from 'next/dynamic';

const PDFView = dynamic(
  () => import('@/components/PDF/PDFView'),
  { ssr: false }
);

const coverLetter = `
Dear Magentus team,

I'm a full-stack staff engineer with 17 years of experience. Ruby on Rails has been the through-line of my career — from billing systems at Flux Federation, to seven years building The Conversation's publishing platform, to the product I'm currently working on at Fresho.

What draws me to Magentus is the mission. I led development on PLANR, a government platform helping landowners participate in environmental markets and plant trees to offset carbon emissions. The Conversation is a not-for-profit media company that distributes trustworthy journalism written by academics for free with no ads or paywalls. At this point in my career, working on something that helps people isn't a nice-to-have — it's what I'm looking for. Building health tech software in that supports clinicians and improves patient outcomes fits that.

Your stack is a strong match. I've worked extensively with Rails, React, and TypeScript, and I care about the practices that keep codebases healthy: TDD, comprehensive test coverage, and CI/CD pipelines that give teams confidence to ship. I came up through design before going full-stack, so I think about how systems feel to users, not just how they function.

Mentoring engineers and contributing to team-wide practices is part of my job, and I find it genuinely rewarding. I've always seen my role as being a force-multiplier — helping others level up matters as much as the code I write.
One note on expectations: I'm looking for roles in the $190K—$200K range. If that's within reach, I'd welcome the conversation.

I'm based in Melbourne and happy to work remotely.

Thanks for reading.
`;

export default function Page() {
  return <PDFView coverLetter={coverLetter} />;
}
