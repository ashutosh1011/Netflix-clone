// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjoBzTVJ2LsKXQMGRYFANfFT5aZ6jjdnY",
  authDomain: "netflix-clone-7f6f1.firebaseapp.com",
  projectId: "netflix-clone-7f6f1",
  storageBucket: "netflix-clone-7f6f1.appspot.com",
  messagingSenderId: "191460142840",
  appId: "1:191460142840:web:a6fec39189c63a81d3550d",
  measurementId: "G-P3G74EXMZD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
