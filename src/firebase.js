// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-perfomance-review-2bc1f.firebaseapp.com",
  projectId: "react-perfomance-review-2bc1f",
  storageBucket: "react-perfomance-review-2bc1f.appspot.com",
  messagingSenderId: "161027982413",
  appId: "1:161027982413:web:9c94001e69f456c78a0804"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const googleAuthProvider = new GoogleAuthProvider()