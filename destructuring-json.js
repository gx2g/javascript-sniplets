
// 1.) Extract fields from JSON Object and store them in a variable


const person1 = {
    userName: "Code Bobby",
    skill: "Advanced Javascript"
}

const {userName, skill} = person1

console.log(userName);
console.log(skill);

console.log("===================================================");

// 2. Extract fields from JSON Object and store them in a new variable)
const person2 = {
    normalUser: "Code BOB",
    normalskill: "watching TV"
}

const {normalUser: loserName, normalskill: loserSkill} = person2

console.log(loserName);
console.log(loserSkill);

console.log("===================================================");

// 3.) Extract fields from JSON Object and store them in variable as well as create default value if field null

const player = {
    playerName: "Roberto Codes"
}

const {
    playerName: playerID,
    playerSkill: playerSkill = "passing default Value Here"
} = player

console.log(playerID);
console.log(playerSkill);

console.log("===================================================");
// 4.) Extract fields from JSON Object and store them to new variable as well as create default value if field null

let workerName = { 
    employeeName: "Robi Rob" 
}

let {
    employeeName: workerID = "doesn't matter, can't reassign const", // new variable assignment workerID
    workerSkill: workerTitle = "fire starter" // default new variable assignment workerTitle
} = workerName

console.log(workerID);
console.log(workerTitle);

console.log("Employee Name: " + workerID + " Employee Skill: " + workerTitle)