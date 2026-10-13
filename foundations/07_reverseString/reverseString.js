const reverseString = function(str) {
    let newString = "";
    for (let char of str) {
        newString = char + newString
    }
    return newString
};

// Do not edit below this line
module.exports = reverseString;
