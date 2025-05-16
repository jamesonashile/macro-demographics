"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

import React, { useState } from "react";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type Props = {
  onCountryClick?: (countryCode: string) => void;
  selectedCode?: string;
};

type GeoFeature = {
  rsmKey: string;
  properties: {
    ISO_A2: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

export default function InteractiveWorldMap({
  onCountryClick,
  selectedCode,
}: Props) {
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  const handleZoomIn = () => {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.5 }));
  };

  const handleMoveEnd = (pos: {
    coordinates: [number, number];
    zoom: number;
  }) => {
    setPosition(pos);
  };

  return (
    <div className="relative">
      <div className="absolute z-10 top-2 left-2 flex gap-2">
        <button
          onClick={handleZoomIn}
          className="bg-white px-3 py-1 rounded shadow"
        >
          +
        </button>
        <button
          onClick={handleZoomOut}
          className="bg-white px-3 py-1 rounded shadow"
        >
          -
        </button>
      </div>

      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 160 }}
        className="w-full h-auto"
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: GeoFeature[] }) =>
              geographies.map((geo) => {
                const code = geo.properties.ISO_A2;
                const isSelected = code === selectedCode;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => onCountryClick?.(code)}
                    className="transition-all duration-200"
                    style={{
                      default: {
                        fill: isSelected ? "#0284c7" : "#e2e8f0",
                        outline: "none",
                      },
                      hover: {
                        fill: "#0ea5e9",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#0369a1",
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
