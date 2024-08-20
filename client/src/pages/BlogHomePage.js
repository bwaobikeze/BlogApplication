import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  CircularProgress,
} from "@nextui-org/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./BlogHomePage.css"; // Import the CSS file

function BlogHomePage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://us-central1-blogapplication-431707.cloudfunctions.net/app")
      .then((response) => {
        const newPost = response.data.map((post) => {
          return post;
        });
        setPosts([...posts, ...newPost]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleReadMore = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <Card>
          <CardHeader className="ProfileCardHeader">
            <Avatar
              src="https://i.postimg.cc/Hxvkqz4J/image.webp"
              alt="Avatar"
              style={{ width: "100px", height: "100px" }}
            />
            <div>
              <h5>Brian Waobikeze</h5>
            </div>
          </CardHeader>
          <CardBody>
            <h4>Welcome to My Blog!</h4>
            <p>
              I'm a software engineer with a passion for Video games, Movies,
              and everything pop culture. I write about my experiences and share
              my thoughts on various topics. Feel free to read my blog posts and
              leave a comment.
            </p>
          </CardBody>
          <CardFooter className="CardFooter">
            <a href="https://www.linkedin.com/in/brianwaobikeze">
              <img
                src="https://img.icons8.com/color/50/000000/linkedin.png"
                alt="LinkedIn"
              />
              linkedin
            </a>
            <a href="https://github.com/bwaobikeze">
              <img
                src="https://img.icons8.com/color/48/000000/github--v1.png"
                alt="GitHub"
              />
              GitHub
            </a>
            <a href="https://brian-portfoliowebsite.web.app/">
              <img
                src="https://img.icons8.com/color/48/000000/domain--v1.png"
                alt="Portfolio Website"
              />
              Website
            </a>
          </CardFooter>
        </Card>
      </div>

      {/* Blog Posts */}
      {loading ? (
        <CircularProgress
          size="lg"
          label="Loading..."
          className="blogPosts"
        ></CircularProgress>
      ) : (
        <div className="blogPosts">
          {posts.map((post) => (
            <Card key={post.id} style={{ marginBottom: "20px" }}>
              <CardBody>
                <div className="postContainer">
                  <div className="imageContainer">
                    <Image
                      src={post.postImage || "https://via.placeholder.com/400"}
                      alt="Blog"
                      width="100%"
                    />
                  </div>
                  <div className="postContent">
                    <h1 className="postTitle">{post.title}</h1>
                    <p>{post.Body.slice(0, 350)}...</p>
                  </div>
                </div>
              </CardBody>
              <CardFooter>
                <Button onClick={() => handleReadMore(post.postID)}>
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogHomePage;
