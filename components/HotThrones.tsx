"use client";

import { companies } from "@/data/companies";
import { mockCeos } from "@/data/mockCeos";
import { formatUSD } from "@/lib/utils";

export default function HotThrones() {
  // En yüksek teklifli şirketleri al (mock)
  const hot = companies
    .map((company) => ({
      ...company,
      ceo: mockCeos[company.id],
    }))
    .filter((c) => c.ceo)
    .sort((a, b) => (b.ceo?.bid_amount || 0) - (a.ceo?.bid_amount || 0))
    .slice(0, 5);

  if (hot.length === 0) return null;

  return (
    <div className="mb-10">
      <h2 className="text-lg font-semibold mb-4 text-gray-200">
        En Çok Savaşılanlar
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {hot.map((item, index) => (
          <div
            key={item.id}
            className="border border-gray-800 rounded-xl p-4 bg-gray-950 hover:border-gray-600 transition"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">#{index + 1}</span>
              <span className="text-lg">{item.flag}</span>
            </div>
            <p className="font-bold text-lg">{item.symbol}</p>
            <p className="text-xs text-gray-400 mb-3 truncate">{item.name}</p>

            {item.ceo && (
              <div>
                <a
                  href={`https://x.com/${item.ceo.x_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:underline"
                >
                  @{item.ceo.x_username}
                </a>
                <p className="text-sm font-medium mt-1">
                  {formatUSD(item.ceo.bid_amount)}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
