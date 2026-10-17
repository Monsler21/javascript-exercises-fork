const palindromes = function (str) {
    const cleanStr = str.toLowerCase().replace(/[ ,!.']/g, '')
    const reverseStr = cleanStr.split('').reverse().join('');
    return (cleanStr === reverseStr) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
