/*
Singleton Pattern is a creational pattern. 

comes in handy when you want to Limit the number of instances of an object to at most 1.

Write a program that manages processes. 

two main components, process and process manager.
You can have one ore more processes but you want to limit the instance of process manager to 1. 

*/

function Process(state) {
	this.state = state
}

// set to invoke function expression
const ProcessManagerSingleton = (function(){

	// inside we put any object constructor for any of the objects we want to limit.
	// in this case we are going to limit the number of instances of the process manager. 
	function ProcessManager() {
		this.numProcess = 0;
	}

	// store a reference of the only instance we are going to be allowed to use.
	let pManager
	// not exposed to the outside, local to singleton
	function createProcessManager() {
		pManager = new ProcessManager ()
		return pManager
	}



})();


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        