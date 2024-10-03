const regName = document.getElementById("name")
const regEmail = document.getElementById("registerEmail");
const regPass= document.getElementById("registerPassword");
const logEmail=document.getElementById("loginEmail");
const logPass=document.getElementById("loginPass");
let signupBtn = document.getElementById("signupBtn");

let users=[];
if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
  }
  
  function signUp() {
    let user = {
      name: regName.value,
      email: regEmail.value,
      password: regPass.value,
    };
  
    if (
      regName.value === "" ||
     regEmail.value === "" ||
      regPass.value === ""
    ) {
      
        console.log("Please fill in all fields");
     
      return;
    }
  
    if (
      isValidEmail(regEmail.value) &&
      isNewEmail(regEmail.value)
    ) {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    
      console.log(users);
      alert("Registration successful!");
      setTimeout(e=> window.location.href = './login.html' ,1000)
    } else {
        alert("Invalid parameters!");
    }
  }
  
  signupBtn.addEventListener("click", function () {
    signUp();
  });
  
  function isValidEmail(email) {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  
  function isNewEmail(email) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        return false;
      }
    }
    return true;
  }



  



/*const regEmail = document.getElementById("registerEmail");
const regPass= document.getElementById("registerPassword");
const logEmail=document.getElementById("loginEmail");
const logPass=document.getElementById("loginPass");

let students=[];

function readAll() {

}*/