'use client';

import dynamic from 'next/dynamic';

const PDFView = dynamic(
  () => import('@/components/PDF/PDFView'),
  { ssr: false }
);

const coverLetter = `
Dear Amber Team,

I've been an Amber customer for a few years now, and I think you've built something that actually matters. The price transparency, integrations with solar batteries and inverters, the feed-in-tariff curtailment, and the connection to what's happening on the grid make energy feel like something I can engage with, not just pay for.

I'm a bit of a home automation nerd, and very much love and use the HASS integration.

I'm a full-stack software engineer with 17 years of experience, including the energy sector (I worked with Flux Federation building billing features for Powershop's retail platform). 

I came up through design before going full-stack, so I care as much about how things feel as how they work. Most of my career has been in Ruby on Rails and across various front end technologies like React and TypeScript, but can pick up new or different technologies like Kotlin and .Net as the work demanded.

I don't see an open role that's an obvious fit right now, but I'd love to be on your radar. I'm in Melbourne, I share your values around financial inclusion, and I'd jump at the chance to work on something I already recommend to everyone I know.

Thanks for reading.
`;

export default function Page() {
  return <PDFView coverLetter={coverLetter} />;
}
