const button = document.getElementById("form-ks");
button.onclick = daftar;

const nama = document.getElementById("fnama");
const whatsapp = document.getElementById("fwa");
const kota = document.getElementById("fkota");
const perangkat = document.getElementById("android", "ios", "laptop", "pc");
const namahewan = document.getElementById("fnamahewan");
const jk = document.getElementById("dot-1", "dot-2");
const jenishewan = document.getElementById("fjenishewan");
const rashewan = document.getElementById("frashewan");
const umurhewan = document.getElementById("fumurhewan");
const berathewan = document.getElementById("fberathewan");
const keluhan = document.getElementById("fkeluhan");
const waktukonsul = document.getElementById("fwaktukonsul");
const kodepromo = document.getElementById("fkodepromo");
const datakonsul = [];

function daftar(e){
    e.preventDefault();

    datakonsul.push({
        "Nama": nama.value,
        "Whatsapp": whatsapp.value,
        "Kota": kota.value,
        "Perangkat": perangkat.value,
        "NamaHewan": namahewan.value,
        "JenisKelaminHewan": jk.value,
        "JenisHewan": jenishewan.value,
        "RasHewan": rashewan.value,
        "UmurHewan": umurhewan.value,
        "BeratHewan": berathewan.value,
        "KeluhanHewan": keluhan.value,
        "WaktuKonsultasi": waktukonsul.value,
        "KodePromo": kodepromo.value,
    });

        let string = JSON.stringify(datakonsul);
        sessionStorage.setItem('datakonsul', string);
        console.log("Daftar berhasil");
        alert("Daftar Berhasil!");
        window.location.href = "form.html";
};