import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../Landing_Page/home/HeroSection";
describe("Hero component", () => {
    test("renders the Hero component with correct content", () => {
        render(<Hero />);
        // Check if the main heading is rendered
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/images/homeHero.png"); 
   
    });
    });










    
