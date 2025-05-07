import {render, screen} from "@testing-library/react";
import WorldMap from "@/components/WorldMap";
import { describe, it, expect } from "vitest";

describe("WorldMap", ()=> {
    it("renders without crashing", ()=> {
        render(<WorldMap/>)

        const circles = screen.getAllByRole("img", {hidden: true})
        expect(circles.length).toBeGreaterThan(0)
    })
})