// Type conversion
let bool=true;
let n=10;
let res=bool +n;
console.log(res)

let s="123";
var num=123;
console.log(s/num)

// Positive , Negative or Zero
let num=30;
if(num>0){
    console.log("Positive Number")
}
else if(num<0){
    console.log("Negative number")
}
else{
    console.log("Zero")
}

// Largest of two numbers
var a=10;
var b=20;
if (a>b){
    console.log("a is greater")
}
else{
    console.log("b is greater")
}



// Check voting eligibility
let age=21;
if (age>=18){
    console.log("eligibile for vote")
}
else{
    console.log("Not eligibile")
}

// grade checker
let marks=100;
if(90<=marks<=100){
    console.log("Grade A")
}
else if(75<=marks<=89){
    console.log("Grade B")
}
else if(50<=marks<=74){
    console.log("Grade C")
}
else{
    console.log("Fail")
}

// Divisible by 5 and 11
let num=55;
if (num%5==0 && num%11==0){
    console.log("divissible by both 5 and 11")
}
else if(num%5==0){
    console.log("divisible by 5")
}
else if(num%11==0){
    console.log("divisible by 11")
}
else{
    console.log("not divisible by both 5 and 11")
}

// simple calculator using switch case
let a = 10;
let b = 20;
let op = "+";

switch (op) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        if (b !== 0) {
            console.log(a / b);
        } else {
            console.log("Cannot divide by zero");
        }
        break;
    default:
        console.log("Invalid operator");
}
