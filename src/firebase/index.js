// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgHr8odxQIZwRSfa1hVpUJXA354KV9aAk",
  authDomain: "chat-cc800.firebaseapp.com",
  projectId: "chat-cc800",
  storageBucket: "chat-cc800.firebasestorage.app",
  messagingSenderId: "372982253358",
  appId: "1:372982253358:web:510a28f14c55b2222b9cbf",
  measurementId: "G-59ZPM9RC1G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
