export type Alert = {
    id: string
    countryCode: string
    signalType: "Population Decline" | "Policy Shock" | "Energy Crunch" | "Debt Spike"
    confidence: number
    triggeredAt: string
}
