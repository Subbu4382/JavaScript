let scrollContainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

// Mouse wheel scroll (horizontal)
scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

// Next button
nextbtn.addEventListener("click", () => {
  scrollContainer.scrollLeft += 900;
});

// Back button
backbtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 900;
});
