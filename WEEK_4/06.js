// promise
new Promise(function(resolve){
    setTimeout(function() {
        let name = '에소프레소';
        console.log(name);
        resolve(name);
    }, 500);
}).then(function(prevName) {
    return new Promise(function(resolve){
        setTimeout(function() {
            let name = '에소프레소';
            console.log(name);
            resolve(name);
        }, 500);
    })
})