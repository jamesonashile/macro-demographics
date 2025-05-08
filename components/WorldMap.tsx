"use client"

import React from 'react';

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
    <div className="w-full overflow-x-auto">
    <svg
      viewBox="0 0 800 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-full bg-slate-100"
    >
      {visibleCountries.map((country, index) => {
        const cx = 100 + index * 100;
        const cy = 200;
        return (
          <circle
            role="img"
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

    </div>
  )
}
