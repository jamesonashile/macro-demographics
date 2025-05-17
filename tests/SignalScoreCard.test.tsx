import React from "react"

import {render, screen} from "@testing-library/react";
import SignalScoreCard from "@/components/country/SignalScoreCard";
import {describe, it, expect} from "vitest";

describe("SignalScoreCards", ()=>{
    it("renders knwonn signal  types", ()=>{
        const renderText = (t: string) => (text: string) => text.toLowerCase().includes(t.toLowerCase())


        render(<SignalScoreCard countryCode="JP"/>);
        expect(screen.getByText(renderText("population decline"))).toBeInTheDocument();
        expect(screen.getByText(renderText("energy crunch"))).toBeInTheDocument();
        expect(screen.getByText(renderText("debt spike"))).toBeInTheDocument();
    });

    it("displays correct percentage values", ()=>{
        render(<SignalScoreCard countryCode="JP" />);
        expect(screen.getByText("93%")).toBeInTheDocument()
    })
});
