// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpEBlwGhFDHn4l-0a6083b1PSVjByGFqM",
  authDomain: "signin-upload.firebaseapp.com",
  projectId: "signin-upload",
  storageBucket: "signin-upload.appspot.com",
  messagingSenderId: "929170496722",
  appId: "1:929170496722:web:841696d9cdc5427f98e10b",
  measurementId: "G-TVG07JPFPG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
