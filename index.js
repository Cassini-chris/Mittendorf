// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlH5h_gBUjeVwrtQeA_C6RirU26s1crWU",
  authDomain: "christoph-mittendorf.firebaseapp.com",
  projectId: "christoph-mittendorf",
  storageBucket: "christoph-mittendorf.appspot.com",
  messagingSenderId: "111308864164",
  appId: "1:111308864164:web:65334b0e8d0967c1434431",
  measurementId: "G-8YJP0VHNWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
