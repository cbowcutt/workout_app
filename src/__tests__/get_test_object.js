import { Exercise, ExerciseSet, WorkoutRoutine } from '../components.js';
import { ExerciseModel, WorkoutRoutineModel, ExerciseSetModel } from '../models.js';
import { WorkoutRoutinePresenter} from '../presenters.js';

module.exports = {}
function getExerciseTestObject() {
	return new Exercise({ id: "0", exercise_name: "squat" });
}

function getExerciseSetTestObject() {
	return new ExerciseSet({ id: 10, weight: 125, rep_goal: 5, reps_completed: 5 })
}

function getExerciseSetModelTestObject() {
	return new ExerciseSetModel({ id: 10, weight: 125, rep_goal: 5, reps_completed: 5 })
}

function getWorkoutRoutinePresenterTestObject() {
	return new WorkoutRoutinePresenter();		
}

function getExerciseModelTestObject() {
	return new ExerciseModel({ id: 20, exercise_name: "squat" });		
}

function getWorkoutRoutineTestObject() {
	return new WorkoutRoutine({ id: "test-workoutRoutine"})
}

function getWorkoutRoutineModelTestObject() {
	return new WorkoutRoutineModel({ id: "test-workoutRoutine"});
}

module.exports.getExerciseTestObject = getExerciseTestObject;
module.exports.getExerciseSetTestObject = getExerciseSetTestObject;
module.exports.getWorkoutRoutinePresenterTestObject = getWorkoutRoutinePresenterTestObject;
module.exports.getExerciseModelTestObject = getExerciseModelTestObject;
module.exports.getExerciseSetModelTestObject = getExerciseSetModelTestObject;
module.exports.getWorkoutRoutineTestObject = getWorkoutRoutineTestObject;
module.exports.getWorkoutRoutineModelTestObject = getWorkoutRoutineModelTestObject;