import { Company } from "@/types";

export const companies: Company[] = [
  // === NASDAQ / NYSE (ABD) ===
  { id: "tsla", symbol: "TSLA", name: "Tesla Inc.", type: "stock", exchange: "NASDAQ", flag: "🇺🇸" },
  { id: "aapl", symbol: "AAPL", name: "Apple Inc.", type: "stock", exchange: "NASDAQ", flag: "🇺🇸" },
  { id: "msft", symbol: "MSFT", name: "Microsoft", type: "stock", exchange: "NASDAQ", flag: "🇺🇸" },
  { id: "nvda", symbol: "NVDA", name: "NVIDIA", type: "stock", exchange: "NASDAQ", flag: "🇺🇸" },
  { id: "googl", symbol: "GOOGL", name: "Alphabet (Google)", type: "stock", exchange: "NASDAQ", flag: "🇺🇸" },
  { id: "meta", symbol: "META", name: "Meta Platforms", type: "stock", exchange: "NASDAQ", flag: "🇺🇸" },
  { id: "amzn", symbol: "AMZN", name: "Amazon", type: "stock", exchange: "NASDAQ", flag: "🇺🇸" },
  { id: "amd", symbol: "AMD", name: "AMD", type: "stock", exchange: "NASDAQ", flag: "🇺🇸" },
  { id: "nflx", symbol: "NFLX", name: "Netflix", type: "stock", exchange: "NASDAQ", flag: "🇺🇸" },
  { id: "mcd", symbol: "MCD", name: "McDonald's", type: "stock", exchange: "NYSE", flag: "🇺🇸" },
  { id: "ko", symbol: "KO", name: "Coca-Cola", type: "stock", exchange: "NYSE", flag: "🇺🇸" },
  { id: "nke", symbol: "NKE", name: "Nike", type: "stock", exchange: "NYSE", flag: "🇺🇸" },
  { id: "dis", symbol: "DIS", name: "Disney", type: "stock", exchange: "NYSE", flag: "🇺🇸" },
  { id: "xom", symbol: "XOM", name: "Exxon Mobil", type: "stock", exchange: "NYSE", flag: "🇺🇸" },
  { id: "f", symbol: "F", name: "Ford", type: "stock", exchange: "NYSE", flag: "🇺🇸" },
  { id: "ba", symbol: "BA", name: "Boeing", type: "stock", exchange: "NYSE", flag: "🇺🇸" },
  { id: "jpm", symbol: "JPM", name: "JPMorgan", type: "stock", exchange: "NYSE", flag: "🇺🇸" },

  // === BIST (Türkiye) ===
  { id: "asels", symbol: "ASELS", name: "Aselsan", type: "stock", exchange: "BIST", flag: "🇹🇷" },
  { id: "thyao", symbol: "THYAO", name: "Türk Hava Yolları", type: "stock", exchange: "BIST", flag: "🇹🇷" },
  { id: "eregl", symbol: "EREGL", name: "Ereğli Demir Çelik", type: "stock", exchange: "BIST", flag: "🇹🇷" },
  { id: "tuprs", symbol: "TUPRS", name: "Tüpraş", type: "stock", exchange: "BIST", flag: "🇹🇷" },
  { id: "sasa", symbol: "SASA", name: "Sasa Polyester", type: "stock", exchange: "BIST", flag: "🇹🇷" },
  { id: "isctr", symbol: "ISCTR", name: "İş Bankası", type: "stock", exchange: "BIST", flag: "🇹🇷" },
  { id: "kchol", symbol: "KCHOL", name: "Koç Holding", type: "stock", exchange: "BIST", flag: "🇹🇷" },
  { id: "bimas", symbol: "BIMAS", name: "BİM", type: "stock", exchange: "BIST", flag: "🇹🇷" },
  { id: "froto", symbol: "FROTO", name: "Ford Otosan", type: "stock", exchange: "BIST", flag: "🇹🇷" },
  { id: "toaso", symbol: "TOASO", name: "Tofaş", type: "stock", exchange: "BIST", flag: "🇹🇷" },
  { id: "sise", symbol: "SISE", name: "Şişecam", type: "stock", exchange: "BIST", flag: "🇹🇷" },
  { id: "tc ell", symbol: "TCELL", name: "Turkcell", type: "stock", exchange: "BIST", flag: "🇹🇷" },

  // === Kripto ===
  { id: "btc", symbol: "BTC", name: "Bitcoin", type: "crypto", flag: "🪙" },
  { id: "eth", symbol: "ETH", name: "Ethereum", type: "crypto", flag: "🪙" },
  { id: "sol", symbol: "SOL", name: "Solana", type: "crypto", flag: "🪙" },
  { id: "bnb", symbol: "BNB", name: "BNB", type: "crypto", flag: "🪙" },
  { id: "xrp", symbol: "XRP", name: "XRP", type: "crypto", flag: "🪙" },
  { id: "doge", symbol: "DOGE", name: "Dogecoin", type: "crypto", flag: "🪙" },
  { id: "pepe", symbol: "PEPE", name: "Pepe", type: "crypto", flag: "🪙" },
  { id: "wif", symbol: "WIF", name: "dogwifhat", type: "crypto", flag: "🪙" },
  { id: "bonk", symbol: "BONK", name: "Bonk", type: "crypto", flag: "🪙" },
  { id: "shib", symbol: "SHIB", name: "Shiba Inu", type: "crypto", flag: "🪙" },
];
