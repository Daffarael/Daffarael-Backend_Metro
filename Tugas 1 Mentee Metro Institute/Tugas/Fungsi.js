function VolumeBalok(Panjang,Lebar,Tinggi){
    return Panjang*Lebar*Tinggi;
}
let Panjang = 10;
let Lebar = 5;
let Tinggi = 2;


console.log("Balok dengan Ketentuan: "); 
console.log("Panjang = ", Panjang, "cm");  
console.log("Lebar = ", Lebar, "cm");  
console.log("Tinggi = ", Tinggi, "cm");  
console.log("---------------------------------------");

console.log("Volume nya adalah:", VolumeBalok(Panjang,Lebar,Tinggi)); 

