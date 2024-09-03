function submitReservation() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var date = document.getElementById("date").value;
  var activity = document.getElementById("activity").value;
  var notes = document.getElementById("notes").value;

  // Validasi semua field kecuali catatan tambahan
  if (!name || !phone || !date || !activity) {
    alert("Harap lengkapi semua bidang yang diperlukan!");
    return;
  }

  var message = `Halo, saya ${name} ingin melakukan reservasi untuk ${activity} pada tanggal ${date}. No. telepon: ${phone}. Catatan tambahan: ${notes}`;

  // Encode message to URL format
  var whatsappURL =
    "https://wa.me/+6282127312767?text=" + encodeURIComponent(message);

  // Open WhatsApp chat
  window.open(whatsappURL, "_blank");
}
