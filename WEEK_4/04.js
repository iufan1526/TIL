let obj = {
    values : [1, 2, 3],
    logValues : function(i, z) {
        console.log(this, i, z);
    }
};

// global 이나온다.
[4 , 5, 6].forEach(obj.logValues);