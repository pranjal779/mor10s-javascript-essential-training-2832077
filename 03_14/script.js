/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
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
  "December 5, 2018 15:00:00 PST"
);

// Book parameter order: title, author, ISBN, pubYear, pubnumber, pageNumber, currentPage, readStatus
const survCapt = new Book(
  "The age of survCapt",
  "Shoshana Zuboff",
  988172637463,
  "2019",
  691,
  691,
  "Done"
);
console.log(survCapt);

const consiCreat = new Book(
  "The Conscious Creative",
  "Kelly small",
  111299472886,
  "2020",
  300,
  300,
  "done"
);

console.log(consiCreat);

const Action = new Book(
  "The Ice Station",
  "Matthew Reily",
  1112994777832,
  "2010",
  500,
  500,
  "done"
);

console.log(Action);

const consizzdr = new Book(
  "The slience Creative",
  "someone",
  162846192886,
  "2022",
  350,
  350,
  "done"
);

console.log(consizzdr);

const consiCLOL = new Book(
  "The funny",
  "Not funny",
  6969696969696,
  "2023",
  150,
  150,
  "done"
);

console.log(consiCLOL);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
