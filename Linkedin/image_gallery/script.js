let scrollContainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

// Mouse wheel scroll (horizontal)
scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY; // scrolls horizontally with mouse wheel
});

// Next button click
nextbtn.addEventListener("click", () => {
  scrollContainer.scrollLeft += 900; // move right
});

// Back button click
backbtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 900; // move left
});
