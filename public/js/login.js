
var config = {
    apiKey: "AIzaSyACg2z3JQODfTcOfIl97_uUhQkGtWJJJaI",
    authDomain: "x-app-a4675.firebaseapp.com",
    databaseURL: "https://x-app-a4675.firebaseio.com",
    projectId: "x-app-a4675",
    storageBucket: "",
    messagingSenderId: "657424766858"
  };
    var btn =  $("#go-login1");
    var btnF = $("#go-face");
    var usuarios = $("#usuarios");
    var contraseña = $("#contraseña");
    var btnLogin = $("#login");
    var btnRegistro = $("#registro");

    btnF.click(ingresoFacebook);
    btn.click(ingresoGoogle);
    btnLogin.click(email);
    btnLogin.click(registroEmail);

    firebase.initializeApp(config);
  
   function ingresoGoogle() {
      event.preventDefault();
     if(!firebase.auth().currentUser){    
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/plus.login');
      firebase.auth().signInWithPopup(provider).then(function(result) {
  
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(user);
      location.href = "/";  
  
      }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      if (errorCode==='auth/account-exisst-with-diferent-credential') {
          alert("es el mismo usuario");
      }
      });
     }else{
         firebase.auth.signOut();
     }
   }
  function ingresoFacebook() {
    event.preventDefault()
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        location.href = "/";  
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }
function email() {
    var email = usuarios.val();
    var pass = contraseña.val();
    var auth = firebase.auth();

    var promesa = auth.signInWithEmailAndPassword(email,pass);
    promesa.catch(function (e) {
        console.log(e.message);
    });
    
}
function registroEmail() {
    var email = usuarios.val();
    var pass = contraseña.val();
    var auth = firebase.auth();

    var promesa = auth.createUserWithEmailAndPassword(email,pass);
    promesa.catch(function (e) {
        console.log(e.message);
    });
    
}