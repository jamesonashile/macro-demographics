"use client"

import {alerts} from "@/lib/alerts-data"

export default function AlertList(){
    return (
        <div className="space-y-2">
            {alerts.map(alert=>(
                <div key={alert.id} className="border p-2 rounded bg-white shadow">
                    <strong>{alert.signalType}</strong> in <code>{alert.countryCode}</code> - Confidence: {(alert.confidence * 100).toFixed(0)}%
                </div>
            ))}
        </div>
    )
}