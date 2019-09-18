var components = require('./components.js');
class Presenter {
	

	constructor()
	{
		this.components = {};
		// this.addEventListener("ModelChanged", (data) => {
			// var modelId = data.id;
			// var component = this.components[modelId];
			// component.setState(data);
		// })
	}
	
	
	AssignStateChangeCallback(callback) {
		this.OnModelChanged = callback;
	}
	
	StateChanged(data) {
		this.OnStateChanged(data);
	}
	
	SubscribeToModel(model, component)
	{
		this.mapModelIDToCompoent(model.data.id, component);
	}
	

	
	
	mapModelIDToComponent(id, component)
	{
		this.components[id] = component;
	}
}

class WorkoutRoutinePresenter extends Presenter {
	constructor() { 
		super()
	}
	
	SubscribeToModel(model) {
		this.model = model;
		if (this.view == undefined) {
			this.view = new components.WorkoutRoutine(model.data);
		}
	}
}

module.exports = {};
module.exports.Presenter = Presenter;
module.exports.WorkoutRoutinePresenter = WorkoutRoutinePresenter;