const fs = require('fs');
// React = require('react');
// ReactDOM = require('react-dom');
var app = require("./components.js");

//import ExerciseSet from './public/js/workout_app.js';

describe("workout_app", function() {

	describe("Excercise", function () {
		function getExerciseTestObject() {
			return new app.Exercise({ exercise_name: "squat", sets: []});
		}
		it("should render()", function () {
			var exercise = getExerciseTestObject();
			var rendered = exercise.render();
			expect(rendered).toBeDefined();
		})
		it("should be able to have ExcerciseSets added to it", function () {
			var exercise = getExerciseTestObject();
			expect(exercise.props.sets.length).toBe(0);
			exercise.addSet(new app.ExerciseSet({ weight: 125, rep_goal: 2, reps_completed: 5}));
			expect(exercise.props.sets.length).toBe(1);
			exercise.addSet(new app.ExerciseSet({ weight: 125, rep_goal: 2, reps_completed: 5}));
			expect(exercise.props.sets.length).toBe(2);
		});
		it("should have a name", function () {
			expect(getExerciseTestObject().props.exercise_name).toBe("squat");
		})
	})
	describe("ExcerciseSet", function () {
		function getExerciseSetTestObject() {
			return new app.ExerciseSet({weight: 125, rep_goal: 5, reps_completed: 5 })
		}
		it("should have weight, rep_goal and reps_completed attributes", function () {
			var exerciseSet = getExerciseSetTestObject()
			expect(exerciseSet.props.weight).toBe(125);
			expect(exerciseSet.props.rep_goal).toBe(5);
			expect(exerciseSet.props.reps_completed).toBe(5);
		});
		it("should render", function () {
			var exerciseSet = getExerciseSetTestObject();
			expect(exerciseSet.render()).toBeDefined();
		});
	})

	describe("WorkoutRoutine", function () {
		function getWorkoutRoutineTestObject() {
			return new app.WorkoutRoutine()
		}
		it("should render without any exercises", function () {
			var routine = getWorkoutRoutineTestObject();
			expect(routine.render()).toBeDefined();
		});

		it("should be able to have exercises added to it if it is being edited", function () {
			var routine = getWorkoutRoutineTestObject();
			expect(routine.props.exercises.length).toBe(0);
			routine.addExercise(new app.Exercise({name: "rows"}));
			expect(routine.props.exercises.length).toBe(1);
		})
	})
});

