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

  function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("pw").value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredentials) => {
      let user = userCredentials.user; //access the newly created user
      console.log('User created: '+user.uid);
      window.location.href = "login.html";
  })
  .catch((error) => { //report any errors
      console.log(error.message);
  });
  }