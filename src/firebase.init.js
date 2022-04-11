// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZiPP-h389q0YY3h9T1oEDo21AAcLoGXY",
    authDomain: "david-car-service.firebaseapp.com",
    projectId: "david-car-service",
    storageBucket: "david-car-service.appspot.com",
    messagingSenderId: "609574740915",
    appId: "1:609574740915:web:d045673e5a59ca251fa1c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;