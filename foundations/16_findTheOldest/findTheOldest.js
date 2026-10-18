const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();
    arr.forEach((person) => {
        if (person.yearOfDeath === undefined) {
                person.yearOfDeath = Number(currentYear);
        }
    });
    const sortOldest = arr.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth) ? 1 : -1);
    return sortOldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
