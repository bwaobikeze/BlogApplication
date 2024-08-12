const admin = require("firebase-admin");
const serviceAccount = require("C:/Users/bwaob/Desktop/GoogleAccountKey/blogapplication-431707-4077aa507afe.json");
const { getFirestore } = require("firebase-admin/firestore");

// Initialize the Firebase Admin SDK with your service account key
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = getFirestore(); // Get a Firestore instance with admin privileges

module.exports = { default: db };
