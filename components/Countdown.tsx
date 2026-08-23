"use client";

import { useEffect, useState } from "react";

interface Props {
  targetDate: Date; // Bir sonraki Boardroom Coup tarihi
}

export default function Countdown({ targetDate }: Props) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="bg-gradient-to-r from-red-950/40 to-orange-950/40 border border-red-900/50 rounded-xl p-5 text-center">
      <p className="text-sm text-red-300 mb-2 tracking-wider uppercase">
        Next Boardroom Coup
      </p>
      <div className="flex justify-center gap-4 text-3xl font-bold tabular-nums">
        <div>
          <span>{String(timeLeft.days).padStart(2, "0")}</span>
          <span className="text-xs text-gray-400 block font-normal">gün</span>
        </div>
        <div>
          <span>{String(timeLeft.hours).padStart(2, "0")}</span>
          <span className="text-xs text-gray-400 block font-normal">saat</span>
        </div>
        <div>
          <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
          <span className="text-xs text-gray-400 block font-normal">dk</span>
        </div>
        <div>
          <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
          <span className="text-xs text-gray-400 block font-normal">sn</span>
        </div>
      </div>
    </div>
  );
}
