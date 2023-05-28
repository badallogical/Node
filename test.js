var result = "Hello"

function random(a ){
    for( var i = 0; i < a ; i++){
        console.log(i)
    }
}

const ob1 = {
    "name" : "Ram",
    "Age" : 23,
    "DOB" : '12-3-20'
}

const test = {
    'fun1' : (a) => { for ( var i = 0; i < a; i++ ) console.log(i) },
    'value1' : result
};

exports.res = test
exports.person = ob1

