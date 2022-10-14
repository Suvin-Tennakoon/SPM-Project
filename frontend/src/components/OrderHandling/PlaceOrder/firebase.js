import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmcFvAuPeraBJsX4QHsFRPc2zWFWY40i4",
  authDomain: "cake-auth-b1fde.firebaseapp.com",
  projectId: "cake-auth-b1fde",
  storageBucket: "cake-auth-b1fde.appspot.com",
  messagingSenderId: "208161774597",
  appId: "1:208161774597:web:8764c0481c8a2ed63f106c",
  measurementId: "G-CY56WTCTGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
