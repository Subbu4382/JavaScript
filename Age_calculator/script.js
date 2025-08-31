let userinput = document.getElementById("date");
userinput.max = new Date().toISOString().split("T"[0]);
let btn = document.getElementById("btn");
let result=document.getElementById("result")
btn.addEventListener("click", function () {
  let dob = new Date(userinput.value);
  if (!userinput.value) {
    alert("⚠️ Please select your date of birth");
    return;
  }

  let today = new Date();

  let y = today.getFullYear() - dob.getFullYear();
  let m = today.getMonth() - dob.getMonth();
  let d = today.getDate() - dob.getDate();

  if (d < 0) {
    m--;
    d += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (m < 0) {
    y--;
    m += 12;
  }
  result.innerHTML=`You are <span>${y}</span> Years, <span>${m}</span> Months and <span>${d}</span> Days old`
});


