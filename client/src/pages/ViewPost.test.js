import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import ViewPost from "./ViewPost";

// Mock the axios module
jest.mock("axios");
const mockedAxios = axios;

describe("ViewPost Component", () => {
  test("renders the component correctly", async () => {
    // Mock the API response
    mockedAxios.get.mockResolvedValue({
      data: {
        title: "Test Post Title",
        postImage: "http://example.com/image.jpg",
        Body: "This is a test post body.",
      },
    });

    render(
      <Router>
        <ViewPost />
      </Router>
    );

    // Verify if the title is rendered
    expect(await screen.findByText("Test Post Title")).toBeInTheDocument();
    // Verify if the post image is rendered
    expect(screen.getByAltText("Post Image")).toHaveAttribute(
      "src",
      "http://example.com/image.jpg"
    );
    // Verify if the post body is rendered
    expect(screen.getByText("This is a test post body.")).toBeInTheDocument();
  });

  test("navigates to home on back button click", () => {
    const navigate = jest.fn();

    // Mock useNavigate
    jest
      .spyOn(require("react-router-dom"), "useNavigate")
      .mockImplementation(() => navigate);

    render(
      <Router>
        <ViewPost />
      </Router>
    );

    // Simulate back button click
    fireEvent.click(screen.getByText("← All Posts"));
    expect(navigate).toHaveBeenCalledWith("/");
  });
});
