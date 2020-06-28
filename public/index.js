
// Add the Firebase products that you want to use
var Signinpage = false;

function switch2signin(){
    this.Signinpage = !Signinpage;
    if (Signinpage) {
        document.getElementById('loginbox').style.display = "none";
        document.getElementById('Signinbox').style.display = "block";
        document.getElementById('loggedin').style.display = "none";
        }
        else{
            document.getElementById('loginbox').style.display = "block"; 
            document.getElementById('Signinbox').style.display = "none"; 
            document.getElementById('loggedin').style.display = "none";
        }
    
}

function switch2login(){
    this.Signinpage = !Signinpage;
    if (Signinpage) {
        document.getElementById('loginbox').style.display = "none";
        document.getElementById('Signinbox').style.display = "block";
        document.getElementById('loggedin').style.display = "none";
        }
        else{
            document.getElementById('loginbox').style.display = "block"; 
            document.getElementById('Signinbox').style.display = "none"; 
            document.getElementById('loggedin').style.display = "none";
        }
}

switch2signin();
switch2login()

    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById('loggedin').style.display = "block";
      document.getElementById('loginbox').style.display = "none";
      document.getElementById('Signinbox').style.display = "none";


      var user = firebase.auth().currentUser;
            if(user != null){
                    
                    uid = user.uid;
                    document.getElementById("uidLink").href = "" + uid;      
            }


    } else {
        document.getElementById('loginbox').style.display = "block";
        document.getElementById('loggedin').style.display = "none";
       
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
};

function SignIn(){
    var Sid = document.getElementById('Suid').value;
    var Spass = document.getElementById('Spass').value;

    firebase.auth().createUserWithEmailAndPassword(Sid, Spass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        // ...
      });
  
}

function LogOut(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });

}

function deleteAcc(){

    var user = firebase.auth().currentUser;

            user.delete().then(function() {
            // User deleted.
            }).catch(function(error) {
              // An error happened.
            });
}