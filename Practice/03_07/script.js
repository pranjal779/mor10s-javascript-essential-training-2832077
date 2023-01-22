/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const Table = {
  name: "Wooden Table",
  color: "Wood brown/Natural wood color-design",
  what_is_on_it: {
    Devices: "lenovo-laptop",
    NumbersOfMonitors: {
      Monitor_1: "Dell",
      Monitor_2: "HP",
    },
    whichLaptopYouUse: "lenovo-Laptop",
  },
  other_devices: {
    Laptop: "Macbookpro",
    other_items: {
      N1: "toy_car",
      N2: "books",
      N3: "batteries",
      N4: "headphones",
      N5: "chargers",
      N6: "Mouse and Keyboard",
    },
  },
};

// Dot Notations:
console.log(Table);

console.log("what_is_on_it: ", Table.what_is_on_it);

console.log("Other Devices:", Table.other_devices);

console.log("Other Items:", Table.other_devices.other_items);

// Bracket Notations:
var nameOf = "Laptop";
var itemNum = "N4";

console.log("Bracket Notation of other_devices:", Table.other_devices[nameOf]);

console.log(
  "Bracket Notation of other_devices:",
  Table.other_devices.other_items[itemNum]
);
