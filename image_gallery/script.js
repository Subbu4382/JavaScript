let scrollContainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehaviour = "auto";
});

nextbtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehaviour = "smooth";
  scrollContainer.scrollLeft += 900;
});

backbtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehaviour = "smooth";
  scrollContainer.scrollLeft -= 900;
});
