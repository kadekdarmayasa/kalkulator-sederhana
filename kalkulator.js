let play = true,
  player,
  hasil;

alert('KALKULATOR SEDERHANA');
player = prompt('Masukkan Nama: ');
alert(`Selamat Menggunakan Kalkulatorku ${player}`);

function Matematika() {
  this.tambah = function (a, b) {
    return a + b;
  };

  this.kurang = function (a, b) {
    return a - b;
  };

  this.bagi = function (a, b) {
    return a / b;
  };

  this.kali = function (a, b) {
    return a * b;
  };
}

while (play == true) {
  let bil1 = parseInt(prompt(`Masukkan Angka Pertama: `));
  let operator = prompt('Masukkan Operator: +, -, *, /');
  let bil2 = parseInt(prompt(`Masukkan Angka Kedua:`));

  if (operator == '+') {
    hasil = new Matematika().tambah(bil1, bil2);
  } else if (operator == '-') {
    hasil = new Matematika().kurang(bil1, bil2);
  } else if (operator == '/') {
    hasil = new Matematika().bagi(bil1, bil2);
  } else if (operator == '*') {
    hasil = new Matematika().kali(bil1, bil2);
  }
  alert(hasil);

  play = confirm('Mau Coba Lagi?');
}

alert(`Terimakasih Sudah Mencoba Kalkulatorku ${player}`);
