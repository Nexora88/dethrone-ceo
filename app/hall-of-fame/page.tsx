import Header from "@/components/Header";

export default function HallOfFamePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">Onur Anıtı</h1>
        <p className="text-gray-400 mb-10">
          Aylık depremlerden sonra tahtta kalan efsane CEO’lar burada ölümsüzleşir.
        </p>

        <div className="space-y-6">
          <div className="border border-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-1">Ağustos 2026</h2>
            <p className="text-sm text-gray-500">Henüz deprem olmadı</p>
          </div>
        </div>
      </main>
    </div>
  );
}
