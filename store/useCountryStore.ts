import { create } from "zustand";
import { Country } from "@/lib/countries-data";

export type CountryStore = {
  activeCountry: Country | null;
  setActiveCountry: (country: Country | null) => void;

  selectedPhase: string | null;
  setSelectedPhase: (phase: string | null) => void;
};

export const useCountryStore = create<CountryStore>((set) => ({
  activeCountry: null,
  setActiveCountry: (country) => set({ activeCountry: country }),

  selectedPhase: null,
  setSelectedPhase: (phase) => set({ selectedPhase: phase }),
}));
