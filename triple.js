//4

// always use ===
// equal comparison work differently for non-primitive cause they check the reference equality not the value, if same reference then true otherwise False 

const first = [45, 54, 98];
const second = [45, 54, 98];
if(first === second){
    console.log('values are equal')
}
else{
    console.log('values are not equal');
}

// type coercion
// type conversion
// type casting

