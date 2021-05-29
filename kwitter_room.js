var firebaseConfig = {
    apiKey: "AIzaSyCUbNnNJBoyZYVxbWeq4Qld3pDkI81DQlU",
    authDomain: "kwitter-c5c9b.firebaseapp.com",
    databaseURL: "https://kwitter-c5c9b-default-rtdb.firebaseio.com",
    projectId: "kwitter-c5c9b",
    storageBucket: "kwitter-c5c9b.appspot.com",
    messagingSenderId: "366547473660",
    appId: "1:366547473660:web:8a3606407eb2840d0d7379"
  };
function add_user() {
    username=document.getElementById("user_name").value;
    firebase.database().ref("/").child(username).update({
        purpose:"adding_user"
    });
}
user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").nodeValue;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
}

function getData() { 
    firebase.database().ref("/"+room_name).on('value', function(snapshot) 
    { 
            document.getElementById("output").innerHTML = ""; 
            snapshot.forEach()
                function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); 
        
                    if(childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        
                        getData();

                        function redirectToRoomName(name)
                        {
                            console.log(name);
                            localStorage.setItem("room_name", name);
                            window.location = "kwitter_page.html";
                        };
                    }
              }  
    }
};