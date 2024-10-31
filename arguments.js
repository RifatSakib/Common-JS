// array like object
function sum(a, b, c){ // here a,b,c,are parameters
    // console.log(arguments)// array like object output dey but etay push kora jaay na karon eta array na
    const args = [...arguments]; // eta array hoye gese ekhon
    
    
    // console.log(args);
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56); // here 45,89,12... are arguments
// console.log(total);
console.log(sum.length); // ekhane bujhabe function a koyta parameter ase