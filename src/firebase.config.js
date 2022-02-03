import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvkidCSV1MQ-9iL6772O7RT6FQEVmxRps",
  authDomain: "etoolix-ef810.firebaseapp.com",
  projectId: "etoolix-ef810",
  storageBucket: "etoolix-ef810.appspot.com",
  messagingSenderId: "73000104973",
  appId: "1:73000104973:web:5f871155878edc52305144",
  measurementId: "G-MDE09M8JRV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
