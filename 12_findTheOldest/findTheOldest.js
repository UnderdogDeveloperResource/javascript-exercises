const findTheOldest = function(people) {
    let oldestPerson = null;
    people.forEach(person => {
        if(oldestPerson === null) oldestPerson = person;
        else {
            let newPersonAge = (person.yearOfDeath ?? new Date().getFullYear()) - person.yearOfBirth;
            let oldPersonAge = (oldestPerson.yearOfDeath ?? new Date().getFullYear()) - oldestPerson.yearOfBirth;
            if(newPersonAge > oldPersonAge) {
                oldestPerson = person;
            }
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
