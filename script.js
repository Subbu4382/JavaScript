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
// let container = document.body
// let theme=localStorage.getItem("dark_mode") ? "dark_mode" : "light_mode"
// container.classList=theme
// function changeTheme(){
//   if(container.classlist=="dark_mode"){
//   container.classlist="light_mode"
//     localStorage.setItem("light_mode","light_mode")
//     localStorage.removeItem("dark_mode")
//   }
//   else{
//     container.classlist="dark_mode"
//     localStorage.setItem("dark_mode","dark_mode")
//      localStorage.removeItem("light_mode")
//   }
// }

let container = document.body;

    // Load theme from localStorage OR default to light_mode
    let theme = localStorage.getItem("theme") || "light_mode";
    container.className = theme;

    function changeTheme() {
      if (container.className === "dark_mode") {
        container.className = "light_mode";
        localStorage.setItem("theme", "light_mode");
      } else {
        container.className = "dark_mode";
        localStorage.setItem("theme", "dark_mode");
      }
    }