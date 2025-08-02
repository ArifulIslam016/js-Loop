const profile = {
     name: "Rahim",
      age: 28, 
      city: "Dhaka" };

// for (const k in profile) {
//    const value=profile[k]
//      console.log(value,":",k);
//     }
  
const keys=Object.keys(profile);
console.log(keys)
for (const k of keys) {
    console.log(k,':',profile[k])
}


