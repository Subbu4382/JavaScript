let user_container = document.getElementById("users_data");
fetch("https://jsonplaceholder.typicode.com/todos/")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsondata) {
    console.log(jsondata);
    for (let i = 0; i < jsondata.length; i++) {
      let card = document.createElement("div");
      card.classList = "card";
      card.innerHTML = `<p>${jsondata[i].id}</p> <p>${jsondata[i].title}</p>`;
      user_container.appendChild(card);
    }
  });
