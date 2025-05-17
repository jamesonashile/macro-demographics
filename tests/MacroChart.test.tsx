import React from "react"


import {render, screen} from "@testing-library/react";
import MacroChart from "@/components/country/MacroChart";
import { SignalType } from "@/types/signal";
import {describe, it, expect} from "vitest";

describe("MacroChart", ()=>{
    it("renders chart for signal", ()=> {
        render(<MacroChart countryCode="JP" signalType="populationDecline"/>);
        const chartContainer = document.querySelector(".recharts-responsive-container");
expect(chartContainer).toBeTruthy()
  });

    it("renders no-data message for invalid signal", ()=>{
        render(<MacroChart countryCode="JP" signalType={"nonexistentSignal" as SignalType}/>);
        expect(screen.getByText(/No signal data available/)).toBeInTheDocument()
    })
});