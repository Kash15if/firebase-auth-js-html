
// Add the Firebase products that you want to use

    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById('loggedin').style.display = "initial";
      document.getElementById('login').style.display = "none";
    } else {
        document.getElementById('loggedin').style.display = "none";
        document.getElementById('login').style.display = "initial";
    }
  });

  function LogIn(){

    var uid = document.getElementById('UId').value;
    var pass = document.getElementById('pass').value;

    firebase.auth().signInWithEmailAndPassword(uid, pass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert('alert:'+ errorMessage);
      // ...
    });
}