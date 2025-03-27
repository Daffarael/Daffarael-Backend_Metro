let total_nilai = 0;
let total_sks = 18;

function CariIPK(Matkul, IP) {
    let sks;
    let nilai;

    if (Matkul == "Aljali") {
        sks = 2;
        nilai = IP * sks;
    } else if (Matkul == "Bindo") {
        sks = 2;
        nilai = IP * sks;
    } else if (Matkul == "Daspro") {
        sks = 3;  
        nilai = IP * sks;
    } else if (Matkul == "Matdis") {
        sks = 2;
        nilai = IP * sks;
    } else if (Matkul == "Kombistek") {  
        sks = 2;
        nilai = IP * sks;
    } else if (Matkul == "PBM") {
        sks = 3;
        nilai = IP * sks;
    } else if (Matkul == "Pancasila") {
        sks = 2;
        nilai = IP * sks;
    } else if (Matkul == "DSI") {
        sks = 2;
        nilai = IP * sks;
    } else {
        return 0; 
    }
 
    console.log(`Mata Kuliah: ${Matkul}, Nilai: ${nilai}`);
    console.log("---------------------------------------");
    return nilai;
}

total_nilai += CariIPK("DSI", 3.00);
total_nilai += CariIPK("Aljali", 2.00);
total_nilai += CariIPK("Bindo", 3.00);
total_nilai += CariIPK("Daspro", 2.50);
total_nilai += CariIPK("Matdis", 3.00);
total_nilai += CariIPK("Kombistek", 4.00);
total_nilai += CariIPK("PBM", 3.75);
total_nilai += CariIPK("Pancasila", 3.75);

let ipk = total_nilai/total_sks;

let sks_boleh_ambil = 0;

if (ipk >= 3.50 && ipk < 4.00) {
    sks_boleh_ambil = 24;
} else if (ipk >= 3.00 && ipk < 3.50) {
    sks_boleh_ambil = 21;
} else if (ipk >= 2.50 && ipk < 3.00) {
    sks_boleh_ambil = 18;
} else if (ipk >= 2.00 && ipk < 2.50) {
    sks_boleh_ambil = 15;
} else if (ipk >= 1.00 && ipk < 2.00) {
    sks_boleh_ambil = 12;
} else if (ipk > 0.50 && ipk < 1.00) {
    sks_boleh_ambil = 9;
} else {
    sks_boleh_ambil = 0;
}

console.log("IPK Lo adalah: ", ipk.toFixed(2));
console.log("SKS yang boleh Lo ambil adalah: ", sks_boleh_ambil);
console.log("SEMANGAT SAUDARAKUUUU!!!!!!");
