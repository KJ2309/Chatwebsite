
const firebaseConfig = {
    apiKey: "AIzaSyArdZFSOyYnGHGAWxkRxZIqXQBgWcArIx4",
    authDomain: "chat-website-da68d.firebaseapp.com",
    databaseURL: "https://chat-website-da68d-default-rtdb.firebaseio.com",
    projectId: "chat-website-da68d",
    storageBucket: "chat-website-da68d.appspot.com",
    messagingSenderId: "391037116454",
    appId: "1:391037116454:web:0e47c5f9c241d935fbc6e7"
  };
firebase.initializeApp(firebaseConfig) 

function createRoom(){
    roomName = document.getElementById("roomid").value;
    firebase.database().ref("/").child(roomName).update({text:"Adding room name"})
}

