let OurJobs=document.getElementById("OurJobs");
let Jobs=JSON.parse(localStorage.getItem("jobs"));
let Users=JSON.parse(localStorage.getItem("users"));
let SearchByCat = document.getElementById("SearchByCat"); 
let SearchByName=document.getElementById("SearchByName");
let SearchByLocation = document.getElementById("SearchByLocation")
let SearchByYearsOfExp=document.getElementById("SearchByYearsOfExp");
let Searchfromhomelocation=''
let SearchfromhomeJobtitle=''
let Searchfromhomecat=''
let Searchfromhomeexp=''
let data=[]; 
function getdataFromLocalStorage(){
     if(localStorage.getItem("loc")){
          Searchfromhomelocation=JSON.parse(localStorage.getItem("loc"));
          Searchfromhomelocation=Searchfromhomelocation[0].toUpperCase()+Searchfromhomelocation.slice(1,)
     }else{
          Searchfromhomelocation="";
    }
    if(localStorage.getItem("title")){
    
         SearchfromhomeJobtitle=JSON.parse(localStorage.getItem("title"));
         SearchfromhomeJobtitle=SearchfromhomeJobtitle[0].toUpperCase()+SearchfromhomeJobtitle.slice(1,)
    }else{
          SearchfromhomeJobtitle="";
    }
    if(localStorage.getItem("cat")){
         Searchfromhomecat=JSON.parse(localStorage.getItem("cat"));
         Searchfromhomecat=Searchfromhomecat[0].toUpperCase()+Searchfromhomecat.slice(1,)
     }else{
          Searchfromhomecat="";
     }
     if(localStorage.getItem("exp")){
          Searchfromhomeexp=JSON.parse(localStorage.getItem("exp"));
    }else{
          Searchfromhomeexp="";

    }
}
function search(){
     data = [] ; 
     getdataFromLocalStorage()
     for ( let i = 0 ; i < Jobs.length ; i++ ){
          if ( SearchfromhomeJobtitle && !Jobs[i].title.includes(SearchfromhomeJobtitle)) 
               continue ; 
          if ( Searchfromhomelocation  && Jobs[i].location != Searchfromhomelocation ) 
               continue ;
          if ( Searchfromhomeexp && Jobs[i].ExperienceNeeded >= Searchfromhomeexp )
               continue ;
          if ( Searchfromhomecat && Jobs[i].JobCategories != Searchfromhomecat )
               continue ; 
          data.push(Jobs[i]) ;
     }
     SearchByName.value=""
     SearchByYearsOfExp.value=""
     SearchByLocation.value=""
     SearchByCat.value=""
     localStorage.removeItem("loc")
     localStorage.removeItem("exp")
     localStorage.removeItem("title")
     localStorage.removeItem("cat")
     displayJobs(data) ;
}
getdataFromLocalStorage()
search()
if(data.length>0){
     displayJobs(data)
}else{
     displayJobs(Jobs)
}

SearchByName.addEventListener("blur",()=>{
     if(SearchByName.value){

          localStorage.setItem("title",JSON.stringify(SearchByName.value))
     }
})

SearchByYearsOfExp.addEventListener("blur",()=>{
     if(SearchByYearsOfExp.value){

          localStorage.setItem("exp",JSON.stringify(SearchByYearsOfExp.value))
     }
})

SearchByLocation.addEventListener("blur",()=>{
     if(SearchByLocation.value){

          localStorage.setItem("loc",JSON.stringify(SearchByLocation.value))
     }
})

SearchByCat.addEventListener("blur",()=>{
     if(SearchByCat.value){

          localStorage.setItem("cat",JSON.stringify(SearchByCat.value))
     }
})

function displayJobs(Jobs){
     let data=``;
     if(Jobs.length==0){
          data=`<p class="Nodata">Not Found Jobs.</p>`
     }else{
          for(let i=0;i<Jobs.length;i++){
               data+=`
               <div class="job">
                    <div class="desc">
                         <h3 class="title"  onclick="GotoDetails(${i})"><a  id="title" >${Jobs[i].title}</a></h3>
                         <div class="loc">
                              <i class="fa-solid fa-location-dot"></i>
                              <span>${Jobs[i].location}</span>
                         </div>
                    </div>
                    <a class="btn btn-main" style="text-wrap: nowrap;"  onclick="GoToApply(${Jobs[i]._id})" >Apply Job</a>
               </div>
               `
          }
     }
     OurJobs.innerHTML=data;
}

function GoToApply(i){
     localStorage.setItem("Applyin",i);
     location.href="../Application_page/Apply.html"
}

function GotoDetails(index){
     localStorage.setItem("dJob",index+1)
     location.href="../details/index.html";
}
