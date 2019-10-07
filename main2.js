/*
    ARRAYS AS VALUES
*/

/*
    Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.
*/

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
nashvilleSoftwareSchool.instructors.partTime.forEach(a => console.log(a));

/*
    Lightning Exercise 2: Output only Andy and Zoe in the console.
*/

console.log(nashvilleSoftwareSchool.instructors.fullTime[4], nashvilleSoftwareSchool.instructors.partTime[0]);