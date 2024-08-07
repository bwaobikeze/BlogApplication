import express from "express";
import cors from "cors";
import db from "./db/firebase.js";

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const PostsCollection = db.collection("BlogPost");
    console.log(PostsCollection);
    const querySnapshot = await PostsCollection.get(); 
    const Posts = querySnapshot.docs.map((doc) => doc.data());
    res.json(Posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
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
