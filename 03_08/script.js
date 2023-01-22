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
console.log("The pocketNum value:", backpack.pocketNum);

/**
 * lesson Object methods
 * backpack.lidOpen
 * false
 * backpack.toggleLid(true)  toggleLid is a function, a method needs to told something inside a ().
 * undefined
 * backpack.lidOpen
 * true
 */

console.log("left before:", backpack.strapLength.left);

backpack.newStrapLength(10, 15);

console.log("left after:", backpack.strapLength.left);
