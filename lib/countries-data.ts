type PhaseColours = {
    "Pre-Dividend": string
    "Peak Dividend": string
    "Post-Dividend": string
    "Dividend Collapse": string

}

type Phase = keyof PhaseColours

export type Country = {
    name: string
    code: string
    dividendPhase: Phase
    demographicShape: string
    policyScore: number
}

export const countries: Country[] = [
    {
        name: "United States",
        code: "US",
        dividendPhase: "Post-Dividend",
        demographicShape: "Barrel",
        policyScore: 7.5
    },
    {
        name: "China",
        code: "CN",
        dividendPhase: "Post-Dividend",
        demographicShape: "Inverted Pyramind",
        policyScore: 6
    },
    {
        name: "Germany",
        code: "DE",
        dividendPhase: "Post-Dividend",
        demographicShape: "Contracting Pillar",
        policyScore: 4
    },
    {
        name: "Japan",
        code: "JP",
        dividendPhase: "Post-Dividend",
        demographicShape: "Contracting Pillar",
        policyScore: 4
    },
    {
        name: "India",
        code: "IN",
        dividendPhase: "Pre-Dividend",
        demographicShape: "Stationary Column",
        policyScore: 4
    }
]