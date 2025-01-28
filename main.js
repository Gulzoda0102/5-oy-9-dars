
const userName = prompt("Ismingizni kiriting:");
const userSurname = prompt("Familiyangizni kiriting:"); 
const userAge = prompt("Yoshingizni kiriting:"); 


if (userName) document.getElementById("name").textContent = userName; 
if (userSurname) document.getElementById("surname").textContent = userSurname; 
if (userAge) document.getElementById("age").textContent = userAge; 
