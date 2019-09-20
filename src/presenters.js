var components = require('./components.js');
var PresenterController = require('./presenterController.js');
var ReactDOM = require('react-dom')
class Presenter {
	

	constructor()
	{
	}
	
	
	subscribeToModel(_model) {
		this.model = _model;
		this.model.subscribeToPresenter(this);

		if (this.view == undefined) {
			this.view = this.createView(_model.data);
			this.view.subscribeToPresenter(this);
			this.subscribeToComponent(this.view);
			PresenterController.registerPresenter(_model.data.id, this);
		}
	}

	createView() {
		throw new Error("need to implement createView();");
	}

	subscribeToComponent(component) {
		this.view = component;
	}

	updateUI() {
		// try {
		// 	var container = ReactDOM.findDOMNode(this.view);
		// 	ReactDOM.render(this.view.render(), container);
		// }
		// catch (exception) {
		// 	console.log("could not render")
		// }
		
		
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

	setAdded() {
		this.view.state = { sets: this.model.data.sets.map((s) => s.presenter.view)}
		global.updateWorkoutRoutineView();
	}

	buttonClicked(e, behavior)
	{
		if (behavior == "addNewExerciseSet") {
			this.model.addExerciseSet({ weight: 0, rep_goal: 0 });
		}
	}
}

class ExerciseSetPresenter extends Presenter{
	createView(data) {
		var propData = { id: data.id, rep_goal: data.rep_goal, weight: data.weight };
		return new components.ExerciseSet(propData);
	}

	inputReceived(e) {
		e.preventDefault();
		this.model.modifyRepsCompleted(e.target.value);
	}

	repsModified() {
		this.view.state.reps_completed = this.model.data.reps_completed;
	}
}

class AppPresenter extends Presenter {
	createView(data) {
		return new components.App(data);
	}
}

module.exports = {};
module.exports.Presenter = Presenter;
module.exports.WorkoutRoutinePresenter = WorkoutRoutinePresenter;
module.exports.ExercisePresenter = ExercisePresenter;
module.exports.ExerciseSetPresenter = ExerciseSetPresenter;