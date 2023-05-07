'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (names,prefix) => {
    let mrs = [];
    for (let elem of names) {
        mrs.push(prefix + " " + elem); 
    }
    return mrs;
}

console.log(addPrefix(names, 'Mr'));