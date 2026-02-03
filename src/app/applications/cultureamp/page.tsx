'use client';

import dynamic from 'next/dynamic';

const PDFView = dynamic(
  () => import('@/components/PDF/PDFView'),
  { ssr: false }
);

const coverLetter = `
Dear Culture Amp team,

I'm a frontend-focused full-stack engineer with 17 years of experience. React, TypeScript and Ruby on Rails have been among my primary tools for a long time now.

What draws me to Culture Amp is the mission. I spent seven years at The Conversation, a non-profit distributing trustworthy journalism, and recently led development on PLANR, a government platform helping landowners participate in environmental markets. At this point in my career, working on something that helps people isn't a nice-to-have — it's what I'm looking for. Building tools that create better workplaces fits that.

Your stack is a strong match. I've worked extensively with React and TypeScript, and I've set up component systems across both Rails ViewComponents and JS/TS in Storybook — so the pattern of maintaining shared, documented UI libraries is familiar territory. I came up through design before going full-stack, so accessibility and user experience aren't afterthoughts. And with Rails as the through-line of my backend work, I can contribute across the stack when needed.

At Staff level, mentoring engineers and contributing to team-wide practices is part of the job, and I find it genuinely rewarding. I've always seen my role as being a force-multiplier — helping others level up matters as much as the code I write.

I'm based in Melbourne and looking for my next role with a company whose work I can believe in. Culture Amp is exactly that.

Thanks for reading.
`;

export default function Page() {
  return <PDFView coverLetter={coverLetter} />;
}
