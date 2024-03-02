/*
Singleton Pattern is a creational pattern. 

comes in handy when you want to Limit the number of instances of an object to at most 1.

Write a program that manages processes. 

two main components, process and process manager.
You can have one ore more processes but you want to limit the instance of 
process manager to 1. 

*/

// create a process
function Process(state) {
	this.state = state
}

// set to invoke function expression, create process manager
const processManagerSingleton = (function(){

	/* 
	inside we put any object constructor for any of the objects we want to limit.
	in this case we are going to limit the number of instances of the process manager. 
	*/
	 function processManager() {
		this.numProcess = 0;
	}

	// store a reference of the only instance we are going to be allowed to use.
	let pManager // only instance allowed to use, not defined
	
	console.log(pManager) // test to see if pManager is declared

	/* 
	not exposed to the outside, local to singleton create process manager, inside 
	going to assign pManager = to process manager and return pManager
	*/
	function createProcessManager(){
		// create a new process manager instnace and return it as pManager
		pManager = new processManager()
		return pManager
	}
	// we are exposing an object that has a method called getProcessManager
	return {
		// call method
		getProcessManager:()=>{
			// checking if instance pManager is set to null
			if(!pManager)
				// create a new instance of our pManager, set pManager
				pManager = createProcessManager()
				// if it's already set just return our instance of pManager
				return pManager
		}
	}
}
)();

const processManager = processManagerSingleton.getProcessManager();
const processManager2 = processManagerSingleton.getProcessManager();
const processManager3 = processManagerSingleton.getProcessManager();

console.log(processManager === processManager2)
console.log(processManager2 === processManager3)

console.log(processManager)
console.log(processManager2)

let numProcess = 5
console.log(numProcess)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        