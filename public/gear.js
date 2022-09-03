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

  // Initialize all DRODOWN MENUS
  let gear_sports_value = document.getElementById("selector_gear_sports").value;
  let gear_brand_value = document.getElementById("selector_gear_brand").value;
  let gear_type_value = document.getElementById("selector_gear_type").value;
  let gear_category_value = document.getElementById("selector_gear_category").value;

  document.getElementById("selector_gear_sports").addEventListener("change", gear_sports_dropdown);
  document.getElementById("selector_gear_brand").addEventListener("change", gear_brand_dropdown);
  document.getElementById("selector_gear_type").addEventListener("change", gear_type_dropdown);
  document.getElementById("selector_gear_category").addEventListener("change", gear_category_dropdown);


  //SPORTS DROPDOWN--------------------------------------------------------------
  function gear_sports_dropdown(){
    gear_sports_value = document.getElementById("selector_gear_sports").options[ document.getElementById("selector_gear_sports").selectedIndex].value;
    let q = "";
    console.log(q);
    // Exception for ALL Values at Start
    if (gear_sports_value == "ALL") {
      console.log("Sports is done");
      q = query(collection(db, "gear"), orderBy ("category", "asc"));}
      else {q = query(collection(db, "gear"), where("sports", "==", gear_sports_value));
    };
    //Deletes the Table on the Page:
    $("#gear_table tbody tr").remove();
    //RUN
    run_query_gear(q);
    };

  //BRAND DROPDOWN--------------------------------------------------------------
  function gear_brand_dropdown(){
    gear_brand_value = document.getElementById("selector_gear_brand").options[ document.getElementById("selector_gear_brand").selectedIndex].value;
    let q = "";
    console.log(q);
    // Exception for ALL Values at Start
    if (gear_brand_value == "ALL") {
      console.log(true);
      q = query(collection(db, "gear"));}
      else {q = query(collection(db, "gear"), where("brand", "==", gear_brand_value));
    };
    //Deletes the Table on the Page:
    $("#gear_table tbody tr").remove();
    //RUN
    run_query_gear(q);
    };

    //CATEGORY DROPDOWN--------------------------------------------------------------
    function gear_category_dropdown(){
      gear_category_value = document.getElementById("selector_gear_category").options[ document.getElementById("selector_gear_category").selectedIndex].value;
      let q = "";
      console.log(q);
      // Exception for ALL Values at Start
      if (gear_category_value == "ALL") {
        console.log(true);
        q = query(collection(db, "gear"));}
        else {q = query(collection(db, "gear"), where("category", "==", gear_category_value));
      };
      //Deletes the Table on the Page:
      $("#gear_table tbody tr").remove();
      //RUN
      run_query_gear(q);
      };


    //TYPE DROPDOWN--------------------------------------------------------------
    function gear_type_dropdown(){
      gear_type_value = document.getElementById("selector_gear_type").options[ document.getElementById("selector_gear_type").selectedIndex].value;
      let q = "";
      console.log(q);
      // Exception for ALL Values at Start
      if (gear_type_value == "ALL") {
        console.log(true);
        q = query(collection(db, "gear"));}
        else {q = query(collection(db, "gear"), where("type", "==", gear_type_value));
      };
      //Deletes the Table on the Page:
      $("#gear_table tbody tr").remove();
      //RUN
      run_query_gear(q);
      };

  //DATABASE QUERY #############################################################
  function run_query_gear(q) {
    const data = [];
    const unsubscribe = onSnapshot(q, (querySnapshot) => {

    querySnapshot.forEach((doc) => {
    const data = doc.data();
    console.log(q);

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
    createA.style.borderRadius = "75px";
    new_cell.appendChild(createA);

    var new_cell = newRow.insertCell();
    var new_text = document.createTextNode(data.sports);
    new_cell.appendChild(new_text);

    var new_cell = newRow.insertCell();
    var new_text = document.createTextNode(data.category);
    new_cell.appendChild(new_text);

    var new_cell = newRow.insertCell();
    var new_text = document.createTextNode(data.brand);
    new_cell.appendChild(new_text);

    var new_cell = newRow.insertCell();
    var new_text = document.createTextNode(data.type);
    new_cell.appendChild(new_text);

    var new_cell = newRow.insertCell();
    var new_text = document.createTextNode(data.model);
    new_cell.appendChild(new_text);

    // var new_cell = newRow.insertCell();
    // var new_text = document.createTextNode(data.description);
    // new_cell.appendChild(new_text);

    var new_cell = newRow.insertCell();
    var new_text = document.createTextNode(data.price + " €");
    new_cell.appendChild(new_text);


    var new_cell = newRow.insertCell();
    var createA = document.createElement('a');
    var new_text = document.createTextNode("Buy here");
    createA.setAttribute('href', data.link);
    createA.setAttribute('target', '_blank');
    createA.setAttribute('class', 'links');
    createA.appendChild(new_text);
    new_cell.appendChild(createA);



    if (data.sports == "Running") {
    newRow.style.backgroundColor = "#b6c9e2"};
    if (data.sports == "Cycling") {
    newRow.style.backgroundColor = "#f0f0f0"};
    if (data.category == "Equipment") {
    newRow.style.backgroundColor = "white"};

    if (data.category == "Bike") {
    newRow.style.backgroundColor = "#cac4c4"};

unsubscribe();
});
});
};


gear_sports_dropdown();
