// function hello(){
//     console.log("Good Morning")
// }
// hello()

// function named(name){
//     console.log( "Welcome",name)
// }
// named("subbu")


// function sum(a,b){
//     return a+b
// }
// x=sum(4,7)
// console.log(x)

// function even(a){
//     if (a%2==0){
//       console.log("even")
//     }
//     else{
//         console.log("odd")
//     }
// }
// even(4)


// function loop(n){
//     for(let i=0;i<=n;i++){
//         console.log(i)
//     }
// }
// loop(5)



// // Arrow Functions

// const greet =()=> "i love you"
// console.log(greet())

// const mul=(a,b)=> {return a*b}
// console.log(mul(2,6))


// const neg = (num) =>{
//     if (num<0){
//         return "negative"
//     }
// }
// console.log(neg(-5))

// const odd_even =(x) =>{
//     if (x%2==0){
//         return "even"
//     }
//     else{
//         return "Odd"
//     }
// }
// console.log(odd_even(8))

// //  converting named functions to arrow functions

// function greet(){
//     console.log("Hello, friends")
// }

// const greet=()=> "Hello , friends"
// console.log(greet())

// function square(num){
//   console.log(num*num)
// }
// const square =(num)=>num*num
// console.log(square(22))

// //  converting arrow functions to named functions

// // const sayhi = ()=>console.log("how are you")
// function sayhi(){
//     console.log("How are you")
// }
// sayhi()

// // const cube=x=>console.log(x**3)
// function cube(x){
//     console.log(x**3)
// }
// cube(5)

// // call back functions
// // calling a function as a parameter in another function

// function greet(saybye){
//     console.log("how are you");
//     saybye();
// }
// function saybye(){
//     console.log("bye")
// }
// greet(saybye)

// // function Hosting
// // we can call a function before declaring the function
// fun_host(8)
// function fun_host(x){
//     console.log(x/2)
// }

// //Anonymous functions
// // A function without a name 
// const anon = function (a,b){
//     return a*b;
// };
// console.log(anon(3,5))

// setTimeout(function(){
//     console.log("it will execute after 5 sec");
// },5000);

// // Immediately Invoked function expression(IIFE)
// // A function defined and called itself immediately
// (function(){
//     console.log("this will execute immediately");
// })();

// // rest parameter Function 
// // allows a function to accept multiple parameters
// function mul_para(...nums){
//     for (let num of nums ){
//         console.log(num)
//     }
// }
// mul_para(1,2,3,4)

// // recursive function 
// // a function calls itself 
// function fact(n){
//     if (n==1) return 1;
//     return n*fact(n-1);
// }
// console.log(fact(5))