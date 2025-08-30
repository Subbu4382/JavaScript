 function getSeason(month) {
        // month: 1 = Jan, 12 = Dec
        if (month >= 3 && month <= 6) {
          return "Summer"; //(March - June)
        } else if (month >= 7 && month <= 9) {
          return "Monsoon"; //(July - Sept)
        } else if (month >= 10 && month <= 11) {
          return "Autumn"; //(September - November)
        } else if (month === 12 || month === 1 || month === 2) {
          return "Winter"; //(December - February)
        } else {
          return "Please enter a valid month (1-12)";
        }
      }
      function showSeason() {
        let month = new Date(document.getElementById("month").value).getMonth()+1;
        let season = getSeason(month);
        let body = document.getElementById("bg");
        document.getElementById("season").innerHTML =season;
        if (season === "Summer") {
          body.style.backgroundImage =
            "url('https://wallpaperaccess.com/full/6606132.jpg')";
        } else if (season === "Monsoon") {
          body.style.backgroundImage =
            "url('https://wallpapercave.com/wp/QdPrJ63.jpg')";
        } else if (season === "Autumn") {
          body.style.backgroundImage =
            "url('https://th.bing.com/th/id/R.6b34eed5d6eeaa6a40f8125dcd081a67?rik=7j1w3mtLnz6e2A&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f0%2f3%2ff%2f1371221-large-fall-season-backgrounds-2880x1800-for-phone.jpg&ehk=z0m3B3q8DrjjHYhz%2biUpVj9PE0H1nZHmXvqoWTHFRdA%3d&risl=&pid=ImgRaw&r=0')";
        } else if (season === "Winter") {
          body.style.backgroundImage =
            "url('https://wallpapercave.com/wp/wp7862529.jpg')";
        } else {
          document.getElementById("season").innerHTML =
            "⚠️ Please Select a Month!";

          body.style.backgroundImage = "none";
          body.style.backgroundColor = "antiquewhite";
        }
      }