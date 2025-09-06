const btn=document.getElementById("btn")
const result=document.getElementById("result")
const gifts=[
    "100rs",
      "200rs",
      "300rs",
      "400rs",
      "500rs",
      "600rs",
      "700rs",
      "800rs",
      "900rs",
      "1000rs",
      "1100rs",
      "1200rs",
      "1300rs",
      "1400rs",
      "1500rs",
]
btn.addEventListener("click",function(){
    let rand_num=Math.ceil(Math.random()*15)
    let gift=gifts[rand_num-1]
    result.textContent=`you got ${rand_num} , and You Won ${gift}`

});