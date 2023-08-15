// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, setDoc, Timestamp  } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

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


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

function add_data_to_firestore(){


// #################################################################  
// #################################################################
// #################################################################

setDoc(doc(db, "engineering",

    "disney_princess_image_classification"), {
    app: "https://epicml.uc.r.appspot.com/",
    github: "https://github.com/Cassini-chris/Transfer-Learning-Image-Classification_Disney",
    updated: Timestamp.fromDate(new Date("May 1, 2021")),
    type: "ML App",
    description: "Disney-Princess-Classification Model using Transfer Learning via TensorFlow Hub modules",
    project: "Disney Princess Image Classification"

// #################################################################
// #################################################################
// #################################################################




})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});};

document.getElementById("clickMe").addEventListener("click", add_data_to_firestore);