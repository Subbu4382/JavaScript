//  function setDarkMode() {
//       let body = document.getElementById("body");
//       body.style.backgroundColor="black";
//       body.style.color = "bisque";
//     }
//     function setLightMode() {
//       let body = document.getElementById("body");
//       body.style.backgroundColor = "white";
//       body.style.color = "darkgreen";
//     }
localStorage.getItem("dark_mode") ? "yes" : "no"

function changeTheme(){
  let container = document.getElementById("container")
  if(container.classlist=="dark_mode"){
    container.classlist="light_mode"
    localStorage.setItem("light_mode","light_mode")
  }
  else{
    container.classlist="dark_mode"
    localStorage.setItem("light_mode","light_mode")
  }
}