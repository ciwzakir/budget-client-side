
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD42yBUmvZ9iTBDqy7N51wV2xvXP-Z7QF8",
  authDomain: "eagle-camera-house.firebaseapp.com",
  projectId: "eagle-camera-house",
  storageBucket: "eagle-camera-house.appspot.com",
  messagingSenderId: "424103443309",
  appId: "1:424103443309:web:ebe3b484f363e13ac5f864"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;