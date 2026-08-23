import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "dethrone.ceo | Can you dethrone Elon Musk?",
  description:
    "Küresel şirketlerin ve kripto varlıkların sanal CEO tahtı için açık artırma platformu. Boardroom Coup her ay!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased bg-black text-white min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
