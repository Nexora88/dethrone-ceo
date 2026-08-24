"use client";

import { useState } from "react";
import { Company, CEO } from "@/types";
import { formatUSD } from "@/lib/utils";
import ShareButton from "@/components/ShareButton";

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
  const minBid = currentCEO ? Math.ceil(currentCEO.bid_amount) + 1 : 1;
  const [amount, setAmount] = useState(minBid);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm(amount);
    setSuccess(true);
  };

  const handleClose = () => {
    setSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              {company.flag} {company.symbol}
            </h2>
            <p className="text-sm text-gray-400">{company.name}</p>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {!success ? (
          <div className="space-y-5">
            <div className="bg-gray-900 rounded-xl p-4">
              <p className="text-sm text-gray-400 mb-1">Minimum teklif</p>
              <p className="text-2xl font-bold">{formatUSD(minBid)}</p>
            </div>

            {currentCEO && (
              <div className="flex items-center gap-3 text-sm">
                <img
                  src={currentCEO.x_avatar}
                  alt={currentCEO.x_username}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="font-medium">@{currentCEO.x_username}</p>
                  <p className="text-gray-400">
                    {formatUSD(currentCEO.bid_amount)} ile tahtta
                  </p>
                </div>
              </div>
            )}

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

            <button
              onClick={handleConfirm}
              disabled={amount < minBid}
              className="w-full bg-white text-black py-3.5 rounded-lg font-semibold hover:bg-gray-200 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {formatUSD(amount)} ile Tahtı Devral
            </button>

            <p className="text-xs text-gray-500 text-center leading-relaxed">
              Şu an test modundasın. Gerçek kripto ödemeler yakında aktif olacak.
            </p>
          </div>
        ) : (
          <div className="space-y-5 text-center">
            <div className="text-4xl mb-2">👑</div>
            <h3 className="text-xl font-bold">Tebrikler!</h3>
            <p className="text-gray-400">
              {company.symbol} tahtını {formatUSD(amount)} ile devraldın.
            </p>

            <ShareButton
              symbol={company.symbol}
              amount={amount}
              previousCEO={currentCEO?.x_username}
            />

            <button
              onClick={handleClose}
              className="w-full border border-gray-700 text-gray-300 py-3 rounded-lg hover:bg-gray-900 transition"
            >
              Kapat
            </button>
          </div>
        )}
      </div>
    </div>
  );
            }
