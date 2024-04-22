let userss=JSON.parse(localStorage.getItem("users"));
let uemail =document.getElementById('email')
let upass=document.getElementById('password')
let btn=document.getElementById('btn')
let alert=document.querySelector(".alert")
console.log(userss);
let x=false;
btn.addEventListener('click', ()=>{
    for (let i = 0; i < userss.length; i++) {
        
        if(uemail.value===userss[i].email && upass.value===userss[i].password){
            console.log("done");
            x=1;
            localStorage.setItem('user_id', JSON.stringify(userss[i]._id))
            localStorage.setItem('user_role', JSON.stringify(userss[i].Role))
            location.href="../Home/index.html"
        }   
    }
    if(!x){
        alert.style=`display:flex`
        alert.innerHTML=`<p>Incorrect E-mail or Password</p>`
    } 
} )