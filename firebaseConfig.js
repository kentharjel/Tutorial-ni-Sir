// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8HIOOYg2DVsy8Mb_cx5JPS2tGKxTeVhk",
  authDomain: "mobile-tracker-app-75476.firebaseapp.com",
  projectId: "mobile-tracker-app-75476",
  storageBucket: "mobile-tracker-app-75476.firebasestorage.app",
  messagingSenderId: "198789921135",
  appId: "1:198789921135:web:7c6c504d560402c6ea909a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)