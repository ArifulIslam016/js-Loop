let sentence = "The quick brown fox jumps over a lazy dog";
const a = sentence.split('a').length-1;
console.log(a)

console.log(sentence)
let count =0;
for (const again of sentence) {
    if(again==='a'){
    //    var A= again;
   count++
    }
    // console.log(A.length)
}
console.log(count)