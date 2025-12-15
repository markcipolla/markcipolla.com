'use client';

import { PDFViewer } from '@react-pdf/renderer';
import { CVContent } from '@/components/PDF/CVContent';

export default function PDFView({coverLetter}: {coverLetter: string}) {
  return (
    <PDFViewer className="w-full min-h-[100vh]">
      <CVContent coverLetter={coverLetter}/>
    </PDFViewer>
  );
}
