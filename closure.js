function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}

const firstServer = kitchen();
const firstServer1 = kitchen();
const firstServer2 = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer1());
console.log(firstServer2());
console.log(firstServer1());
console.log(firstServer2());
console.log(firstServer2());
console.log(firstServer());


//ekhane protteker nijessho man thakbe ebong pore call korle shei man thekei se continue korbe.