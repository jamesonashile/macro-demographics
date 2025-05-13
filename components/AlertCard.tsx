import React from "react"

import { Alert } from "@/types/alert";

type AlertCardProps = {
  alert: Alert;
};

export default function AlertCard({ alert }: AlertCardProps ) {
  return (
    <div className="border p-4 rounded-md bg-white shadow-sm space-y-1 text-sm sm:text-base">
      <div className="text-sm text-gray-600">{new Intl.DateTimeFormat("en-US", { dateStyle: "medium"}).format(new Date(alert.triggeredAt))}</div>
      <div className="font-semibold text-gray-800">{alert.signalType}</div>
      <div className="texct-xs text-gray-500">
      Country: <code>{alert.countryCode}</code> Confidence: {(alert.confidence * 100).toFixed(0)}%
    </div>
    </div>
  );
}
