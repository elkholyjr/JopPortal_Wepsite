let skills = document.getElementById("skills");
let skillsc = document.getElementById("skillc");
let jtitle = document.getElementById("jtitle");
let jsalary = document.getElementById("jsalary");
let jcompany = document.getElementById("JobCompany")
let jcomp = document.getElementById("jcomp");
let jexp = document.getElementById("jexp");
let titleinput = document.getElementById("JobName");
let salaryinput = document.getElementById("JobSalary");
let expinput = document.getElementById("JobExp");
let jobdesc = document.getElementById("JobDesc");
let jobdescC = document.getElementById("jobdesc-c");
let jobcompany = document.getElementById("JobCompany");
let curruser=JSON.parse(localStorage.getItem("user_id"))-1;
let users=JSON.parse(localStorage.getItem("users"));
let jobs=JSON.parse(localStorage.getItem("jobs"));
let catArray = JSON.parse(localStorage.getItem("categories"));
let govArray = JSON.parse(localStorage.getItem("governments"));
let jobArray = JSON.parse(localStorage.getItem("jobs"))
let Skills = [];

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

titleinput.addEventListener("blur", () => {
     if (titleinput.value.length < 10) {
          jtitle.style.display = "block"
          jtitle.innerHTML = `<p>The minimum Number Of Characters is 10.</p>`
     } else {
          jtitle.style.display = "none"
     }
})

expinput.addEventListener("blur", () => {
     if (!expinput.value) {
          jexp.style.display = "block"
          jexp.innerHTML = `<p>Years of Experience is required.</p>`
     } else {
          jexp.style.display = "none"
     }
})

jcompany.addEventListener("blur", () => {
     if (!jcompany.value) {
          jcomp.style.display = "block"
          jcomp.innerHTML = `<p>Company name is required.</p>`
     } else {
          jcomp.style.display = "none"
     }
})

expinput.addEventListener("keyup", (e) => {
     if (e.key != "1" && e.key != "2" && e.key != "3" && e.key != "4" && e.key != "5" && e.key != "6" && e.key != "7" && e.key != "8" && e.key != "9" && e.key != "0") {
          expinput.value = expinput.value.slice(0, expinput.value.length - 1);
          jexp.style.display = "block"
          jexp.innerHTML = `<p>Years of Experience must be a number.</p>`
     } else {
          jexp.style.display = "none"
     }
})

salaryinput.addEventListener("keyup", (e) => {
     if (e.key != "1" && e.key != "2" && e.key != "3" && e.key != "4" && e.key != "5" && e.key != "6" && e.key != "7" && e.key != "8" && e.key != "9" && e.key != "0") {
          salaryinput.value = salaryinput.value.slice(0, salaryinput.value.length - 1);
          jsalary.style.display = "block"
          jsalary.innerHTML = `<p>Salary must be numbers.</p>`
     }
     else {
          jsalary.style.display = "none"
     }
})

skills.addEventListener("keydown", (e) => {
     if (e.key == "Enter" && skills.value && Skills.length <= 10) {
          skillsc.style.display = "flex"
          Skills.push(skills.value);
          skills.value = ""
          displayskills(Skills)
     }
})

titleinput.addEventListener("blur", () => {
     if (titleinput.value.length < 10) {
          jtitle.style.display = "block"
          jtitle.innerHTML = `<p>The minimum Number Of Characters is 10.</p>`
     } else {
          jtitle.style.display = "none"
     }
})

function displayskills(arr) {
     let data = ``;
     for (let i = 0; i < arr.length; i++) {
          data += `<p class="skill"> ${arr[i]} <i onclick="closes(${i})"  class=" close fa-solid fa-xmark fa-1x"></i></p>`
     }
     skillsc.innerHTML = data;
}

function closes(i) {
     Skills.splice(i, 1);
     if (Skills.length == 0) {
          skillsc.style.display = "none"
     } else {

          displayskills(Skills)
     }
}

jobdesc.addEventListener("blur", () => {
     if (jobdesc.value.length < 10) {
          jobdescC.style.display = "block"
          jobdescC.innerHTML = `<p>The minimum Number Of Characters is 10.</p>`
     } else {
          jobdescC.style.display = "none"
     }
})
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
class job {
     newjob = new Object;
     ourJobs = JSON.parse(localStorage.getItem("jobs"));
     constructor(title, Salary, ExperienceNeeded, company, skills, postby, JobCategories, location, Description) {
          if (localStorage.getItem("jobs")) {
               this.newjob._id = JSON.parse(localStorage.getItem("jobs")).length + 1;
          }
          this.newjob.title = title;
          this.newjob.NoApplied = 0;
          this.newjob.Applied = new Array();
          this.newjob.Salary = Salary;
          this.newjob.ExperienceNeeded = ExperienceNeeded;
          this.newjob.company = company;
          this.newjob.skills = skills;
          this.newjob.postby = postby;
          this.newjob.JobCategories = JobCategories;
          this.newjob.location = location;
          this.newjob.Description = Description;
          this.ourJobs.push(this.newjob)
     }
     getjob() {
          return this.ourJobs;
     }
}
let jreq = "Strong technical programming skills utilizing a variety of different coding languages and tools"

let sub = document.getElementById("submitting");

sub.addEventListener("click", () => {
     
     let myjob = new job(titleinput.value, salaryinput.value, expinput.value, jobcompany.value,
          Skills, curruser+1 , btnText.innerText, btnTexttwo.innerText, jobdesc.value);
     jobArray.push(myjob.getjob()[JSON.parse(localStorage.getItem("jobs")).length])
     localStorage.setItem("jobs", JSON.stringify(jobArray));
     let newid=JSON.parse(localStorage.getItem("jobs")).length;
     users[curruser].Post.push(newid)
     localStorage.setItem("users",JSON.stringify(users));
     window.location.href = "../Admin Jobs/index.html";
})
