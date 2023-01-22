/** 6_4
 * The let statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

// var color = "purple";
let color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";

// function headingColor() {
//   let color = "blue";
//   document.querySelector(".title").style.color = color;
// }

function headingColor() {
  let titlecolor = "blue";
  document.querySelector(".title").style.color = titlecolor;
  console.log("inside:", titlecolor);
}

headingColor();

// console.log("inside:", titlecolor); -> throws error

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;

// local scope and global scope
