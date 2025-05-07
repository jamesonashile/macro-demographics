"use client"

import { useState } from "react";
import { countries } from "@/lib/countries-data";
import { useCountryStore } from "@/store/useCountryStore";
import CountryHoverCard from "@/components/CountryHoverCard";
import CountryPanelModal from "./CountryPanelModal";


type HoverCardProps = {
  x: number;
  y: number;
  name: string;
  phase: string;
  policyScore: number;
};

export default function WorldMap() {
  const [hovered, setHovered] = useState<HoverCardProps | null>(null);
  const {selectedPhase, activeCountry, setActiveCountry} = useCountryStore()

  const visibleCountries = selectedPhase ? countries.filter((c)=> c.dividendPhase === selectedPhase) : countries

  return (
    
    <svg
      viewBox="0 0 800 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[400px] bg-slate-100"
    >
      {visibleCountries.map((country, index) => {
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
          />
            
        );
      })}


      {hovered &&  <CountryHoverCard {...hovered}/>}
     
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
</svg>
  )
}
