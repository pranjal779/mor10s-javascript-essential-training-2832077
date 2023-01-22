class Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    dateAcquired,
    image
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
    this.dateAcquired = dateAcquired;
    this.image = image;
  }
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
  backpackAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

export default Backpack;

/** chapter 5 lesson 2
 * document.querySelector("main")
 * document.querySelector(".maincontent")
 *
 *
 *  check MDN
 * Document.querySelector()
 * Document.querySelectorAll()
 * document.querySelectorAll("main li")
 * document.querySelectorAll("main li").forEach(item => item.style.background= "red")
 *
 * document.querySelectorAll("main li:last-child").forEach(item => item.style.background= "blue")
 *
 * querySelector targets CSS query using JavaScripot
 *
 * lesson 3
 * Element.getElemwntsByClassName() #old, querySelector is better
 * document.getElementsByClassName("packprop")
 * document.getElementByClassName("packprop backpack_color")
 * document.getElementByID("everyday")
 *
 * lesson 4
 * pactice 5_4
 *
 *
 *
 */
