const firebaseConfig = {
      apiKey: "AIzaSyAJxVbnZ4HOcNImVEx1Aso-hYU43zVoF0c",
      authDomain: "aaaaaaa-96da8.firebaseapp.com",
      databaseURL: "https://aaaaaaa-96da8-default-rtdb.firebaseio.com",
      projectId: "aaaaaaa-96da8",
      storageBucket: "aaaaaaa-96da8.appspot.com",
      messagingSenderId: "71645859802",
      appId: "1:71645859802:web:2e694e646c514f41d33ae3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
