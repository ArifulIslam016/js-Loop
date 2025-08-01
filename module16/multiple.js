const word='education'
if(word.includes('a')){
    if (word.includes("e")) {
      if (word.includes("i")) {
        if (word.includes("o")) {
          if (word.includes("u")) {
            var w = true;
          } else {
            w = false;
          }
        } else {
          w = false;
        }
      } else {
        w = false;
      }
    } else {
      w = false;
    }

}
else{
    w=false;
}
console.log(w)

const volwels=['a','e','i','u','o'];
const Wo = volwels.every( V=> word.includes(V));
console.log(Wo)