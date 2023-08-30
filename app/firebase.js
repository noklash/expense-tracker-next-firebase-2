// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEUTQVO9UX7p86tsyvwWwX2nfGRPjpAlY",
  authDomain: "expense-tracker-fd70e.firebaseapp.com",
  projectId: "expense-tracker-fd70e",
  storageBucket: "expense-tracker-fd70e.appspot.com",
  messagingSenderId: "1042117661017",
  appId: "1:1042117661017:web:803f3120b280e13adebc48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)