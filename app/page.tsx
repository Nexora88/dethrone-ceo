"use client";

import CompanyCard from "@/components/CompanyCard";
import { Company } from "@/types";

// Geçici örnek veri (sonra API'den gelecek)
const sampleCompanies: Company[] = [
  {
    id: "1",
    symbol: "TSLA",
    name: "Tesla Inc.",
    type: "stock",
    exchange: "NASDAQ",
    current_price: 248.5,
    price_change_24h: 2.34,
  },
  {
    id: "2",
    symbol: "AAPL",
    name: "Apple Inc.",
    type: "stock",
    exchange: "NASDAQ",
    current_price: 227.1,
    price_change_24h: -0.85,
  },
  {
    id: "3",
    symbol: "BTC",
    name: "Bitcoin",
    type: "crypto",
    current_price: 61240,
    price_change_24h: 1.12,
  },
  {
    id: "4",
    symbol: "ASELS",
    name: "Aselsan",
    type: "stock",
    exchange: "BIST",
    current_price: 78.4,
    price_change_24h: 3.21,
  },
];

export default function Home() {
  const handleBid = (companyId: string) => {
    alert(`Tahtı devralma modalı açılacak: ${companyId}`);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Can you dethrone Elon Musk?</h1>
        <p className="text-gray-400 text-lg">
          En yüksek teklifi ver, o anlık CEO ol. Aylık depremde herkes düşer.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {sampleCompanies.map((company) => (
          <CompanyCard
            key={company.id}
            company={company}
            currentCEO={null}
            onBid={handleBid}
          />
        ))}
      </div>
    </main>
  );
}
