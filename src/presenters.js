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
		this.change = false;
	}
	
	SubscribeToModel(workoutRoutineModel) {
		this.model = workoutRoutineModel;
		if (this.view == undefined) {
			this.view = new components.WorkoutRoutine(workoutRoutineModel.data);
			this.view.subscribeToPresenter(this);
			this.subscribeToComponent(this.view);
		}
	}

	subscribeToComponent(component) {
		this.view = component;
	}

	exerciseAdded(event) {
		var lastExerciseIndex = this.view.state.exercises.length - 1;
		var newExerciseProps = this.view.state.exercises[lastExerciseIndex].props;
		var newExerciseState = this.view.state.exercises[lastExerciseIndex].state;
		var newExerciseData = {
			exercise_name: newExerciseProps.exercise_name,
			sets: newExerciseState.sets
		}
		this.model.addExercise(newExerciseData)
	}

	inputReceived(event) {
		this.exerciseAdded(event);
	}
}

module.exports = {};
module.exports.Presenter = Presenter;
module.exports.WorkoutRoutinePresenter = WorkoutRoutinePresenter;