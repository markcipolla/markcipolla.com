'use client';

import dynamic from 'next/dynamic';

const PDFView = dynamic(
  () => import('@/components/PDF/PDFView'),
  { ssr: false }
);

const coverLetter = `
Dear Medibank team,

I'm a product-thinking full-stack software engineer with 17 years of experience, currently a Staff Engineer at Fresho. Health tech is at the top of my list for what's next — building digital tools that help people access better care is exactly the kind of work I want to be doing.

I've worked across diverse domains — seven years at The Conversation building publishing platforms, Flux Federation (Powershop's energy retail platform), fintech at Cash App and Clover — while maintaining deep technical ownership throughout. I'm comfortable making architectural decisions, driving technical strategy, and writing code. The job description's "at least 50% hands-on" resonates with how I prefer to lead.

What draws me to this role is the combination of technical depth and people leadership. I've always seen myself as a force-multiplier — at Fresho, I've mentored junior engineers on career growth and goal-setting, and helped improve all teams with technical improvements to improve developer velocity and practice. At Carbon Plus, I led the technical work on PLANR, a government platform helping landowners participate in environmental markets, leading the engineering efforts to deliver the platform to production by deadlines and managed consultant engineers. I completed Blackmill's Leading Engineering Teams workshop while at Cogent, specifically to develop coaching and leadership skills. I'm looking to move from informal people leadership into a role where I can extend those skills more formally.

Your stack is a strong match. I've worked extensively with scalable systems, cloud infrastructure, microservices, and agile delivery (even having built and launched a SaaS product helping teams run better agile retrospectives). I came up through design before going full-stack, so I think about how systems feel to users, helping them achieve their tasks with ease and not just how they function and perform.

I'm based in Melbourne and looking for a role where I can combine technical leadership with building something that genuinely helps people. The Connected Health team sounds like exactly that.

Thanks for reading.
`;

export default function Page() {
  return <PDFView coverLetter={coverLetter} />;
}
