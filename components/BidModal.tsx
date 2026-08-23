"use client";

import { useState } from "react";
import { Company, CEO } from "@/types";
import { formatUSD } from "@/lib/utils";

interface Props {
  company: Company;
  currentCEO?: CEO | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (amount: number) => void;
}

export default function BidModal({
  company,
  currentCEO,
  isOpen,
  onClose,
  onConfirm,
}: Props) {
  const minBid = currentCEO ? currentCEO.bid_amount + 1 : 1;
  const [amount, setAmount] = useState(minBid);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">{company.symbol} Tahtını Devral</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-400 mb-1">Minimum teklif</p>
            <p className="text-2xl font-semibold">{formatUSD(minBid)}</p>
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-2">
              Senin teklifin (USD)
            </label>
            <input
              type="number"
              min={minBid}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-white"
            />
          </div>

          {currentCEO && (
            <p className="text-sm text-gray-500">
              Şu anki CEO: @{currentCEO.x_username} ({formatUSD(currentCEO.bid_amount)})
            </p>
          )}

          <button
            onClick={() => onConfirm(amount)}
            disabled={amount < minBid}
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {formatUSD(amount)} ile Tahtı Devral
          </button>

          <p className="text-xs text-gray-500 text-center">
            Ödeme kripto ile yapılacak (SOL / USDT / BTC)
          </p>
        </div>
      </div>
    </div>
  );
}
