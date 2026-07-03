(function() {
  const poemContainer = document.getElementById('poemLines');
  const bookTitle = document.getElementById('bookTitle');
  const bookSelect = document.getElementById('bookSelect');
  const progressDisplay = document.getElementById('progressDisplay');
  const toggleLineNumbersBtn = document.getElementById('toggleLineNumbers');
  const toggleFontSizeBtn = document.getElementById('toggleFontSize');

  let showLineNumbers = true;
  let fontSizeIndex = 0;
  const fontSizes = ['1rem', '1.15rem', '1.3rem'];

  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

  function renderLines(bookNum) {
    const bookKey = 'pl_book_' + bookNum;
    const cached = sessionStorage.getItem(bookKey);
    if (cached) {
      displayBook(bookNum, JSON.parse(cached));
      return;
    }

    // Load from JSON
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
      // Handle italic markup (_text_)
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

  // Book selector change
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

  // Initial load
  renderLines(1);
})();
