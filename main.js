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
  newImage.addEventListener("click", function (e) {
    displayedImage.setAttribute("src", newImage.src);
  });
}
btn.addEventListener("click", function (e) {
  const className = btn.getAttribute("class");
  if (className === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
});
