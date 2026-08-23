"use client";

import { useState } from "react";
import CompanyCard from "@/components/CompanyCard";
import BidModal from "@/components/BidModal";
import Countdown from "@/components/Countdown";
import FilterTabs from "@/components/FilterTabs";
import { companies } from "@/data/companies";
import { Company } from "@/types";

const nextCoupDate = new Date("2026-08-31T23:59:59");

export default function Home() {
  const [filter, setFilter] = useState<"all" | "us" | "tr" | "crypto">("all");
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCompanies = companies.filter((company) => {
    if (filter === "all") return true;
    if (filter === "us") return company.flag === "🇺🇸";
    if (filter === "tr") return company.flag === "🇹🇷";
    if (filter === "crypto") return company.type === "crypto";
    return true;
  });

  const handleBid = (companyId: string) => {
    const company = companies.find((c) => c.id === companyId);
    if (company) {
      setSelectedCompany(company);
      setIsModalOpen(true);
    }
  };

  const handleConfirmBid = (amount: number) => {
    console.log("Teklif:", amount, "Şirket:", selectedCompany?.symbol);
    alert(`${selectedCompany?.symbol} için $${amount} teklif edildi (test)`);
    setIsModalOpen(false);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Can you dethrone Elon Musk?
        </h1>
        <p className="text-gray-400 text-lg">
          En yüksek teklifi ver, o anlık CEO ol. Her ay <strong>Boardroom Coup</strong> ile herkes düşer.
        </p>
      </div>

      <div className="mb-8">
        <Countdown targetDate={nextCoupDate} />
      </div>

      <FilterTabs active={filter} onChange={setFilter} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredCompanies.map((company) => (
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
