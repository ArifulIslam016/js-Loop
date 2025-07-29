// let sum=0
// for(i=0;i<=30;i++){
//   if (i % 2 == 0) {
//     // console.log(i);
//     sum+=i
//   }
// }
// console.log(sum)

// let total=0;
// for(n=10; n<=30;n++){
//     if(n%2!==0){
//         console.log("The odd number between10-30:",n)
//         total+=n
//     }

// }
// console.log("The total of odd numbers between 10-30",total)

// specifc numbers
sum=0
for(let N=0;N<90;N++){
    if(N%3==0 || N%5==0){
       console.log(N)
       sum+=N
     
    }
}  console.log("Sum of specific:", sum);