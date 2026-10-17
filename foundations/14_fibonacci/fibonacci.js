const fibonacci = function(place) {
    let lastNum = 1
    let befLastNum = 1
    let newNum = 0

    if (place < 0){
        return 'OOPS';
    } else if (place == 0) {
        return 0;
    } else if ((place) <= 2) {
        return 1;
    } else {
        for (let i = 1; i <= place - 2; i++) {
            newNum = befLastNum + lastNum;
            befLastNum = lastNum;
            lastNum = newNum;
        };   
    };
    return newNum;
};

// Do not edit below this line
module.exports = fibonacci;
