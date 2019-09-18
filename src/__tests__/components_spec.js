const fs = require('fs');
// React = require('react');
// ReactDOM = require('react-dom');
import * as app from '../components.js';
import * as models from '../components.js';
import * as presenters from '../presenters.js';

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// function getExerciseTestObject() {
// 	return new app.Exercise({ exercise_name: "squat" });
// }
// it("Exercise should render()", function () {
// 	var exercise = getExerciseTestObject();
// 	var rendered = exercise.render();
// 	expect(rendered).toBeDefined();
// })
// it("Exercise should be able to have ExcerciseSets added to it", function () {
// 	var exercise = getExerciseTestObject();
// 	act(() => {
// 		render(exercise, container)
// 		expect(exercise.state.sets).toEqual([]);
// 		exercise.addSet(new app.ExerciseSet({ weight: 125, rep_goal: 2, reps_completed: 5}));
// 		expect(exercise.state.sets.length).toBe(1);
// 		exercise.addSet(new app.ExerciseSet({ weight: 125, rep_goal: 2, reps_completed: 5}));
// 		expect(exercise.state.sets.length).toBe(2);
// 	})
	
	
// });
// it("Exercise should have a name", function () {
// 	expect(getExerciseTestObject().props.exercise_name).toBe("squat");
// })




describe("workout_app", function() {
	describe("WorkoutRoutine", function () {
		function getWorkoutRoutineTestObject() {
			return new app.WorkoutRoutine()
		}
		it("should render without any exercises", function () {
			var routine = getWorkoutRoutineTestObject();
			act(() => {
				render(routine, container);
			})
			expect(routine).toBeDefined();
		});

		it("should be able to have exercises added", function () {
			var routine = getWorkoutRoutineTestObject();
			expect(routine.state.exercises.length).toBe(0);
			routine.addExercise(new app.Exercise({name: "rows"}));
			expect(routine.state.exercises.length).toBe(1);
		})
	});

	describe("AddExerciseButton", function () {
		function getAddExerciseButtonTestObject() {
			
		}
	})
	// describe("Model", function () {
		// function getModelTestObject() {
			// return new models.Model({ id: 0, exercises: []})
		// }
		// it("should have a Data property", function () {
			// expect(getModelTestObject().data).toEqual({ id: 0, exercises: []});
		// })
		// describe("OnModelUpdate()", function () {
			// it("dispatch a 'ModelChanged' event", function () {
				// var testObject = getModelTestObject();
				// model.OnModelUpdate();
			// })
			// expect(getModelTestObject().presenter).toBeDefined();
		// })
	
	// })
	
	describe("ExerciseModel", function () {
		function getModelTestObject() {
			return new models.ExerciseModel({ id: 0, exercise_name: "squat" });		
		}
		it("should be constructed with an object that has exercise_name", function () {
			var testObject = getModelTestObject();
			expect(testObject.data.exercise_name).toBe("squat");
			
			expect(() => { new models.ExerciseModel({ id: 0 })}).toThrow(new Error("data.exercise_name must not be undefined"));
		});
	})
	
	describe("WorkoutRoutineModel", function () {
		function getModelTestObject() {
			return new presenters.WorkoutPresenter();		
		}
		it("should notify a Presenter when the data is manipulated", function () {
			
		})
		
		it("should contain a dynamic list of ExerciseModels", function () {
			
		})
	})
	
	describe("WorkoutRoutinePresenter", function () {
		function getModelTestObject() {
			return new presenters.WorkoutPresenter();		
		}
		describe("SubscribeToModel(_model)",function (){
			it("should create a WorkoutRoutineComponent if view does not exist", function () {
				var testObject = getModelTestObject();
				var data = { id: 0 };
				var model = new models.WorkoutRoutineModel(data);
				expect(testObject.view).toBe(undefined);
				testObject.SubscribeToModel(model);
				expect(testObject.view).toBeDefined();
			})
		}) 
	})
	
	// describe("Presenter", function () {
		// function getPresenterTestObject() {
			// return new presenters.Presenter();
		// }
		
		// it("should have a Model object subscribe to it", function () {
			// var model = new models.Model({dataA: "A", dataB: "B"});
			// var testObject = getPresenterTestObject();
			// testObject.SubscribeToModel(model);
			// expect(testObject).model.toEqual(new models.Model({dataA: "A", dataB: "B"}));
		// });
		
		// it("should create a view (React.Component) if it does not exist when calling UpdateView()", function () {
			// var model = new models.Model({dataA: "A", dataB: "B"});
			// var testObject = getPresenterTestObject();
			// testObject.SubscribeToModel(model);
			// testObject.UpdateView();
		// })
	// })
});

