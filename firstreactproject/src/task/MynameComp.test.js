import { render,screen } from "@testing-library/react";
import MynameComp from "./MyNameComp";

test("render myname component",()=>{
    render(<MynameComp/>);
   let createElement = screen.getByText("My Name is Dhanush");
   expect(createElement).toBeInTheDocument();
})
test("render with props name",()=>{
    render(<MynameComp name="dhanush" post="Fullstack Developer"/>);
   let createElement = screen.getByText("My Name is :dhanush");
   expect(createElement).toBeInTheDocument();
})
test("render with props post",()=>{
    render(<MynameComp name="dhanush" post="Fullstack Developer"/>);
   let createElement = screen.getByText(/I am :Fullstack Developer/i);
   expect(createElement).toBeInTheDocument();
})