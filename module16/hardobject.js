let myObject = {
  name: "John Doe",
  age: 25,
  City: "Example City",
  isstudent: true,
};
for (const [ky, val] of Object.entries(myObject)) {
 
    console.log("key:", ky ,"| type:", typeof val);
}