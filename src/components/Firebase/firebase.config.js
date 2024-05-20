// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB91FCnNRrpOEU6Nk74nrknqa0_LJKdT4Y",
    authDomain: "food-share-44688.firebaseapp.com",
    projectId: "food-share-44688",
    storageBucket: "food-share-44688.appspot.com",
    messagingSenderId: "1058758660289",
    appId: "1:1058758660289:web:339cbfa72cbc4cfba40440",
    measurementId: "G-D208VDH8BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app)

export default auth;