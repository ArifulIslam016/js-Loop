const sen=' hey how are you Vai Kemon Asen Apni'
const a= sen.toLocaleLowerCase().split('a').length-1
console.log(a)
let count=0;
for (const again of sen) {
    if(again.toLocaleLowerCase()==='a'){
    count++
    }
}
console.log(count)