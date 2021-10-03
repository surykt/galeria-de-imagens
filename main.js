const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

for (var i = 0; i < images.length; i++) {
  console.log(images[i]);
  const newImage = document.createElement("img");
  newImage.setAttribute("src", "images/" + images[i]);
  thumbBar.appendChild(newImage);
}
