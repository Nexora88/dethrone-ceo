"use client";

import { useState } from "react";
import CompanyCard from "@/components/CompanyCard";
import BidModal from "@/components/BidModal";
import Countdown from "@/components/Countdown";
import { Company, CEO } from "@/types";

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
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    type: "stock",
    exchange: "NASDAQ",
    current_price: 128.4,
    price_change_24h: 1.87,
  },
  {
    id: "4",
    symbol: "BTC",
    name: "Bitcoin",
    type: "crypto",
    current_price: 61240,
    price_change_24h: 1.12,
  },
  {
    id: "5",
    symbol: "ETH",
    name: "Ethereum",
    type: "crypto",
    current_price: 3240,
    price_change_24h: -0.45,
  },
  {
    id: "6",
    symbol: "ASELS",
    name: "Aselsan",
    type: "stock",
    exchange: "BIST",
    current_price: 78.4,
    price_change_24h: 3.21,
  },
  {
    id: "7",
    symbol: "THYAO",
    name: "Türk Hava Yolları",
    type: "stock",
    exchange: "BIST",
    current_price: 312.5,
    price_change_24h: 0.92,
  },
  {
    id: "8",
    symbol: "DOGE",
    name: "Dogecoin",
    type: "crypto",
    current_price: 0.124,
    price_change_24h: 4.56,
  },
];

// Örnek: Ayın son günü
const nextCoupDate = new Date("2026-08-31T23:59:59");

export default function Home() {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBid = (companyId: string) => {
    const company = sampleCompanies.find((c) => c.id === companyId);
    if (company) {
      setSelectedCompany(company);
      setIsModalOpen(true);
    }
  };

  const handleConfirmBid = (amount: number) => {
    console.log("Teklif:", amount, "Şirket:", selectedCompany?.symbol);
    // Buraya ileride ödeme + veritabanı kaydı gelecek
    alert(`${selectedCompany?.symbol} için ${amount} USD teklif edildi (şimdilik test)`);
    setIsModalOpen(false);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Can you dethrone Elon Musk?
        </h1>
        <p className="text-gray-400 text-lg">
          En yüksek teklifi ver, o anlık CEO ol. Her ay Boardroom Coup ile herkes düşer.
        </p>
      </div>

      <div className="mb-10">
        <Countdown targetDate={nextCoupDate} />
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

      {selectedCompany && (
        <BidModal
          company={selectedCompany}
          currentCEO={null}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirmBid}
        />
      )}
    </main>
  );
    }
