// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
 // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGf54_7bl09m3IEKNKb3fzmsFd5SABPYo",
  authDomain: "pshare-e773b.firebaseapp.com",
  projectId: "pshare-e773b",
  storageBucket: "pshare-e773b.appspot.com",
  messagingSenderId: "624007705723",
  appId: "1:624007705723:web:11367937fed19e95485ede"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);