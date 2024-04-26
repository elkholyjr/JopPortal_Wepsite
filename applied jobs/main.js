let data=``;
let JOBS= JSON.parse(localStorage.getItem('jobs'));
let userr= JSON.parse(localStorage.getItem('users'));
let curruse= JSON.parse(localStorage.getItem('user_id'));
function displaycontent(){
            data=''
     JOBS= JSON.parse(localStorage.getItem('jobs'));
     userr= JSON.parse(localStorage.getItem('users'));
     curruse= JSON.parse(localStorage.getItem('user_id'));
     for(let i=0; i<userr.length; i++){
          if(userr[i]._id==curruse){
              for(let j=0; j<userr[i].Appliedin.length; j++){
                  let x=userr[i].Appliedin[j];
                  for(let k=0; k<JOBS.length; k++){
                      if(x==JOBS[k]._id){
                          data+=`<div class="Job">
                          <div class="Dsc">
                              <div>
                                  <h3 class="jt" onclick="GotoDetails(${i})">${JOBS[k].title}</h3>
                                  <p ><i class="fa-solid fa-location-dot"></i>
                                  <span>${JOBS[k].location}</span></p>
                              </div>
                              <div class="button">
                                  <button onclick="DeleteJob(${k},${i})" class="btn btn-main">Delete Applection</button>
                              </div>
                          </div>
                      </div>`;
                      }
                  }
              }
          }   
      }
      if(data.length){
          document.getElementById('jobs').innerHTML=data;    
     }else{
          document.getElementById('jobs').innerHTML=`<p style="text-align:center;  height:60vh; font-size:40px;">NO JOBS</p>`;    
     }
}
displaycontent();
function removeItemOnce(arr, value) {
     var index = arr.indexOf(value);
     if (index > -1) {
       arr.splice(index, 1);
     }
     return arr;
   }
function GoToApply(i){
     localStorage.setItem("Applyin",i);
     location.href="../Application_page/Apply.html"
}
function DeleteJob(index,user){
     JOBS[index].Applied=removeItemOnce(JOBS[index].Applied,user+1);
     userr[user].Appliedin=removeItemOnce(userr[user].Appliedin,index+1);
     localStorage.setItem("users",JSON.stringify(userr));
     localStorage.setItem("jobs",JSON.stringify(JOBS));
     displaycontent()
}
function GotoDetails(index){
    localStorage.setItem("dJob",index+1)
    location.href="../details/index.html";
}
