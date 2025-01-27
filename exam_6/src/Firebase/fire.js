
// Import the functions you need from the SDKs you need
import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcjbejPxFUIn1WVRvNSrnkiLjBByW_xc8",
  authDomain: "examcrud-74b3b.firebaseapp.com",
  projectId: "examcrud-74b3b",
  storageBucket: "examcrud-74b3b.firebasestorage.app",
  messagingSenderId: "1003515372367",
  appId: "1:1003515372367:web:863710d474fde872995b3a",
  measurementId: "G-56DG3E90B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export var db = getFirestore(app)