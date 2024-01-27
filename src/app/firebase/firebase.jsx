import { initializeApp } from "firebase/app";
import {getAuth}  from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAnYatkilEnQlRbpjNidMwbZZ9e0s-kc2Q",
  authDomain: "bookmart-f5d3b.firebaseapp.com",
  projectId: "bookmart-f5d3b",
  storageBucket: "bookmart-f5d3b.appspot.com",
  messagingSenderId: "200970634484",
  appId: "1:200970634484:web:b78a9d0d37baabf3b48aa1",
  measurementId: "G-2FCSL8K0N1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth};