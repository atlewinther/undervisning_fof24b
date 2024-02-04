// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3IsN8s1utTDH4Emsc0Bzx_NEkkUZuGhw",
  authDomain: "fof24b.firebaseapp.com",
  projectId: "fof24b",
  storageBucket: "fof24b.appspot.com",
  messagingSenderId: "973747369124",
  appId: "1:973747369124:web:aa600b4f39d7c8474c6231"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();