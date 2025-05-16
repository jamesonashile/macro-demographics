"use client"

import InteractiveWorldMap from "@/components/map/InteractiveWorldMap";
import { useCountryStore } from "@/store/useCountryStore";
import {countries} from "@/lib/countries-data";

export default function MapPage() {
  const { setActiveCountry } = useCountryStore();

  function setActiveCountryByCode(code: string) {
    const country = countries.find((c) => c.code === code);
    if (country) setActiveCountry(country);
  }

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Demographic Map</h1>
      <InteractiveWorldMap
        onCountryClick={(code) => setActiveCountryByCode(code)}
      />
    </main>
  );
}
