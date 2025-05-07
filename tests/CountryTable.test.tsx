import { render, screen } from "@testing-library/react";
import CountryTable from "@/components/CountryTable";
import { describe, it, expect } from "vitest";

describe("CountryTable", ()=>{
    it("renders country names", ()=>{
        render(<CountryTable />);

        expect(screen.getByText("United States")).toBeInTheDocument();
        expect(screen.getByText("India")).toBeInTheDocument();
    });

    it("renders table headers", ()=>{
        render(<CountryTable />);

        expect(screen.getByText("Country")).toBeInTheDocument();
        expect(screen.getByText("Dividend Phase")).toBeInTheDocument();
    });
})