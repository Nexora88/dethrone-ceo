"use client";

import { mockHistory } from "@/data/mockHistory";
import { formatUSD } from "@/lib/utils";

interface Props {
  companyId: string;
}

export default function ThroneHistory({ companyId }: Props) {
  const history = mockHistory[companyId] || [];

  if (history.length === 0) {
    return (
      <p className="text-sm text-gray-500 py-3">Henüz taht geçmişi yok.</p>
    );
  }

  return (
    <div className="mt-4 pt-4 border-t border-gray-800">
      <h4 className="text-sm font-medium text-gray-300 mb-3">Taht Geçmişi</h4>
      <div className="space-y-2.5">
        {history.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-sm"
          >
            <a
              href={`https://x.com/${item.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              @{item.username}
            </a>
            <div className="text-right">
              <span className="text-white font-medium">
                {formatUSD(item.amount)}
              </span>
              <span className="text-gray-500 text-xs ml-2">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
