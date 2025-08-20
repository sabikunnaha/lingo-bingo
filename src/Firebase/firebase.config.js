// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIgDMb5q3YhHJZumkkzsB3aUxup3WjuDY",
  authDomain: "lingo-bingo-2fa04.firebaseapp.com",
  projectId: "lingo-bingo-2fa04",
  storageBucket: "lingo-bingo-2fa04.firebasestorage.app",
  messagingSenderId: "481100752873",
  appId: "1:481100752873:web:038ce452c5d1cdb1d2cd78",
  measurementId: "G-J23B8BZ1G5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;