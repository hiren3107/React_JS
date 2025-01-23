// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc8haZIrN3DQV9nTliHGVkk-lTyh1Jbgk",
  authDomain: "loginpractis.firebaseapp.com",
  projectId: "loginpractis",
  storageBucket: "loginpractis.firebasestorage.app",
  messagingSenderId: "527760405682",
  appId: "1:527760405682:web:195ad2aafeb8e5d23685ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);



