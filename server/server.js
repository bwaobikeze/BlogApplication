import express from "express";
import cors from "cors";
import db from "./db/firebase.js";
import { collection, getDocs } from "firebase/firestore";

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const PostsCollection = collection(db, "Posts");
    const querySnapshot = await getDocs(PostsCollection);
    console.log(querySnapshot.docs);
    const Posts = querySnapshot.docs.map((doc) => doc.data());
    res.json(Posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
