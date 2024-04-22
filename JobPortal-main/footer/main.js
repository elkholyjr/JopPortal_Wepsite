let footer=document.getElementById("footer");
function displayFooter() {
     let footerHTML=`
     <div class="footer_container">
     <div class="footer_about">
         <h3>About</h3>
         <p>Far far away,behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
         </p>
         <div class="f_icons">
             <div class="f_icon"><i  class="fa-brands fa-facebook facebook"></i></div>
             <div class="f_icon"><i class="fa-brands fa-twitter twitter"></i></div>
             <div class="f_icon"><i class="fa-brands fa-instagram instagram"></i></div>
         </div>
     </div>
     <div class="q">
         <h3>Have a Question?</h3>
         <ul>
             <li class="li">
               <div>
                 <i class="fa-sharp fa-solid fa-location-dot location"></i>
               </div>
               <div>
                 <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
               </div>  
             </li>
             <li class="li"> 
                 <div >
                   <i class=" fa-solid fa-phone phone "></i>
                 </div>
                 <div>
                       <p>+2 392 3929 210</p>
                 </div>
             </li>
             <li class="li">
               <div >
                 <i class="fa-solid fa-envelope email"></i>
               </div>
               <div class="">
                 <p>info@yourdomain.com</p>
               </div>    
             </li>
         </ul>
     </div>  
 </div>    
 <div class="copyright">
   <p>Copyright ©2024 All rights reserved | Made by Nada Badawy</p>
 </div>
    `
    footer.innerHTML=footerHTML;
}
displayFooter()