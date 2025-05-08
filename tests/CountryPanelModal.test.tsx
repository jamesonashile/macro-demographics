import {render, screen} from "@testing-library/react";
import CountryPanelModal from "@/components/CountryPanelModal";
import { describe, it, expect } from "vitest";
import React from "react";

describe("CountryPanelModal", ()=>{
    const mockCountry = {
        name: "Testland",
        code: "TL",
        phase: "Post-Dividend",
        shape: "Barrel",
        policyScore: 7,
    }

    it("renders with country data when open", ()=> {
        render(
            <CountryPanelModal
                open={true}
                onOpenChange={()=>{}}
                name={mockCountry.name}
                code={mockCountry.code}
                phase={mockCountry.phase}
                shape={mockCountry.shape}
                policyScore={mockCountry.policyScore}
            />
        )
    
        expect(screen.getByText((text)=> text.includes("Testland")))
        expect(screen.getByText("Post-Dividend")).toBeInTheDocument()
        expect(screen.getByText("Barrel")).toBeInTheDocument()
        expect(screen.getByText("7")).toBeInTheDocument()
})


})
