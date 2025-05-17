import React from "react"

import {render, screen, fireEvent, within} from "@testing-library/react";
import AlertList from "@/components/AlertList";
import { describe, it, expect, vi} from "vitest";

vi.mock("@/store/useAlertStore", ()=> ({
    useAlertStore: ()=> ({
        selectedSignal: null,
        setSelectedSignal: vi.fn(),
    }),
}));

vi.mock("@/store/useCountryStore", ()=> ({
    useCountryStore: ()=> ({
        setActiveCountry: vi.fn(),
    })
}));

describe("AlertList", ()=>{
    it("renders a list of alerts", ()=>{
        render(<AlertList/>);
        expect(screen.getAllByText(/Country:/i).length).toBeGreaterThan(0)
    });

    it("opens modal on alert click", ()=>{
        render(<AlertList/>);
        const card = screen.getAllByText(/Country:/i)[0];
        fireEvent.click(card);

        const modal = screen.getByRole("dialog");
        const modalContent = within(modal)

        expect(modalContent.getByText(/Confidence:/i)).toBeInTheDocument();
    });
});
