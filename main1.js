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
console.log("Hi, from Metro Center")
console.log(empireStateBuilding["stories"], "testing");
console.log(empireStateBuilding["height"]);
console.log(empireStateBuilding["address"]);
console.log(empireStateBuilding["squareFeet"]);