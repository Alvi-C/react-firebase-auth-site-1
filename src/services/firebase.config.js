// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4Y8P8nwVx1MbU_fCEdDcrA8EzCPj5UuQ",
    authDomain: "spotlight-auth-8ca41.firebaseapp.com",
    projectId: "spotlight-auth-8ca41",
    storageBucket: "spotlight-auth-8ca41.appspot.com",
    messagingSenderId: "734254272608",
    appId: "1:734254272608:web:2733d7d1ceb4b7f360b305"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;