
var firebaseConfig = {
      apiKey: "AIzaSyBNNZId5mZYLlsly2QsPuyi-4vZW1dmjrA",
      authDomain: "whitehat-jr-class-94-practice.firebaseapp.com",
      databaseURL: "https://whitehat-jr-class-94-practice-default-rtdb.firebaseio.com",
      projectId: "whitehat-jr-class-94-practice",
      storageBucket: "whitehat-jr-class-94-practice.appspot.com",
      messagingSenderId: "870462495668",
      appId: "1:870462495668:web:501d952b22f81634cf30e1",
      measurementId: "G-MHCFFF57EZ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("User_name");
    document.getElementById("Welcome").innerHTML = "Welcome" + user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoom(this.id)' >#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHtml += row;
      //End code
      });});}
      function Add_room() {
            room_name = document.getElementById("Add_room").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose = "adding room_name"
            });
            localStorage.setItem("room_name", room_name);
            window.location = "kwitter_page.html";
      }
      function redirectToRoom(room_name) {
            localStorage.setItem("room_name", room_name);
            window.location = "kwitter_page.html";
      }
getData();
