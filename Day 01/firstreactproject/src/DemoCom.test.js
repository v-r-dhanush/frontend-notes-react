import { render,screen } from "@testing-library/react";
import DemoComp from "./DemoComp";

test("render demo component",()=>{
    render(<DemoComp/>);
   let createElement = screen.getByText("This is Demo");
   expect(createElement).toBeInTheDocument();
})
test("render with props name",()=>{
    render(<DemoComp name="dhanush" post="Fullstack Developer"/>);
   let createElement = screen.getByText("My Name is :dhanush");
   expect(createElement).toBeInTheDocument();
})
test("render with props post",()=>{
    render(<DemoComp name="dhanush" post="Fullstack Developer"/>);
   let createElement = screen.getByText(/I am :Fullstack Developer/i);
   expect(createElement).toBeInTheDocument();
})