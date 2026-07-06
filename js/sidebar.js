var Sidebar = (function() {
  var passageData = {
    1: [
      { startLine: 1, endLine: 26, label: "The Invocation",
        resources: { lectures: [{ label: "Yale: Invocation", href: "https://oyc.yale.edu/english/engl-220/lecture-9", desc: "At 0:00 — Milton's epic invocation" }], dore: [53], criticism: [{ label: "C.S. Lewis — Preface (Ch.1)", href: "https://www.amazon.com/dp/0195003454", desc: "Epic intention and Milton's ambition" }], bible: [{ label: "Genesis 1:1-3", href: "https://www.biblegateway.com/passage/?search=Genesis+1", desc: "Biblical creation account" }] } },
      { startLine: 27, endLine: 83, label: "Satan's First Speech",
        resources: { lectures: [{ label: "Yale: Satan's Speech", href: "https://oyc.yale.edu/english/engl-220/lecture-9", desc: "At 5:00 — Satan on the burning lake" }], dore: [4], criticism: [{ label: "C.S. Lewis — Preface (Ch.2)", href: "https://www.amazon.com/dp/0195003454", desc: "Satan's rhetorical power" }] } },
      { startLine: 84, endLine: 124, label: '"Better to Reign in Hell"',
        resources: { lectures: [{ label: "Yale: Better to Reign", href: "https://oyc.yale.edu/english/engl-220/lecture-9", desc: "At 12:00 — Satan's famous declaration" }], dore: [53], criticism: [{ label: "C.S. Lewis — Preface (Ch.2)", href: "https://www.amazon.com/dp/0195003454", desc: "Satan as tragic hero" }, { label: "S. Fish — Surprised by Sin (Ch.1)", href: "https://www.amazon.com/dp/067485747X", desc: "Reader's entanglement with Satan" }] } },
      { startLine: 125, endLine: 191, label: "Satan Rallies His Legions",
        resources: { lectures: [{ label: "Yale: Rallies Legions", href: "https://oyc.yale.edu/english/engl-220/lecture-9", desc: "At 18:00 — The fallen host arises" }], dore: [5] } },
      { startLine: 192, endLine: 375, label: "Catalog of Fallen Gods",
        resources: { lectures: [{ label: "Yale: Fallen Gods", href: "https://oyc.yale.edu/english/engl-220/lecture-9", desc: "At 25:00 — Moloch, Chemos, and others" }] } },
      { startLine: 376, endLine: 522, label: "Building Pandemonium",
        resources: { lectures: [{ label: "Yale: Pandemonium", href: "https://oyc.yale.edu/english/engl-220/lecture-9", desc: "At 32:00 — The infernal palace rises" }], dore: [3] } },
      { startLine: 523, endLine: 669, label: "The Infernal Council",
        resources: { lectures: [{ label: "Yale: Council", href: "https://oyc.yale.edu/english/engl-220/lecture-9", desc: "At 38:00 — Satan enthroned" }], dore: [2] } },
      { startLine: 670, endLine: 822, label: "End of Book I",
        resources: { lectures: [{ label: "Yale: End of Book I", href: "https://oyc.yale.edu/english/engl-220/lecture-9", desc: "At 42:00 — Closing of Book I" }] } }
    ],
    2: [
      { startLine: 1, endLine: 55, label: "Satan Enthroned",
        resources: { lectures: [{ label: "Yale: Satan Enthroned", href: "https://oyc.yale.edu/english/engl-220/lecture-10", desc: "At 0:00 — High on a throne of royal state" }], dore: [6] } },
      { startLine: 56, endLine: 228, label: "Moloch, Belial, Mammon Debate",
        resources: { lectures: [{ label: "Yale: The Debate", href: "https://oyc.yale.edu/english/engl-220/lecture-10", desc: "At 5:00 — Moloch, Belial, Mammon" }], criticism: [{ label: "Empson — Milton's God (Ch.1-2)", href: "https://www.amazon.com/dp/0521299101", desc: "Satan's heroism debated" }] } },
      { startLine: 229, endLine: 409, label: "Beelzebub's Proposal",
        resources: { lectures: [{ label: "Yale: Beelzebub", href: "https://oyc.yale.edu/english/engl-220/lecture-10", desc: "At 15:00 — Corrupt God's new creation" }], dore: [10] } },
      { startLine: 410, endLine: 473, label: "Satan Volunteers",
        resources: { lectures: [{ label: "Yale: Satan Volunteers", href: "https://oyc.yale.edu/english/engl-220/lecture-10", desc: "At 22:00 — Satan undertakes the journey" }] } },
      { startLine: 474, endLine: 566, label: "Sin and Death",
        resources: { lectures: [{ label: "Yale: Sin and Death", href: "https://oyc.yale.edu/english/engl-220/lecture-10", desc: "At 28:00 — The gatekeepers of Hell" }], dore: [7, 51] } },
      { startLine: 567, endLine: 683, label: "Journey Through Chaos",
        resources: { lectures: [{ label: "Yale: Chaos", href: "https://oyc.yale.edu/english/engl-220/lecture-10", desc: "At 35:00 — The wasteful Deep" }], dore: [8, 9] } },
      { startLine: 684, endLine: 1056, label: "End of Book II",
        resources: { lectures: [{ label: "Yale: End of Book II", href: "https://oyc.yale.edu/english/engl-220/lecture-10", desc: "At 42:00 — Closing of Book II" }] } }
    ],
    3: [
      { startLine: 1, endLine: 55, label: '"Hail, Holy Light"',
        resources: { lectures: [{ label: "Yale: Hail Holy Light", href: "https://oyc.yale.edu/english/engl-220/lecture-13", desc: "At 0:00 — Milton's invocation to light" }], dore: [11] } },
      { startLine: 56, endLine: 266, label: "God and the Son Dialogue",
        resources: { lectures: [{ label: "Yale: God & Son", href: "https://oyc.yale.edu/english/engl-220/lecture-13", desc: "At 5:00 — Foreknowledge and the Fall" }], criticism: [{ label: "Empson — Milton's God (Ch.3)", href: "https://www.amazon.com/dp/0521299101", desc: "The uncomfortable God" }] } },
      { startLine: 267, endLine: 343, label: "The Son Offers Himself",
        resources: { lectures: [{ label: "Yale: Son's Offer", href: "https://oyc.yale.edu/english/engl-220/lecture-13", desc: "At 20:00 — I for his sake will leave Thy bosom" }] } },
      { startLine: 344, endLine: 409, label: "Satan's Journey Through the Universe",
        resources: { lectures: [{ label: "Yale: Satan's Journey", href: "https://oyc.yale.edu/english/engl-220/lecture-13", desc: "At 28:00 — Satan traverses the cosmos" }] } },
      { startLine: 410, endLine: 742, label: "Satan on the Sun",
        resources: { lectures: [{ label: "Yale: Satan on Sun", href: "https://oyc.yale.edu/english/engl-220/lecture-13", desc: "At 35:00 — Disguised as a cherub" }], dore: [12, 13, 14, 15] } }
    ],
    4: [
      { startLine: 1, endLine: 130, label: "Satan's Soliloquy",
        resources: { lectures: [{ label: "Yale: Satan's Soliloquy", href: "https://oyc.yale.edu/english/engl-220/lecture-14", desc: "At 0:00 — Me miserable!" }], dore: [52] } },
      { startLine: 131, endLine: 286, label: "Satan in Eden",
        resources: { lectures: [{ label: "Yale: Satan in Eden", href: "https://oyc.yale.edu/english/engl-220/lecture-14", desc: "At 5:00 — One greater Man" }], dore: [16] } },
      { startLine: 287, endLine: 355, label: "Adam and Eve Described",
        resources: { lectures: [{ label: "Yale: Adam & Eve", href: "https://oyc.yale.edu/english/engl-220/lecture-14", desc: "At 12:00 — Two of far nobler shape" }], dore: [17, 18] } },
      { startLine: 356, endLine: 511, label: "Adam and Eve's Dialogue",
        resources: { lectures: [{ label: "Yale: Their Dialogue", href: "https://oyc.yale.edu/english/engl-220/lecture-14", desc: "At 20:00 — In naked majesty" }] } },
      { startLine: 512, endLine: 775, label: "Gabriel's Guard",
        resources: { lectures: [{ label: "Yale: Gabriel's Guard", href: "https://oyc.yale.edu/english/engl-220/lecture-14", desc: "At 30:00 — The angelic watch" }], dore: [49] } },
      { startLine: 776, endLine: 1015, label: "Confrontation at Eden's Gate",
        resources: { lectures: [{ label: "Yale: Confrontation", href: "https://oyc.yale.edu/english/engl-220/lecture-14", desc: "At 38:00 — Gabriel vs. Satan" }] } }
    ],
    5: [
      { startLine: 1, endLine: 93, label: "Eve's Dream",
        resources: { lectures: [{ label: "Yale: Eve's Dream", href: "https://oyc.yale.edu/english/engl-220/lecture-15", desc: "At 0:00 — Why sleep'st thou, Eve?" }], dore: [21] } },
      { startLine: 94, endLine: 247, label: "Morning Prayer and Raphael's Arrival",
        resources: { lectures: [{ label: "Yale: Raphael Arrives", href: "https://oyc.yale.edu/english/engl-220/lecture-15", desc: "At 8:00 — The sociable Spirit descends" }], dore: [22] } },
      { startLine: 248, endLine: 433, label: "Raphael's Warning",
        resources: { lectures: [{ label: "Yale: Raphael's Warning", href: "https://oyc.yale.edu/english/engl-220/lecture-15", desc: "At 20:00 — Take heed lest passion sway" }], dore: [20], criticism: [{ label: "Waldock — PL and Its Critics (Ch.2)", href: "https://www.amazon.com/dp/0521091411", desc: "The problem of epic heroism" }] } },
      { startLine: 434, endLine: 907, label: "Abdiel's Defiance",
        resources: { lectures: [{ label: "Yale: Abdiel", href: "https://oyc.yale.edu/english/engl-220/lecture-15", desc: "At 35:00 — Among the faithless, faithful only he" }], dore: [54] } }
    ],
    6: [
      { startLine: 1, endLine: 196, label: "First Day of Battle",
        resources: { lectures: [{ label: "Yale: War in Heaven", href: "https://oyc.yale.edu/english/engl-220/lecture-15", desc: "At 45:00 — The dire artillery" }], dore: [26, 27, 55] } },
      { startLine: 197, endLine: 391, label: "Second Day: Artillery",
        resources: { lectures: [{ label: "Yale: Artillery", href: "https://oyc.yale.edu/english/engl-220/lecture-15", desc: "At 55:00 — The rebel's cannons" }], dore: [56] } },
      { startLine: 392, endLine: 528, label: "Third Day: The Son Rides Forth",
        resources: { lectures: [{ label: "Yale: The Son", href: "https://oyc.yale.edu/english/engl-220/lecture-15", desc: "At 62:00 — The Messiah's chariot" }], dore: [28, 30, 57] } },
      { startLine: 529, endLine: 918, label: "Rebels Routed",
        resources: { lectures: [{ label: "Yale: Rout", href: "https://oyc.yale.edu/english/engl-220/lecture-15", desc: "At 70:00 — They astonish'd all resistance lost" }], dore: [29, 1] } }
    ],
    7: [
      { startLine: 1, endLine: 39, label: "Urania Invocation",
        resources: { lectures: [{ label: "Yale: Urania", href: "https://oyc.yale.edu/english/engl-220/lecture-16", desc: "At 0:00 — Descend from Heav'n, Urania" }] } },
      { startLine: 40, endLine: 132, label: "Raphael Narrates Creation",
        resources: { lectures: [{ label: "Yale: Creation Begins", href: "https://oyc.yale.edu/english/engl-220/lecture-16", desc: "At 5:00 — The six days" }], criticism: [{ label: "C.S. Lewis — Preface (Ch.6)", href: "https://www.amazon.com/dp/0195003454", desc: "Milton's cosmology" }] } },
      { startLine: 133, endLine: 302, label: "Creation: Days 1-3",
        resources: { lectures: [{ label: "Yale: Days 1-3", href: "https://oyc.yale.edu/english/engl-220/lecture-16", desc: "At 5:00 — Let there be Light" }], dore: [31, 32, 33] } },
      { startLine: 303, endLine: 640, label: "Creation: Days 4-6",
        resources: { lectures: [{ label: "Yale: Days 4-6", href: "https://oyc.yale.edu/english/engl-220/lecture-16", desc: "At 15:00 — Fish and fowl, beasts and man" }], dore: [34, 35], criticism: [{ label: "St. Augustine — City of God", href: "https://www.amazon.com/dp/0140448942", desc: "Theodicy and creation" }] } }
    ],
    8: [
      { startLine: 1, endLine: 178, label: "Adam Questions the Cosmos",
        resources: { lectures: [{ label: "Yale: Adam's Questions", href: "https://oyc.yale.edu/english/engl-220/lecture-16", desc: "At 25:00 — Thus Adam meekly replied" }], dore: [37], criticism: [{ label: "S. Fish — Surprised by Sin (Ch.4)", href: "https://www.amazon.com/dp/067485747X", desc: "Adam's education" }] } },
      { startLine: 179, endLine: 297, label: "Raphael on Astronomy",
        resources: { lectures: [{ label: "Yale: Astronomy", href: "https://oyc.yale.edu/english/engl-220/lecture-16", desc: "At 35:00 — The earth's wide bounds" }] } },
      { startLine: 298, endLine: 451, label: "Adam Tells of His Creation",
        resources: { lectures: [{ label: "Yale: Adam's Creation", href: "https://oyc.yale.edu/english/engl-220/lecture-16", desc: "At 42:00 — When I behold this goodly frame" }], dore: [38] } },
      { startLine: 452, endLine: 653, label: "Adam and Eve's Union",
        resources: { lectures: [{ label: "Yale: Their Union", href: "https://oyc.yale.edu/english/engl-220/lecture-16", desc: "At 50:00 — Part of my soul I seek thee" }], dore: [39, 40] } }
    ],
    9: [
      { startLine: 1, endLine: 47, label: "Invocation to Book IX",
        resources: { lectures: [{ label: "Yale: Book IX Invocation", href: "https://oyc.yale.edu/english/engl-220/lecture-17", desc: "At 0:00 — No more of talk" }] } },
      { startLine: 48, endLine: 191, label: "Satan Approaches Eden",
        resources: { lectures: [{ label: "Yale: Satan Returns", href: "https://oyc.yale.edu/english/engl-220/lecture-17", desc: "At 5:00 — The serpent subtlest beast" }], dore: [41] } },
      { startLine: 192, endLine: 384, label: "Eve Works Apart",
        resources: { lectures: [{ label: "Yale: Eve Works Apart", href: "https://oyc.yale.edu/english/engl-220/lecture-17", desc: "At 15:00 — The separation" }] } },
      { startLine: 385, endLine: 493, label: "Adam and Eve Separate",
        resources: { lectures: [{ label: "Yale: They Separate", href: "https://oyc.yale.edu/english/engl-220/lecture-17", desc: "At 25:00 — Adam's fateful consent" }] } },
      { startLine: 494, endLine: 613, label: "The Serpent Tempts Eve",
        resources: { lectures: [{ label: "Yale: Temptation", href: "https://oyc.yale.edu/english/engl-220/lecture-17", desc: "At 32:00 — The Tempter's rhetoric" }], dore: [43] } },
      { startLine: 614, endLine: 655, label: "Eve Eats the Fruit",
        resources: { lectures: [{ label: "Yale: Eve Eats", href: "https://oyc.yale.edu/english/engl-220/lecture-17", desc: "At 40:00 — Her rash hand in evil hour" }], dore: [42] } },
      { startLine: 656, endLine: 833, label: "Eve Tempts Adam",
        resources: { lectures: [{ label: "Yale: Eve Tempts Adam", href: "https://oyc.yale.edu/english/engl-220/lecture-17", desc: "At 45:00 — Adam's choice" }] } },
      { startLine: 834, endLine: 889, label: "Adam Eats",
        resources: { lectures: [{ label: "Yale: Adam Eats", href: "https://oyc.yale.edu/english/engl-220/lecture-17", desc: "At 52:00 — He scrupled not to eat" }], dore: [44] } },
      { startLine: 890, endLine: 1189, label: "Shame and Guilt",
        resources: { lectures: [{ label: "Yale: Shame", href: "https://oyc.yale.edu/english/engl-220/lecture-18", desc: "At 0:00 — They sat them down to weep" }], dore: [45], criticism: [{ label: "S. Fish — Surprised by Sin (Ch.5-6)", href: "https://www.amazon.com/dp/067485747X", desc: "The Fall as trap for reader" }, { label: "Empson — Milton's God (Ch.5)", href: "https://www.amazon.com/dp/0521299101", desc: "The Garden and Fall" }, { label: "C.S. Lewis — Preface (Ch.7)", href: "https://www.amazon.com/dp/0195003454", desc: "The Fall and Adam's choice" }] } }
    ],
    10: [
      { startLine: 1, endLine: 228, label: "God's Judgment",
        resources: { lectures: [{ label: "Yale: Judgment", href: "https://oyc.yale.edu/english/engl-220/lecture-19", desc: "At 0:00 — God pronounces judgment" }] } },
      { startLine: 229, endLine: 312, label: "The Son Judges Adam and Eve",
        resources: { lectures: [{ label: "Yale: Son Judges", href: "https://oyc.yale.edu/english/engl-220/lecture-19", desc: "At 8:00 — The Son, judge of mankind" }], dore: [46] } },
      { startLine: 313, endLine: 409, label: "Sin and Death Approach",
        resources: { lectures: [{ label: "Yale: Sin and Death", href: "https://oyc.yale.edu/english/engl-220/lecture-19", desc: "At 18:00 — Sin and Death build a bridge" }], dore: [47] } },
      { startLine: 410, endLine: 577, label: "Satan Returns to Hell",
        resources: { lectures: [{ label: "Yale: Satan's Return", href: "https://oyc.yale.edu/english/engl-220/lecture-19", desc: "At 28:00 — The fallen angels' punishment" }] } },
      { startLine: 578, endLine: 720, label: "Adam Laments",
        resources: { lectures: [{ label: "Yale: Adam's Lament", href: "https://oyc.yale.edu/english/engl-220/lecture-19", desc: "At 35:00 — Adam's despair" }] } },
      { startLine: 721, endLine: 863, label: "Eve Repents",
        resources: { lectures: [{ label: "Yale: Eve's Repentance", href: "https://oyc.yale.edu/english/engl-220/lecture-19", desc: "At 45:00 — Eve's humble submission" }] } },
      { startLine: 864, endLine: 1097, label: "Reconciliation",
        resources: { lectures: [{ label: "Yale: Reconciliation", href: "https://oyc.yale.edu/english/engl-220/lecture-19", desc: "At 55:00 — Adam and Eve reconciled" }] } },
      { startLine: 1098, endLine: 1540, label: "Michael's Prophecy and Expulsion",
        resources: { lectures: [{ label: "Yale: Michael's Prophecy", href: "https://oyc.yale.edu/english/engl-220/lecture-20", desc: "At 0:00 — The vision of history" }], dore: [48, 50], criticism: [{ label: "Waldock — PL and Its Critics (Ch.3)", href: "https://www.amazon.com/dp/0521091411", desc: "The ending and closure" }, { label: "S. Fish — Surprised by Sin (Ch.7)", href: "https://www.amazon.com/dp/067485747X", desc: "The reader's final correction" }] } }
    ]
  };

  var currentBook = null;
  var currentPassageIdx = null;
  var observer = null;
  var updateTimer = null;

  function init(bookNum) {
    currentBook = bookNum;
    currentPassageIdx = null;
    var passageEl = document.getElementById('sidebarPassage');
    if (passageEl) passageEl.innerHTML = '';
    if (observer) observer.disconnect();
    renderBookmarks();
    setupObserver();
  }

  function setupObserver() {
    var lines = document.querySelectorAll('.read-line-number');
    if (!lines.length) return;

    observer = new IntersectionObserver(function(entries) {
      var visible = [];
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          visible.push(entries[i]);
        }
      }
      if (!visible.length) return;

      var minLn = Infinity;
      for (var j = 0; j < visible.length; j++) {
        var ln = parseInt(visible[j].target.dataset.ln);
        if (ln < minLn) minLn = ln;
      }

      if (updateTimer) clearTimeout(updateTimer);
      updateTimer = setTimeout(function() {
        updateForLine(minLn);
      }, 80);
    }, {
      rootMargin: '-15% 0px -15% 0px'
    });

    for (var k = 0; k < lines.length; k++) {
      observer.observe(lines[k]);
    }
  }

  function updateForLine(lineNum) {
    if (!currentBook) return;
    var passages = passageData[currentBook];
    if (!passages) return;

    var idx = -1;
    for (var i = 0; i < passages.length; i++) {
      if (lineNum >= passages[i].startLine && lineNum <= passages[i].endLine) {
        idx = i;
        break;
      }
    }

    if (idx === -1) {
      var minDist = Infinity;
      for (var j = 0; j < passages.length; j++) {
        var dist = Math.abs(lineNum - passages[j].startLine);
        if (dist < minDist) {
          minDist = dist;
          idx = j;
        }
      }
    }

    if (idx !== currentPassageIdx && idx >= 0) {
      currentPassageIdx = idx;
      renderPassage(passages[idx]);
    }
  }

  function renderPassage(passage) {
    var el = document.getElementById('sidebarPassage');
    if (!el) return;
    el.innerHTML = buildPassageHTML(passage);
  }

  function getBookmarkKey(passage) {
    return 'pl_bm_' + currentBook + '_' + passage.startLine;
  }

  function isBookmarked(passage) {
    try { return localStorage.getItem(getBookmarkKey(passage)) !== null; } catch(e) { return false; }
  }

  function toggleBookmark(passage) {
    var key = getBookmarkKey(passage);
    try {
      if (isBookmarked(passage)) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify({
          book: currentBook,
          startLine: passage.startLine,
          endLine: passage.endLine,
          label: passage.label
        }));
      }
    } catch(e) {}
    renderPassage(passage);
    renderBookmarks();
  }

  function renderBookmarks() {
    var el = document.getElementById('sidebarBookmarks');
    if (!el) return;
    var html = '';
    try {
      var keys = Object.keys(localStorage).filter(function(k) { return k.indexOf('pl_bm_') === 0; });
      if (!keys.length) { el.innerHTML = ''; return; }
      html += '<div class="sidebar-section"><div class="sidebar-section-title">\u2B50 Bookmarks</div>';
      keys.sort().forEach(function(key) {
        var data;
        try { data = JSON.parse(localStorage.getItem(key)); } catch(e) { return; }
        if (!data) return;
        if (data.book !== currentBook) return;
        html += '<button type="button" class="sidebar-card sidebar-card-btn-full" onclick="Sidebar.scrollToLine(' + data.startLine + ')">' +
          '<span class="sidebar-card-icon">\u2B50</span>' +
          '<span class="sidebar-card-body">' +
          '<span class="sidebar-card-label">' + data.label + '</span>' +
          '<span class="sidebar-card-desc">Lines ' + data.startLine + '\u2013' + data.endLine + '</span>' +
          '</span>' +
          '<span class="sidebar-card-action">\u2192</span>' +
          '</button>';
      });
      html += '</div>';
    } catch(e) {}
    el.innerHTML = html;
  }

  function scrollToLine(lineNum) {
    var target = document.querySelector('.read-line-number[data-ln="' + lineNum + '"]');
    if (!target) return;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
    target.closest('.read-line').classList.add('read-line-highlight');
    setTimeout(function() {
      var hl = document.querySelector('.read-line-highlight');
      if (hl) hl.classList.remove('read-line-highlight');
    }, 2000);
  }

  function buildPassageHTML(passage) {
    var bookmarked = isBookmarked(passage);
    var html = '<div class="sidebar-passage-indicator">';
    html += '<div class="sidebar-passage-header">';
    html += '<div class="sidebar-passage-lines">Lines ' + passage.startLine + '\u2013' + passage.endLine + '</div>';
    html += '<button type="button" class="sidebar-bookmark-btn" onclick="Sidebar.toggleBookmark(' + passage.startLine + ')" title="' + (bookmarked ? 'Remove bookmark' : 'Bookmark this passage') + '">' + (bookmarked ? '\u2B50' : '\u2606') + '</button>';
    html += '</div>';
    html += '<div class="sidebar-passage-label">' + passage.label + '</div>';
    html += '</div>';

    var res = passage.resources;
    if (!res) return html;

    if (res.lectures && res.lectures.length) {
      for (var i = 0; i < res.lectures.length; i++) {
        var lec = res.lectures[i];
        html += '<a href="' + lec.href + '" target="_blank" rel="noopener noreferrer" class="sidebar-card">' +
          '<span class="sidebar-card-icon">\uD83C\uDFAC</span>' +
          '<span class="sidebar-card-body">' +
          '<span class="sidebar-card-label">' + lec.label + '</span>' +
          (lec.desc ? '<span class="sidebar-card-desc">' + lec.desc + '</span>' : '') +
          '</span>' +
          '<span class="sidebar-card-action">\u2192</span>' +
          '</a>';
      }
    }

    if (res.dore && res.dore.length) {
      for (var j = 0; j < res.dore.length; j++) {
        var plate = DORE.get(res.dore[j]);
        if (!plate) continue;
        html += '<button type="button" class="sidebar-card sidebar-card-btn-full" onclick="openLightbox(\'' + DORE.path(plate.file) + '\',\'' + plate.label.replace(/'/g, "\\'") + '\',\'' + plate.caption.replace(/'/g, "\\'") + '\')">' +
          '<span class="sidebar-card-icon">\uD83D\uDDBC</span>' +
          '<span class="sidebar-card-body">' +
          '<span class="sidebar-card-label">' + plate.label + '</span>' +
          '<span class="sidebar-card-desc">' + plate.caption + '</span>' +
          '</span>' +
          '<span class="sidebar-card-action">\uD83D\uDD0D</span>' +
          '</button>';
      }
    }

    if (res.criticism && res.criticism.length) {
      for (var k = 0; k < res.criticism.length; k++) {
        var crit = res.criticism[k];
        html += '<div class="sidebar-card sidebar-card-stack">' +
          '<span class="sidebar-card-icon">\uD83D\uDCD6</span>' +
          '<span class="sidebar-card-body">' +
          '<span class="sidebar-card-label">' + crit.label + '</span>' +
          (crit.desc ? '<span class="sidebar-card-desc">' + crit.desc + '</span>' : '') +
          '</span>' +
          '<span class="sidebar-card-actions">' +
          '<a href="' + crit.href + '" target="_blank" rel="noopener noreferrer" class="sidebar-card-btn" title="Buy on Amazon">\uD83D\uDED2</a>' +
          '</span>' +
          '</div>';
      }
    }

    if (res.bible && res.bible.length) {
      for (var m = 0; m < res.bible.length; m++) {
        var bib = res.bible[m];
        html += '<a href="' + bib.href + '" target="_blank" rel="noopener noreferrer" class="sidebar-card">' +
          '<span class="sidebar-card-icon">\u271D\uFE0F</span>' +
          '<span class="sidebar-card-body">' +
          '<span class="sidebar-card-label">' + bib.label + '</span>' +
          (bib.desc ? '<span class="sidebar-card-desc">' + bib.desc + '</span>' : '') +
          '</span>' +
          '<span class="sidebar-card-action">\u2192</span>' +
          '</a>';
      }
    }

    return html;
  }

  return {
    init: init,
    getPassageData: function() { return passageData; },
    getCurrentBook: function() { return currentBook; },
    getCurrentPassageIdx: function() { return currentPassageIdx; },
    scrollToLine: scrollToLine,
    toggleBookmark: function(startLine) {
      var passages = passageData[currentBook];
      if (!passages) return;
      for (var i = 0; i < passages.length; i++) {
        if (passages[i].startLine === startLine) {
          toggleBookmark(passages[i]);
          return;
        }
      }
    }
  };
})();
