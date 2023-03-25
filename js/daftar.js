const button = document.getElementById("daftar");
button.onclick = daftar;

const username = document.getElementById("dfuser");
const telp = document.getElementById("dftelp");
const email = document.getElementById("dfemail");
const pass = document.getElementById("dfpass");
const upass = document.getElementById("dfupass");
const datauser = [];

function daftar(e){
    e.preventDefault();
    
    if(pass.value !== upass.value){
        console.log("Password tidak sama");
        alert("Password tidak sama");
    }else{
        datauser.push({
            "Username": username.value,
            "Telepon": telp.value,
            "Email": email.value,
            "Password": pass.value,
            "Password2": upass.value
        });

        let string = JSON.stringify(datauser);
        localStorage.setItem('datauser', string);
        console.log("Daftar berhasil");
        alert("Daftar Berhasil!");
        alert("Silahkan Login");
        window.location.href = "index.html";
}};