



// 1.) Extract fields from JSON Object and store them in a variable
const person1 = {
    userName: "Code Bobby",
    skill: "Advanced Javascript"
}

const {userName, skill} = person1

console.log(userName);
console.log(skill);

// 2. Extract fields from JSON Object and store them in a new variable)
const person2 = {
    userName: "Code BOB",
    skill: "watching TV"
}

const {userName: loserName, skill: loserSkill} = person2

console.log(loserName);
console.log(loserSkill);

// 3.) Extract fields from JSON Object and store them in variable as well as create default value if field null

const person3 = {
    playerName: "Code BOB"
}

const {
    playerName = "Roberto Codes",
    playerSkill = "passing default Value Here"
} = person3

console.log(userName);
console.log(playerSkill);

// 4.) Extract fields from JSON Object and store them to new variable as well as create default value if field null

const workerName = { 
    employeeName: "Robi Rob" 
}

const {
    workerName: workerID = "Bob Fuegos", // new variable assignment workerID
    workerSkill: workerTitle = "fire starter" // default new variable assignment workerTitle
} = workerName

console.log(workerID);
console.log(workerTitle);