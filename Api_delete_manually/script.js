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
      card.id = `user-${jsondata[i].id}`
      card.classList = "card";
      card.innerHTML = `<p>${jsondata[i].id} <button onclick="deleteuser(${jsondata[i].id})">Delete</button> </p>
                        <p>${jsondata[i].name}</p>
                        <p>${jsondata[i].email}</p>
                        <p>${jsondata[i].gender}</p>
                        <p>${jsondata[i].status}</p>`;
      user_container.appendChild(card);
    }
  });

  function deleteuser(id){
    fetch(`https://gorest.co.in/public/v2/users/${id}`, {
  method: "DELETE",
  // body: JSON.stringify(),
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    Authorization:
      "Bearer 7667cb5a001e5dcb750e113d3ba2627efe6e91e1f158d2a13d5fe2afcceaa3e0",
  },
  
})
  .then(function (response) {
      if (response.status === 204) {
        console.log("✅ User deleted successfully");
        document.getElementById(`user-${id}`).remove(); // remove from UI
        return; // stop here, no JSON to parse
      } else {
        return response.json(); // only parse if there’s a body
      }
    })
  .then(function (newdata) {
    console.log(newdata);
  });
  }