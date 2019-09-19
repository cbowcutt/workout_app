var presenters = require("./presenters");

var WorkoutRoutinePresenter = presenters.WorkoutRoutinePresenter;
var ExercisePresenter = presenters.ExercisePresenter;
var ExerciseSetPresenter = presenters.ExerciseSetPresenter;

class Model {
	constructor(_data)
	{
		if (_data == undefined) {
			_data = { id: AssignNewID() };
		}
		else if (_data.id == undefined) {
			_data.id = { id: AssignNewID() };
		}
		this.data = _data;
	}

	subscribeToPresenter(presenter) {
		this.presenter = presenter;
	}
	
	

	
	OnModelUpdate() {
		this.dispatchEvent(ModelChanged);
	}
}

class WorkoutRoutineModel extends Model {
	constructor(data) {
		super(data);
		if (this.data.exercises == undefined) {
			this.data.exercises = [];
		}
		this.presenter = new WorkoutRoutinePresenter();
		this.presenter.subscribeToModel(this);
	}

	addExercise(newExerciseData) {
		if (newExerciseData.exercise_name == undefined) {
			newExerciseData.exercise_name = "New Exercise";
		}
		this.data.exercises.push(new ExerciseModel(newExerciseData));
		this.modelChanged();
	}

	modelChanged() {
		this.presenter.modelStateChanged();
	}


}

class ExerciseModel extends Model {
	constructor(data) {
		super(data);
		if (this.data.exercise_name == undefined)
		{
			throw new Error("data.exercise_name must not be undefined");
		}
		if (this.data.sets == undefined) {
			this.data.sets = [];
		}
		this.presenter = new ExercisePresenter();
		this.presenter.subscribeToModel(this);
	}

	addExerciseSet(exerciseSetData) {
		ValidateExerciseSetData(exerciseSetData);
		this.data.sets.push(new ExerciseSetModel(exerciseSetData));
		this.presenter.setAdded();
	}
}

function ValidateExerciseSetData(data) {
	if (data.weight == undefined) {
		throw new Error("weight is undefined")
	}
	if (data.rep_goal == undefined) {
		throw new Error("rep_goal is undefined")
	}
	// if (data.reps_completed == undefined) {
	// 	throw new Error("reps_completed is undefined")
	// }
}

class ExerciseSetModel extends Model {
	constructor(data) {
		super(data);
		ValidateExerciseSetData(data);
		this.presenter = new ExerciseSetPresenter();
		this.presenter.subscribeToModel(this);
	}
}

var id = 0;

function AssignNewID() {
	return id++;
}

module.exports = {};
module.exports.Model = Model;
module.exports.WorkoutRoutineModel = WorkoutRoutineModel;
module.exports.ExerciseModel = ExerciseModel;
module.exports.ExerciseSetModel = ExerciseSetModel;