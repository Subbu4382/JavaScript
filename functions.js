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



// Arrow Functions

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

//  converting named functions to arrow functions

// function greet(){
//     console.log("Hello, friends")
// }

const greet=()=> "Hello , friends"
console.log(greet())

// function square(num){
//   console.log(num*num)
// }
const square =(num)=>num*num
console.log(square(19))

