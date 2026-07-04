(function() {
  const poemContainer = document.getElementById('poemLines');
  const bookTitle = document.getElementById('bookTitle');
  const bookSelect = document.getElementById('bookSelect');
  const progressDisplay = document.getElementById('progressDisplay');
  const toggleLineNumbersBtn = document.getElementById('toggleLineNumbers');
  const toggleFontSizeBtn = document.getElementById('toggleFontSize');
  const illustrationsContainer = document.getElementById('readIllustrations');

  const studyLinks = {
    1: [
      { label: 'Reading Room: Book I', href: 'https://milton.host.dartmouth.edu/reading_room/pl/book_1/text.shtml' },
      { label: 'Yale Milton: Book I', href: 'https://oyc.yale.edu/english/engl-220/lecture-9' }
    ],
    2: [
      { label: 'Reading Room: Book II', href: 'https://milton.host.dartmouth.edu/reading_room/pl/book_2/text.shtml' },
      { label: 'Yale Milton: Books II-IV', href: 'https://oyc.yale.edu/english/engl-220/lecture-10' }
    ],
    3: [
      { label: 'Reading Room: Book III', href: 'https://milton.host.dartmouth.edu/reading_room/pl/book_3/text.shtml' },
      { label: 'Yale Milton: Book III', href: 'https://oyc.yale.edu/english/engl-220/lecture-13' }
    ],
    4: [
      { label: 'Reading Room: Book IV', href: 'https://milton.host.dartmouth.edu/reading_room/pl/book_4/text.shtml' },
      { label: 'Yale Milton: Books IV-V', href: 'https://oyc.yale.edu/english/engl-220/lecture-14' }
    ],
    5: [
      { label: 'Reading Room: Book V', href: 'https://milton.host.dartmouth.edu/reading_room/pl/book_5/text.shtml' },
      { label: 'Yale Milton: Books V-VI', href: 'https://oyc.yale.edu/english/engl-220/lecture-15' }
    ],
    6: [
      { label: 'Reading Room: Book VI', href: 'https://milton.host.dartmouth.edu/reading_room/pl/book_6/text.shtml' },
      { label: 'Yale Milton: Books VI-VII', href: 'https://oyc.yale.edu/english/engl-220/lecture-16' }
    ],
    7: [
      { label: 'Reading Room: Book VII', href: 'https://milton.host.dartmouth.edu/reading_room/pl/book_7/text.shtml' },
      { label: 'Yale Milton: Books VII-VIII', href: 'https://oyc.yale.edu/english/engl-220/lecture-16' }
    ],
    8: [
      { label: 'Reading Room: Book VIII', href: 'https://milton.host.dartmouth.edu/reading_room/pl/book_8/text.shtml' },
      { label: 'Yale Milton: Books VII-VIII', href: 'https://oyc.yale.edu/english/engl-220/lecture-16' }
    ],
    9: [
      { label: 'Reading Room: Book IX', href: 'https://milton.host.dartmouth.edu/reading_room/pl/book_9/text.shtml' },
      { label: 'Yale Milton: Books IX-X', href: 'https://oyc.yale.edu/english/engl-220/lecture-17' }
    ],
    10: [
      { label: 'Reading Room: Book X', href: 'https://milton.host.dartmouth.edu/reading_room/pl/book_10/text.shtml' },
      { label: 'Yale Milton: Books XI-XII', href: 'https://oyc.yale.edu/english/engl-220/lecture-19' }
    ]
  };

  let showLineNumbers = true;
  let fontSizeIndex = 0;
  const fontSizes = ['1rem', '1.15rem', '1.3rem'];

  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

  function renderIllustrations(bookNum) {
    const images = DORE.getBookHighlights(bookNum);
    if (!images.length) {
      illustrationsContainer.style.display = 'none';
      return;
    }

    illustrationsContainer.style.display = '';
    illustrationsContainer.innerHTML = '';

    const scroll = document.createElement('div');
    scroll.className = 'read-illustrations-scroll';

    const label = document.createElement('div');
    label.className = 'read-illustrations-label';
    label.textContent = 'Illustrations by Gustave Dor\u00e9';
    scroll.appendChild(label);

    const track = document.createElement('div');
    track.className = 'read-illustrations-track';

    images.forEach(img => {
      const card = document.createElement('div');
      card.className = 'read-ill-card';
      card.addEventListener('click', () => {
        openLightbox(DORE.path(img.file), img.label, img.caption);
      });

      const image = document.createElement('img');
      image.src = DORE.path(img.file);
      image.alt = img.label;
      image.loading = 'lazy';

      const illLabel = document.createElement('div');
      illLabel.className = 'read-ill-label';
      illLabel.textContent = img.label;

      card.appendChild(image);
      card.appendChild(illLabel);
      track.appendChild(card);
    });

    scroll.appendChild(track);
    illustrationsContainer.appendChild(scroll);

    const links = studyLinks[bookNum] || [];
    if (links.length) {
      const studyLinksWrap = document.createElement('div');
      studyLinksWrap.className = 'read-study-links';

      const studyLabel = document.createElement('div');
      studyLabel.className = 'read-study-links-label';
      studyLabel.textContent = 'Advanced reading';
      studyLinksWrap.appendChild(studyLabel);

      links.forEach(link => {
        const a = document.createElement('a');
        a.className = 'read-study-link';
        a.href = link.href;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = link.label;
        studyLinksWrap.appendChild(a);
      });

      illustrationsContainer.appendChild(studyLinksWrap);
    }
  }

  function renderLines(bookNum) {
    const bookKey = 'pl_book_' + bookNum;
    const cached = sessionStorage.getItem(bookKey);
    if (cached) {
      displayBook(bookNum, JSON.parse(cached));
      return;
    }

    fetch('data/paradise-lost.json')
      .then(r => r.json())
      .then(books => {
        const book = books.find(b => b.book === bookNum);
        if (book) {
          sessionStorage.setItem(bookKey, JSON.stringify(book.lines));
          displayBook(bookNum, book.lines);
        }
      })
      .catch(err => {
        poemContainer.innerHTML = '<p style="text-align:center;color:var(--accent-red);padding:80px 0;">Failed to load poem text. Please try refreshing.</p>';
        console.error(err);
      });
  }

  function displayBook(bookNum, lines) {
    const roman = romanNumerals[bookNum - 1];
    bookTitle.textContent = 'Book ' + roman;
    progressDisplay.textContent = 'Book ' + roman + ' \u00b7 ' + lines.length + ' lines';

    renderIllustrations(bookNum);

    let html = '';
    let lineCount = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      if (trimmed === '' || trimmed === 'THE END.') {
        html += '<div class="read-line read-line-empty"></div>';
        continue;
      }

      lineCount++;
      const displayNum = lineCount;
      const isArgument = trimmed === trimmed.toUpperCase() && trimmed.length > 3 && !/[a-z]/.test(trimmed);

      html += '<div class="read-line' + (isArgument ? ' read-line-centered' : '') + '">';
      if (!isArgument) {
        html += '<span class="read-line-number" data-ln="' + displayNum + '">' + displayNum + '</span>';
      }
      const processed = line.replace(/_([^_]+)_/g, '<em>$1</em>');
      html += '<span class="read-line-text">' + processed + '</span>';
      html += '</div>';
    }

    poemContainer.innerHTML = html;
    updateLineNumberVisibility();
    updateFontSize();
  }

  function updateLineNumberVisibility() {
    const numbers = poemContainer.querySelectorAll('.read-line-number');
    numbers.forEach(n => {
      n.style.display = showLineNumbers ? '' : 'none';
    });
  }

  function updateFontSize() {
    const size = fontSizes[fontSizeIndex];
    poemContainer.querySelectorAll('.read-line').forEach(el => {
      el.style.fontSize = size;
    });
  }

  bookSelect.addEventListener('change', function() {
    const bookNum = parseInt(this.value);
    renderLines(bookNum);
    window.scrollTo({ top: document.querySelector('.read-header').offsetTop, behavior: 'smooth' });
  });

  toggleLineNumbersBtn.addEventListener('click', function() {
    showLineNumbers = !showLineNumbers;
    updateLineNumberVisibility();
    this.style.opacity = showLineNumbers ? '1' : '0.5';
  });

  toggleFontSizeBtn.addEventListener('click', function() {
    fontSizeIndex = (fontSizeIndex + 1) % fontSizes.length;
    updateFontSize();
  });

  renderLines(1);
})();
