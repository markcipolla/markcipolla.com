import type { Metadata } from "next";
import "./globals.css";
import { Acknowledgement, Section, Footer, PageHeader } from "@/components";

export const metadata: Metadata = {
  title: "Mark Cipolla",
  description: "Full-stack software, half Space Wizard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-teal-50 border-x border-green-200 max-w-[1980px] mx-auto antialiased divide-y divide-green-200 flex flex-col min-h-screen">
        <Section>
          <PageHeader />
        </Section>
        {children}
        
        <Footer />
        <Acknowledgement />
      </body>
    </html>
  );
}
