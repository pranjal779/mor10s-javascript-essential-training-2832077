/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

/**
 * KEY REMINDERS
 *
 * 1 Pass value to a fucntion inside the parenthesis
 * 2 Refer to the current object as "this".
 * 3 Assign any vaue to any property.
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
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  newvolume: function (volume) {
    this.volume = volume;
  },
};

console.log(backpack);

console.log("Initial value for volume:", backpack.volume);

backpack.newvolume(40);

console.log("New value for volume:", backpack.volume);

// 2nd new value for straplength
console.log("Checking the value of straplength again:", backpack.strapLength);
// shows the old value

// checking the newstraplength method values from line 30
console.log("Testing to give new values:", backpack.newstrapLength); // -> throws undefined

// assigning new values
backpack.newStrapLength(34, 25);

// both
console.log("the New values for straplength:", backpack.strapLength);

// left
console.log("the New values for Left straplength:", backpack.strapLength.left);

// right
console.log(
  "the New values for Right straplength:",
  backpack.strapLength.right
);
