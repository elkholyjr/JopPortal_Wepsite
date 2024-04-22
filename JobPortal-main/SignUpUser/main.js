let curruser = JSON.parse(localStorage.getItem('users'));
let email = document.getElementById("mail");
let jmail = document.getElementById("jemail");
let pass = document.getElementById("pass");
let jpass = document.getElementById("jpass");
let cpass = document.getElementById("cpass");
let jcpass = document.getElementById("jcpass");
let jname = document.getElementById("name");
class Admin {
    newUser = new Object();
    ourusers = JSON.parse(localStorage.getItem("users"));
    constructor(Role, Name, Password, email, compadmin){
         if (localStorage.getItem("users")) {
              this.newUser._id = JSON.parse(localStorage.getItem("users")).length + 1;
         }
         this.newUser.Role = Role;
         this.newUser.Name = Name;
         this.newUser.password = Password;
         this.newUser.email = email;
         this.newUser.compadmin = compadmin;
         this.newUser.Appliedin = new Array();
         this.newUser.Post = new Array();
         this.ourusers.push(this.newUser)
    }
    getusers(){
         return this.ourusers;
    }
}

class User {
    newUser = new Object();
    ourusers = JSON.parse(localStorage.getItem("users"));
    constructor(Role, Name, Password, email){
         if (localStorage.getItem("users")) {
              this.newUser._id = JSON.parse(localStorage.getItem("users")).length + 1;
         }
         this.newUser.Role = Role;
         this.newUser.Name = Name;
         this.newUser.password = Password;
         this.newUser.email = email;
         this.newUser.Appliedin = new Array();
         this.newUser.Post = new Array();
         this.ourusers.push(this.newUser)
    }
    getusers(){
         return this.ourusers;
    }
}
function checkmail () {
    for(let i = 0; i < curruser.length; i++){
        if(curruser[i].email == email.value) {
            return false;
        }
    }
    return true;
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

email.addEventListener("blur", ()=> {
    if(emailRegex.test(email.value)){
        if(!checkmail()){
        jmail.style.display = "block";
        jmail.innerHTML = `<p>This email is already used.</p>`;
        }
        else {
            jmail.style.display = "none";
        }
    } else {
        jmail.style.display = "block";
        jmail.innerHTML = `<p>Please enter a correct email.</p>`;
    }
})

pass.addEventListener("blur", ()=> {
    if(pass.value.length < 8) {
        jpass.style.display = "block";
        jpass.innerHTML = `<p>Enter a Password longer than 8 characters.</p>`
    }
    else {
        jpass.style.display = "none";
    }
})

cpass.addEventListener("blur", ()=> {
    if(cpass.value != pass.value) {
        jcpass.style.display = "block";
        jcpass.innerHTML = `<p>The passowrd is not the same.</p>`
    }
    else {
        jcpass.style.display = "none";
    }
})

let create = document.getElementById("create");

create.addEventListener("click", () => {
    const newuser = new User("User", jname.value, pass.value, email.value);
    localStorage.setItem("users", JSON.stringify(newuser.getusers()));
    window.location.href = "../index.html";
})

let redirect = document.getElementById("redirect");

redirect.addEventListener("click", () => {
    window.location.href = "../index.html"
})