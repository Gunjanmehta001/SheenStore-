function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}
    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");

    function login() {
        x.style.left = "4px";
        y.style.right = "-520px";
        a.className += " white-btn";
        b.className = "btn";
        x.style.opacity = 1;
        y.style.opacity = 0;
    }

    function register() {
        x.style.left = "-510px";
        y.style.right = "5px";
        a.className = "btn";
        b.className += " white-btn";
        x.style.opacity = 0;
        y.style.opacity = 1;
  
      } 

    function login() {
        document.getElementById("login").style.left = "4px";
        document.getElementById("register").style.right = "-520px";
    }

    function register() {
        document.getElementById("login").style.left = "-510px";
        document.getElementById("register").style.right = "5px";
    }

    function handleLogin() {
        var username = document.getElementById("loginUsername").value;
        var password = document.getElementById("loginPassword").value;

        var loginData = {
            username: username,
            password: password
        };

        var loginDataJSON = JSON.stringify(loginData);

        localStorage.setItem("loginData", loginDataJSON);
    }

    function handleRegister() {
        var firstName = document.getElementById("registerFirstName").value;
        var lastName = document.getElementById("registerLastName").value;
        var email = document.getElementById("registerEmail").value;
        var password = document.getElementById("registerPassword").value;
        var registerData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };
        var registerDataJSON = JSON.stringify(registerData);
        localStorage.setItem("registerData", registerDataJSON);
    }

   function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
 
