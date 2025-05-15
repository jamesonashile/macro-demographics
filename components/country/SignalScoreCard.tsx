"use client";

import { countrySignals } from "@/lib/signal-data";
import { SIGNAL_TYPES } from "@/types/signal";

type SignalScoreCardProps = {
  countryCode: string;
};

export default function SignalScoreCard({ countryCode }: SignalScoreCardProps) {
  const country = countrySignals.find((c) => c.countryCode === countryCode);
  if (!country) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {SIGNAL_TYPES.map((signal) => {
        const signalSeries = country.signals[signal];
        const latest = signalSeries?.[signalSeries.length - 1]?.score ?? null;

        let colour = "text-gray-400";
        if (latest !== null) {
          if (latest >= 0.75) {
            colour = "text-red-600 font-bold";
          } else if (latest >= 0.5) {
            colour = "text-yellow-600";
          } else {
            colour = "text-green-600";
          }
        }

        return (
          <div
            key={signal}
            className="border p-3 rounded-md bg-white shadow-sm flex justify-between items-center"
          >
            <div className="capitialise text-sm text-gray-600">
              {signal.replace(/([A-Z])/g, " $1")}
            </div>
            <div className={`text-lg ${colour}`}>
                {latest !== null ? (latest * 100).toFixed(0) + "%" : "-"}
                </div>
          </div>
        );
      })}
    </div>
  );
}
