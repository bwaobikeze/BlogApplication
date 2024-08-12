const admin = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");

// Initialize the Firebase Admin SDK without explicitly specifying credentials
admin.initializeApp();

const db = getFirestore(); // Get a Firestore instance

module.exports = { default: db };
