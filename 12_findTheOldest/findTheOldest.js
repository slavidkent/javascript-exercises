const findTheOldest = function (peoples) {
    return peoples.reduce((oldestGuy, people) => {
        if (calculateAge(oldestGuy) < calculateAge(people)) {
            oldestGuy = people;
        }
        return oldestGuy;
    });
};

const calculateAge = (obj) => {
    let age = 0;
    if (obj.yearOfDeath === undefined) {
        age = new Date().getFullYear() - obj.yearOfBirth;
    } else {
        age = obj.yearOfDeath - obj.yearOfBirth;
    }
    console.log(`age of ${obj.name} is ${age}`)
    return age;
};

// Do not edit below this line
module.exports = findTheOldest;
