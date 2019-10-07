// 2 ways to access the values stored inside of an object

//Lightning Exercise: Given the object below, output each of the values to the console using dot notation.
const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(wardrobe);
console.log(wardrobe.height, wardrobe.contents, wardrobe.manufacturer, wardrobe.depth, wardrobe.width);

// square brackets
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

/*
    Use dot notation to output all of the dimensions of the Empire State Building to the console.
*/
console.log(empireStateBuilding.stories, empireStateBuilding.height, empireStateBuilding.address);

/*
    Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. 
    Create 5 variables first with the keys as their values. Use those variables to look up the values.
*/

let bldgCost = "cost";
let bldgOwner = "owner";
let bldgEastLen = "eastWestLength";
let bldgSouthLen = "northSouthLength";
console.log(empireStateBuilding[bldgCost], "hellooooS");
console.log(empireStateBuilding[bldgOwner]);