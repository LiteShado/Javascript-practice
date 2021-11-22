/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "Nat",
  "January 17, 1987 09:03:00 EST"
);

//title, author, publisher, date, genre, phrase, quoted

const newBook = new Book(
  "Everyday Lesson",
  "Nat Richmond",
  "Mii Fiine Publishing",
  "January 17, 1987 09:03:00 EST",
  "Self Development",
  "Everyday we learn more and more",
  "Nat"
);
const anotherBook = new Book(
  "Winner",
  "Nat Richmond",
  "Mii Fiine Publishing",
  "November 17, 2020 11:33:00 EST",
  "Self Development",
  "Keep up the good work!",
  "Nat"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since acquired:", everydayPack.backpackAge());
console.log("My name is: ", everydayPack.myName);
console.log("My age is: ", everydayPack.myAge());

console.log("My new book is ", newBook.title);
console.log("My favorite quote from the book is  ", ",", newBook.phrased, "");
console.log("by: ", newBook.quoter);
console.log("My new book is ", anotherBook.title);
console.log(
  "My favorite quote from the book is  ",
  ",",
  anotherBook.phrased,
  ""
);
console.log("by: ", anotherBook.quoter);
console.log("This book was released", anotherBook.genreYear(), "days ago");
