import type { Metadata } from "next";
import "./globals.css";
import { Acknowledgement } from "@/components/Acknowledgement";

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
      <body className="antialiased divide-y divide-green-300 flex flex-col min-h-screen">
        {children}
        <Acknowledgement />
      </body>
    </html>
  );
}
