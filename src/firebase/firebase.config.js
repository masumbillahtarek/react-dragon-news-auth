// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx7Efnq0fxd5L_jF-l1cOWdQypkDOIP-8",
  authDomain: "react-dragon-news-auth-1c3aa.firebaseapp.com",
  projectId: "react-dragon-news-auth-1c3aa",
  storageBucket: "react-dragon-news-auth-1c3aa.firebasestorage.app",
  messagingSenderId: "708685736413",
  appId: "1:708685736413:web:feedafbdd61a7c3dd4ee34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
export default auth