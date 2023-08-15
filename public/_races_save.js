// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, addDoc, collection, query, where, onSnapshot, orderBy} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

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

  let type_value = document.getElementById("selector_race_type").value;


  function type_dropdown(){
    type_value = document.getElementById("selector_race_type").options[ document.getElementById("selector_race_type").selectedIndex].value;
    let q = "";

    // Exception for ALL Values at Start
    if (type_value == "ALL") {
      console.log(true); q = query(collection(db, "races"), orderBy("date"));}
      else {q = query(collection(db, "races"), where("type", "==", type_value), orderBy("date"));
    };

    //Deletes the Table on the Page:
    $("#races_table tbody tr").remove();

    //RUN
    run_query(q);
    };



  function run_query(q) {
    const data = [];
    const unsubscribe = onSnapshot(q, (querySnapshot) => {

    querySnapshot.forEach((doc) => {
    const data = doc.data();
    console.log(q);

    var tbodyRef = document.getElementById('races_table').getElementsByTagName('tbody')[0];
    // Insert a row at the end of table
    var newRow = tbodyRef.insertRow();
    // Insert a cell at the end of the row
    var new_cell = newRow.insertCell();
    var createA = document.createElement('img');
    var new_text = "./assets/img/races/" + data.img;
//     console.log(new_text);
    createA.setAttribute('src', new_text);
    createA.setAttribute("width", "128");
    createA.setAttribute("height", "128");
    createA.setAttribute("alt", data.name);
    new_cell.appendChild(createA);

    var new_cell = newRow.insertCell();
    var createA = document.createElement('a');
    var new_text = document.createTextNode(data.name);
    createA.setAttribute('href', data.link);
    createA.setAttribute('target', '_blank');
    createA.setAttribute('class', 'links');
    createA.appendChild(new_text);
    new_cell.appendChild(createA);

    var new_cell = newRow.insertCell();
    var new_text = document.createTextNode(data.distance + "km");
    new_cell.appendChild(new_text);

    var new_cell = newRow.insertCell();
    var new_text = document.createTextNode(data.type);
    new_cell.appendChild(new_text);

    var new_cell = newRow.insertCell();
    var new_text = document.createTextNode(data.elevation + "m");
    new_cell.appendChild(new_text);

    var new_cell = newRow.insertCell();
    var new_text = document.createTextNode(data.date.toDate().toDateString());
    new_cell.appendChild(new_text);


    var new_cell = newRow.insertCell();
    var race_date = data.date.toMillis();
    var now_date = Date.now();
    var delta = race_date - now_date;
    var new_text = document.createTextNode(Math.floor(delta/1000/60/60/24));
    new_cell.appendChild(new_text);
    var new_cell = newRow.insertCell();

    var createA = document.createElement('a');
    var new_text = document.createTextNode(data.city + ", " + data.country);
    createA.appendChild(new_text);
    new_cell.appendChild(createA);

    unsubscribe();
  });
});
};

document.getElementById("selector_race_type").addEventListener("change", type_dropdown);

type_dropdown();
