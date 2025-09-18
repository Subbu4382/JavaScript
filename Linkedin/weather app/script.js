const apikey = "3f13f83ccbe3e05421787ed2011b761b";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather img");

async function checkweather(city) {
  const res = await fetch(apiurl + city + `&appid=${apikey}`);
  if (res.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await res.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


    if (data.weather[0].main == "Clouds") {
      weathericon.src = "clouds.png";
       document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1501630834273-4b5604d2ee31')";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "clear.png";
      document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')";
    } else if (data.weather[0].main == "Rain") {
      weathericon.src = "rain.png";
       document.body.style.backgroundImage =
        "url('https://wallpapercave.com/wp/wTacujH.jpg')";
    } else if (data.weather[0].main == "Drizzle") {
      weathericon.src = "drizzle.png";
       document.body.style.backgroundImage =
        "url('https://rare-gallery.com/thumbs/1096598-sunlight-trees-landscape-forest-hill-nature-grass-rain-green-morning-mist-shrubs-haze-tree-fog-weather-plant-meadow-woodland-rural-area-habitat-natural-environment-atmo.jpg')";
    } else if (data.weather[0].main == "Mist") {
      weathericon.src = "mist.png";
            document.body.style.backgroundImage =
        "url('https://wallpapers.com/images/hd/mist-over-mountains-hd-scenery-wpbksf5lnq6nan5r.jpg')";

    }else {
      // default background
      document.body.style.backgroundImage =
        "url('https://png.pngtree.com/thumb_back/fh260/background/20230818/pngtree-a-picture-of-buildings-and-a-city-with-a-haze-image_13047698.jpg')";
    }
     document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.transition = "background 1s ease-in-out";

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
 searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
  });
