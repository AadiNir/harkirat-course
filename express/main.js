// let fname = prompt("write ur fname");
// let lname = prompt("write ur last name");
// setInterval(()=>{
//     let a = new Date();
//     let h = a.getHours().toString();
//     let m = a.getMinutes().toString();
//     let s = a.getSeconds().toString();
//     console.log(`${h}:${m}:${s}`)
// },1000);
let obj = [{
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
},{
    id: 2,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
},
{
    id: 3,
    timestamp: 1656076800000,
    price: 20,
    category: 'Food',
    itemName: 'Pizza',
},
{
    id: 4,
    timestamp: 1656076800000,
    price: 20,
    category: 'Food',
    itemName: 'Pizza',
}



]

// function calculateTotalSpentByCategory(transactions) {
//     return[transactions.map((a)=>{
//     })]
//   }
//   console.log(calculateTotalSpentByCategory(obj));

class calculator {

    constructor(){
        this.result=0;
    }
    add(val){
        this.result+=val;
    }
    val(){
        console.log(this.result);
    }
    sub(val){
        this.result-=val;
    }
    mul(val){
        this.result*=val;
    }
    div(val){
        this.result/=val;
    }
}

let a = new calculator();
a.add(1);
a.val();
a.mul(4);
a.mul(4);
a.val();
// let k = "hello";
// let j=k.replace("l","");
// console.log(j);
let i=0;

while(i<16){
setTimeout(()=>{
    i+=1;
    console.log(i);
},1000)
}