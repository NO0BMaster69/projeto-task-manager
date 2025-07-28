// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkrtokOA4sRHr0JWp100A8CpeSoXKExr8",
    authDomain: "taskflow-c3fdc.firebaseapp.com",
    projectId: "taskflow-c3fdc",
    storageBucket: "taskflow-c3fdc.firebasestorage.app",
    messagingSenderId: "632897279480",
    appId: "1:632897279480:web:08b76415445b43b744720d",
    measurementId: "G-DNSLVJT0JD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);