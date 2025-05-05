import React from "react";

type Props = {
    x: number
    y: number
    name: string
    phase: string
    policyScore: number
}

export default function CountryHoverCard({x, y, name, phase, policyScore}: Props){
    return (
        <foreignObject x={x + 10} y={y - 40} width="160" height="60">
            <div className="bg-white rounded shadow-md p-2 text-xs pointer-events-none">
                <strong>{name}</strong><br/>
                {phase}<br/>
                Policy Score: {policyScore}
            </div>
        </foreignObject>
    )
}