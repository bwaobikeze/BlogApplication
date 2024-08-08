import express from "express";
import cors from "cors";
import db from "./db/firebase.js";

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const posts = [];
    
    const unsubscribe = db.collection("BlogPost").onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        posts.push(doc.data());
      });
      unsubscribe(); // Stop listening after fetching the data
      res.json(posts); // Send the response with the data
    });
    
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).send("Internal Server Error");
  }

});

app.get("/post/:id", async (req, res) => { 
  try {
    const { id } = req.params;
    const postRef = db.collection("BlogPost").doc(id);
    const doc = await postRef.get();
    if (!doc.exists) {
      res.status(404).json({ error: "Post not found" });
    } else {
      res.json(doc.data());
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch post" });
  }
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
