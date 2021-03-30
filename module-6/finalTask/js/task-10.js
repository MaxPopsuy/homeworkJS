import users from "./users.js";

const getSortedUniqueSkills = (users) => {
    return users
        .reduce((accum, currentValue) => [...accum, ...currentValue.skills], [])
        .reduce(
        (accum, currentValue) =>
            (accum = accum.includes(currentValue)
            ? accum
            : [...accum, currentValue]),[]).sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
