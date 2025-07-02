// app/config/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRQICc-x5agOD3K0AFYD2XTTDopV2SL7M",
  authDomain: "edutrack-e5694.firebaseapp.com",
  projectId: "edutrack-e5694",
  storageBucket: "edutrack-e5694.appspot.com",
  messagingSenderId: "739018382295",
  appId: "1:739018382295:web:0e2170aeb8740641200992",
  measurementId: "G-4YZMG6SMTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
