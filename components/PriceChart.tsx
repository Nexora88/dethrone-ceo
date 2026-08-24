"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  symbol: string;
}

// Mock 24 saatlik veri (gerçek API gelince değişecek)
const generateMockData = (symbol: string) => {
  const data = [];
  let price = symbol === "BTC" ? 61000 : symbol === "TSLA" ? 245 : 100;

  for (let i = 0; i < 24; i++) {
    price = price + (Math.random() - 0.5) * (price * 0.02);
    data.push({
      time: `${i}:00`,
      price: Number(price.toFixed(2)),
    });
  }
  return data;
};

export default function PriceChart({ symbol }: Props) {
  const data = generateMockData(symbol);

  return (
    <div className="w-full h-48 mt-4">
      <p className="text-sm text-gray-400 mb-2">Son 24 Saat (Mock)</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="time"
            tick={{ fill: "#6b7280", fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={["auto", "auto"]}
            tick={{ fill: "#6b7280", fontSize: 10 }}
            axisLine={false}
            tickLine={false}
            width={50}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#111",
              border: "1px solid #333",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#9ca3af" }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#22c55e"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
