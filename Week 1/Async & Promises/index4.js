function vickyAsyncFunction(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hi There")
        }, 2000)
    });
}

// // Without awaits
// async function main(){
//     const value = vickyAsyncFunction();
//     console.log(value);
// }

// with awaits
async function main(){
    const value = await vickyAsyncFunction();
    console.log(value);
}

main()