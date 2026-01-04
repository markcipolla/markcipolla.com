'use client';

import dynamic from 'next/dynamic';

const PDFView = dynamic(
  () => import('@/components/PDF/PDFView'),
  { ssr: false }
);

const coverLetter = `
Dear Mable Team,
I'm a full-stack software engineer with 17 years of experience, and Ruby on Rails has been the through-line of my career. From seven years at The Conversation building publishing platforms, to my current role as Staff Engineer at Fresho, I've built and scaled Rails applications that serve real users with real needs.

I've been considering a few sectors, and health tech at the top of the list; helping people take control of their own care is something I can get behind.

What draws me to Mable is the mission. When I led development on PLANR, a government platform helping landowners put trees in the ground to sequester carbon, I found the social-good aspect genuinely motivating. Before that, I spent seven years at The Conversation, a non-profit distributing trustworthy journalism written by academics. At this point in my career, working on something that helps people isn't a nice-to-have — it's what I'm looking for. 

Your stack is a strong match: I've worked extensively with Rails backends and React frontends. I'm comfortable taking technical ownership of projects end-to-end, from design through deployment.

I also care about the people side. At Staff level, mentoring junior engineers is part of my job — I find it genuinely rewarding. And I came up through design before going full-stack, so I think about how systems feel to users, not just how they function.

I'm based in Melbourne and looking for my next role with a company whose work I can believe in. Mable is exactly that.

Thanks for reading.
Mark Cipolla
`;

export default function Page() {
  return <PDFView coverLetter={coverLetter} />;
}
