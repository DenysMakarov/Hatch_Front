import {render, screen} from "@testing-library/react";
import App from "../../App";
import {Todolist} from "./Todolist";

test('renders Todo List', () => {
    render(<Todolist />);
    const linkElement = screen.getByText(/hello/i);
    expect(linkElement).toBeInTheDocument();
});
