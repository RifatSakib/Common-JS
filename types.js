//1

// strongly/static typed Language
// int a = 5;
// string b = 'alim halim khalim';
// bool c = True;
// object student = { name: 'noya dhman', id: 55}
// int[] numbers = [12, 45, 78]
// string[] friends = ['abul', 'babul'];

// JavaScript is a dynamic typed Language

// primitive type
const a = 5;
const b = 'Samsu kopai na ekhon ar';
const d = true;


// non-primitive 
const ages = [45, 65, 48];
const student = {id: 23, class: 7};

// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = {job: 'web developer'}
let q = p;

// q = {job: 'backend developer'} //{ job: 'web developer' } { job: 'backend developer' }  karon ekhane q puratakei new value diye reassign kora hoise, tai notun memory  refference hoise

q.job = 'front end developer';// { job: 'front end developer' } { job: 'front end developer' } karon ekhane shudhu olpo ongsho modifi kora hoise tai same memory referrence use hoise
console.log(p, q);