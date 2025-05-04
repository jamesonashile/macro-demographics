import { countries } from "@/lib/countries-data"



const phaseColours = {
    "Pre-Dividend": "#00ff00",
    "Peak Dividend": "#ffff00",
    "Post-Dividend": "#ff7700",
    "Dividend Collapse": "#ff0000"
};


export default function WorldMap(){
    return (
      <svg
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[400px] bg-slate-100"
      >
        {countries.map((country, index) => (
            <circle
                key={country.code}
                cx={100 + index * 100}
                cy={200}
                r={20}
                fill={phaseColours[country.dividendPhase]}
            >
                <title>{country.name}</title>
            </circle>
        ))}
        
      </svg>
    );
}