function BMI_cal(event){
    let name=document.getElementById("name").value
    let height=parseFloat(document.getElementById("height").value)
    let weight=parseFloat(document.getElementById("weight").value)
    height=height*0.01
     
    if(!weight || !height|| weight<=0 || height<=0){
        document.getElementById("result").innerHTML="Please enter a valid number"
        return
    }
    let bmi=weight / (height*height)
    let status=""
    
      if (bmi < 18.5) {
        status = "Underweight";
      } else if (bmi < 24.9) {
        status = "Normal weight";
      } else if (bmi < 29.9) {
        status = "Overweight";
      } else {
        status = "Obesity";
      }
    document.getElementById("result").innerHTML=`${name} Your BMI is ${bmi.toFixed(2)} Kg/m^2 <br> 🔸 ${status}`
}