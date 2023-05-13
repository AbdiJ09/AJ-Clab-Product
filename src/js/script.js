const open = document.querySelector("#menu-icon");
const nav = document.querySelector(".nav");

open.onclick = () => {
  open.classList.toggle("bx-x");
  nav.classList.toggle("open");
};
document.addEventListener("click", function (e) {
  if (!open.contains(e.target) && !nav.contains(e.target)) {
    open.classList.remove("bx-x");
    nav.classList.remove("open");
  }
});
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 200);
});
[];

const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2500,
  reset: true,
});
sr.reveal(".about-img", {});
sr.reveal(".about-text", { origin: "bottom" }, { delay: 400 });
sr.reveal(".card", { delay: 400 });
sr.reveal(".middle-text", { delay: 300 });
sr.reveal(".product-shop", { origin: "bottom" }, { delay: 300 });
sr.reveal(".image-container", { origin: "left" });
sr.reveal(".text-contact", { origin: "top" });
sr.reveal(".flex-input", { origin: "bottom" });
sr.reveal(".message", { origin: "bottom" });
sr.reveal(".btn-product", { origin: "bottom" });
sr.reveal(".send", { origin: "left" });

// send emaik
function sendEmail(event) {
  event.preventDefault(); // Mencegah aksi form default

  // Mengambil nilai dari input form
  var nama = document.getElementById("firstName").value;
  var nama2 = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var pesan = document.getElementById("message").value;

  // Validasi input form
  if (
    nama.trim() === "" ||
    nama2.trim() === "" ||
    email.trim() === "" ||
    phone.trim() === "" ||
    pesan.trim() === ""
  ) {
    alert("mohon lengkapi form dahulu");

    return; // Menghentikan proses pengiriman email
  }

  // Mengirim email menggunakan EmailJS
  emailjs
    .send("service_yl5sxr9", "template_62tbfss", {
      namaPenerima: "Abdi Janarianto",
      namaPenerima: "Abdi J",
      namaPengirim: nama + nama2,
      email: email,
      phone: phone,
      pesan: pesan,
    })
    .then(
      function (response) {
        console.log("Email terkirim!", response.status, response.text);
        // Redirect ke halaman sukses atau tampilkan pesan sukses
        alert(`Terima kasih sudah mengirimkan pesan, ${nama}`);
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
      },
      function (error) {
        console.log("Kesalahan dalam mengirim email", error);
        // Tampilkan pesan error atau lakukan tindakan lain jika terjadi kesalahan
      }
    );
}

// Fungsi untuk menampilkan popup
