import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© 2026 dethrone.ceo — Can you dethrone Elon Musk?</p>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-white transition">
            Savaş Alanı
          </Link>
          <Link href="/hall-of-fame" className="hover:text-white transition">
            Onur Anıtı
          </Link>
          <Link href="/about" className="hover:text-white transition">
            Hakkımda
          </Link>
        </div>
      </div>
    </footer>
  );
}
