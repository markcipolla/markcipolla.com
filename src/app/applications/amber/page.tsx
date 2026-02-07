'use client';

import dynamic from 'next/dynamic';

const PDFView = dynamic(
  () => import('@/components/PDF/PDFView'),
  { ssr: false }
);

const coverLetter = `
Dear Amber Team,

I've been an Amber customer for a few years now, and I think you've built something that actually matters. The price transparency, integrations with solar batteries and inverters, the feed-in-tariff curtailment, and the connection to what's happening on the grid make energy feel like something I can engage with, not just pay for. I'm a bit of a home automation nerd, and very much love and use the HASS integration.

I'm a full-stack software engineer with 17 years of experience, including some in the energy sector—I worked with Flux Federation building billing and pricing features for Powershop's retail platform. I came up through design before going full-stack, so I care as much about how things feel as how they work. Most of my career has been in Ruby on Rails with React and TypeScript frontends, but I've picked up Kotlin and .NET when the work demanded it. Your stack (React Native, TypeScript, Postgres) aligns well with where I've been heading.

Beyond individual contributions, I've spent much of my career mentoring engineers and leading small teams. I enjoy the work of helping others grow as much as shipping features myself.

One specific way I'd use my technical skills: I'd relish helping users understand the value Amber is creating for them. Automated systems work best when people trust them, and trust comes from transparency—showing users what decisions were made on their behalf and why. That's part UX, part data, part storytelling—the kind of cross-stack problem I find most satisfying.

I'm based in Melbourne, I share your values around sustainability, and I'd be genuinely excited to work on something I already recommend to everyone I know.

Thanks for reading.
`;

export default function Page() {
  return <PDFView coverLetter={coverLetter} />;
}
