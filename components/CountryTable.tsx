"use client";

import { useState } from "react";

import { countries } from "@/lib/countries-data";

export default function CountryTable() {

  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);

  const dividend = [
    "Pre-Dividend",
    "Peak Dividend",
    "Post-Dividend",
    "Dividend Collapse",
  ]

  const filteredCountries = selectedPhase ? countries.filter((c)=> c.dividendPhase === selectedPhase) : countries


  return (
    <>
      <div className="mb-4 flex flex-wrap gap-2">
        {dividend.map((phase) => (
          <button
            key={phase}
            className={`px-4 py2 rounded border ${
              selectedPhase === phase ? "bg-blue-600 text-white" : "bg-white"
            }`}
            onClick={() =>
              setSelectedPhase(phase === selectedPhase ? null : phase)
            }
          >
            {phase}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Country
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Code
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Dividend Phase
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Shape
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Policy
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCountries.map((c) => {
              return (
                <tr key={c.code} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{c.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{c.code}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {c.dividendPhase}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {c.demographicShape}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {c.policyScore}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
