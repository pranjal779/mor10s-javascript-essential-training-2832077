/** Read the array method page in MDN
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

console.log(backpackContents);

console.log("1st try", backpackContents.join());
console.log("2nd try", backpackContents.join(", "));
console.log("3rd try", backpackContents.join(" | "));

// push method

backpackContents.push("pencil", 5);
console.log("using the push method", backpackContents);

backpackContents.unshift("pencil");
console.log("using the unshift method", backpackContents);

backpackContents.pop();
console.log("using the pop method", backpackContents);

backpackContents.pop([2]);
console.log("using the pop method to remove pencil", backpackContents);

backpackContents.forEach(function (item) {
  item = `<li>${item}</li>`;
  console.log(item);
});
console.log("using the forEach method:", backpackContents);

// backpackContents.forEach(function (item) {
//   item = `<li>${item}</li>`;
//   console.log(item);
// });

let longItems = backpackContents.find(function (item) {
  if (item.length >= 5) {
    return item;
  }
});
console.log("longItems:", longItems);

console.log("using the find method:", backpackContents);

// let longItems = backpackContents.find(function (item) {
//   if (item.length >= 5) {
//     return item;
//   }
// });
// console.log("longItems:", longItems);
