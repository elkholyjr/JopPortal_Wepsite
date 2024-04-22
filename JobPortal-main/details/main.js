let jobs =JSON.parse(localStorage.getItem('jobs'))
let currjob=JSON.parse(localStorage.getItem('dJob'))

let Experience_Needed=document.getElementById('Experience_Needed')
let Career_level=document.getElementById('Career_level')
let title=document.getElementById('title')
let Education_level=document.getElementById('Education_level')
let Salary=document.getElementById('Salary')
let Job_Categories=document.getElementById('Job_Categories')
let Description=document.getElementById('Description')
let Requirements=document.getElementById('Requirements')

let skills=document.getElementById('skills')
let sk=jobs[currjob-1].skills
let newskill=""
for (let i = 0; i < sk.length; i++) {
    newskill+=(`<p class="skill">${sk[i]}</p>`)
}
skills.innerHTML=newskill;

let des_job=document.getElementById('job-des')
des_job.innerHTML=`<p class="d">Full Time</p><p class="d">On-Site</p>`;

title.innerHTML=jobs[currjob-1].title
Experience_Needed.innerHTML=`More than ${jobs[currjob-1].ExperienceNeeded} Year(s)`
Career_level.innerHTML=`Mid-Level`
Education_level.innerHTML=`Bachelor Degree`
Salary.innerHTML=jobs[currjob-1].Salary
Job_Categories.innerHTML=jobs[currjob-1].JobCategories
Description.innerHTML=jobs[currjob-1].Description
localStorage.removeItem("djob")
function GoToApply(){
    localStorage.setItem("Applyin",currjob);
    location.href="../Application_page/Apply.html"
}
