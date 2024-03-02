/*
Singleton Pattern is a creational pattern. 

comes in handy when you want to Limit the number of instances of an object to at most 1.

Write a program that manages processes. 

two main components, process and process manager.
You can have one ore more processes but you want to limit the instance of process manager to 1. 

*/

// create a process
function Process(state) {
	this.state = state
}

// set to invoke function expression, create process manager
const Singleton = (function(){

	// inside we put any object constructor for any of the objects we want to limit.
	// in this case we are going to limit the number of instances of the process manager. 
	function processManager() 
	{
		this.numProcess = 0;
	}

	// store a reference of the only instance we are going to be allowed to use.
	let pManager // only instance allowed to use

	// not exposed to the outside, local to singleton
	// create process manager, inside going to assign pManager = to process manager and return pManager

	function createProcessManager()
	{
		pManager = new processManager()
		return pManager
	}

	return {
		getProcessManager:()=>{
			if(!pManager)
			
				pManager = createProcessManager()
				return pManager
		}
	}
}
)()

const processManager = Singleton.getProcessManager()
const processManager2 = Singleton.getProcessManager()

console.log(processManager === processManager2)
console.log(processManager)
console.log(processManager2)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        