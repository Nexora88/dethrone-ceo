import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-black/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight">
          dethrone.ceo
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="text-gray-300 hover:text-white transition">
            Savaş Alanı
          </Link>
          <Link
            href="/hall-of-fame"
            className="text-gray-300 hover:text-white transition"
          >
            Onur Anıtı
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-white transition"
          >
            Hakkımda
          </Link>
        </nav>
      </div>
    </header>
  );
}
