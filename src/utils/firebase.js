// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBtPS4bpSPCsimTNvbiS34ZvGlLiI-KP8",
  authDomain: "netflixgpt-a4c1a.firebaseapp.com",
  projectId: "netflixgpt-a4c1a",
  storageBucket: "netflixgpt-a4c1a.firebasestorage.app",
  messagingSenderId: "388113882600",
  appId: "1:388113882600:web:63494a4c2bf667d24e185d",
  measurementId: "G-KSNJ0H89BN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
