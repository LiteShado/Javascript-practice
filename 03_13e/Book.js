class Book {
  constructor(title, author, publisher, date, genre, phrase, quoted) {
    (this.title = title),
      (this.author = author),
      (this.publisher = publisher),
      (this.date = date),
      (this.genre = genre),
      (this.quote = {
        phrase: phrase,
        quoted: quoted,
      });
  }
  toggleGenre(bookGenre) {
    this.genre = bookGenre;
  }

  toggleAuthor(bookAuthor) {
    this.author = bookAuthor;
    return bookAuthor;
  }
  toggleYear(bookYear) {
    this.year = bookYear;
  }
  toggleTitle(bookTitle) {
    this.title = bookTitle;
    return bookTitle;
  }
  toggleQuoted(phrased, quoter) {
      this.quoted = quoter;
      this.phrase = phrased;
      return quoter, phrased;
  }

  genreYear() {
    let today = new Date();
    let then = new Date(this.date);
    let publishedSince = today - then;
    let anniversary = Math.floor(publishedSince / (1000 * 3600 * 24));
    return anniversary;
  }
  
}

export default Book;
