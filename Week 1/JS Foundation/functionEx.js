function sum(num1, num2, funTocall){
    let result = num1+num2;
    funTocall(result);

}

function displayResult(data){
    console.log("Result of the sum is : "+data);
}

function displayResultPassive(data){
    console.log("Sum's result is : "+data);
}

const ans = sum(1,2,displayResultPassive);