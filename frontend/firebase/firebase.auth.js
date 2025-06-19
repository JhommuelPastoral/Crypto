// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzuLGAyzk-V266tYWYmux5acBhv9v2QGs",
  authDomain: "crypto-265b3.firebaseapp.com",
  projectId: "crypto-265b3",
  storageBucket: "crypto-265b3.firebasestorage.app",
  messagingSenderId: "592051135886",
  appId: "1:592051135886:web:8c5f17217fbb58a25ab0df",
  measurementId: "G-NZCWVLS5YD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };