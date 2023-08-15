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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  let q = query(collection(db, "engineering"));

  const querySnapshot = await getDocs((q));

  querySnapshot.forEach((doc) => {
  //  console.log(`${doc.id} => ${doc.data()}`);
    const data = doc.data();

    var tbodyRef = document.getElementById('engineering_table').getElementsByTagName('tbody')[0];
    // Insert a row at the end of table
    var newRow = tbodyRef.insertRow();

    // Insert a cell at the end of the row
    var new_cell = newRow.insertCell();
    var new_text = document.createTextNode(data.project);
    new_cell.appendChild(new_text);

    // App
    var new_cell = newRow.insertCell();
    var createA = document.createElement('a');
    var new_text = document.createTextNode("App");
    createA.setAttribute('href', data.app);
    createA.setAttribute('target', '_blank');
    createA.setAttribute('class', 'links');
    createA.appendChild(new_text);
    new_cell.appendChild(createA);

    // Last Update
    var new_cell = newRow.insertCell();
    var project_date = data.updated.toDate();
    var project_date_year = project_date.getFullYear();
    var project_date_month = project_date.getMonth()+1;
    project_date = project_date_month + "/" + project_date_year;
    var new_text = document.createTextNode(project_date);
    new_cell.appendChild(new_text);

    // Type
    var new_cell = newRow.insertCell();
    var new_text = document.createTextNode(data.type);
    new_cell.appendChild(new_text);

    // GitHub
    var new_cell = newRow.insertCell();
    var createA = document.createElement('a');
    var new_text = document.createTextNode("GitHub");
    createA.setAttribute('href', data.github);
    createA.setAttribute('target', '_blank');
    createA.setAttribute('class', 'links');
    createA.appendChild(new_text);
    new_cell.appendChild(createA);

    // Description
    var new_cell = newRow.insertCell();
    var new_text = document.createTextNode(data.description);
    new_cell.appendChild(new_text);





  });
