// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, addDoc, collection, query, where} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDlH5h_gBUjeVwrtQeA_C6RirU26s1crWU",
    authDomain: "christoph-mittendorf.firebaseapp.com",
    projectId: "christoph-mittendorf",
    storageBucket: "christoph-mittendorf.appspot.com",
    messagingSenderId: "111308864164",
    appId: "1:111308864164:web:65334b0e8d0967c1434431",
    measurementId: "G-8YJP0VHNWJ"
  };

  // document.addEventListener("DOMContentLoaded", function(event) {
  //    console.log("DOM fully loaded and parsed");
  // });


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  let brand_value = document.getElementById("selector_brand").value;
  let q = query(collection(db, "gear"));
//  console.log("run 1");
//  console.log(q);

  // function brand_dropdown(){
  // brand_value = document.getElementById("selector_brand").options[ document.getElementById("selector_brand").selectedIndex].text;
  // q_brand = query(collection(db, "races"), where("brand", "==", brand_value));
  // console.log("run 2");
  // console.log(brand_value);
  //   console.log(q);
  // run_query(q);
  // };


  const querySnapshot = await getDocs(q);

  function run_query(q) {
  //   console.log(brand_value);
  //   console.log(q);

    querySnapshot.forEach((doc) => {
    //  console.log(`${doc.id} => ${doc.data()}`);
    const data = doc.data();

    var tbodyRef = document.getElementById('gear_table').getElementsByTagName('tbody')[0];
    // Insert a row at the end of table
    var newRow = tbodyRef.insertRow();
    // Insert a cell at the end of the row
    var new_cell = newRow.insertCell();
    var createA = document.createElement('img');
    var new_text = "./assets/img/gear/" + data.img;
    createA.setAttribute('src', new_text);
    createA.setAttribute("width", "128");
    createA.setAttribute("height", "128");
    createA.setAttribute("alt", data.brand);
    //console.log(createA);

  //  createA.appendChild(new_text);
    new_cell.appendChild(createA);
    var new_cell = newRow.insertCell();
    var new_text = document.createTextNode(data.type);
    new_cell.appendChild(new_text);

    var new_cell = newRow.insertCell();
    var new_text = document.createTextNode(data.brand);
    new_cell.appendChild(new_text);

    var new_cell = newRow.insertCell();
    var new_text = document.createTextNode(data.model);
    new_cell.appendChild(new_text);

    var new_cell = newRow.insertCell();
    var new_text = document.createTextNode(data.description);
    new_cell.appendChild(new_text);

    var new_cell = newRow.insertCell();
    var new_text = document.createTextNode("~ " + data.price + " €");
    new_cell.appendChild(new_text);


    var new_cell = newRow.insertCell();
    var createA = document.createElement('a');
    var new_text = document.createTextNode("Buy here");
    createA.setAttribute('href', data.link);
    createA.setAttribute('target', '_blank');
    createA.setAttribute('class', 'links');
    createA.appendChild(new_text);
    new_cell.appendChild(createA);
    //setTimeout(() => { unsubscribe(); }, 2000);

    // return new Promise((resolve, reject) => {
    //   setTimeout(() => resolve(data), 200);
    //     console.log(q);
    // });

//console.log(data);

  });
};
run_query(q);


//document.getElementById("selector_brand").addEventListener("change", brand_dropdown);
