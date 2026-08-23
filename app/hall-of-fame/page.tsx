import Header from "@/components/Header";

const mockWinners = [
  {
    month: "Ağustos 2026",
    items: [
      {
        symbol: "TSLA",
        flag: "🇺🇸",
        username: "elonmusk",
        name: "Elon Musk",
        amount: 420,
        days: 18,
      },
      {
        symbol: "BTC",
        flag: "🪙",
        username: "saylor",
        name: "Michael Saylor",
        amount: 210,
        days: 22,
      },
      {
        symbol: "ASELS",
        flag: "🇹🇷",
        username: "aselsan",
        name: "Aselsan Fan",
        amount: 85,
        days: 11,
      },
    ],
  },
];

export default function HallOfFamePage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Onur Anıtı</h1>
          <p className="text-gray-400 text-lg">
            Boardroom Coup’tan sonra tahtta kalan efsane CEO’lar burada ölümsüzleşir.
          </p>
        </div>

        <div className="space-y-10">
          {mockWinners.map((period) => (
            <div key={period.month}>
              <h2 className="text-xl font-semibold mb-5 text-gray-200">
                {period.month}
              </h2>

              <div className="grid gap-4">
                {period.items.map((item) => (
                  <div
                    key={item.symbol}
                    className="flex items-center justify-between border border-gray-800 rounded-xl p-5 bg-gray-950 hover:border-gray-700 transition"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{item.flag}</span>
                      <div>
                        <p className="font-bold text-lg">{item.symbol}</p>
                        <p className="text-sm text-gray-400">
                          @{item.username} · {item.days} gün tahtta
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold text-lg">${item.amount}</p>
                      <p className="text-xs text-gray-500">Son teklif</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-gray-500 text-sm">
          Bir sonraki Boardroom Coup’tan sonra yeni isimler eklenecek.
        </div>
      </main>
    </div>
  );
}
