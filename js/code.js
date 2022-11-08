// let madeBy = document.querySelector
// madeBy.addEventListener("click",()=>{
//     alert('Made by Reece Simon');
// })
let userName = prompt("Please enter your name");
let userSurname = prompt("Please enter your surname");
let userSalary = prompt("Please enter your salary");
let bonus = 500
let finalSalary =eval(`${userSalary}+${bonus}`);
document.write(`<br> Name: ${userName})`);
document.write(`<br>Surname: ${userSurname}`);
documents.write(`<br>Salary: ${finalSalary}`);
