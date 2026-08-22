export interface Company {
  id: string;
  symbol: string;
  name: string;
  type: "stock" | "crypto";
  exchange?: string; // NASDAQ, NYSE, BIST, vs.
  logo?: string;
  current_price?: number;
  price_change_24h?: number;
}

export interface CEO {
  id: string;
  company_id: string;
  user_id: string;
  x_username: string;
  x_name: string;
  x_avatar: string;
  bid_amount: number;
  started_at: string;
  ended_at?: string;
}

export interface Bid {
  id: string;
  company_id: string;
  user_id: string;
  amount: number;
  tx_signature?: string; // kripto işlem imzası
  created_at: string;
}

export interface User {
  id: string;
  x_id: string;
  x_username: string;
  x_name: string;
  x_avatar: string;
  created_at: string;
}
