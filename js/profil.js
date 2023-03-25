let dus = localStorage.getItem("datauser"); // "datauser" = properti dari value di localstorage
let objekUser = JSON.parse(dus);
const user = document.getElementById("username"); // "username" = id dari index.html
const email = document.getElementById("email");
const telp = document.getElementById("telp");

for(let i = 0; i < objekUser.length; i++){
    user.innerHTML = objekUser[i].Username;
    email.innerHTML = objekUser[i].Email;
    telp.innerHTML = objekUser[i].Telepon;
}

let dks = sessionStorage.getItem("datakonsul"); // "datakonsul" = properti dari value di localstorage
let objek = JSON.parse(dks);
const nama = document.getElementById("nama"); // "nama" = id dari form.html
const wa = document.getElementById("nmrwa");
const kota = document.getElementById("kota");
const perangkat = document.getElementById("perangkat");
const namahewan = document.getElementById("namahewan");
const jkhewan = document.getElementById("jkhewan");
const rashewan = document.getElementById("rashewan");
const umurhewan = document.getElementById("umurhewan");
const berathewan = document.getElementById("berathewan");
const keluhan = document.getElementById("keluhan");
const waktukonsul = document.getElementById("waktukonsul");
const kodepromo = document.getElementById("kdpromo");

for(let i = 0; i < objek.length; i++){
    nama.innerHTML = objek[i].Nama;
    wa.innerHTML = objek[i].Whatsapp;
    kota.innerHTML = objek[i].Kota;
    perangkat.innerHTML = objek[i].Perangkat;
    namahewan.innerHTML = objek[i].NamaHewan;
    jkhewan.innerHTML = objek[i].JenisKelaminHewan;
    rashewan.innerHTML = objek[i].RasHewan;
    umurhewan.innerHTML = objek[i].UmurHewan;
    berathewan.innerHTML = objek[i].BeratHewan;
    keluhan.innerHTML = objek[i].KeluhanHewan;
    waktukonsul.innerHTML = objek[i].WaktuKonsultasi;
    kodepromo.innerHTML = objek[i].KodePromo;

}