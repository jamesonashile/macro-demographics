import {Alert} from "@/types/alert"

export const alerts: Alert[]=[
    {
        id: "a1",
        countryCode: "JP",
        signalType: "Population Decline",
        confidence: 0.92,
        triggeredAt: "2025-04-21T10:30:00Z",
      },
      {
        id: "a2",
        countryCode: "DE",
        signalType: "Policy Shock",
        confidence: 0.76,
        triggeredAt: "2025-04-20T14:45:00Z",
      },
      {
        id: "a3",
        countryCode: "IN",
        signalType: "Debt Spike",
        confidence: 0.84,
        triggeredAt: "2025-04-19T08:10:00Z",
      },
]