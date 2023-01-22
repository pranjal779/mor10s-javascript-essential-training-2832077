/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

/**Notes
 * Create a new class based on one of more of the previously created objects.
 *
 * Start with a fully built object.
 * Migrate the properties and methods. one by one
 * one the class is complete, test it with recreating the original object using that class.
 */

import Apartment from "./Apartment";
// import Backpack from "./Backpack";

const details = new Apartment(
  "Navin jijaji & Dolly di's",
  2,
  "white-bage in colour",
  true,
  "big",
  2,
  true,
  true,
  3,
  "wooden-doorType-waredorobe",
  true,
  3,
  4,
  6,
  2,
  9,
  "from New Jersey to New York island view with big building and all, WTC, kalistor building, etc."
);

console.log("All the details of the aprtment:", details);
// console.log("everything from backpack:", Backpack);
