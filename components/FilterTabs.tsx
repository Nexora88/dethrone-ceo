"use client";

interface Props {
  active: "all" | "us" | "tr" | "crypto";
  onChange: (value: "all" | "us" | "tr" | "crypto") => void;
}

export default function FilterTabs({ active, onChange }: Props) {
  const tabs = [
    { id: "all", label: "Tümü" },
    { id: "us", label: "🇺🇸 ABD" },
    { id: "tr", label: "🇹🇷 Türkiye" },
    { id: "crypto", label: "🪙 Kripto" },
  ] as const;

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            active === tab.id
              ? "bg-white text-black"
              : "bg-gray-900 text-gray-300 hover:bg-gray-800"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
