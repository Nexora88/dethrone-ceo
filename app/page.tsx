export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">dethrone.ceo</h1>
        <p className="text-xl text-gray-400 mb-8">
          Can you dethrone Elon Musk?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Buraya şirket kartları gelecek */}
          <div className="border border-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-semibold">$TSLA</h2>
            <p className="text-gray-400 mt-2">Tesla Inc.</p>
            <p className="mt-4 text-sm">Şu anki CEO: -</p>
            <button className="mt-4 w-full bg-white text-black py-2 rounded-lg font-medium hover:bg-gray-200 transition">
              Tahtı Devral
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
