function myAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(resolve, 2000)
    });
    return p;
}

myAsyncFunction().then(function(){
    console.log("Hii There");
})