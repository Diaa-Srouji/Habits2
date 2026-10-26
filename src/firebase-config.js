import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBj0uvFXWrOQxPskGUrCe7CjH7EZyVBZwo",
  authDomain: "habits-2adc2.firebaseapp.com",
  projectId: "habits-2adc2",
  storageBucket: "habits-2adc2.firebasestorage.app",
  messagingSenderId: "1020463913676",
  appId: "1:1020463913676:web:ca77ce7c90b11bb16fc069"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);