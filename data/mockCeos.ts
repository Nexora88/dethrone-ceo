import { CEO } from "@/types";

export const mockCeos: Record<string, CEO> = {
  tsla: {
    id: "1",
    company_id: "tsla",
    user_id: "user1",
    x_username: "elonmusk",
    x_name: "Elon Musk",
    x_avatar: "https://unavatar.io/twitter/elonmusk",
    bid_amount: 420,
    started_at: new Date().toISOString(),
  },
  btc: {
    id: "2",
    company_id: "btc",
    user_id: "user2",
    x_username: "saylor",
    x_name: "Michael Saylor",
    x_avatar: "https://unavatar.io/twitter/saylor",
    bid_amount: 210,
    started_at: new Date().toISOString(),
  },
  asels: {
    id: "3",
    company_id: "asels",
    user_id: "user3",
    x_username: "aselsan",
    x_name: "Aselsan Fan",
    x_avatar: "https://unavatar.io/twitter/aselsan",
    bid_amount: 75,
    started_at: new Date().toISOString(),
  },
};
