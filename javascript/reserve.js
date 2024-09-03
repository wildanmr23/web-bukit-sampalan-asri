function submitReservation() {
  // Ambil nilai dari input
  var name = document.getElementById("nama").value;
  var phone = document.getElementById("phone").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var activity = document.getElementById("activity").value;
  var notes = document.getElementById("notes").value;

  // Menyimpan pesan error
  var errors = [];

  // Validasi setiap field
  if (!name) {
    errors.push("Nama lengkap");
  }
  if (!phone) {
    errors.push("Nomor telepon");
  }
  if (!date) {
    errors.push("Tanggal reservasi");
  }
  if (!time) {
    errors.push("Waktu reservasi");
  }
  if (!activity) {
    errors.push("Jenis wisata");
  }

  // Jika ada error, tampilkan alert dengan daftar error
  if (errors.length > 0) {
    alert("Harap lengkapi bidang berikut: " + errors.join(", "));
    return;
  }

  // Buat pesan untuk WhatsApp
  var message = `Halo, saya ${name} ingin melakukan reservasi untuk ${activity} pada tanggal ${date} pukul ${time}. No. telepon: ${phone}. Catatan tambahan: ${
    notes ? notes : "Tidak ada catatan tambahan."
  }`;

  // Encode message to URL format
  var whatsappURL =
    "https://wa.me/+6282127312767?text=" + encodeURIComponent(message);

  // Buka chat WhatsApp
  window.open(whatsappURL, "_blank");
}
