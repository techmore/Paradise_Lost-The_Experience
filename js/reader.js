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

  const DOWNLOAD_BASE = 'https://github.com/techmore/Paradise_Lost-The_Experience/raw/main/';

  const sidebarBookResources = {
    1: {
      lectures: [
        { label: 'Yale: Book I (Prof. John Rogers)', href: 'https://oyc.yale.edu/english/engl-220/lecture-9', desc: 'Opening invocation, Satan\'s first speeches, Pandemonium' },
        { label: 'Hillsdale: Lecture 1 (Prof. Stephen Smith)', href: 'https://online.hillsdale.edu/courses/promo/paradise-lost', desc: 'Hell — Book I overview' },
        { label: 'Course Hero: Book I Summary', href: 'https://www.youtube.com/playlist?list=PLs7fzoKfB1MgaCjsfAR6Ui2Jen0lM2-lK', desc: '10-min book summary' }
      ],
      intros: [
        { label: 'Benjamin McEvoy: How to Read Paradise Lost', href: 'https://www.youtube.com/@benjaminmcevoy', desc: '1hr45min general introduction (134K views)' }
      ],
      criticism: [
        { label: 'C.S. Lewis — A Preface to Paradise Lost (Ch.1-3)', href: 'https://www.amazon.com/dp/0195003454', desc: 'Satan\'s rhetoric, epic intention, Milton\'s theology', download: 'Paradise_Lost_Supplemental/A%20Preface%20to%20Paradise%20Lost%20(C.%20S.%20Lewis)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).epub' },
        { label: 'Stanley Fish — Surprised by Sin (Ch.1)', href: 'https://www.amazon.com/dp/067485747X', desc: 'The reader\'s entanglement with Satan', download: 'Paradise_Lost_Supplemental/Surprised%20by%20sin%20%20the%20reader%20in%20Paradise%20lost%20(Fish%2C%20Stanley%20Eugene)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).pdf' }
      ],
      text: [
        { label: 'Dartmouth Reading Room: Book I', href: 'https://milton.host.dartmouth.edu/reading_room/pl/book_1/text.shtml', desc: 'Annotated scholarly edition' }
      ],
      bible: [
        { label: 'Genesis 1:1-3', href: 'https://www.biblegateway.com/passage/?search=Genesis+1', desc: 'The biblical creation account' }
      ],
      dore: [53, 4, 5, 3, 2]
    },
    2: {
      lectures: [
        { label: 'Yale: Books II-IV (Prof. John Rogers)', href: 'https://oyc.yale.edu/english/engl-220/lecture-10', desc: 'Infernal council, Sin & Death, Chaos' },
        { label: 'Hillsdale: Lecture 2 (Prof. Stephen Smith)', href: 'https://online.hillsdale.edu/courses/promo/paradise-lost', desc: 'The Infernal Council' },
        { label: 'Course Hero: Book II Summary', href: 'https://www.youtube.com/playlist?list=PLs7fzoKfB1MgaCjsfAR6Ui2Jen0lM2-lK', desc: '10-min book summary' }
      ],
      criticism: [
        { label: 'William Empson — Milton\'s God (Ch.1-2)', href: 'https://www.amazon.com/dp/0521299101', desc: 'Satan\'s heroism and God\'s responsibility', download: 'Paradise_Lost_Supplemental/Miltons%20God%20(William%20Empson)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).pdf' }
      ],
      text: [
        { label: 'Dartmouth Reading Room: Book II', href: 'https://milton.host.dartmouth.edu/reading_room/pl/book_2/text.shtml', desc: 'Annotated scholarly edition' }
      ],
      dore: [6, 10, 7, 51, 8, 9]
    },
    3: {
      lectures: [
        { label: 'Yale: Book III (Prof. John Rogers)', href: 'https://oyc.yale.edu/english/engl-220/lecture-13', desc: '"Hail holy Light", God & Son dialogue' },
        { label: 'Hillsdale: Lecture 3 (Prof. Stephen Smith)', href: 'https://online.hillsdale.edu/courses/promo/paradise-lost', desc: 'Christ' },
        { label: 'Course Hero: Book III Summary', href: 'https://www.youtube.com/playlist?list=PLs7fzoKfB1MgaCjsfAR6Ui2Jen0lM2-lK', desc: '10-min book summary' }
      ],
      criticism: [
        { label: 'William Empson — Milton\'s God (Ch.3)', href: 'https://www.amazon.com/dp/0521299101', desc: 'The uncomfortable God of Book III', download: 'Paradise_Lost_Supplemental/Miltons%20God%20(William%20Empson)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).pdf' },
        { label: 'Stanley Fish — Surprised by Sin (Ch.2)', href: 'https://www.amazon.com/dp/067485747X', desc: 'Reader response and divine justice', download: 'Paradise_Lost_Supplemental/Surprised%20by%20sin%20%20the%20reader%20in%20Paradise%20lost%20(Fish%2C%20Stanley%20Eugene)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).pdf' }
      ],
      text: [
        { label: 'Dartmouth Reading Room: Book III', href: 'https://milton.host.dartmouth.edu/reading_room/pl/book_3/text.shtml', desc: 'Annotated scholarly edition' }
      ],
      dore: [11, 12, 13, 14, 15]
    },
    4: {
      lectures: [
        { label: 'Yale: Books IV-V (Prof. John Rogers)', href: 'https://oyc.yale.edu/english/engl-220/lecture-14', desc: 'Satan\'s soliloquy, Eden described, Gabriel' },
        { label: 'Hillsdale: Lecture 4 (Prof. Stephen Smith)', href: 'https://online.hillsdale.edu/courses/promo/paradise-lost', desc: 'Eden' },
        { label: 'Course Hero: Book IV Summary', href: 'https://www.youtube.com/playlist?list=PLs7fzoKfB1MgaCjsfAR6Ui2Jen0lM2-lK', desc: '10-min book summary' }
      ],
      intros: [
        { label: 'Richard Strier (UChicago) — Paradise Lost', href: 'https://www.youtube.com/watch?v=K8bx72IV85g', desc: '78-min lecture covering the whole poem' }
      ],
      criticism: [
        { label: 'C.S. Lewis — A Preface to Paradise Lost (Ch.4-5)', href: 'https://www.amazon.com/dp/0195003454', desc: 'Eden and the hierarchy of being', download: 'Paradise_Lost_Supplemental/A%20Preface%20to%20Paradise%20Lost%20(C.%20S.%20Lewis)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).epub' },
        { label: 'Stanley Fish — Surprised by Sin (Ch.3)', href: 'https://www.amazon.com/dp/067485747X', desc: 'The reader\'s temptation', download: 'Paradise_Lost_Supplemental/Surprised%20by%20sin%20%20the%20reader%20in%20Paradise%20lost%20(Fish%2C%20Stanley%20Eugene)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).pdf' }
      ],
      text: [
        { label: 'Dartmouth Reading Room: Book IV', href: 'https://milton.host.dartmouth.edu/reading_room/pl/book_4/text.shtml', desc: 'Annotated scholarly edition' }
      ],
      dore: [16, 17, 18, 19, 49, 52]
    },
    5: {
      lectures: [
        { label: 'Yale: Books V-VI (Prof. John Rogers)', href: 'https://oyc.yale.edu/english/engl-220/lecture-15', desc: 'Eve\'s dream, Raphael\'s visit, Abdiel' },
        { label: 'Hillsdale: Lecture 5 (Prof. Stephen Smith)', href: 'https://online.hillsdale.edu/courses/promo/paradise-lost', desc: 'Raphael\'s Warning' },
        { label: 'Course Hero: Book V Summary', href: 'https://www.youtube.com/playlist?list=PLs7fzoKfB1MgaCjsfAR6Ui2Jen0lM2-lK', desc: '10-min book summary' }
      ],
      criticism: [
        { label: 'A.J.A. Waldock — Paradise Lost and Its Critics (Ch.2)', href: 'https://www.amazon.com/dp/0521091411', desc: 'The problem of epic heroism', download: 'Paradise_Lost_Supplemental/Paradise%20lost%20and%20its%20critics%20(Waldock%2C%20A.%20J.%20A.%20(Arthur%20John%20Alfred)%20etc.)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).pdf' }
      ],
      text: [
        { label: 'Dartmouth Reading Room: Book V', href: 'https://milton.host.dartmouth.edu/reading_room/pl/book_5/text.shtml', desc: 'Annotated scholarly edition' }
      ],
      dore: [20, 21, 22, 54, 24]
    },
    6: {
      lectures: [
        { label: 'Yale: Books V-VI (Prof. John Rogers)', href: 'https://oyc.yale.edu/english/engl-220/lecture-15', desc: 'War in Heaven, the Son\'s intervention' },
        { label: 'Hillsdale: Lecture 6 (Prof. Stephen Smith)', href: 'https://online.hillsdale.edu/courses/promo/paradise-lost', desc: 'The War in Heaven (Books 6-8)' },
        { label: 'Course Hero: Book VI Summary', href: 'https://www.youtube.com/playlist?list=PLs7fzoKfB1MgaCjsfAR6Ui2Jen0lM2-lK', desc: '10-min book summary' }
      ],
      criticism: [
        { label: 'William Empson — Milton\'s God (Ch.4)', href: 'https://www.amazon.com/dp/0521299101', desc: 'The War in Heaven as theological comedy', download: 'Paradise_Lost_Supplemental/Miltons%20God%20(William%20Empson)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).pdf' }
      ],
      text: [
        { label: 'Dartmouth Reading Room: Book VI', href: 'https://milton.host.dartmouth.edu/reading_room/pl/book_6/text.shtml', desc: 'Annotated scholarly edition' }
      ],
      dore: [23, 25, 26, 27, 55, 56, 57, 1, 28, 29, 30]
    },
    7: {
      lectures: [
        { label: 'Yale: Books VII-VIII (Prof. John Rogers)', href: 'https://oyc.yale.edu/english/engl-220/lecture-16', desc: 'Creation hymn, the six days' },
        { label: 'Hillsdale: Lecture 6 (Prof. Stephen Smith)', href: 'https://online.hillsdale.edu/courses/promo/paradise-lost', desc: 'The War in Heaven (includes Books 6-8)' },
        { label: 'Course Hero: Book VII Summary', href: 'https://www.youtube.com/playlist?list=PLs7fzoKfB1MgaCjsfAR6Ui2Jen0lM2-lK', desc: '10-min book summary' }
      ],
      criticism: [
        { label: 'C.S. Lewis — A Preface to Paradise Lost (Ch.6)', href: 'https://www.amazon.com/dp/0195003454', desc: 'Milton\'s cosmology and creation', download: 'Paradise_Lost_Supplemental/A%20Preface%20to%20Paradise%20Lost%20(C.%20S.%20Lewis)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).epub' },
        { label: 'St. Augustine — City of God', href: 'https://www.amazon.com/dp/0140448942', desc: 'Foundational theodicy for Milton\'s creation', download: 'Paradise_Lost_Supplemental/City%20of%20God%20(Penguin%20Classics)%20(St.%20Augustine%20%5BAugustine%2C%20St.%5D)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).epub' }
      ],
      text: [
        { label: 'Dartmouth Reading Room: Book VII', href: 'https://milton.host.dartmouth.edu/reading_room/pl/book_7/text.shtml', desc: 'Annotated scholarly edition' }
      ],
      dore: [31, 32, 33, 34, 35]
    },
    8: {
      lectures: [
        { label: 'Yale: Books VII-VIII (Prof. John Rogers)', href: 'https://oyc.yale.edu/english/engl-220/lecture-16', desc: 'Adam\'s questions, Raphael\'s farewell' },
        { label: 'Hillsdale: Lecture 6 (Prof. Stephen Smith)', href: 'https://online.hillsdale.edu/courses/promo/paradise-lost', desc: 'The War in Heaven (includes Books 6-8)' },
        { label: 'Course Hero: Book VIII Summary', href: 'https://www.youtube.com/playlist?list=PLs7fzoKfB1MgaCjsfAR6Ui2Jen0lM2-lK', desc: '10-min book summary' }
      ],
      criticism: [
        { label: 'Stanley Fish — Surprised by Sin (Ch.4)', href: 'https://www.amazon.com/dp/067485747X', desc: 'Adam\'s education and the reader', download: 'Paradise_Lost_Supplemental/Surprised%20by%20sin%20%20the%20reader%20in%20Paradise%20lost%20(Fish%2C%20Stanley%20Eugene)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).pdf' }
      ],
      text: [
        { label: 'Dartmouth Reading Room: Book VIII', href: 'https://milton.host.dartmouth.edu/reading_room/pl/book_8/text.shtml', desc: 'Annotated scholarly edition' }
      ],
      dore: [36, 37, 38, 39, 40]
    },
    9: {
      lectures: [
        { label: 'Yale: Book IX (Prof. John Rogers)', href: 'https://oyc.yale.edu/english/engl-220/lecture-17', desc: 'Invocation, Eve works apart, the Temptation' },
        { label: 'Yale: Books IX-X continued (Prof. John Rogers)', href: 'https://oyc.yale.edu/english/engl-220/lecture-18', desc: 'The Fall, shame and guilt' },
        { label: 'Hillsdale: Lecture 7 (Prof. Stephen Smith)', href: 'https://online.hillsdale.edu/courses/promo/paradise-lost', desc: 'The Fall (Book 9)' },
        { label: 'Course Hero: Book IX Summary', href: 'https://www.youtube.com/playlist?list=PLs7fzoKfB1MgaCjsfAR6Ui2Jen0lM2-lK', desc: '10-min book summary' }
      ],
      intros: [
        { label: 'Richard Strier (UChicago) — Paradise Lost', href: 'https://www.youtube.com/watch?v=K8bx72IV85g', desc: '78-min lecture covering the whole poem' }
      ],
      criticism: [
        { label: 'Stanley Fish — Surprised by Sin (Ch.5-6)', href: 'https://www.amazon.com/dp/067485747X', desc: 'The Fall as trap for the reader', download: 'Paradise_Lost_Supplemental/Surprised%20by%20sin%20%20the%20reader%20in%20Paradise%20lost%20(Fish%2C%20Stanley%20Eugene)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).pdf' },
        { label: 'William Empson — Milton\'s God (Ch.5)', href: 'https://www.amazon.com/dp/0521299101', desc: 'The Garden and the Fall', download: 'Paradise_Lost_Supplemental/Miltons%20God%20(William%20Empson)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).pdf' },
        { label: 'C.S. Lewis — A Preface to Paradise Lost (Ch.7)', href: 'https://www.amazon.com/dp/0195003454', desc: 'The Fall and Adam\'s choice', download: 'Paradise_Lost_Supplemental/A%20Preface%20to%20Paradise%20Lost%20(C.%20S.%20Lewis)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).epub' }
      ],
      text: [
        { label: 'Dartmouth Reading Room: Book IX', href: 'https://milton.host.dartmouth.edu/reading_room/pl/book_9/text.shtml', desc: 'Annotated scholarly edition' }
      ],
      dore: [41, 42, 43, 44, 45]
    },
    10: {
      lectures: [
        { label: 'Yale: Books XI-XII (Prof. John Rogers)', href: 'https://oyc.yale.edu/english/engl-220/lecture-19', desc: 'God\'s judgment, Adam\'s lament, Eve\'s repentance' },
        { label: 'Yale: Books XI-XII continued (Prof. John Rogers)', href: 'https://oyc.yale.edu/english/engl-220/lecture-20', desc: 'Michael\'s prophecy, departure from Eden' },
        { label: 'Hillsdale: Lecture 8 (Prof. Stephen Smith)', href: 'https://online.hillsdale.edu/courses/promo/paradise-lost', desc: 'Punishment and Repentance (Book 10 pt 1)' },
        { label: 'Hillsdale: Lecture 9 (Prof. Stephen Smith)', href: 'https://online.hillsdale.edu/courses/promo/paradise-lost', desc: 'The Beginning (Books 11-12)' },
        { label: 'Course Hero: Book X Summary', href: 'https://www.youtube.com/playlist?list=PLs7fzoKfB1MgaCjsfAR6Ui2Jen0lM2-lK', desc: '10-min book summary' }
      ],
      intros: [
        { label: 'Richard Strier (UChicago) — Paradise Lost', href: 'https://www.youtube.com/watch?v=K8bx72IV85g', desc: '78-min lecture covering the whole poem' }
      ],
      criticism: [
        { label: 'A.J.A. Waldock — Paradise Lost and Its Critics (Ch.3)', href: 'https://www.amazon.com/dp/0521091411', desc: 'The ending and the problem of closure', download: 'Paradise_Lost_Supplemental/Paradise%20lost%20and%20its%20critics%20(Waldock%2C%20A.%20J.%20A.%20(Arthur%20John%20Alfred)%20etc.)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).pdf' },
        { label: 'Stanley Fish — Surprised by Sin (Ch.7)', href: 'https://www.amazon.com/dp/067485747X', desc: 'The reader\'s final correction', download: 'Paradise_Lost_Supplemental/Surprised%20by%20sin%20%20the%20reader%20in%20Paradise%20lost%20(Fish%2C%20Stanley%20Eugene)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).pdf' }
      ],
      text: [
        { label: 'Dartmouth Reading Room: Book X', href: 'https://milton.host.dartmouth.edu/reading_room/pl/book_10/text.shtml', desc: 'Annotated scholarly edition' }
      ],
      dore: [46, 47, 48, 50]
    }
  };

  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebarPanel = document.getElementById('sidebarPanel');
  const sidebarBody = document.getElementById('sidebarBody');
  const sidebarBook = document.getElementById('sidebarBook');
  const sidebarClose = document.getElementById('sidebarClose');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');

  function openSidebar() {
    sidebarPanel.classList.add('open');
    document.body.classList.add('sidebar-open');
  }

  function closeSidebar() {
    sidebarPanel.classList.remove('open');
    document.body.classList.remove('sidebar-open');
  }

  function toggleSidebar() {
    if (sidebarPanel.classList.contains('open')) closeSidebar(); else openSidebar();
  }

  function changeBook(bookNum) {
    if (bookNum < 1 || bookNum > 10) return;
    bookSelect.value = bookNum;
    renderLines(bookNum);
    renderSidebar(bookNum);
    window.scrollTo({ top: document.querySelector('.read-header').offsetTop, behavior: 'smooth' });
  }

  const sidebarResources = document.getElementById('sidebarResources');

  function renderSidebar(bookNum) {
    const data = sidebarBookResources[bookNum];
    const roman = romanNumerals[bookNum - 1];
    sidebarBook.textContent = 'Book ' + roman;

    let html = '';

    if (!data) {
      html = '<div class="sidebar-empty">No resources available for this book yet.</div>';
      sidebarResources.innerHTML = html;
      return;
    }

    const renderLink = function(item, icon) {
      return '<a href="' + item.href + '" target="_blank" rel="noopener noreferrer" class="sidebar-card">' +
        '<span class="sidebar-card-icon">' + icon + '</span>' +
        '<span class="sidebar-card-body">' +
          '<span class="sidebar-card-label">' + item.label + '</span>' +
          (item.desc ? '<span class="sidebar-card-desc">' + item.desc + '</span>' : '') +
        '</span>' +
        '<span class="sidebar-card-action">\u2192</span>' +
      '</a>';
    };

    const renderDownload = function(path) {
      return DOWNLOAD_BASE + path;
    };

    if (data.intros && data.intros.length) {
      html += '<div class="sidebar-section">';
      html += '<div class="sidebar-section-title">\uD83C\uDFA5 Overview</div>';
      data.intros.forEach(function(item) {
        html += renderLink(item, '\uD83C\uDFA5');
      });
      html += '</div>';
    }

    if (data.lectures && data.lectures.length) {
      html += '<div class="sidebar-section">';
      html += '<div class="sidebar-section-title">\uD83C\uDFAC Lectures</div>';
      data.lectures.forEach(function(item) {
        html += renderLink(item, '\uD83C\uDFAC');
      });
      html += '</div>';
    }

    if (data.criticism && data.criticism.length) {
      html += '<div class="sidebar-section">';
      html += '<div class="sidebar-section-title">\uD83D\uDCD6 Criticism</div>';
      data.criticism.forEach(function(item) {
        html += '<div class="sidebar-card sidebar-card-stack">' +
          '<span class="sidebar-card-icon">\uD83D\uDCD6</span>' +
          '<span class="sidebar-card-body">' +
            '<span class="sidebar-card-label">' + item.label + '</span>' +
            (item.desc ? '<span class="sidebar-card-desc">' + item.desc + '</span>' : '') +
          '</span>' +
          '<span class="sidebar-card-actions">' +
            '<a href="' + item.href + '" target="_blank" rel="noopener noreferrer" class="sidebar-card-btn" title="Buy on Amazon">\uD83D\uDED2</a>' +
            (item.download ? '<a href="' + renderDownload(item.download) + '" class="sidebar-card-btn" title="Download" download>\u2B07</a>' : '') +
          '</span>' +
        '</div>';
      });
      html += '</div>';
    }

    if (data.text && data.text.length) {
      html += '<div class="sidebar-section">';
      html += '<div class="sidebar-section-title">\uD83D\uDCC4 Text</div>';
      data.text.forEach(function(item) {
        html += renderLink(item, '\uD83D\uDCC4');
      });
      html += '</div>';
    }

    if (data.bible && data.bible.length) {
      html += '<div class="sidebar-section">';
      html += '<div class="sidebar-section-title">\u271D\uFE0F Bible</div>';
      data.bible.forEach(function(item) {
        html += renderLink(item, '\u271D\uFE0F');
      });
      html += '</div>';
    }

    if (data.dore && data.dore.length) {
      html += '<div class="sidebar-section">';
      html += '<div class="sidebar-section-title">\uD83D\uDDBC Illustrations</div>';
      data.dore.forEach(function(id) {
        var plate = DORE.get(id);
        if (!plate) return;
        html += '<button type="button" class="sidebar-card sidebar-card-btn-full" onclick="openLightbox(\'' + DORE.path(plate.file) + '\',\'' + plate.label.replace(/'/g, "\\'") + '\',\'' + plate.caption.replace(/'/g, "\\'") + '\')">' +
          '<span class="sidebar-card-icon">\uD83D\uDDBC</span>' +
          '<span class="sidebar-card-body">' +
            '<span class="sidebar-card-label">' + plate.label + '</span>' +
            '<span class="sidebar-card-desc">' + plate.caption + '</span>' +
          '</span>' +
          '<span class="sidebar-card-action">\uD83D\uDD0D</span>' +
        '</button>';
      });
      html += '</div>';
    }

    sidebarResources.innerHTML = html;
  }

  sidebarToggle.addEventListener('click', function() {
    const isOpen = sidebarPanel.classList.contains('open');
    if (isOpen) closeSidebar(); else openSidebar();
  });
  sidebarClose.addEventListener('click', closeSidebar);
  sidebarBackdrop.addEventListener('click', closeSidebar);

  const gotoLineInput = document.getElementById('gotoLineInput');

  let showLineNumbers = true;
  let fontSizeIndex = 1;
  const fontSizes = ['1rem', '1.15rem', '1.3rem'];
  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

  function renderIllustrations(bookNum) {
    const images = DORE.getByBook(bookNum);
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
    const plates = DORE.getByBook(bookNum);
    const plateStops = plates.length > 0
      ? plates.map((plate, idx) => ({
          plate,
          after: Math.max(1, Math.round(((idx + 1) * lines.length) / (plates.length + 1)))
        }))
      : [];
    let plateIndex = 0;
    const nextPlateAfter = () => plateStops[plateIndex] ? plateStops[plateIndex].after : null;

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

      while (nextPlateAfter() !== null && displayNum >= nextPlateAfter()) {
        const plate = plateStops[plateIndex].plate;
        if (plate) {
          html += '<figure class="read-inline-plate">';
          html += '<button class="read-inline-plate-link" type="button" onclick="openLightbox(\'' + DORE.path(plate.file) + '\',\'' + plate.label.replace(/'/g, "\\'") + '\',\'' + plate.caption.replace(/'/g, "\\'") + '\')">';
          html += '<img src="' + DORE.path(plate.file) + '" alt="' + plate.label + '" loading="lazy">';
          html += '</button>';
          html += '<figcaption>';
          html += '<div class="read-inline-plate-label">' + plate.label + '</div>';
          html += '<div class="read-inline-plate-caption">' + plate.caption + '</div>';
          html += '</figcaption>';
          html += '</figure>';
        }
        plateIndex++;
      }
    }

    poemContainer.innerHTML = html;
    updateLineNumberVisibility();
    updateFontSize();
    if (typeof Sidebar !== 'undefined') Sidebar.init(bookNum);
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

  function saveReadingPosition() {
    try {
      var lines = document.querySelectorAll('.read-line-number');
      if (!lines.length) return;
      var viewTop = window.scrollY + 100;
      var closest = null;
      var closestDist = Infinity;
      lines.forEach(function(el) {
        var rect = el.getBoundingClientRect();
        var top = rect.top + window.scrollY;
        var dist = Math.abs(top - viewTop);
        if (dist < closestDist) { closestDist = dist; closest = el; }
      });
      if (closest) {
        var ln = parseInt(closest.dataset.ln);
        sessionStorage.setItem('pl_position', JSON.stringify({ book: parseInt(bookSelect.value), line: ln }));
      }
    } catch(e) {}
  }

  function showResumePrompt() {
    var data;
    try { data = JSON.parse(sessionStorage.getItem('pl_position')); } catch(e) {}
    if (!data) return;
    var currentBook = parseInt(bookSelect.value);
    if (data.book === currentBook && data.line) {
      var banner = document.createElement('div');
      banner.className = 'resume-banner';
      banner.innerHTML =
        '<span>Resume at line <strong>' + data.line + '</strong>?</span>' +
        '<button class="btn btn-secondary resume-btn" style="padding:6px 14px;font-size:0.72rem;">Go there</button>' +
        '<button class="resume-dismiss">&times;</button>';
      var content = document.querySelector('.read-content');
      content.insertBefore(banner, content.firstChild);
      banner.querySelector('.resume-btn').addEventListener('click', function() {
        scrollToLine(data.line);
        banner.remove();
      });
      banner.querySelector('.resume-dismiss').addEventListener('click', function() {
        banner.remove();
      });
    }
  }

  function scrollToLine(lineNum) {
    if (typeof Sidebar !== 'undefined' && Sidebar.scrollToLine) {
      Sidebar.scrollToLine(lineNum);
      return;
    }
    var target = document.querySelector('.read-line-number[data-ln="' + lineNum + '"]');
    if (!target) return;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
    target.closest('.read-line').classList.add('read-line-highlight');
    setTimeout(function() {
      var hl = document.querySelector('.read-line-highlight');
      if (hl) hl.classList.remove('read-line-highlight');
    }, 2000);
  }

  bookSelect.addEventListener('change', function() {
    changeBook(parseInt(this.value));
  });

  toggleLineNumbersBtn.addEventListener('click', function() {
    showLineNumbers = !showLineNumbers;
    updateLineNumberVisibility();
    this.style.opacity = showLineNumbers ? '1' : '0.5';
  });

  gotoLineInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      var ln = parseInt(this.value);
      if (ln > 0) scrollToLine(ln);
    }
  });

  toggleFontSizeBtn.addEventListener('click', function() {
    fontSizeIndex = (fontSizeIndex + 1) % fontSizes.length;
    updateFontSize();
  });

  document.addEventListener('keydown', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;
    switch (e.key) {
      case 's':
        e.preventDefault();
        toggleSidebar();
        break;
      case 'Escape':
        if (sidebarPanel.classList.contains('open')) closeSidebar();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        changeBook(parseInt(bookSelect.value) - 1);
        break;
      case 'ArrowRight':
        e.preventDefault();
        changeBook(parseInt(bookSelect.value) + 1);
        break;
      case 'n':
        e.preventDefault();
        if (typeof Sidebar !== 'undefined') {
          var passages = Sidebar.getPassageData ? Sidebar.getPassageData()[parseInt(bookSelect.value)] : null;
          var idx = Sidebar.getCurrentPassageIdx ? Sidebar.getCurrentPassageIdx() : -1;
          if (passages && idx >= 0 && idx < passages.length - 1) {
            scrollToLine(passages[idx + 1].startLine);
          }
        }
        break;
    }
  });

  var scrollTimer;
  window.addEventListener('scroll', function() {
    if (scrollTimer) clearTimeout(scrollTimer);
    scrollTimer = setTimeout(saveReadingPosition, 400);
  }, { passive: true });

  renderLines(1);
  renderSidebar(1);
  showResumePrompt();
})();
