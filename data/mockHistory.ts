export const mockHistory: Record<
  string,
  { username: string; amount: number; date: string }[]
> = {
  tsla: [
    { username: "elonmusk", amount: 420, date: "2026-08-20" },
    { username: "tesla_fan_42", amount: 310, date: "2026-08-18" },
    { username: "wallstreetbets", amount: 180, date: "2026-08-15" },
  ],
  btc: [
    { username: "saylor", amount: 210, date: "2026-08-21" },
    { username: "bitcoin_maxi", amount: 150, date: "2026-08-17" },
  ],
  asels: [
    { username: "aselsan", amount: 85, date: "2026-08-19" },
    { username: "defense_tr", amount: 60, date: "2026-08-14" },
  ],
  nvda: [
    { username: "nvidia", amount: 150, date: "2026-08-22" },
  ],
};
