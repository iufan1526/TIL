// refactoring

const addCoffee = function(name) {
    return function(prevName) {
        return new Promise(function(resolve){
            setTimeout(function() {
                let newName = prevName ? `${prevName}, ${name}` : name;
                console.log(newName);
                resolve(newName);
            }, 500);
        })
    };
}

addCoffee('에소프레소')().then(addCoffee('아메리카노'));