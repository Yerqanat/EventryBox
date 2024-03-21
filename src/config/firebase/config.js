// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyANIO7oVwT5NXezS67D56swmGH8QHu4650",
  authDomain: "eventrybox.firebaseapp.com",
  projectId: "eventrybox",
  storageBucket: "eventrybox.appspot.com",
  messagingSenderId: "578374493806",
  appId: "1:578374493806:web:6bcc033b3c5d453541e87f",
  measurementId: "G-2ZEDHWYMLV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const eventryStorage = getStorage(app, "gs://eventrybox.appspot.com");
