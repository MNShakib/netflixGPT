// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMLahOKWSKwqZDgypCKj_-5te7zfZErAY",
  authDomain: "netflix-gpt-31460.firebaseapp.com",
  projectId: "netflix-gpt-31460",
  storageBucket: "netflix-gpt-31460.appspot.com",
  messagingSenderId: "994049443303",
  appId: "1:994049443303:web:fdb4b2068d9280dc47e942",
  measurementId: "G-J9ZBVZXWC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
