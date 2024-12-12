// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDaCYt0hwjU1kZe6413qnNr9Upg-s37PM",
  authDomain: "restaurant-7cb9b.firebaseapp.com",
  projectId: "restaurant-7cb9b",
  storageBucket: "restaurant-7cb9b.appspot.com", // Correction du domaine de stockage
  messagingSenderId: "1098707635192",
  appId: "1:1098707635192:web:609bc3e13ae164d3af640d",
  measurementId: "G-861D96TW6W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app); // Ajoute cette ligne pour initialiser Firestore

// Export Firestore
export { db };
