// let players=[{name:"subbu",color:"blue",score:0},{name:"balaji",color:"red",score:0},{name:"sathish",color:"yellow",score:0},{name:"pp",color:"green",score:0}]
// let h1_heading=document.createElement("h1")
// h1_heading.textContent="Snake And Ladder"
// h1_heading.id="heading"
// document.body.appendChild(h1_heading)

// let container=document.createElement("div")
// container.classList="container"
// document.body.appendChild(container)

// for (let i=100;i>=1;i--){
//     let div_ele=document.createElement("div")
//     // div_ele.classList="cell"
//     div_ele.id=`cell`
//     div_ele.textContent=i
//     container.appendChild(div_ele)
// }
// for (let i=0;i<=3;i++){
//     let btn=document.createElement("button")
//     btn.textContent=players[i].name
//     btn.style.backgroundColor=players[i].color
//     btn.classList="btn"
//     btn.onclick=function(){
//         let randomnum=Math.random()*6
//         randomnum=Math.ceil(randomnum)
//         let current_person=document.getElementById(`person${players[i].score}`)
//         if(current_person){
//             current_person.parentNode.removeChild(current_person)
//         }
//         players[i].score=players[i].score+randomnum
//         btn.textContent=players[i].name +" "+players[i].score

//         let person=document.createElement("div")
//         person.classList="person"
//         person.id=`person${players[i].score}`
//         person.style.backgroundColor=players[i].color
//         let parentele=document.getElementById(`cell${players[i].score}`)
//         parentele.appendChild(person)

//     }
//     document.body.appendChild(btn)
// }

let players = [
  { name: "Player-1", color: "blue", score: 0 },
  { name: "Player-2", color: "red", score: 0 },
  { name: "Player-3", color: "yellow", score: 0 },
  { name: "Player-4", color: "green", score: 0 },
];

// Create heading
let h1_heading = document.createElement("h1");
h1_heading.textContent = "Snake And Ladder";
h1_heading.id = "heading";
document.body.appendChild(h1_heading);

// Create container for board
let container = document.createElement("div");
container.className = "container"; // FIX: use className, not classList
document.body.appendChild(container);

// Create board cells from 100 to 1
for (let i = 100; i >= 1; i--) {
  let div_ele = document.createElement("div");
  div_ele.className = "cell"; // FIX: use class for styling
  div_ele.id = `cell${i}`; // FIX: unique ID for each cell
  div_ele.textContent = i;
  container.appendChild(div_ele);
}

// Create player buttons
for (let i = 0; i < players.length; i++) {
  // FIX: loop based on players.length
  let btn = document.createElement("button");
  btn.textContent = players[i].name;
  btn.style.backgroundColor = players[i].color;
  btn.className = "btn"; // FIX: use className

  // Dice roll event
  btn.onclick = function () {
    let randomnum = Math.ceil(Math.random() * 6); // FIX: simpler dice roll

    // Remove old player token
    let current_person = document.getElementById(`person${players[i].name}`);
    if (current_person) {
      current_person.remove();
    }

    // Update player position (max 100)
    players[i].score += randomnum;
    if (players[i].score > 100) {
      players[i].score = 100; // Prevent going beyond board
    }

    // Update button label
    btn.textContent = `${players[i].name} ${players[i].score}`;

    // Create new player token
    let person = document.createElement("div");
    person.className = "person";
    person.id = `person${players[i].name}`; // Unique ID per player
    person.style.backgroundColor = players[i].color;

    // Append to new cell
    let parentele = document.getElementById(`cell${players[i].score}`);
    if (parentele) {
      parentele.appendChild(person);
    }
  };

  document.body.appendChild(btn); // FIX: append to body
}
