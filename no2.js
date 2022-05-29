const mtk = 90;
const IPA = 85;
const bahasaIndonesia = 86;
const bahasaInggris = 75;
let hasil = mtk + IPA + bahasaIndonesia + bahasaInggris;
let nilai = hasil/4;
let nilaiRata;
    if (nilai >= 90 && nilai <= 100) {
        nilaiRata = "A";
    } else if (nilai >= 80 && nilai <= 89) {
        nilaiRata = "B";
    } else if (nilai >= 70 && nilai <= 79) {
        nilaiRata = "C";
    } else if (nilai >= 60 && nilai <= 69) {
        nilaiRata = "D";
    } else if (nilai >= 0 && nilai <= 59) {
        nilaiRata = "E";
    } else {
        nilaiRata = "input salah";
    }

console.log(`Rata-rata adalah : ${nilai}
Grade : ${nilaiRata}`);
