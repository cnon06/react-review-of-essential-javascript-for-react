const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const books = getBooks();

// books;

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const getTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const jsonData = await res.json();

  return jsonData;
};

const todos = getTodos();
todos;
// const book = getBook(3);
// book;

// x = [1, 2, 3, 4, 5].map((el) => el * 2);

// console.log(x);

// const titles = books.map((book) => book.title);
// titles;

// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
// }));

// essentialData;

// const longBooksWithMovie = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.hasMovieAdaptation);
// longBooksWithMovie;

// const adventureBooks = books
//   .filter((book) => book.genres.includes("high-fantasy"))
//   .map((book) => book.title);
// adventureBooks;

// const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
// pagesAllBooks;

// const arr = [3, 1, 6, 4, 9, 5];
// const sortedArray = arr.slice().sort((a, b) => b - a);

// const shortOfByPages = books
//   .slice()
//   .sort((a, b) => a.pages - b.pages)
//   .map((book) => book.title);
// sortedArray;
// arr;
// shortOfByPages;

// const newBook = { id: 6, title: "The Martian", author: "Andy Weir" };
// const booksAfterAdd = [...books, newBook];
// booksAfterAdd;

// const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 6);

// console.log(booksAfterDelete.map((book) => book.title));

// const booksAfterUpdate = booksAfterDelete.map((book) =>
//   book.id === 1 ? { ...book, pages: 2 } : book
// );

// booksAfterUpdate;
// const title = book.title;
// title;

// const author = book.author;
// author;

// const { author, title, genres, pages } = getBook(3);

// console.log(author + ", " + title, genres);

// const [primaryGenre, ...otherGenres] = genres;

// console.log(primaryGenre, otherGenres);

// const newGenres = ["epic fantasy", ...genres];
// newGenres;

// const updatedBook = {
//   ...book,
//   moviePublicationDate: "2011-12-19",
//   pages: 1219,
// };
// updatedBook;

// const summary = `${title} is a book. ${3 + 5} a ${pages}`;

// const { moviePublicationDate, hasMovieAdaptation } = updatedBook;

// summary;

// // const year = moviePublicationDate.split("-")[[0]];
// // year;

// const pagesRange = pages > 1000 ? "over a thousand" : "less than thousand";

// pagesRange;
// // const str = `the book has ${pagesRange} pages`;
// console.log(`the book has ${pagesRange} pages`);
// console.log(`The book has ${hasMovieAdaptation ? "" : "no"} movie adaptation`);

// const year = (str) => str.split("-")[0];
// console.log(year(moviePublicationDate));
// console.log(false && "has movie adaptation.");
// console.log(book.translations);
// console.log(book.translations.spanish);

// const spanishTranslation = book.translations.spanish || "Not Translated";
// console.log(spanishTranslation);

// const translation = book.translations.spanishd ?? "No data";
// console.log(translation);
// const goodReads = book.reviews.goodreads;
// goodReads;
// const libraryThing = book.reviews.librarything?.reviewsCount ?? 0;
// libraryThing;
