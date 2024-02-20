// Arrow Function
// function sum(a,b){
//     return a+b;
// }

// const sum = (a,b) => {
//     return a+b;
// }

// console.log(sum(1,2));


// map() function
// const input = [1,2,3,4,5];

// const ans = input.map(function(i){
//     return i * 2;
// })

// console.log(ans);

const arr = [1,2,3,4,5];

const ans = arr.filter(function(i){
    if(i%2 == 0){
        return true;
    }else{
        return false;l̥
    }
})

console.log(ans);