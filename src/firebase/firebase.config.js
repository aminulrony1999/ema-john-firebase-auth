// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYM6FNAY5LGF6Vt17lT6nXz6Q7vSiHUjc",
  authDomain: "ema-john-authenticate.firebaseapp.com",
  projectId: "ema-john-authenticate",
  storageBucket: "ema-john-authenticate.appspot.com",
  messagingSenderId: "61118846715",
  appId: "1:61118846715:web:448e3be89db2867bf2025e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;