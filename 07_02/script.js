/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

console.log(collection);

/**
 * pop
 * shift method
 * unshift
 */

console.log(collection.length);

// using index number to access
console.log(collection[1]);
collection[2] = "camera";
console.log(collection);

collection[collection.length] = "new item";
console.log("new item", collection);

collection[9] = "at the end";

console.log("9th element", collection);

console.log(collection[8]);
