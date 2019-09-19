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
	
	
	subscribeToModel(_model) {
		this.model = _model;
		this.model.subscribeToPresenter(this);
		if (this.view == undefined) {
			this.view = this.createView(_model.data);
			this.view.subscribeToPresenter(this);
			this.subscribeToComponent(this.view);
		}
	}

	createView() {
		throw new Error("need to implement createView();");
	}

	subscribeToComponent(component) {
		this.view = component;
	}
}

class WorkoutRoutinePresenter extends Presenter {
	constructor() { 
		super()
	}
	
	createView(data) {
		return new components.WorkoutRoutine(data);
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

	modelExerciseAdded() {

	}

	modelStateChanged() {
		this.view.state = { exercises: this.model.data.exercises.map((exercise) => exercise.presenter.view) };
	}



	updateUI() {
		if (this.view == undefined) {
			throw new Error("presenter not subscribed to view component");
		}
	}

	inputReceived(event) {
		this.exerciseAdded(event);
	}
}

class ExercisePresenter extends Presenter {
	createView(data) {
		return new components.Exercise(data);
	}
}

class ExerciseSetPresenter extends Presenter{
	createView(data) {
		var propData = { id: data.id, rep_goal: data.rep_goal, weight: data.weight };
		return new components.ExerciseSet(propData);
	}
}

module.exports = {};
module.exports.Presenter = Presenter;
module.exports.WorkoutRoutinePresenter = WorkoutRoutinePresenter;
module.exports.ExercisePresenter = ExercisePresenter;
module.exports.ExerciseSetPresenter = ExerciseSetPresenter;