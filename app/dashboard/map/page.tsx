"use client"

import { useState } from "react";

import InteractiveWorldMap from "@/components/map/InteractiveWorldMap";
import CountryPanelModal from "@/components/CountryPanelModal";

import { useCountryStore } from "@/store/useCountryStore";

import {countries} from "@/lib/countries-data";

export default function MapPage() {
  const { activeCountry, setActiveCountry } = useCountryStore();
  const [zoomTarget, setZoomTarget] = useState<[number, number] | null>(null);

  function setActiveCountryByCode(code: string) {
    const country = countries.find((c) => c.code === code);
    if (country) setActiveCountry(country);
  }

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Demographic Map</h1>
      <InteractiveWorldMap
        onCountryClick={setActiveCountryByCode}
        selectedCode={activeCountry?.code}
        zoomToCountry={(coords) => setZoomTarget(coords)}
        center={zoomTarget ?? undefined}
      />

      {activeCountry && (
        <CountryPanelModal
          open={!!activeCountry}
          onOpenChange={(open) => {
            if (!open) setActiveCountry(null);
          }}
          name={activeCountry.name}
          code={activeCountry.code}
          phase={activeCountry.dividendPhase}
          shape={activeCountry.demographicShape}
          policyScore={activeCountry.policyScore}
        />
      )}
    </main>
  );
}
