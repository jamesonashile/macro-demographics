"use client"

import CountryHoverCard from "@/components/CountryHoverCard";
import { useState } from "react";
import { countries } from "@/lib/countries-data";
import CountryPanelModal from "./CountryPanelModal";


type HoverCardProps = {
  x: number;
  y: number;
  name: string;
  phase: string;
  policyScore: number;
};

export default function WorldMap() {
  const [hovered, setHovered] = useState<null | HoverCardProps>(null);
  const [activeCountry, setActiveCountry] = useState<null | typeof countries[0]>(null)

  return (
    <>
    <svg
      viewBox="0 0 800 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[400px] bg-slate-100"
    >
      {countries.map((country, index) => {
        const cx = 100 + index * 100;
        const cy = 200;
        return (
          <circle
            key={country.code}
            cx={cx}
            cy={cy}
            r={20}
            fill={"#ccc"}
            onClick={()=> setActiveCountry(country)}
            onMouseEnter={() =>
              setHovered({
                x: cx,
                y: cy,
                name: country.name,
                phase: country.dividendPhase,
                policyScore: country.policyScore,
              })
            }
            onMouseLeave={() => setHovered(null)}
          >
            <title>{country.name}</title>
          </circle>
        );
      })}


      {hovered && (
        
        <CountryHoverCard
          x={hovered.x}
          y={hovered.y}
          name={hovered.name}
          phase={hovered.phase}
          policyScore={hovered.policyScore}
        />
      )}

      

    </svg>
        {activeCountry && (
            <CountryPanelModal
                open={!!activeCountry}
                onOpenChange={(open)=> !open && setActiveCountry(null)}
                name={activeCountry.name}
                code={activeCountry.code}
                phase={activeCountry.dividendPhase}
                shape={activeCountry.demographicShape}
                policyScore={activeCountry.policyScore}
            />
          )}
</>
  );
}
