var firebaseConfig = {
    apiKey: "AIzaSyB1EL2JTKEfth8rZkl3zzfUGsiRhgdXP7k",
    authDomain: "sttchatter0421.firebaseapp.com",
    databaseURL: "https://sttchatter0421-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sttchatter0421",
    storageBucket: "sttchatter0421.appspot.com",
    messagingSenderId: "192444699044",
    appId: "1:192444699044:web:c847d95c521c2149ba3131"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  const username = sessionStorage.getItem("username");
  document.getElementById("send-message").addEventListener("submit", postChat);

  var didlog = sessionStorage.getItem("didLog");
  if (didlog === null) {
      window.location.href = "login.html";
  }
  function postChat(e) {
    e.preventDefault();
    const timestamp = Date.now();
    const chatTxt = document.getElementById("chat-txt");
    const message = chatTxt.value;
    chatTxt.value = "";
    db.ref("messages/" + timestamp).set({
      usr: username,
      msg: message,
    });
  }
  const fetchChat = db.ref("messages/");
  fetchChat.on("child_added", function (snapshot) {
    const messages = snapshot.val();
    const msg = "<p>" + messages.usr + " : " + messages.msg + "</p>";
    document.getElementById("messages").innerHTML += msg;
  });
  const timestamp_init = Date.now();
  db.ref("messages/" + timestamp_init).set({
      usr: "SYSTEM",
      msg: `USER ${username} has joined the chat.`
  });

  function signOut() {
    firebase.auth().signOut().then(() => {
      alert("Signed Out.");
      window.location.href = "login.html";
    }).catch((error) => {
      alert("Couldn't sign out. Error happened.");
    });
  }