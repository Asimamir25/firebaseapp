// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsWXzPyq4i57qb-eV1x3G07Zn2Tj8NQxk",
  authDomain: "todo-e8b68.firebaseapp.com",
  projectId: "todo-e8b68",
  storageBucket: "todo-e8b68.appspot.com",
  messagingSenderId: "652163020299",
  appId: "1:652163020299:web:19259badb2fe0cac1d790e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(app);
// export const FIREBASE_Auth = getAuth(app);