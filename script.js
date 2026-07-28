const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

if (menuToggle && navbar) {
  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
}

if (document.getElementById('loadMore')) {

photos.push({
  src: 'assets/gallery/IMG_1033_800x500.jpg',
  album: 'live-2024',
  title: 'Encore Moment'
});

photos.push({
  src: 'assets/gallery/IMG_8959.jpg',
  album: 'live-2023',
  title: 'Encore Moment'
});

photos.push({
  src: 'assets/gallery/ORANGE_POP_(06.08.2022)_800x500.jpg',
  album: 'live-2022',
  title: 'Encore Moment'
});

const gallery = document.getElementById('gallery');
const tabs = document.querySelectorAll('.album-tabs button');
const loadMoreBtn = document.getElementById('loadMore');
let currentAlbum = 'all';
let visible = 8;

function render() {
  gallery.innerHTML = '';

  const filtered = currentAlbum === 'all'
    ? photos
    : photos.filter(p => p.album === currentAlbum);

  filtered.slice(0, visible).forEach(p => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `<img src="${p.src}"><span>${p.title}</span>`;
    div.onclick = () => openLightbox(p.src);
    gallery.appendChild(div);
  });

  loadMoreBtn.style.display =
    visible >= filtered.length ? 'none' : 'block';
}

tabs.forEach(btn => {
  btn.onclick = () => {
    tabs.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentAlbum = btn.dataset.album;
    visible = 8;
    render();
  };
});

loadMoreBtn.onclick = () => {
  loadMoreBtn.textContent = 'LOADING...';
  visible += 6;
  setTimeout(() => {
    render();
    loadMoreBtn.textContent = 'LOAD MORE';
  }, 300);
};

render();

}
