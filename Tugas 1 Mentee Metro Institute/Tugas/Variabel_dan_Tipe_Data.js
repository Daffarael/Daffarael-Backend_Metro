//PRIMITIVE----------------------------------------------------------------------------------------------------------------

//string
// Klub para peraih balon d'or berurutan dari tahun 2000-2007  
let Luis_Figo = "Real Madrid";
let Michael_Owen = "Liverpool";
let Ronaldo_phenomenon = "Real Madrid"; 
let Pavel_Nedved = "Juventus";
let Andriy_Shevchenko = "AC Milan";
let Fabio_Cannavaro = "Real Madrid";
let Kaka = "AC Milan";

console.log("Para Peraih Balon D'or Berurutan Dari Tahun 2000-2007:"); 
console.log("1. Luis Figo, Berasal dari klub ", Luis_Figo);
console.log("2. Michael Owen, Berasal dari klub ", Michael_Owen);
console.log("3. Ronaldo Phenomenon, Berasal dari klub ", Ronaldo_phenomenon);
console.log("4. Pavel Nedved, Berasal dari klub ", Pavel_Nedved);
console.log("5. Andriy Shevchenko, Berasal dari klub ", Andriy_Shevchenko);
console.log("6. Fabio Cannavaro, Berasal dari klub ", Fabio_Cannavaro);
console.log("7. Kaka, Berasal dari klub ", Kaka);
console.log(""); 
console.log(""); 

//number
// klasemen korupsi di indonesia beserta jumlah kerugian yang diakibatkan
let PT_Antam = 5900000000000000;
let Pertamina = 968500000000000;
let PT_Timah = 300000000000000;
let BLBI = 138000000000000;
let Duta_Palma = 78000000000000;
let PT_TPPI = 37000000000000;
let PT_Asabri = 22000000000000;
let PT_Jiwasraya = 17000000000000;
let kemensos = 17000000000000;
let Sawit_CPO = 12000000000000;

console.log("1.  Total Uang Negara yang Dikorupsi Oleh PT Antam adalah", PT_Antam);
console.log("2.  Total Uang Negara yang Dikorupsi Oleh Pertamina adalah", Pertamina);
console.log("3.  Total Uang Negara yang Dikorupsi Oleh PT Timah adalah", PT_Timah);
console.log("4.  Total Uang Negara yang Dikorupsi Oleh BLBI adalah", BLBI);
console.log("5.  Total Uang Negara yang Dikorupsi Oleh Duta Palma adalah", Duta_Palma);
console.log("6.  Total Uang Negara yang Dikorupsi Oleh PT TPPI adalah", PT_TPPI);
console.log("7.  Total Uang Negara yang Dikorupsi Oleh PT Asabri adalah", PT_Asabri);
console.log("8.  Total Uang Negara yang Dikorupsi Oleh PT Jiwasraya adalah", PT_Jiwasraya);
console.log("9.  Total Uang Negara yang Dikorupsi Oleh Kemensos adalah", kemensos);
console.log("10. Total Uang Negara yang Dikorupsi Oleh Sawit CPO adalah", Sawit_CPO);
console.log(""); 
console.log(""); 

//boolean
let isBalonDorWinner = true;
let isCorruption = false;
console.log("Apakah Ronaldo Pernah Menang Balon D'or? ", isBalonDorWinner);
console.log("Apakah Pejabat Indonesia sangat bersih dari korupsi? ", isCorruption);






//Non-Primitive------------------------------------------------------------------------------------------------------------
//object
let Captain_TimnasIndonesia = {
    name: "Jay Idzes",
    Klub: "Venezia",
    Posisi: "CB (Center Back)",
    PernahMainDi: {
        Eindhoven: "2018-2019",
        Go_Ahead_Eagles: "2020-2022",
        Venezia: "2023"
    }
};

//akses object
console.log("Nama Kapten Indonesia: ", Captain_TimnasIndonesia.name);
console.log("---------------------------------------");
console.log("Klubnya Sekarang: ", Captain_TimnasIndonesia.Klub);
console.log("---------------------------------------");
console.log("Posisi Utamma: ", Captain_TimnasIndonesia.Posisi);
console.log("---------------------------------------");
console.log("Pernah Main Di Eindoven Pada Tahun: ", Captain_TimnasIndonesia.PernahMainDi.Eindhoven);
console.log("---------------------------------------");
console.log("Pernah Main Di Go Ahead Eagles Pada Tahun: ",Captain_TimnasIndonesia.PernahMainDi.Go_Ahead_Eagles);
console.log("---------------------------------------");
console.log("Pernah Main Di Venezia Pada Tahun: ",Captain_TimnasIndonesia.PernahMainDi.Venezia);

console.log(""); 
console.log(""); 
//Array
let pemainTimnasIndonesia = ["Idzes", "Hubner", "Paes", "Ole","Ridho"];
console.log(pemainTimnasIndonesia[0]);

let campuran = ["Idzes", 4, true, {name: "Jay Idzes", Klub: "Venezia"}, ["CB", "CF", "GK"]];
console.log(campuran[3].name,  campuran[4][0]);