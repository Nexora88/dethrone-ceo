export default function StatsBar() {
  // Şimdilik sabit (mock) veriler
  const stats = {
    online: 87,
    totalVolume: 12840,
    activeThrones: 34,
  };

  return (
    <div className="bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 mb-8">
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-gray-300">
            <span className="font-semibold text-white">{stats.online}</span> online
          </span>
        </div>

        <div className="text-gray-300">
          Toplam Teklif:{" "}
          <span className="font-semibold text-white">
            ${stats.totalVolume.toLocaleString()}
          </span>
        </div>

        <div className="text-gray-300">
          Dolu Taht:{" "}
          <span className="font-semibold text-white">{stats.activeThrones}</span>
        </div>
      </div>
    </div>
  );
}
