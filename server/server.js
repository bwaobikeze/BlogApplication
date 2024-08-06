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

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
