window.addEventListener('DOMContentLoaded', () => {
    const namaTersimpan = localStorage.getItem('namaTamu');
    if (namaTersimpan) {
      document.getElementById('namaTamu').value = namaTersimpan;
    }
  });
// Bungkus logika validasi ke fungsi terpisah
function bukaUndangan() {
    const nama = document.getElementById('namaTamu').value.trim();
    const regexHurufSpasi = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    const regexDigit      = /\d/;

    // 1. Cek kosong
    if (!nama) {
      alert("Masukkan namamu dulu ya 😄");
      return;
    }
    // 2. Minimal 3 huruf
    if (nama.length <= 2) {
      alert("Nama terlalu pendek, minimal 3 huruf 😉");
      return;
    }
    // 3. Tanpa angka
    if (regexDigit.test(nama)) {
      alert("Nama tidak boleh mengandung angka 😅");
      return;
    }
    // 4. Tanpa simbol atau emot
    if (!regexHurufSpasi.test(nama)) {
      alert("Nama hanya boleh huruf dan spasi—tanpa simbol atau emotikon 🚫");
      return;
    }

    // Semua validasi lolos → tampilkan undangan
    document.getElementById('formNama').style.display = 'none';
    document.getElementById('namaTampil').textContent = nama;
    document.getElementById('undangan').classList.add('show');
  }

  // Event klik tombol
  document.getElementById('btnBuka').addEventListener('click', bukaUndangan);

  // Event tekan Enter di input
  document.getElementById('namaTamu').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();   // mencegah form submit default
      bukaUndangan();
    }
  });