import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import ViewPost from "./ViewPost";
import BlogHomePage from "./BlogHomePage";
import "@testing-library/jest-dom";

// Mock the axios module
jest.mock("axios");
const mockedAxios = axios;

describe("BlogHomePage", () => {
  test("renders the component correctly", async () => {
    // Mock the API response
    mockedAxios.get.mockResolvedValue({
      data: [
        {
          title: "Test Post Title",
          postImage: "http://example.com/image.jpg",
          Body: "This is a test post body.",
        },
      ],
    });
    render(
      <Router>
        <BlogHomePage />
      </Router>
    );

    // Verify if the title is rendered
    expect(await screen.findByText("Welcome to My Blog!")).toBeInTheDocument();
    // Verify if the post image is rendered
    expect(await screen.findByText("Brian Waobikeze")).toBeInTheDocument();
    // Verify if the post body is rendered
    expect(
      await screen.findByText(
        "I'm a software engineer with a passion for Video games, Movies, and everything pop culture. I write about my experiences and share my thoughts on various topics. Feel free to read my blog posts and leave a comment."
      )
    ).toBeInTheDocument();
  });
});
