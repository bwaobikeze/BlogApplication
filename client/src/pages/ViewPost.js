import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Button, Image } from "@nextui-org/react";
import axios from "axios";

function ViewPost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [Post, setPost] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8080/post/${id}`)
            .then((response) => {
                setPost(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleBackClick = () => {
        navigate("/");
    };

    return (
        <div style={styles.pageContainer}>
            <Card style={styles.postCard}>
                <CardHeader style={styles.cardHeader}>
                    <h1 style={styles.title}>{Post.title}</h1>
                    <p style={styles.date}>June 25, 2020 | MUSIC</p>
                </CardHeader>
                <CardBody>
                    <Image 
                        src={Post.PostImage || "https://via.placeholder.com/800x400"} 
                        alt="Post Image"
                        style={styles.image}
                    />
                    <div style={styles.bodyContent}>
                        <p style={styles.postBody}>{Post.Body}</p>
                    </div>
                </CardBody>
                <CardFooter>
                    {/* Uncomment this if you want to display the author */}
                    {/* <p style={styles.author}>Author: {Post.author}</p> */}
                </CardFooter>
            </Card>

            {/* Back to All Posts Button */}
            <Button style={styles.backButton} onClick={handleBackClick}>
                ← All Posts
            </Button>
        </div>
    );
}

const styles = {
    pageContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f5f5f5",
    },
    postCard: {
        maxWidth: "800px",
        width: "100%",
        backgroundColor: "white",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
    },
    cardHeader: {
        textAlign: "center",
        marginBottom: "20px",
    },
    title: {
        fontSize: "32px",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    date: {
        fontSize: "16px",
        color: "#888",
    },
    image: {
        width: "100%",
        borderRadius: "10px",
        marginBottom: "20px",
    },
    bodyContent: {
        padding: "20px 0",
    },
    postBody: {
        fontSize: "18px",
        lineHeight: "1.6",
        color: "#333",
    },
    author: {
        fontSize: "14px",
        color: "#888",
    },
    backButton: {
        marginTop: "20px",
        backgroundColor: "#e0e0e0",
        color: "#333",
        borderRadius: "5px",
        padding: "10px 20px",
        fontWeight: "bold",
        fontSize: "16px",
        cursor: "pointer",
        border: "none",
        textAlign: "center",
    },
};

export default ViewPost;
