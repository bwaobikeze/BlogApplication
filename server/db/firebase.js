import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import serviceAccount from "file:///C:/Users/bwaob/Desktop/GoogleAccountKey/blogapplication-431707-4077aa507afe.json"assert { type: "json" };;

// Initialize the Firebase Admin SDK with your service account key
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = getFirestore(); // Get a Firestore instance with admin privileges


export default db;