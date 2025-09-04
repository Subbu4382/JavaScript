let user_container = document.getElementById("user_data");
fetch("https://gorest.co.in/public/v2/users")
  .then(function (res) {
    return res.json();
  })
  .then(function (jsondata) {
    for (let i = 0; i < jsondata.length; i++) {
      let card = document.createElement("div");
      card.classList = "card";
      card.innerHTML = `<p>${jsondata[i].id}</p>
                        <p>${jsondata[i].name}</p>
                        <p>${jsondata[i].email}</p>
                        <p>${jsondata[i].gender}</p>
                        <p>${jsondata[i].status}</p>`;
      user_container.appendChild(card);
    }
  });

