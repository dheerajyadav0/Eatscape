import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
import react from "react";


describe("Contact Us page Test Case",()=>{

test("Should load contact us component",()=>{

    render(<Contact/>);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
});

test("Should load buttom inside contact us component",()=>{

    render(<Contact/>);

    const button = screen.getByRole("button");
    // const button = screen.getByText("submit")

    //Assertion
    expect(button).toBeInTheDocument();
});

test("Should load input name inside contact us component",()=>{

    render(<Contact/>);

    const inputName = screen.getByPlaceholderText("name");
    // const button = screen.getByText("submit")

    //Assertion
    expect(inputName).toBeInTheDocument();
});

test("Should load 2 input boxes on the contact page",()=>{
    render(<Contact/>);

    const inputBoxes = screen.getAllByRole("textbox");//we use getAllByRole bcz there are 2 inputboxes we have to test

    // console.log(inputBoxes.length);

    //assertion
    expect(inputBoxes.length).toBe(2);

});

});