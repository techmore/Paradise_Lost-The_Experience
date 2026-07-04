const DORE = {
  hero: "Paradise Lost 12.jpg",

  gallery: [
    { id: 1,  file: "Paradise Lost 1.jpg",  book: 6, label: "Michael casts out rebel angels",         caption: "Book VI — Michael casts out rebel angels" },
    { id: 2,  file: "Paradise Lost 2.jpg",  book: 1, label: "Pandemonium — the council in Hell",      caption: "Book I — The high capital of Satan and his Peers" },
    { id: 3,  file: "Paradise Lost 3.jpg",  book: 1, label: "The building of Pandemonium",            caption: "Book I — The fabric huge of infernal walls" },
    { id: 4,  file: "Paradise Lost 4.jpg",  book: 1, label: "Satan on the burning lake",              caption: "Book I — Chain'd on the burning Lake" },
    { id: 5,  file: "Paradise Lost 5.jpg",  book: 1, label: "The host of fallen angels",              caption: "Book I — Thick as autumnal leaves" },
    { id: 6,  file: "Paradise Lost 6.jpg",  book: 2, label: "Satan's throne in Pandemonium",          caption: "Book II — High on a throne of royal state" },
    { id: 7,  file: "Paradise Lost 7.jpg",  book: 2, label: "Sin and Death at the gates of Hell",     caption: "Book II — Sin and Death, the keys of Hell" },
    { id: 8,  file: "Paradise Lost 8.jpg",  book: 2, label: "Satan's journey through Chaos",          caption: "Book II — The wasteful Deep" },
    { id: 9,  file: "Paradise Lost 9.jpg",  book: 2, label: "Satan confronts Chaos",                  caption: "Book II — Chaos umpire sits" },
    { id: 10, file: "Paradise Lost 10.jpg", book: 2, label: "The infernal council debates",           caption: "Book II — The great consult began" },
    { id: 11, file: "Paradise Lost 11.jpg", book: 3, label: "God surveys His creation",               caption: "Book III — Hail, holy Light" },
    { id: 12, file: "Paradise Lost 12.jpg", book: 3, label: "The descent of Satan",                   caption: "Book III — The spiritual descent of Lucifer into Satan" },
    { id: 13, file: "Paradise Lost 13.jpg", book: 3, label: "Satan approaches the Earth",             caption: "Book III — Towards the coast of Earth beneath" },
    { id: 14, file: "Paradise Lost 14.jpg", book: 3, label: "The Sun in splendor",                    caption: "Book III — The Sun's bright mansion" },
    { id: 15, file: "Paradise Lost 15.jpg", book: 3, label: "Satan alights on the Sun",               caption: "Book III — There lands the Fiend" },
    { id: 16, file: "Paradise Lost 16.jpg", book: 4, label: "Satan in Eden",                          caption: "Book IV — One greater Man" },
    { id: 17, file: "Paradise Lost 17.jpg", book: 4, label: "Satan watches Adam and Eve",             caption: "Book IV — Two of far nobler shape" },
    { id: 18, file: "Paradise Lost 18.jpg", book: 4, label: "Adam and Eve in the Garden",             caption: "Book IV — In naked majesty" },
    { id: 19, file: "Paradise Lost 19.jpg", book: 4, label: "Satan at the ear of Eve",                caption: "Book IV — Squat like a toad" },
    { id: 20, file: "Paradise Lost 20.jpg", book: 5, label: "Raphael and Eve in Eden",                caption: "Book V — Leaning, half raised, with looks of cordial love" },
    { id: 21, file: "Paradise Lost 21.jpg", book: 5, label: "Eve recounts her dream",                 caption: "Book V — Why sleep'st thou, Eve?" },
    { id: 22, file: "Paradise Lost 22.jpg", book: 5, label: "Raphael descends to Eden",               caption: "Book V — Raphael, the sociable Spirit" },
    { id: 23, file: "Paradise Lost 23.jpg", book: 5, label: "Raphael warns Adam",                     caption: "Book V — Take heed lest passion sway" },
    { id: 24, file: "Paradise Lost 24.jpg", book: 5, label: "Adam and Raphael converse",              caption: "Book V — Thus Adam made request" },
    { id: 25, file: "Paradise Lost 25.jpg", book: 5, label: "Eve prepares the feast",                 caption: "Book V — Eve, with dispatchful looks" },
    { id: 26, file: "Paradise Lost 26.jpg", book: 6, label: "The War in Heaven begins",               caption: "Book VI — The dire artillery" },
    { id: 27, file: "Paradise Lost 27.jpg", book: 6, label: "The angelic battle",                     caption: "Book VI — Hills amid the air" },
    { id: 28, file: "Paradise Lost 28.jpg", book: 6, label: "The Son rides forth",                    caption: "Book VI — The Son, radiant as the morn" },
    { id: 29, file: "Paradise Lost 29.jpg", book: 6, label: "The rebel angels routed",                caption: "Book VI — They astonish'd all resistance lost" },
    { id: 30, file: "Paradise Lost 30.jpg", book: 6, label: "The Messiah's chariot",                  caption: "Book VI — Glory was in his train" },
    { id: 31, file: "Paradise Lost 31.jpg", book: 7, label: "The Creation of the World",              caption: "Book VII — Let there be Light" },
    { id: 32, file: "Paradise Lost 32.jpg", book: 7, label: "The separation of land and sea",         caption: "Book VII — The waters heaving" },
    { id: 33, file: "Paradise Lost 33.jpg", book: 7, label: "The sun and moon created",               caption: "Book VII — Lights high o'er the Earth" },
    { id: 34, file: "Paradise Lost 34.jpg", book: 7, label: "Fish and fowl created",                  caption: "Book VII — The Earth in her rich attire" },
    { id: 35, file: "Paradise Lost 35.jpg", book: 7, label: "The creation of beasts and man",         caption: "Book VII — The sixth day of creation" },
    { id: 36, file: "Paradise Lost 36.jpg", book: 8, label: "Adam questions Raphael",                 caption: "Book VIII — Thus Adam meekly replied" },
    { id: 37, file: "Paradise Lost 37.jpg", book: 8, label: "Raphael recounts the cosmos",            caption: "Book VIII — The earth's wide bounds" },
    { id: 38, file: "Paradise Lost 38.jpg", book: 8, label: "Adam tells of his creation",             caption: "Book VIII — When I behold this goodly frame" },
    { id: 39, file: "Paradise Lost 39.jpg", book: 8, label: "Adam and Eve's union",                   caption: "Book VIII — Part of my soul I seek thee" },
    { id: 40, file: "Paradise Lost 40.jpg", book: 8, label: "Raphael's departure",                    caption: "Book VIII — He ended, and they both descend" },
    { id: 41, file: "Paradise Lost 41.jpg", book: 9, label: "Satan enters the serpent",               caption: "Book IX — The serpent subtlest beast of all the field" },
    { id: 42, file: "Paradise Lost 42.jpg", book: 9, label: "Eve at the Tree of Knowledge",           caption: "Book IX — Her rash hand in evil hour" },
    { id: 43, file: "Paradise Lost 43.jpg", book: 9, label: "The temptation of Eve",                  caption: "Book IX — The Tempter, ere the Tempter" },
    { id: 44, file: "Paradise Lost 44.jpg", book: 9, label: "Adam eats the fruit",                    caption: "Book IX — He scrupled not to eat" },
    { id: 45, file: "Paradise Lost 45.jpg", book: 9, label: "The Fall — shame and guilt",             caption: "Book IX — They sat them down to weep" },
    { id: 46, file: "Paradise Lost 46.jpg", book: 10, label: "The Son judges Adam and Eve",           caption: "Book X — The Son, judge of mankind" },
    { id: 47, file: "Paradise Lost 47.jpg", book: 10, label: "Sin and Death enter the world",         caption: "Book X — Sin and Death, and Hell to open" },
    { id: 48, file: "Paradise Lost 48.jpg", book: 10, label: "Michael descends to Eden",             caption: "Book X — Michael, of celestial armies prince" },
    { id: 49, file: "Paradise Lost 49.jpg", book: 10, label: "The expulsion from Eden",              caption: "Book X — They, hand in hand, with wand'ring steps" },
    { id: 50, file: "Paradise Lost 50.jpg", book: 10, label: "Adam and Eve depart Paradise",         caption: "Book X — The world was all before them" },

    { id: 51, file: "Gustav Doré, Satan Confronting Sin and Death at the Gates of Hell, c 1880.jpg", book: 2, label: "Satan confronts Sin and Death", caption: "Book II — Before the Gates there sat" },
    { id: 52, file: "Gustave Dore Satan's Despair.jpg",       book: 4, label: "Satan's despair",           caption: "Book IV — Me miserable!" },
    { id: 53, file: "GustaveDoreParadiseLostSatanProfile.jpg", book: 1, label: "Satan in profile",        caption: "Book I — The lost Archangel" },
    { id: 54, file: "5-468 To whom the winged Hierarch replied.jpg", book: 5, label: "Raphael speaks to Adam",  caption: "Book V — To whom the winged Hierarch replied" },
    { id: 55, file: "6-188 This greeting on thy impious crest.jpg", book: 6, label: "War in Heaven",     caption: "Book VI — This greeting on thy impious crest" },
    { id: 56, file: "6-207 Now storming fury rose.jpg",        book: 6, label: "The fury of battle",     caption: "Book VI — Now storming fury rose" },
    { id: 57, file: "6-406 Now night her course began.jpg",    book: 6, label: "Night in Heaven",        caption: "Book VI — Now night her course began" }
  ],

  getByBook(bookNum) {
    const orderMap = {
      1: [4, 53, 5, 3, 2],
      2: [6, 10, 7, 51, 8, 9],
      3: [12, 11, 13, 14, 15],
      4: [16, 17, 18, 19, 52],
      5: [20, 21, 22, 54, 24, 23, 25],
      6: [26, 55, 56, 27, 28, 29, 30, 57, 1],
      7: [31, 32, 33, 34, 35],
      8: [36, 37, 38, 39, 40],
      9: [41, 42, 43, 44, 45],
      10: [46, 47, 48, 49, 50]
    };

    const ids = orderMap[bookNum];
    if (ids) {
      return ids.map(id => this.get(id)).filter(Boolean);
    }

    return this.gallery.filter(i => i.book === bookNum);
  },

  get(id) {
    return this.gallery.find(i => i.id === id);
  },

  path(file) {
    return "assets/dore/" + encodeURIComponent(file);
  },

  getHeroImage() {
    const hero = this.gallery.find(i => i.file === this.hero) || this.gallery[0];
    return hero;
  },

  getBookCoverImage(bookNum) {
    const images = this.getByBook(bookNum);
    return images.length > 0 ? images[0] : null;
  },

  getBookHighlights(bookNum) {
    const highlightMap = {
      1: [53, 1, 2, 3, 4, 5],
      2: [6, 7, 8, 9, 10, 51],
      3: [11, 12, 13, 14, 15],
      4: [16, 17, 18, 19, 20, 52],
      5: [21, 22, 23, 24, 25, 54],
      6: [26, 27, 28, 29, 30, 55, 56, 57],
      7: [31, 32, 33, 34, 35],
      8: [36, 37, 38, 39, 40],
      9: [41, 42, 43, 44, 45],
      10: [46, 47, 48, 49, 50]
    };

    const ids = highlightMap[bookNum] || [];
    return ids.map(id => this.get(id)).filter(Boolean);
  }
};
