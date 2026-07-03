(function() {
  const grid = document.getElementById('galleryGrid');
  const filters = document.querySelectorAll('.gallery-filter');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImage');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCaption = document.getElementById('lightboxCaption');

  let currentFilter = 'all';
  let currentIndex = 0;
  window.filteredItems = [];

  function renderGallery(filter) {
    let items = DORE.gallery;
    if (filter !== 'all') {
      const bookNum = parseInt(filter);
      items = items.filter(i => i.book === bookNum);
    }

    window.filteredItems = items;

    let html = '';
    items.forEach((item, idx) => {
      html += '<div class="gallery-item" data-idx="' + idx + '" onclick="openLightbox(\'' + DORE.path(item.file) + '\',\'' + item.label.replace(/'/g, "\\'") + '\',\'' + item.caption.replace(/'/g, "\\'") + '\',\'' + idx + '\')">';
      html += '<img src="' + DORE.path(item.file) + '" alt="' + item.label + '" loading="lazy">';
      html += '<div class="gallery-item-overlay">';
      html += '<div class="gallery-item-label">' + item.label + '</div>';
      html += '<div class="gallery-item-caption">' + item.caption + '</div>';
      html += '</div>';
      html += '</div>';
    });

    grid.innerHTML = html;
  }

  filters.forEach(btn => {
    btn.addEventListener('click', function() {
      filters.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentFilter = this.dataset.filter;
      renderGallery(currentFilter);
    });
  });

  renderGallery('all');
})();

function openLightbox(src, label, caption, idx) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImage');
  const title = document.getElementById('lightboxTitle');
  const cap = document.getElementById('lightboxCaption');

  img.src = src;
  title.textContent = label;
  cap.textContent = caption;
  if (idx !== undefined) {
    lightbox.dataset.idx = idx;
  }
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  const lightbox = document.getElementById('lightbox');
  if (e && e.target !== lightbox && e.target !== lightbox.querySelector('.lightbox-close')) return;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  const lightbox = document.getElementById('lightbox');
  let idx = parseInt(lightbox.dataset.idx || 0);

  if (window.filteredItems) {
    idx = (idx + dir + window.filteredItems.length) % window.filteredItems.length;
    const item = window.filteredItems[idx];
    if (item) {
      openLightbox(
        DORE.path(item.file),
        item.label,
        item.caption,
        idx
      );
    }
  }
}
