const body = document.querySelector("body");
let heading = document.querySelector("h2");
setTimeout(() => {
  heading.remove();
}, 8000);
body.addEventListener("mousemove", (event) => {
  console.log("moving");
  //   const xpos = event.offsetX;
  //   const ypos = event.offsetY;
  // const hearts = ["💖", "❤️", "💜", "💙", "💚", "🧡", "💛"];
  const span = document.createElement("span");
  //   span.innerText = hearts[Math.floor(Math.random() * hearts.length)];
  span.style.left = event.offsetX + "px";
  span.style.top = event.offsetY + "px";
  const size = Math.random() * 100;
  span.style.width = size + "px";
  span.style.height = size + "px";
  //   span.style.fontSize=size + "px"
  body.appendChild(span);
  setTimeout(() => {
    span.remove();
  }, 3000);
});
