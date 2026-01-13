// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3xePVWSJqjFBqzfuKOm6Es3fr6q-xE1I",
    authDomain: "shopzen-e44fd.firebaseapp.com",
    projectId: "shopzen-e44fd",
    storageBucket: "shopzen-e44fd.firebasestorage.app",
    messagingSenderId: "20918295550",
    appId: "1:20918295550:web:f6357116322b6251463eaf",
    measurementId: "G-DCYGE8ZP1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
export default auth;