const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};

console.log(colors["golden rod"]);

// add property in obejct
const car = {
  make: "Toyota",
  model: "corolla",
  year: "2020",
};
car['passenger capacity']=5
console.log(car)


// mark of a student
const stdent={
    name:'Hamim sakem',
    id: 521,
    physics:{
        subject: 'hsc physic',
        author:'Shahjahan Tapan',
        marks:30,
    }
}
console.log(stdent.physics.marks)

// poperty number count
let learner={
    name: 'Ariana Grande',
    age: 21,
    city:'Gaibandha',
    isstudent:true,
}
 var lp = Object.keys(learner);
 console.log(lp.length)