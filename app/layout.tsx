import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "dethrone.ceo | Can you dethrone Elon Musk?",
  description:
    "Küresel şirketlerin ve kripto varlıkların sanal CEO tahtı için açık artırma platformu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased bg-black text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
