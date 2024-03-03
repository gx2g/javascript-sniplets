/*

Strategy Pattern 

referrs to encapsulating a group of data or functions

what is Encapsulation in OOP?

Encapsulation is a way to restrict the direct access to some 
components of an object, so users cannot access state values for 
all of the variables of a particular object. Encapsulation can be
used to hide both data members and data functions or methods associated
with an instantiated class or object.


- In object-oriented computer programming (OOP) languages, the notion of encapsulation 
  (or OOP Encapsulation) refers to the bundling of data, along with the methods 
  that operate on that data, into a single unit.

- Containers are just one example of encapsulation in coding where data and methods 
  are bundled together into a single package.

- A key benefits to hiding information about attributes and methods using encapsulation 
  in programming is that it prevents other developers from writing scripts or APIs that 
  use your code.

- Sumo Logic complements your existing cyber security measure with cutting-edge 
  threat detection and security analytics powered by artificial intelligence.


Benefits of encapsulation programming

Encapsulation in programming has a few key benefits. These include:

Hiding data: 
Users will have no idea how classes are being implemented or stored. 
All that users will know is that values are being passed and initialized.

More flexibility: 
Enables you to set variables as read or write-only. 
Examples include: setName(), setAge() or to set variables as write-only 
then you only need to omit the get methods like getName(), getAge() etc.

Easy to reuse: 
With encapsulation, it's easy to change and adapt to new requirements

Strategy Pattern allows you to swap strategies in and out for each other. 
All a Strategy is, is functions.

Example: Lets create a program that gives us different shipping costs using strategies.


*/

function FedexFirstClass ()
{
    this.calculate = package=>{
        // Fedex tax calulations goes here
        return 2.50
    }
}

function UpsGroundShipping ()
{
    this.calculate = package=>{
        // UPS tax calulations goes here
        return 1.45
    }
}


function AmazonNextDay()
{
    this.calculate = package=>{
        // Amazon Next Day tax calulations goes here
        return 6.99
    }
}

function Shipping() 
{
    this.company = ""
    this.setStrategy = (company)=> {
        this.company = company
    }
    this.calculate = package=> {
        return this.company.calculate(package)
    }
}

// create instances of each function
const fedex = new FedexFirstClass()
const ups = new UpsGroundShipping()
const amazon = new AmazonNextDay()


const package = { from: 'California', to: 'Arazona', weight: 1.0 }

// console.log(fedex)
// console.log(ups)
// console.log(amazon)


// create an instance of shipping
const shipping = new Shipping()

shipping.setStrategy(fedex)
console.log("Fedex: " + shipping.calculate(package))

shipping.setStrategy(ups)
console.log("UPS: " + shipping.calculate(package))

shipping.setStrategy(amazon)
console.log("Amazon: " + shipping.calculate(package))