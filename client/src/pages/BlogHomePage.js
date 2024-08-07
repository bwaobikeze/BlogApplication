import {
  Avatar,
  Button,
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function BlogHomePage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate(); // Use the navigate function to navigate to a different page

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

  const handleReadMore = (id) => {
    navigate(`/post/${id}`); // Navigate to the post page with the post id
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <Card>
          <CardHeader style={styles.cardHeader}>
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
      <div style={styles.blogPosts}>
        {posts.map((post) => (
          <Card key={post.id} style={{ marginBottom: "20px" }}>
            <CardBody>
              <div style={styles.postContainer}>
                <div style={styles.imageContainer}>
                  <Image
                    src={post.PostImage || "https://via.placeholder.com/400"}
                    alt="Blog"
                    width="100%"
                  />
                </div>

                <div style={styles.postContent}>
                  <h1 style={styles.postTitle}>{post.title}</h1>
                  <p>{post.Body.slice(0, 350)}...</p>
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <Button onClick={()=>handleReadMore(post.postID)}>Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    padding: "20px",
    flexWrap: "wrap",
  },
  sidebar: {
    flex: "0 0 300px",
    width: "100%",
    marginBottom: "20px",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  blogPosts: {
    flex: "2",
    width: "100%",
  },
  postContainer: {
    display: "flex",
    gap: "20px",
    padding: "20px",
    flexDirection: "row", // Keep the image on the left and text on the right
    alignItems: "center", // Vertically align the image and text
  },
  imageContainer: {
    flex: "0 0 150px", // Control the size of the image container
  },
  postContent: {
    flex: "1",
  },
  postTitle: {
    fontSize: "24px", // Make the title large
    fontWeight: "bold", // Make the title bold
    marginBottom: "10px",
  },
  "@media (max-width: 768px)": {
    postContainer: {
      flexDirection: "column", // Stack the image and text vertically on smaller screens
    },
  },
};

export default BlogHomePage;
