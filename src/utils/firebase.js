// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiuD7Aar9FZJG0tnF5_bE4uMDmqOL31n8",
  authDomain: "netflixgpt-2fa43.firebaseapp.com",
  projectId: "netflixgpt-2fa43",
  storageBucket: "netflixgpt-2fa43.firebasestorage.app",
  messagingSenderId: "679795161047",
  appId: "1:679795161047:web:487034ba1f26860eb4bd92",
  measurementId: "G-SZS7TPMJY8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
