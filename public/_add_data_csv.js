// Import the functions you need from the SDKs you need
import { initializeApp }  from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore , doc, setDoc} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
// import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

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
const db = getFirestore(app);


// // Add a new document in collection "cities"
// await setDoc(doc(db, "cities", "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA"
// })
// .then(() => {
//     console.log("Document successfully written!");
// })
// .catch((error) => {
//     console.error("Error writing document: ", error);
// });

function add_data_to_firestore(){

 
  var collection_name = "collection_name";

   alert("clicked");
   const obj = {};

  
// #################################################################  
// Header Array to Field names
// #################################################################  
  let header = lines[0][0];
  const header_Array = header.split(",");
  console.log(lines.length);
  
for (var y=1; y<4; y++){
  var document_name = "document_name: " + y;


  for (var i=0; i<header_Array.length; i++) {
    console.log(header_Array[i]);
    var field = (header_Array[i]);

// #################################################################  
// Content Array to Field names
// #################################################################
  let content = lines[y][0];
  const content_Array = content.split(",");
  console.log(content_Array);
  
  // for (var i=0; i<content_Array.length; i++) {
    console.log("yes" + content_Array[i]);

    var content_field = (content_Array[i]);

    const yourKeyVariable = field;
    const someValueArray= content_field;
    obj[yourKeyVariable]= someValueArray
  
console.log(obj);

 setDoc(doc(db, collection_name, document_name), obj)
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
  };
};

}''

document.getElementById("clickMe_2").addEventListener("click", add_data_to_firestore);