module.exports.factorical = function(a){
    var fact = 1
    while(a!=0){
        fact = fact * a;
        a--;
    }
    return fact;
}

exports.add = function( a, b ){
    return a+b;
}
