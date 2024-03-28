// Import the functions you need from the SDKs you need
import { initializeApp }  from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore , doc, setDoc} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
// import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";


var apiKey ="";
var authDomain ="";
var projectId ="";
var storageBucket ="";
var messagingSenderId ="";
var appId ="";
var measurementId ="";
var initializeApp_check = false;
// var db = "";

function details_function() {
  apiKey = document.getElementById("apiKey").value;
  console.log(apiKey);

  authDomain = document.getElementById("authDomain").value;
  console.log(authDomain);

  projectId = document.getElementById("projectId").value;
  console.log(projectId);

  storageBucket = document.getElementById("storageBucket").value;
  console.log(storageBucket);

  messagingSenderId = document.getElementById("messagingSenderId").value;
  console.log(messagingSenderId);

  appId = document.getElementById("appId").value;
  console.log(appId);

  measurementId = document.getElementById("measurementId").value;
  console.log(measurementId);



  // const firebaseConfig = {
  //   // apiKey : apiKey,
  //   // authDomain: authDomain,
  //   // projectId: projectId,
  //   // storageBucket: storageBucket,
  //   // messagingSenderId: messagingSenderId,
  //   // appId: appId,
  //   // measurementId: measurementId
  
  //   apiKey: "AIzaSyDlH5h_gBUjeVwrtQeA_C6RirU26s1crWU",
  //   authDomain: "authDomain-mittendorf.firebaseapp.com",
  //   projectId: "christoph-mittendorf",
  //   storageBucket: "christoph-mittendorf.appspot.com",
  //   messagingSenderId: "111308864164",
  //   appId: "1:111308864164:web:65334b0e8d0967c1434431",
  //   measurementId: "G-8YJP0VHNWJ"
  // };

  // const app = initializeApp(firebaseConfig);


  // console.log(apiKey);
  // console.log(app);
  // const db = getFirestore(app);

  // console.log("db: " + db);
  // console.log(db);
  // console.log("db: " +typeof(db));

};



// const firebaseConfig = {
//   apiKey : apiKey,
//   authDomain: authDomain,
//   projectId: projectId,
//   storageBucket: storageBucket,
//   messagingSenderId: messagingSenderId,
//   appId: appId,
//   measurementId: measurementId

//   // apiKey: "AIzaSyDlH5h_gBUjeVwrtQeA_C6RirU26s1crWU",
//   // authDomain: "authDomain-mittendorf.firebaseapp.com",
//   // projectId: "christoph-mittendorf",
//   // storageBucket: "christoph-mittendorf.appspot.com",
//   // messagingSenderId: "111308864164",
//   // appId: "1:111308864164:web:65334b0e8d0967c1434431",
//   // measurementId: "G-8YJP0VHNWJ"
// };

// Initialize Firebase



// #################################################################  
// Check data type of content_field for numeric
// #################################################################  
function isNumeric(str) {
  if (!isNaN(parseFloat(str)) && isFinite(str)){
   str = parseInt(str)  
  } return str;
};

function add_data_to_firestore(){



console.log(initializeApp_check);
  // if(initializeApp_check == true){firebaseConfig.delete()};

  const firebaseConfig = {
    apiKey : apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
    measurementId: measurementId
  
    // apiKey: "AIzaSyDlH5h_gBUjeVwrtQeA_C6RirU26s1crWU",
    // authDomain: "authDomain-mittendorf.firebaseapp.com",
    // projectId: "christoph-mittendorf",
    // storageBucket: "christoph-mittendorf.appspot.com",
    // messagingSenderId: "111308864164",
    // appId: "1:111308864164:web:65334b0e8d0967c1434431",
    // measurementId: "G-8YJP0VHNWJ"
  };

  const app = initializeApp(firebaseConfig);




  initializeApp_check = true;

  console.log(apiKey);
  console.log(app);
  const db = getFirestore(app);

  console.log("db: " + db);
  console.log(db);
  console.log("db: " +typeof(db));


  console.log("db2: " +db);
  console.log(db);
  console.log("db2: " +typeof(db));
  var collection_name = "collection_name";
   alert(db);
   const obj = {};

  
// #################################################################  
// Header Array to Field names
// #################################################################  
  let header = lines[0][0];
  const header_Array = header.split(",");
  console.log(lines.length);
  
for (var y=1; y<lines.length; y++){
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
    console.log(content_Array[i]);

    var content_field = (content_Array[i]);
    content_field = isNumeric(content_field);
    const yourKeyVariable = field;
    const someValueArray= content_field;
    obj[yourKeyVariable]= someValueArray
  
console.log(obj);

console.log("db3: " +db);
console.log("db3: " +typeof(db));
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
document.getElementById("details").addEventListener("click", details_function);