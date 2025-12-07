'use client';

import { PDFViewer } from '@react-pdf/renderer';
import { CVContent } from '@/components/PDF/CVContent';

const coverLetter = `
Dear Ferocia Team,


I'm an Up customer from way back (in August 2018), and I'm not just saying that to get your attention — I genuinely love what you've built.

The Savers, the instant notifications, the ability to save money and the way the app makes money feel manageable rather than stressful have changed how I bank. Your support team is incredible, and I've been a happy customer for years.

I'm a staff-level engineer with 17 years of experience across fintech (Cash App, Clover), major Australian platforms (realestate.com.au, The Conversation), and government projects. I came up through design and front-end before going full-stack, so I care deeply about how things feel, not just how they work. Most of my career has been in Ruby on Rails and across various front end technologies like React and TypeScript, but can pick up new or different technologies like Kotlin and .Net as the work demanded.

I don't see an open role that's an obvious fit right now, but I'd love to be on your radar. I'm in Melbourne, I share your values around financial inclusion, and I'd jump at the chance to work on something I already recommend to everyone I know.

Thanks for reading.
`;

export default function CurriculumVitæPDF() {
  return (
    <PDFViewer className="w-full min-h-[100vh]">
      <CVContent coverLetter={coverLetter}/>
    </PDFViewer>
  );
}
