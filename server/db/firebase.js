import { initializeApp } from "firebase/app"; // Correct method name
import { getFirestore } from "firebase/firestore";
import { config } from "dotenv";

// Load environment variables
config();

console.log(process.env.REACT_APP_FIREBASE_API_KEY);
console.log(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN);
console.log(process.env.REACT_APP_FIREBASE_PROJECT_ID);
console.log(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET);
console.log(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID);
console.log(process.env.REACT_APP_FIREBASE_APP_ID);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, process.env.REACT_APP_FIREBASE_STORAGE_BUCKET);

export default db;
