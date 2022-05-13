// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, addDoc, collection, query, where, onSnapshot} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

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

  const q = query(collection(db, "gear"), where("brand", "==", "Canyon"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const gear = [];
    querySnapshot.forEach((doc) => {
        gear.push(doc.data().brand);
    });
    console.log("Current cities in CA: ", gear.join(", "));
  });

// Stop listening to changes/
unsubscribe();
