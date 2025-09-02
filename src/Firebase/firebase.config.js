// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyCq_hZSGRvY98d6PSLy80WPvi4Y_w_L348",
  authDomain: "lingo-bingo-auth-f56f0.firebaseapp.com",
  projectId: "lingo-bingo-auth-f56f0",
  storageBucket: "lingo-bingo-auth-f56f0.firebasestorage.app",
  messagingSenderId: "867056173326",
  appId: "1:867056173326:web:31ab07876163e01e23575f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;