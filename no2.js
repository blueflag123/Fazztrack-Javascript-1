const mtk = 90;
const IPA = 85;
const bahasaIndonesia = 86;
const bahasaInggris = 75;
let hasil = mtk + IPA + bahasaIndonesia + bahasaInggris;
let nilai = hasil/4;
let grade;
    if (nilai >= 90 && nilai <= 100) {
        grade = "A";
    } else if (nilai >= 80 && nilai <= 89) {
        grade = "B";
    } else if (nilai >= 70 && nilai <= 79) {
        grade = "C";
    } else if (nilai >= 60 && nilai <= 69) {
        grade = "D";
    } else if (nilai >= 0 && nilai <= 59) {
        grade = "E";
    } else {
        grade = "input salah";
    }

console.log(`Rata-rata adalah : ${nilai}
Grade : ${grade}`);




