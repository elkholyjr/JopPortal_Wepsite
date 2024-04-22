let JobArray = JSON.parse(localStorage.getItem("jobs"));
let CatArray = JSON.parse(localStorage.getItem("categories"));
let myJobNode = document.getElementById('myJobList');
let myPageNatorNode = document.getElementById('pagenator');
let myCatNode = document.getElementById('Cat_ID');
let myCareerNode = document.getElementById('careersID');
let currentPage = 0;
if(localStorage.getItem("done")){
    document.querySelector(".loading").style=`display:none;`
}else{
    setTimeout(()=>{
    
        document.querySelector(".loading").style=`display:none;`
    },2000)
    localStorage.setItem("done",1);
}

function displayPageNator() {
    myPageNatorNode.innerHTML = "";
    myPageNatorNode.innerHTML += `<div class="pg ${(currentPage == 1) ? 'pg-disabled' : ''}" onclick="decPage()">
    <i class="fa-solid fa-arrow-left"></i>
    </div>`;

    for (let i = 0; i < JobArray.length; i += 4) {
        myPageNatorNode.innerHTML += `<div class="pg ${(currentPage == ((i / 4) + 1) ? 'pg-clicked' : '')}" onclick="CurrPage(${(i / 4) + 1})")> ${(i / 4) + 1}</div> `;
    }

    myPageNatorNode.innerHTML += `<div class="pg ${(currentPage * 4 >= JobArray.length) ? 'pg-disabled' : ''}" onclick="incPage()" ">
    <i class="fa-solid fa-arrow-right"></i>`;
}

function updatePagenator() {
    myJobNode.innerHTML = ``;
    for (let i = (currentPage - 1) * 4; i < (currentPage * 4) && i < JobArray.length; i++) {
        myJobNode.innerHTML += `
        <div class="card2">
            <div>
                <h3 onclick="GotoDetails(${i})" class="jt">${JobArray[i].title}</h3>
                <p>
                    <!--
                    <i class="fa-solid fa-building"></i>
                    <a href="https://facbook.com">Facbook.inc</a>
                    -->
                    <i class="fa-solid fa-location-dot"></i>
                    <span>${JobArray[i].location}</span>
                </p>
            </div>
            <button onclick="GoToApply(${i+1})" class="blue-btn">
                Apply Job
            </button>
        </div>
        `;
    }
}
function GoToApply(i){
    localStorage.setItem("Applyin",i);
    location.href="../Application_page/Apply.html"
}

function GotoDetails(index){
    localStorage.setItem("dJob",index+1)
    location.href="../details/index.html";
}
function incPage() {
    currentPage++;
    updatePagenator();
    displayPageNator();
}

function decPage() {
    currentPage--;
    updatePagenator();
    displayPageNator();
}

function CurrPage(index) {
    currentPage = index;
    updatePagenator();
    displayPageNator();
}

function searchJobTransfer() {
    if(document.getElementById('title-field').value){
        localStorage.setItem("title", JSON.stringify(document.getElementById('title-field').value))
    }
    if(document.getElementById('loc-field').value){
        localStorage.setItem("loc", JSON.stringify(document.getElementById('loc-field').value))
    }
    if(document.getElementById('exp-field').value){
        localStorage.setItem("exp", JSON.stringify(document.getElementById('exp-field').value))
    }

    if(document.getElementById('cat-field').value){
        localStorage.setItem("cat", JSON.stringify(document.getElementById('cat-field').value))
    }
    location.href = "../Jobs/index.html";
}

function pickCategoryTransfer(e) {
    console.log(e);
    localStorage.setItem("cat", JSON.stringify(e));
    location.href = "../Jobs/index.html";
}

for (let i = 0; i < CatArray.length; i++) {
    myCareerNode.innerHTML += `
        <div class="card" onclick="pickCategoryTransfer('${CatArray[i].name}')">${CatArray[i].name}<span class="counter">${CatArray[i].count}</span></div>
    `;
}


if (JobArray.length != 0) {
    currentPage = 1;
    displayPageNator();
    updatePagenator();
} else {
    Cat_ID.innerHTML =
        `< p class="intro2" >
    No
    < span > Jobs</span >
    </p > `;
}
