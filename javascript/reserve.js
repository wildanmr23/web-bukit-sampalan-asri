function updateCost() {
  // Ambil nilai dari input
  var coffeeChecked = document.getElementById("coffee").checked;
  var campingChecked = document.getElementById("camping").checked;

  // Menampilkan atau menyembunyikan input kapasitas berdasarkan jenis wisata yang dipilih
  document.getElementById("coffeeCapacityGroup").style.display = coffeeChecked
    ? "block"
    : "none";
  document.getElementById("campingCapacityGroup").style.display = campingChecked
    ? "block"
    : "none";

  // Mengambil kapasitas
  var coffeeCapacity =
    parseInt(document.getElementById("coffeeCapacity").value) || 0;
  var campingCapacity =
    parseInt(document.getElementById("campingCapacity").value) || 0;

  // Menentukan biaya per orang
  var costPerPerson = 0;
  if (coffeeChecked) {
    costPerPerson += 50000;
  }
  if (campingChecked) {
    costPerPerson += 150000;
  }

  // Menghitung total biaya
  var totalCost = coffeeCapacity * 50000 + campingCapacity * 150000;

  // Menampilkan biaya
  document.getElementById("costDisplay").innerText =
    "Rp " + totalCost.toLocaleString();
}

function submitReservation() {
  // Ambil nilai dari input
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var coffeeCapacity = document.getElementById("coffeeCapacity").value;
  var campingCapacity = document.getElementById("campingCapacity").value;
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
  if (
    (document.getElementById("coffee").checked && !coffeeCapacity) ||
    (document.getElementById("camping").checked && !campingCapacity)
  ) {
    errors.push("Jumlah orang untuk jenis wisata yang dipilih");
  }

  // Cek apakah ada jenis wisata yang dipilih
  var activities = [];
  if (document.getElementById("coffee").checked) {
    activities.push(`Coffee (${coffeeCapacity} orang)`);
  }
  if (document.getElementById("camping").checked) {
    activities.push(`Camping (${campingCapacity} orang)`);
  }
  if (activities.length === 0) {
    errors.push("Jenis wisata");
  }

  // Jika ada error, tampilkan alert dengan daftar error
  if (errors.length > 0) {
    alert("Harap lengkapi bidang berikut: " + errors.join(", "));
    return;
  }

  // Tentukan biaya berdasarkan jenis wisata dan jumlah orang
  var costPerPerson = 0;
  if (document.getElementById("coffee").checked) {
    costPerPerson += 50000;
  }
  if (document.getElementById("camping").checked) {
    costPerPerson += 150000;
  }
  var totalCost =
    (parseInt(coffeeCapacity) || 0) * 50000 +
    (parseInt(campingCapacity) || 0) * 150000;

  // Buat pesan untuk WhatsApp
  var message = `Halo, saya ${name} ingin melakukan reservasi untuk ${activities.join(
    " dan "
  )} pada tanggal ${date} pukul ${time}. No. telepon: ${phone}. Catatan tambahan: ${
    notes ? notes : "Tidak ada catatan tambahan."
  } Total biaya: Rp ${totalCost.toLocaleString()}`;

  // Encode message to URL format
  var whatsappURL =
    "https://wa.me/+6282127312767?text=" + encodeURIComponent(message);

  // Buka chat WhatsApp
  window.open(whatsappURL, "_blank");
}
