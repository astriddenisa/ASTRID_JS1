// (if) Program JavaScript sederhana untuk seleksi pelamar dosen
var usiaDosen = 30; // usia sesuai kebutuhan
var pengalamanDosen = 5; // pengalaman dosen sesuai kebutuhan

if (usiaDosen >= 25 && pengalamanDosen >= 3) {
  console.log("Dosen memenuhi syarat untuk diwawancara.");
} else {
  console.log("Maaf, dosen tidak memenuhi syarat untuk diwawancara.");
}


// (else) Program JavaScript sederhana untuk menentukan status keanggotaan
var pengguna = "Joni"; // nama pengguna sesuai kebutuhan
var statusKeanggotaan = "premium"; // status keanggotaan (free, premium) sesuai kebutuhan

var pesan;

if (statusKeanggotaan === "premium") {
  pesan = "Selamat datang, " + pengguna + "! Anda memiliki akses ke konten eksklusif.";
} else {
  pesan = "Halo, " + pengguna + ". Ingin menikmati konten eksklusif? Tingkatkan status keanggotaan Anda!";
}

console.log(pesan);


//(nested if) Program JavaScript sederhana untuk menentukan kategori cuaca
var suhu = 28; // suhu sesuai kebutuhan
var hujan = false; // kondisi hujan (true atau false) sesuai kebutuhan

var kategori; 

if (suhu >= 0 && suhu <= 100) {
  if (suhu >= 30) {
    if (hujan) {
      kategori = "Cerah dengan hujan";
    } else {
      kategori = "Cerah";
    }
  } else if (suhu >= 20) {
    if (hujan) {
      kategori = "Berawan dengan hujan";
    } else {
      kategori = "Berawan";
    }
  } else {
    kategori = "Dingin";
  }

  console.log("Suhu saat ini:", suhu + "°C");
  console.log("Kategori cuaca:", kategori);
} else {
  console.log("Suhu tidak valid.");
}


//(switch case) Program JavaScript sederhana untuk menentukan aksi berdasarkan perintah
var perintah = "matikan"; // perintah sesuai kebutuhan

var hasil;

switch (perintah) {
  case "nyalakan":
    hasil = "Lampu telah dinyalakan.";
    break;
  case "matikan":
    hasil = "Lampu telah dimatikan.";
    break;
  case "reset":
    hasil = "Sistem telah direset.";
    break;
  default:
    hasil = "Perintah tidak valid.";
}

console.log(hasil); 


//(for statement) Program JavaScript sederhana untuk mencetak deret angka genap dari 2 hingga 20
for (var angka = 2; angka <= 20; angka += 2) {
    console.log(angka);
  }


//(while) Program JavaScript sederhana untuk mencetak deret kuadrat dari 1 hingga 10 
var nomor = 1;

while (nomor <= 10) {
  var kuadrat = nomor * nomor;
  console.log("Kuadrat dari " + nomor + " adalah " + kuadrat);
  nomor++;
}


// (do while) Program JavaScript sederhana untuk mencetak deret angka genap dari 2 hingga 200 menggunakan do while
var angka = 2;

do {
  console.log(angka);
  angka += 2;
} while (angka <= 200);


// (function) Program JavaScript sederhana untuk menghitung jumlah sampah plastik sekolah dalam sehari dengan fungsi
function hitungSampahPlastik(siswa, jumlahPerSiswa) {
    var totalSampah = siswa * jumlahPerSiswa;
    return totalSampah;
  }
  
  var jumlahSiswa = 500; // jumlah siswa sesuai kebutuhan
  var sampahPerSiswa = 0.2; // jumlah sampah plastik per siswa sesuai kebutuhan (dalam kilogram)
  
  var totalSampahHariIni = hitungSampahPlastik(jumlahSiswa, sampahPerSiswa);
  
  console.log("Sekolah kita menghasilkan sekitar " + totalSampahHariIni + " kilogram sampah plastik dalam sehari.");
  
  
