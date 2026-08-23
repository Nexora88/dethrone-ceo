"use client";

import { Company, CEO } from "@/types";
import { formatPrice, formatUSD } from "@/lib/utils";

interface Props {
  company: Company;
  currentCEO?: CEO | null;
  onBid: (companyId: string) => void;
}

export default function CompanyCard({ company, currentCEO, onBid }: Props) {
  return (
    <div className="border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition bg-gray-950">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            {company.flag && <span className="text-lg">{company.flag}</span>}
            <h2 className="text-xl font-bold">{company.symbol}</h2>
          </div>
          <p className="text-sm text-gray-400 mt-0.5">{company.name}</p>
        </div>

        {company.current_price !== undefined && (
          <div className="text-right">
            <p className="font-medium">{formatPrice(company.current_price)}</p>
            {company.price_change_24h !== undefined && (
              <p
                className={`text-xs ${
                  company.price_change_24h >= 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {company.price_change_24h >= 0 ? "+" : ""}
                {company.price_change_24h.toFixed(2)}%
              </p>
            )}
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-800">
        {currentCEO ? (
          <div className="flex items-center gap-3">
            <img
              src={currentCEO.x_avatar}
              alt={currentCEO.x_username}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">@{currentCEO.x_username}</p>
              <p className="text-xs text-gray-400">
                {formatUSD(currentCEO.bid_amount)} ile tahtta
              </p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-500">Henüz CEO yok</p>
        )}
      </div>

      <button
        onClick={() => onBid(company.id)}
        className="mt-4 w-full bg-white text-black py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition text-sm"
      >
        Tahtı Devral
      </button>
    </div>
  );
}
