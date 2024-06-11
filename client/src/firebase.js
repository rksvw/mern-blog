// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f5da3.firebaseapp.com",
  projectId: "mern-blog-f5da3",
  storageBucket: "mern-blog-f5da3.appspot.com",
  messagingSenderId: "989800688850",
  appId: "1:989800688850:web:9a1059cd922e896e7e510b",
  measurementId: "G-6NFGWY9DVK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);