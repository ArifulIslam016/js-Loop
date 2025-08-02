// const computer = {
//   brand: "lenovo",
//   price: 35000,
//   processor: "intel",
//   ssd: "512gb",
// };

// const c= Object.entries(computer) its make every single porperty array with their value
// const c= Object.keys(computer) just give the property name of object
// const c= Object.values(computer) give just value of object
// const haspoperty= Object.keys(computer).includes("price") Checket the specific name in object
// const haspoperty= Object.values(computer).includes("1tb"); Check the specific value

// ****** another way of cheecking property
// const computer = {
//   brand: "lenovo",
//   price: 35000,
//   processor: "intel",
//   ssd: "512gb",
// };


// if('brand' in computer){
//   console.log('yeah here is brand availabe'
// } it checeked property in any object and this is in method
// else{
//   console.log('This is a local product')
// }




const computer = {
  brand: "lenovo",
  price: 35000,
  processor: "intel",
  ssd: "512gb",
};

if(computer.price>=30000)
{
  console.log('Price is too much')
}
else{
  console.log('This is value for money')
}
