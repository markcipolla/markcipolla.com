'use client';

import dynamic from 'next/dynamic';

const FerociaPDFViewer = dynamic(
  () => import('./FerociaPDFViewer'),
  { ssr: false }
);

export default function FerociaPage() {
  return <FerociaPDFViewer />;
}
