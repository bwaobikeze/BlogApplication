import {
  Avatar,
  Button,
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";
// import { useRouter } from "next/router";

import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

function BlogHomePage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080")
      .then((response) => {
        const newPost = response.data.map((post) => {
          return post;
        });
        setPosts([...posts, ...newPost]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const ReadMore = () => { 
    
  };

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {/* Sidebar */}
      <div style={{ flex: "0 0 300px" }}>
        <Card>
          <CardHeader
            css={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <Avatar src="https://nextui.org/assets/avatar-1.jpg" alt="Avatar" />
            <div>
              <h5>John Doe</h5>
              <p>Jan 1, 2023</p>
            </div>
          </CardHeader>
          <CardBody>
            <h3>Denali</h3>
            <p>
              Denali is a simple responsive blog template. Easily add new posts
              using the Editor or change layout and design using the Designer.
            </p>
            <h4>Featured Posts:</h4>
            <ul>
              <li>
                According a funnily until pre-set or arrogant well cheerful
              </li>
              <li>Overlaid the jeepers uselessly much excluding</li>
            </ul>
          </CardBody>
          <CardFooter>{/* Social Media buttons can go here */}</CardFooter>
        </Card>
      </div>

      {/* Blog Posts */}
      <div style={{ flex: "2" }}>
        {posts.map((post) => (
          <Card style={{ marginBottom: "20px" }}>
            <CardHeader
              css={{ display: "flex", alignItems: "center", gap: "10px" }}
            ></CardHeader>
            <CardBody>
              <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
                <div>
                  <Image
                    src={post.PostImage || "https://via.placeholder.com/400"}
                    alt="Blog"
                    width="100"
                  />
                </div>

                <div>
                  <h1>{post.title}</h1>
                  <p>{post.Body.slice(0, 350)}...</p>
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default BlogHomePage;
