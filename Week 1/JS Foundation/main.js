let firstname = "Vicky";
let age = 18;
let ismarried = false;

console.log("this person name is " + firstname + "and their age is " + age);

for (let i = 0; i < 100; i++) {
  // console.log(i+1)
}

// const personArray = ["Vicky", "Sahil", "kirat"];

// console.log(personArray[0]);
// console.log(personArray[1]);

const alluser = [
  { firstN: "Vicky", gender: "male" },
  { firstN: "Kirat", gender: "male" },
  { firstN: "Riya", gender: "female" },
];

for(let i = 0; i<alluser.length; i++){
    if(alluser[i]["gender"] == "female"){
        console.log(alluser[i]["firstN"])
    }
}

function sum(a,b){
    return a+b;
}

console.log(sum(5,5));