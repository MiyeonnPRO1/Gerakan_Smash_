// Tempel link YouTube lengkap di bagian "link"
const videos = [
  { judul: "Teknik Dasar Gerakan Smash", link: "https://youtube.com/shorts/xKfQUZO8bCI?si=TAHX-gK6ng2NmmsH" },

];

// Mengambil ID video dari berbagai bentuk link YouTube
function ambilId(link) {
  const hasil = link.match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/);
  return hasil ? hasil[1] : "";
}

const daftar = document.getElementById("daftar-video");

videos.forEach(v => {
  const id = ambilId(v.link);

  const kartu = document.createElement("div");
  kartu.className = "video";
  kartu.innerHTML = `
    <h3>${v.judul}</h3>
    <div class="pemutar" data-id="${id}">
      <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="${v.judul}">
      <span class="tombol-play">▶</span>
    </div>`;

  // Saat gambar diklik, ganti dengan video yang diputar
  kartu.querySelector(".pemutar").addEventListener("click", function () {
    this.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  });

  daftar.appendChild(kartu);
});