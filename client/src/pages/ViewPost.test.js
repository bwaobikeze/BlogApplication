import ViewPost from "./ViewPost";
import { render, screen, cleanup } from "@testing-library/react";

test("ViewPost renders", () => {
    render(<ViewPost />);
    const viewPostElement = screen.getByTestId("view-post");
    expect(viewPostElement).toBeInTheDocument();
});
