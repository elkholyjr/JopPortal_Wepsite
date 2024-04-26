let jobs= JSON.parse(localStorage.getItem('jobs'));
let userr= JSON.parse(localStorage.getItem('users'));
let curruse= JSON.parse(localStorage.getItem('user_id'));
function displayjobs() {
    let data=``;
    jobs= JSON.parse(localStorage.getItem('jobs'));
    userr= JSON.parse(localStorage.getItem('users'));
    curruse= JSON.parse(localStorage.getItem('user_id'));
    for(let i=0; i<userr.length; i++){
        if(userr[i]._id==curruse){
            for(let j=0; j<userr[i].Post.length; j++){
                let x=userr[i].Post[j];
                for(let k=  0; k<jobs.length; k++){
                    if(x==jobs[k]._id){
                        data+=`<div class="Job">
                        <div class="Dsc">
                            <div>
                                <h3 onclick="GotoDetails(${k})" class="jt">${jobs[k].title}</h3>
                                <span><i class="fa-solid fa-location-dot"></i> ${jobs[k].location}</span>
                            </div>
                            <div class="button">
                                <button onclick="goTOUpdate(${k})" class="btn btn-sec-main">Update Job</button>
                                <button onclick="DeleteJob(${k},${i})"  class="btn btn-main delete">Delete Job</button>
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

function GotoDetails(index){
     localStorage.setItem("dJob",index+1)
     location.href="../details/index.html";
}



function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
}
function DeleteJob(index,user) {
        jobs.splice(index,1);
        localStorage.setItem("jobs",JSON.stringify(jobs));
        userr[user].Post=removeItemOnce(userr[user].Post,index+1)
        localStorage.setItem("users",JSON.stringify(userr));
        displayjobs()
}

function goTOUpdate(index){
    localStorage.setItem("update",JSON.stringify(index));
    location.href="../update/index.html"
}

displayjobs()