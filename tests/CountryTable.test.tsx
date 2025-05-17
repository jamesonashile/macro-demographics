import React from "react"


import { render, screen, fireEvent } from "@testing-library/react";
import CountryTable from "@/components/CountryTable";
import { describe, it, expect } from "vitest";

describe("CountryTable", () => {
  it("renders country name", () => {
    render(<CountryTable />);
    expect(screen.getByText("United States")).toBeInTheDocument();
    expect(screen.getByText("India")).toBeInTheDocument();
  });

  it("renders table headers", () => {
    render(<CountryTable />);
    expect(screen.getByText("Country")).toBeInTheDocument();
    expect(screen.getByText("Dividend Phase")).toBeInTheDocument();
  });

  it("filters countries by selected phase", () => {
    render(<CountryTable />);
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "Peak Dividend" },
    });
    expect(screen.queryByText("United States")).not.toBeInTheDocument();
  });
});
