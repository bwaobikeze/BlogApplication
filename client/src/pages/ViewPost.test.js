import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import ViewPost from "./ViewPost";
import BlogHomePage from "./BlogHomePage";
import '@testing-library/jest-dom'

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
    
    
    // test("if no data is pulled from database", async () => {
    //     // Mock the API response
    //     mockedAxios.get.mockResolvedValue({
    //         data: {},
    //     });

    //     render(
    //         <Router>
    //             <ViewPost />
    //         </Router>
    //     );

    //     // Verify if the title is rendered
    //     expect(await screen.findByText("loading")).toBeInTheDocument();
    // });

    test("if back button is clicked", async () => {
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
                <BlogHomePage/>
                <ViewPost />
            </Router>
        );

        // Verify if the title is rendered
        expect(await screen.findByText("Test Post Title")).toBeInTheDocument();

        // Click the back button
        fireEvent.click(screen.getByText("← All Posts"));

        // Verify if the user is navigated to the home page
        expect(screen.getByText("Brian Waobikeze")).toBeInTheDocument();
    });
    

  
});
