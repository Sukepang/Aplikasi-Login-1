/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */
/* Comment : membuat variable untuk setiap elemen view. */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/* membuat variabel untuk menyimpan informasi email dan password*/
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/* menambahkan aksi klik pada button */
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    // TODO 1 : Mendapatkan input email dan password pengguna dari form.

    /* mendapatkan nilai dari masing-masing input(email dan password) ketika tombol ditekan*/
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;
  
    /* TODO 2 : Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */

    /* jika sesuai program akan berpindah ke halaman home */
    if (email == expectedEmail && password == expectedPassword){
      goToHome();

    /* jika tidak sesuaai akan menampilkan pop up bahwa input salah */
    } else {
      showPopUp();
    }
});
