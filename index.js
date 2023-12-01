//bikin variable
let nama = "Nur Afif Raihan";
console.log(nama);

//bikin array
let angka = [1, 2, 3, 4, 5];
console.log(angka[4]);
console.log(angka.length);

//bikin objek
let mahasiswa = {
    // key : value
    nama : "Chooo",
    nim : "0110222053",
    jurusan : "TI"
}
//objek array agar bisa menampilkan lebih dari 1 value
let listmahasiswa = [
    {
        nama : "Chooo",
        nim : "0110222053",
        jurusan : "TI",
    },
    {
        nama : "Rigel",
        nim : "0110222050",
        jurusan : "TI",
    },
];
console.log(listmahasiswa[1].nama);

console.log(mahasiswa. jurusan);
console.log(mahasiswa. nim);

//if else
let nilai = 80;
if (nilai > 85) {
    console.log("Lu lulus");
}else {
    console.log("Belajar cok");
}

//looping 1-10
//menerima 3 parameter (star, end, step)
for (let i = 1; i <= 20; i++) {
    console.log(i); 
}

//function
function tambah (angka1, angka2) {
    return angka1 + angka2;
}
console.log(tambah(100, 256));