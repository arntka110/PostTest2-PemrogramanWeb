const login = document.getElementById("login");
const email = document.getElementById("email");
const pass = document.getElementById("pass");

login.addEventListener("submit", function(e){
    e.preventDefault();

    let userkey = localStorage.getItem('datauser');
    let objekuser = JSON.parse(userkey);
    
    for(let i = 0; i < objekuser.length; i++){
        if(email.value == objekuser[i].Email && pass.value == objekuser[i].Password){
            console.log("Login berhasil");
            alert("Login berhasil");
            window.location.href = "beranda.html";
            alert("Selamat Datang di Coco Petshop!");
        }else{
            console.log("Email atau password salah!");
            alert("Email atau password salah!");
            window.location.href = "index.html";
        }
    }
});