/* 
https://www.youtube.com/watch?v=kuirGzhGhyw&list=PLFKDYTlP3abzwWleHq1WHcKyi8nCPY74s

(creational catagory)

object creation mecanisms that promote flexablity and reusablity 
of your code in situations where you have to create many different 
types and many different objects

Factory Pattern - An Object that creates for manufactors different Objects
Allowing to handle all creation in a centeralized location. 

don't have to keep using new object, making the code ugly 
through out your code. 

keeping your code clean

*/ 

function developer(name) {
    this.name = name
    this.type = "Developer"

}

// console.log(developer("Bobbo"))

function tester(name) {
    this.name = name
     this.type = "Tester"
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch(type) 
        {
            case 1:
                return new developer(name)
                break;
            case 2:
                return new tester(name)
                break;
        }
    }
}

function say(){
    console.log("Employee Name:" + " " + this.name + " - " + "Job Title:" + " " + this.type)
}


const companyEmployee = new EmployeeFactory()
const employees = []

employees.push(companyEmployee.create("Bob Fuegos", 1))
employees.push(companyEmployee.create("Somantha Fuegos", 2))

employees.forEach( emp => {
    say.call(emp)
})