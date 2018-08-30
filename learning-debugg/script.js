/**
 * Debugg
 * 
 * Debugg error yang akan dilakukan adalah dengan menggunakan fungsi try() dan catch()
 * 
 */

/* try {
    alert("Saldo Rekening " + saldo());
} catch (err) {
    alert("Pesan Error!! \n" + err.name + " : " + err.message);
}**/

//menggunakan throw
/**var num = prompt("Masukkan usia anda : ");
try {
    if (num > 120 || num < 0) {
        throw "error1";
    } else if (num == "") {
        throw "error2";
    } else if (isNaN(num)) {
        throw "error3";
    }
} catch (err) {
    if (err == "error1") {
        alert("Error! Nilai anda di luar rentang");
    }
    if (err == "error2") {
        alert("Error! Anda tidak memasukkan usia anda");
    }
    if (err == "error3") {
        alert("Error! nilai bukan angka");
    }
}
if (num < 13) {
    alert("Anda Membayar tarif anak - anak");
} else if (num < 55) {
    alert("Anda membayar tarif dewasa");
} else {
    alert("Anda membayar tarif lanjut usia");
} */


/**
 * Latihan Soal Nomer 1

function tambah() {
    var n = 2;
    var y = 3;
    document.write(n + y, "<br>");
    document.write("<h2>Hello...</h2>")
}
*/


/**
 * Latihan soal nomer 2
 * 
 * aritmatika : 
 *  tip = nilai persen x total biaya makanan / 100


function tip() {
    var biaya = prompt("Masukkan Total Biaya: ");
    var tip = 20 * biaya / 100;
    alert("Tip dari " + biaya + " adalah : " + tip);
} */

/**
 * Latihan soal nomer 3
 * 
 */
function ubah(warna) {
    document.body.style.background = warna;
}