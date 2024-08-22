// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEJvgLhSLuyqWxMcfMRN2uBZ9j81BNigs",
    authDomain: "houseboat-8c64d.firebaseapp.com",
    projectId: "houseboat-8c64d",
    storageBucket: "houseboat-8c64d.appspot.com",
    messagingSenderId: "935077351311",
    appId: "1:935077351311:web:27bf9512d72bfc816b45fa",
    measurementId: "G-PMRSXWE6VQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);