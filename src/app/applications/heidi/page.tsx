'use client';

import dynamic from 'next/dynamic';

const PDFView = dynamic(
  () => import('@/components/PDF/PDFView'),
  { ssr: false }
);

const coverLetter = `
Dear Heidi Team,

I'm a full-stack engineer with 17 years of experience, and frontend architecture has been where I've had the most impact. From building design systems and component libraries at helping teams improve, I've spent years thinking about how to make frontends scale without becoming a mess.

Health tech is at the top of my list for what's next. Returning 18 million hours to clinicians are the kinds of outcomes I want to be part of.

What draws me to Heidi is the mission paired with genuine technical ambition. When I led development on PLANR, a government platform helping landowners sequester carbon, I found the social-good aspect genuinely motivating. Putting trees in the ground is something I can get behind. Before that, I spent seven years at The Conversation, a non-profit distributing trustworthy journalism. At this point in my career, working on something that helps people isn't a nice-to-have — it's what I'm looking for.

My wife is a health professional and has seen her organisation struggle with the complexity of the systems they use, and the improvement in their workflow when adopting Heidi. I've seen firsthand the impact of poor design on the user experience, and can imagine the impact of poor user experience on the practitioner and patient experience.

Your stack is a strong match: I've worked extensively with React and TypeScript, built and maintained component libraries, championed accessibility, and care I deeply about the developer experience that lets teams ship quickly without accumulating debt. I came up through design before going full-stack, so I think about how systems feel to users, not just how they function — accessibility and UX aren't afterthoughts for me.

At Staff level, mentoring engineers and improving team-wide practices is part of my job, and I find it genuinely rewarding. "Make others better" resonates — I've always seen my role as being a force-multiplier.

I'm based in Melbourne and looking for my next role with a company whose work I can believe in. Heidi is exactly that.

Thanks for reading.

Mark Cipolla
`;

export default function Page() {
  return <PDFView coverLetter={coverLetter} />;
}
