document.addEventListener("DOMContentLoaded", () => {
  const artistsData = [
    { name: "Henrique & Juliano", image: "./img/artista-henrique-juliano.jpg" },
    { name: "Jorge & Mateus", image: "./img/artista-jorge-mateus.jpg" },
    { name: "Zé Neto & Cristiano", image: "./img/artista-ze-neto.jpg" },
    { name: "Gusttavo Lima", image: "./img/artista-gusttavo-lima.jpeg" },
    { name: "Luan Santana", image: "./img/artista-luan-santana.jpeg" },
    { name: "Matheus & Kauan", image: "./img/artista-mateus-kauan.jpg" },
    { name: "Grelo", image: "./img/artista-grelo.jpeg" },
    { name: "Ana Castela", image: "./img/artista-ana-castela.jpeg" },
    { name: "Danilo & Davi", image: "./img/artista-danilo-davi.jpeg" },
    { name: "Os Barões da Pisadinha", image: "./img/artista-baroes.jpeg" },
  ];

  const albumsData = [
    {
      name: "White Noise (Sleep & Relaxation Sounds)",
      artist: "Sleepy John",
      image: "./img/album-white-noise.jpg",
    },
    {
      name: "O Céu Explica Tudo (Ao Vivo)",
      artist: "Henrique & Juliano",
      image: "./img/album-ceu-explica.jpg",

      name: "After Ego",
      artist: "Lisa",
      image: "./img/album-after-ego.png",
    },
    {
      name: "Nada Como Um Dia Após o Outro",
      artist: "Racionais",
      image: "./img/album-vida-loka.jpg",
    },
    {
      name: "O Céu Explica Tudo (Ao Vivo)",
      artist: "Henrique & Juliano",
      image: "./img/album-ceu-explica.jpg",
    },
    {
      name: "Cajut",
      artist: "Liniker",
      image: "./img/album-caju.jpg",
    },
    {
      name: "Escândalo Íntimo",
      artist: "Luísa Sonza",
      image: "./img/album-escandalo.jpg",
    },

    {
      name: "Vagabundo de Luxo",
      artist: "Wiu",
      image: "./img/album-vagabundos-luxo.jpeg",
    },
    {
      name: "É o Grelo",
      artist: "Grelo",
      image: "./img/album-grelo.jpg",
    },
    {
      name: "Mayhem",
      artist: "Lady Gaga",
      image: "./img/album-mayhem.jpg",
    },
    {
      name: "Hit Me Hard And Soft",
      artist: "Billie Eilish",
      image: "./img/album-hit-me.jpg",
    },
  ];

  const artistGrid = document.querySelector(".artists-grid");
  const albumsGrid = document.querySelector(".albums-grid");

  artistsData.forEach((artist) => {
    const artistCard = document.createElement("div");
    artistCard.classList.add("artist-card");

    artistCard.innerHTML = `
  <img src="${artist.image}" alt="${artist.name}" />
  <div>
      <h3>${artist.name}</h3>
      <p>Artista</p>
   </div>
`;

    artistGrid.appendChild(artistCard);
  });

  albumsData.forEach((album) => {
    const albumCard = document.createElement("div");
    albumCard.classList.add("album-card");

    albumCard.innerHTML = `
      <img src="${album.image}" alt=imagem do"${album.name}" />
      <div>
          <h3>${album.name}</h3>
          <p>${album.artist}</p>
      </div>
    `;

    albumsGrid.appendChild(albumCard);
  });
});
