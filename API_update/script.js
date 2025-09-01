let user_container = document.getElementById("user_data");
fetch("https://gorest.co.in/public/v2/users", {
  headers: {
    Authorization:
      "Bearer 7667cb5a001e5dcb750e113d3ba2627efe6e91e1f158d2a13d5fe2afcceaa3e0",
  },
})
  .then(function (response) {
    return response.json();
  })
  .then(function (jsondata) {
    // console.log(jsondata)
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

let newuser = {
  name: "vaishu14",
  email: "vaishu1425@gmail.com",
  gender: "male",
  status: "active",
};
fetch("https://gorest.co.in/public/v2/users", {
  method: "POST",
  body: JSON.stringify(newuser),
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    Authorization:
      "Bearer 7667cb5a001e5dcb750e113d3ba2627efe6e91e1f158d2a13d5fe2afcceaa3e0",
  },
  
})
  .then(function (response) {
    return response.json();
  })
  .then(function (newdata) {
    console.log(newdata);
  });
