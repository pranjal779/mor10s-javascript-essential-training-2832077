/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);

// Dot notation
console.log("The pocketNum value:", backpack.pocketNum);

// Dot notation
console.log("Strap length L:", backpack.strapLength.left); // you properties within the property

// Bracket notation
console.log("The pocketNum value in Bracket notation:", backpack["pocketNum"]);

// pass property value in Bracket notation by setting up a variable called query
var query = "pocketNum";

console.log("The pocketNum value in a Variable:", backpack[query]);

/**
 *  Lesson Accessin onject properties
 * Time stamp: 3:50
 *
 *  What you see here can't be done using dot notation.
 * If you place a variable inside dot notation, the script will simply break,
 * because you're doing something incorrect. That's why we have this bracket notation.
 * It gives us more control and allows us to do more things. There's also one additional
 * situation where you might need to use bracket notation. In JavaScript, the standard states
 * that a property name can only contain letters, digits, dollar signs, and underscores.
 * However, nothing actively prevents you or a piece of software from creating property
 * names that break these conventions. So in theory, we could encounter a property name that
 * starts with a digit, or it contains quotation marks or something else. When using dot notation,
 *  you can't access that property if it starts with a number, or uses a hyphen, or otherwise breaks
 * the standard, because everything will break. In this circumstance, bracket notation comes to the rescue,
 * because you are passing a quoted string that can be literally anything.
 * So why would you ever come across properties with non-standard names?
 * You'd never write them yourself, right? Well in JavaScript, we often work with generated data
 * that has been transformed into JavaScripts and a JavaScript object from somewhere else.
 * And these generators of that data do not always conform to JavaScript specifications,
 * but thanks to bracket notation, JavaScript allows us to parse data even when it doesn't
 * follow the rules. So for example, so if I have a property that breaks convention, let's say I
 * have a property that has a hyphen in it (console.log...., backpack["property-hypen"]);,
 * I can access that property using bracket notation, and
 * nothing will break. So, in most cases, use dot notation because it's easy to understand.
 * If you need to pass a variable into the property name, or you need to access a property
 * that is somehow breaking convention, use bracket notation.
 *
 */
