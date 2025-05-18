"use client";

import React, { useEffect, useState } from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";


import { phaseColours } from "@/lib/mapColours";
import { countries } from "@/lib/countries-data";
import { geoCentroid } from "d3-geo";
import type {Feature} from "geojson";



const geoUrl = "/geo/countries.geojson";

type Props = {
  onCountryClick?: (countryCode: string) => void;
  selectedCode?: string;
  zoomToCountry?: (coordinates: [number, number]) => void;
  center?: [number, number]
};

type GeoFeature = Feature;

/*type GeoFeature = {
  rsmKey: string;
  properties: {
    "ISO3166-1-Alpha-2": string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
};*/

export default function InteractiveWorldMap({
  onCountryClick,
  zoomToCountry,
  center
}: Props) {
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  useEffect(()=>{
    if(center){
      setPosition({coordinates:center, zoom:4})
    }
  }, [center])

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
                if (!geo.properties) return null;

                const code = geo.properties["ISO3166-1-Alpha-2"];
                const country = countries.find((c) => c.code === code);
                const phase = country?.dividendPhase;
                const fill = phase
                  ? phaseColours[phase] ?? "#e5e7eb"
                  : "e5e7eb";

                return (
                  <Geography
                    key={geo.properties["ISO3166-1-Alpha-2"]}
                    geography={geo}
                    onClick={() => {
                      onCountryClick?.(code);

                      const centroid = geoCentroid(geo);
                      if (centroid && centroid.length === 2) {
                        //setPosition({ coordinates: centroid as [number, number], zoom:4 });
                        zoomToCountry?.(centroid as [number, number]);
                      }
                    }}
                    className="transition-all duration-200"
                    style={{
                      default: {
                        fill,
                        outline: "none",
                      },
                      hover: {
                        fill,
                        outline: "none",
                      },
                      pressed: {
                        fill,
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
