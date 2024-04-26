let currentJob=JSON.parse(localStorage.getItem("update"));
let jobs=JSON.parse(localStorage.getItem("jobs"));
let JobNameinput=document.getElementById("JobName");
let JobSalaryinput=document.getElementById("JobSalary");
let JobExpinput=document.getElementById("JobExp")
let JobCompanyinput= document.getElementById("JobCompany")
let JobDescinput=document.getElementById("JobDesc");
let skillc= document.getElementById("skillc")
let jobdesc = document.getElementById("JobDesc");
let jobdescC = document.getElementById("jobdesc-c");
let jobcompany = document.getElementById("JobCompany");
let catArray = JSON.parse(localStorage.getItem("categories"));
let govArray = JSON.parse(localStorage.getItem("governments"));
let jobArray = JSON.parse(localStorage.getItem("jobs"))
let users=JSON.parse(localStorage.getItem("users"));
console.log(jobs[currentJob]);
JobNameinput.value=jobs[currentJob].title
JobSalaryinput.value=jobs[currentJob].Salary
JobExpinput.value=jobs[currentJob].ExperienceNeeded
JobCompanyinput.value=jobs[currentJob].company
JobDescinput.value=jobs[currentJob].Description
let Skills=jobs[currentJob].skills;
function displayskills(arr) {
     let data = ``;
     skillc.style.display = "flex"
     for (let i = 0; i < arr.length; i++) {
          data += `<p class="skill"> ${arr[i]} <i onclick="closes(${i})"  class=" close fa-solid fa-xmark fa-1x"></i></p>`
     }
     skillc.innerHTML = data;
}
function closes(i) {
     Skills.splice(i, 1);
     if (Skills.length == 0) {
          skillc.style.display = "none"
     } else {
          displayskills(Skills)
     }
}
displayskills(jobs[currentJob].skills)
function displaycat() {
     let data = ``;
     for (let i = 0; i < catArray.length; i++) {
          data += `<li class="item">
          <span class="item-text">${catArray[i].name}</span>
          </li>`
     }
     if (data.length) {
          document.getElementById("cat").innerHTML = data;
     }
}

function displaygov() {
     let data = ``;
     for (let i = 0; i < govArray.length; i++) {
          data += `<li class="item-two">
          <span class="item-text">${govArray[i]}</span>
          </li>`
     }
     if (data.length) {
          document.getElementById("gov").innerHTML = data;
     }
}
displaycat();
displaygov();
const selectBtn = document.querySelector(".select-btn"),
     items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", () => {
     selectBtn.classList.toggle("open");
});
btnText = document.querySelector(".btn-text");
items.forEach(item => {
     item.addEventListener("click", () => {
          item.classList.toggle("checked");
          let checked = document.querySelectorAll(".checked"),
               btnText = document.querySelector(".btn-text");
          if (checked.length >= 1) {
               item.classList.toggle("checked");
               btnText.innerText = checked[0].innerText;
               selectBtn.classList.toggle("open");
          } else if (checked && checked.length == 1) {
               btnText.innerText = checked[0].innerText;
               selectBtn.classList.toggle("open");
          } else {
               btnText.innerText = "Select Category";
          }
     });
})

const selectBtntwo = document.querySelector(".select-btn-two"),
     itemstwo = document.querySelectorAll(".item-two");

selectBtntwo.addEventListener("click", () => {
     selectBtntwo.classList.toggle("open");
});
btnTexttwo = document.querySelector(".btn-text-two");
itemstwo.forEach(item => {
     item.addEventListener("click", () => {
          item.classList.toggle("checkedtwo");
          let checkedtwo = document.querySelectorAll(".checkedtwo"),
               btnTexttwo = document.querySelector(".btn-text-two");
          if (checkedtwo.length >= 1) {
               item.classList.toggle("checkedtwo");
               btnTexttwo.innerText = checkedtwo[0].innerText;
               selectBtntwo.classList.toggle("open");
          } else if (checkedtwo && checkedtwo.length == 1) {
               btnTexttwo.innerText = checkedtwo[0].innerText;
               selectBtntwo.classList.toggle("open");
          } else {
               btnText.innerText = "Select Category";
          }
     });
})

let jreq = "Strong technical programming skills utilizing a variety of different coding languages and tools"

let sub = document.getElementById("submitting");


let newjob =new Object;

sub.addEventListener("click", () => {

     newjob._id =jobs[currentJob]._id ;
     newjob.title = JobNameinput.value;
     newjob.NoApplied = 0;
     newjob.Applied = jobs[currentJob].Applied;
     newjob.Salary = JobSalaryinput.value;
     newjob.ExperienceNeeded = JobExpinput.value;
     newjob.company = JobCompanyinput.value;
     newjob.skills = Skills;
     newjob.postby = jobs[currentJob].postby;
     newjob.JobCategories = btnText.innerText;
     newjob.location = btnTexttwo.innerText;
     newjob.Description = jobdesc.value;
     jobs[currentJob]=newjob;
     localStorage.setItem("jobs", JSON.stringify(jobs));
     window.location.href = "../Admin Jobs/index.html";
})
