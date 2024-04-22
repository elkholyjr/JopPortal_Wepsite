let navheader=document.getElementById("nav");
displayNavbar()
let navbarlist=document.querySelector('.nav-links');
let logo=document.querySelector('.logo');
let navbtn=document.querySelector('.nav-btn');
let navbar=document.querySelector('.navbar');
let navbarLinks= [...document.querySelectorAll('.nav-link')];
let resnavitems=document.querySelector('.res-navitems');
function displayNavbar() {
     let navbarHTML=`<nav>
     <div class=" navbar">
         <div class="logo">
             <a href="../Home/index.html">JobPortal</a>
         </div>
         <div>
             <button class="nav-btn" onclick="displayItems()">
                 <i class="fa-solid fa-2x fa-bars"></i>
             </button>
         </div>
         <div class="res-navitems"></div>
         <div class="nav-links">
             <ul class="navbar-nav">
                 <li class="nav-link cursor-pointer"><a href="../Home/index.html">Home</a></li>
                 <li class="nav-link cursor-pointer"><a href="../About_page/about.html">About</a></li>
                 <li class="nav-link cursor-pointer"><a href="../Applied Jobs/index.html">Applied Jobs</a></li>
                 <li id="admin" class="nav-link cursor-pointer"><a href="../Admin Jobs/index.html">Posted Jobs</a></li>
                 <li class="nav-link cursor-pointer"><a href="../Contact/contact.html">Contact</a></li>
                 <li id="admin2" class="nav-link">
                     <a class="btn btn-main" style="color: aliceblue;" href="../PostJob/index.html">Post a Job</a>
                 </li>
                 <li class="nav-link">
                     <a class="btn btn-sec-main" style="color: aliceblue;" href="../Jobs/index.html"><i class="fa-solid fa-magnifying-glass"></i> Want a Job</a>
                 </li>
             </ul>
         </div>
     </div>
     </nav>`
     navheader.innerHTML=navbarHTML;
}
var state=false;
window.onresize=responsiveNavbar;
window.onload=responsiveNavbar;
if(JSON.parse(localStorage.getItem("user_role"))!="Admin"){
     console.log("");
     document.getElementById("admin").style=`display:none;`
     document.getElementById("admin2").style=`display:none;`
}
function responsiveNavbar(){
     if(window.innerWidth<=1000){
          resnavitems.style=
          `
               display: none;
          `;
          navbarlist.style=
          `
               display:none;
          `;
          navbtn.style=
          `
               display:block;
          `;
          navbar.style=
          `
               padding: 2dvh 5dvw ;
               justify-content: space-between;
          `;
     }else{
          navbarlist.style=
          `
               display:flex;
          `;
          navbtn.style=
          `
               padding:10px;
               display:none;
          `;
          navbar.style=
          `
               justify-content: space-between;
          `;
          resnavitems.style=
          `
               display: none;
          `;
     }
};

window.onscroll=()=>{
     if(scrollY>=100)
     {
          navbar.style=
          `

               color: #000000;
               background-color: #fff;
               box-shadow: #cfcdcd 1px 3px 3px  1px;
               justify-content: space-between;
          `;
     }else{
          navbar.style=
          `
               background-color: #fff;
               color: #fff;
               box-shadow: none;
               justify-content: space-between;
          `;
     }
};
function displayItems(){
     resnavitems.style=
     `
          display: flex;
     `;
     var data=``;
     if(!state){
          for (let index = 0; index < navbarLinks.length; index++) {
               data+=
               `
                    ${
                         navbarLinks[index].innerHTML
                    }
               `
          }
          resnavitems.innerHTML=
          `
               ${data}
          ` 
     }else{
          resnavitems.style=
          `
               display: none;
          `
     }
     state= !state;
};

