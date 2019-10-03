/*
    Lightning Exercise 1: Given two options of data structures - array or object - which should you use? 
    You need to represent a red 2015 Ford Mustang in your code.
*/

// Use an object to store represent the mustang 
const mustang = {
    color: "red",
    year: 2015,
    make: "Ford",
    model: "Mustang"
}

let mainContainer = document.querySelector(".main-container");
mainContainer.innerHTML = `<p> The ${mustang.make} ${mustang.model} 
                                color was ${mustang.color} and it was a ${mustang.year} edition.</p>`;

/*
   Lightning Exercise 2: Given two options of data structures - array or object - 
   which should you use? You need to store list of animal names in a shelter. 
   The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky". 
*/                              
 
// Use an array because it's a list and not representing something 
const animalShelter = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];

/*
    Lightning Exercise 3: Define an object for four family members, and put each object in an array named 
    familyMembers. Each family member object that you create should have the same keys on them, 
    but the values will be different.
*/
let familyMembers = [];

const mother = {
    name: "LaTonja",
    sign: "Libra"
}
familyMembers.push(mother)

const father = {
    name: "Letherio",
    sign: "Libra"
}
familyMembers.push(father)

const youngBrother = {
    name: "DeSean",
    sign: "Capricorn"
}
familyMembers.push(youngBrother)

const sister = {
    name: "Jameka",
    sign: "Aquarius"
}
familyMembers.push(sister)

let famContainer = document.querySelector(".family-container");
familyMembers.forEach(fam => {
    famContainer.innerHTML += `<div>
                                    <p>${fam.name} is an ${fam.sign}. </p>
                                </div>`;
})