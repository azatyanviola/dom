"use strict";

//***How to hide the text */
const button = document.getElementById("button");
const text = document.getElementById("text");
button.addEventListener("click", () => (text.hidden = true));

//**How to hide the button* */
const btn = document.getElementById("hider");
btn.addEventListener("click", () => (btn.hidden = true));

//** ********* */

const box = document.getElementById("box");
box.addEventListener("mouseenter", () => {
  box.style.backgroundColor = "green";
});

box.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "red";
});

//** When image'cat' comes with the mouse ***/

const field = document.getElementById("field");
const img = document.getElementById("img");

field.onmousemove = function (event) {
  let fieldCoords = this.getBoundingClientRect();

  let imgCoords = {
    top:
      event.clientY - fieldCoords.top - field.clientTop - img.clientHeight / 2,
    left:
      event.clientX - fieldCoords.left - field.clientLeft - img.clientWidth / 2,
  };

  if (imgCoords.top < 0) {
    imgCoords.top = 0;
  }

  if (imgCoords.left < 0) {
    imgCoords.left = 0;
  }

  if (imgCoords.left + img.clientWidth > field.clientWidth) {
    imgCoords.left = field.clientWidth - img.clientWidth;
  }

  if (imgCoords.top + img.clientHeight > field.clientHeight) {
    imgCoords.top = field.clientHeight - img.clientHeight;
  }

  img.style.left = imgCoords.left + "px";
  img.style.top = imgCoords.top + "px";
};

//**How we can see what we write */

const input = document.getElementById("input");
const label = document.getElementById("label");

input.addEventListener("keydown", (event) => {
  label.innerHTML = event.target.value;
});

//***To open Menu*** */

// const product = document.getElementById('products');
// const menu = product.querySelector('.menu');

//     menu.onclick = () => {
//       product.classList.toggle('open');
//     };

//** How to add [x] ****/

let textes = document.querySelectorAll(".text");

for (let text of textes) {
  text.insertAdjacentHTML(
    "afterbegin",
    '<button class="remove-button">[x]</button>'
  );

  text.firstChild.onclick = () => text.remove();
}

//*******   what link to choose   ************** */

document.querySelector("#contents").onclick = () => {
  let x = confirm("Are u sure?");
  return x ? x : false;
};

//*****   How to point a picture   ******//

thumbs.addEventListener("click", (event) => {
  let target = event.target.closest("a");
  let targetSrc = target.getAttribute("href");

  if (!target) {
    return;
  }
  largeImg.setAttribute("src", targetSrc);
  largeImg.setAttribute("alt", target.getAttribute("title"));

  event.preventDefault();
});
