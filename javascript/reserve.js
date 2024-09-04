function updateCost() {
  var coffeeChecked = document.getElementById("coffee").checked;
  var campingChecked = document.getElementById("camping").checked;

  // Menampilkan atau menyembunyikan input kapasitas dan opsi paket camping
  document.getElementById("coffeeCapacityGroup").style.display = coffeeChecked ? "block" : "none";
  var campingOptionsGroup = document.getElementById("campingOptionsGroup");
  var campingPackage = document.getElementById("campingPackage");

  if (campingChecked) {
      campingOptionsGroup.style.display = "block";
  } else {
      campingOptionsGroup.style.display = "none";
  }

  // Mengambil kapasitas
  var coffeeCapacity = parseInt(document.getElementById("coffeeCapacity").value) || 0;
  var campingPackageValue = campingPackage.value.split(",");
  var campingCost = parseInt(campingPackageValue[0]) || 0;

  // Menghitung total biaya
  var totalCost = 0;
  if (coffeeChecked) {
      totalCost += coffeeCapacity * 50000;
  }
  if (campingChecked && campingCost > 0) {
      totalCost += campingCost;
  }

  // Menghitung uang muka
  var downPayment = totalCost * 0.5;

  // Menampilkan biaya
  document.getElementById("costDisplay").innerText = "Rp " + totalCost.toLocaleString();
  document.getElementById("downPaymentDisplay").innerText = "Rp " + downPayment.toLocaleString();
}

function formatDate(dateString) {
  var options = { day: 'numeric', month: 'long', year: 'numeric' };
  var date = new Date(dateString);
  return date.toLocaleDateString('id-ID', options);
}

function validateNumberInput(input) {
  // Remove any non-numeric characters
  input.value = input.value.replace(/[^0-9]/g, '');
}

function submitReservation() {
  var name = document.getElementById("nama").value;
  var phone = document.getElementById("phone").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var coffeeCapacity = document.getElementById("coffeeCapacity").value;
  var campingPackageValue = document.getElementById("campingPackage").value.split(",");
  var campingCost = parseInt(campingPackageValue[0]) || 0;
  var notes = document.getElementById("notes").value;
  var paymentMethod = document.getElementById("paymentMethod").value;

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
  if (document.getElementById("coffee").checked && !coffeeCapacity) {
      errors.push("Jumlah orang untuk Coffee");
  }
  if (document.getElementById("camping").checked && !campingPackageValue[0]) {
      errors.push("Paket Camping");
  }

  // Cek apakah ada jenis wisata yang dipilih
  var activities = [];
  if (document.getElementById("coffee").checked) {
      activities.push(`Coffee (${coffeeCapacity} orang)`);
  }
  if (document.getElementById("camping").checked) {
      activities.push(`Camping (${campingPackageValue[1]} orang)`);
  }
  if (activities.length === 0) {
      errors.push("Jenis wisata");
  }

  // Validasi metode pembayaran
  if (!paymentMethod) {
      errors.push("Metode pembayaran");
  }

  // Jika ada error, tampilkan alert dengan daftar error
  if (errors.length > 0) {
      alert("Harap lengkapi bidang berikut: " + errors.join(", "));
      return;
  }

  // Tentukan biaya berdasarkan jenis wisata dan jumlah orang
  var totalCost = 0;
  if (document.getElementById("coffee").checked) {
      totalCost += (parseInt(coffeeCapacity) || 0) * 50000;
  }
  if (document.getElementById("camping").checked && campingCost > 0) {
      totalCost += campingCost;
  }

  // Buat pesan untuk WhatsApp
  var formattedDate = formatDate(date);
  var dp = totalCost * 0.5.toLocaleString();
  var message = `Hallo, saya ${name} ingin melakukan reservasi untuk ${activities.join(", ")} pada tanggal ${formattedDate} pukul ${time}. No. telepon : ${phone}. Biaya total : Rp ${totalCost.toLocaleString()}. Uang muka (50%) : Rp ${dp.toLocaleString()}. Saya akan membayar uang muka dengan metode : ${paymentMethod}, tolong berikan nomer tersebut untuk saya melakukan pembayaran. Catatan tambahan : ${notes ? notes : "Tidak ada catatan tambahan."} Terima Kasih!`;

  // Encode message to URL format
  var whatsappURL = "https://wa.me/+6282127312767?text=" + encodeURIComponent(message);

  // Buka chat WhatsApp
  window.open(whatsappURL, "_blank");
}