"use client";

interface Props {
  symbol: string;
  amount: number;
  previousCEO?: string;
}

export default function ShareButton({ symbol, amount, previousCEO }: Props) {
  const text = previousCEO
    ? `dethrone.ceo üzerinde $${amount} teklif vererek $${symbol} tahtını @${previousCEO}'dan devraldım! Bakalım beni kim düşürecek?`
    : `dethrone.ceo üzerinde $${amount} teklif vererek $${symbol} tahtını devraldım! Bakalım beni kim düşürecek?`;

  const url = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=https://dethrone.ceo`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 w-full bg-[#1DA1F2] text-white py-3 rounded-lg font-semibold hover:bg-[#1a8cd8] transition"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.286-6.914L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
      X’te Paylaş
    </a>
  );
}
