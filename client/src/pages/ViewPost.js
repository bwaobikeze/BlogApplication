import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Image,
  CircularProgress,
} from "@nextui-org/react";
import axios from "axios";
import "./ViewPost.css";

function ViewPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/post/${id}`)
      .then((response) => {
        setPost(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("No data found");
        setLoading(false);
      });
  }, [id]);

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="pageContainer">
      {loading ? (
        <div className="loadingContainer">
          <CircularProgress size="lg" />
          <p>Loading...</p>
        </div>
      ) : errorMessage ? (
        <div className="errorContainer">
          <p style={{ color: 'red' }}>{errorMessage}</p>
          <Button auto onClick={handleBackClick}>
            Back to All Posts
          </Button>
        </div>
      ) : (
        <Card data-testid="view-post" className="postCard">
          <CardHeader className="cardHeader">
            <h1 className="title">{post.title}</h1>
            <p className="date">June 25, 2020 | MUSIC</p>
          </CardHeader>
          <CardBody>
            <Image
              src={post.postImage || "https://via.placeholder.com/800x400"}
              alt="Post Image"
              className="image"
            />
            <div className="bodyContent">
              <p className="postBody">{post.Body}</p>
            </div>
          </CardBody>
          <CardFooter>
            {/* Uncomment this if you want to display the author */}
            {/* <p className="author">Author: {post.author}</p> */}
          </CardFooter>
        </Card>
      )}
      {/* Back to All Posts Button */}
      {!loading && !errorMessage && (
        <Button className="backButton" onClick={handleBackClick}>
          ← All Posts
        </Button>
      )}
    </div>
  );
}

export default ViewPost;
