let log_user = localStorage.getItem("datauser"); // "Username" = properti dari value di localstorage
let objekuser = JSON.parse(log_user);
const tampil = document.getElementById("username"); // "username" = id dari beranda.html

for(let i = 0; i < objekuser.length; i++){
    tampil.innerHTML = objekuser[i].Username;
}