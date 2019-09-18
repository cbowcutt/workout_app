const fs = require('fs');
// React = require('react');
// ReactDOM = require('react-dom');
import { Exercise, ExerciseSet, WorkoutRoutine } from '../components.js';
import { ExerciseModel, WorkoutRoutineModel } from '../models.js';
import { WorkoutRoutinePresenter} from '../presenters.js';
import { getExerciseTestObject, getExerciseSetTestObject, getWorkoutRoutineTestObject, getExerciseModelTestObject, getWorkoutRoutineModelTestObject } from './get_test_object.js';


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





it("Exercise should be able to have ExcerciseSets added to it", function () {

    var exercise = getExerciseTestObject();
    ;
    act(() => {
        var rendered =  exercise.render()
        render(rendered, container);
    }, () => {
        exercise.addSet(new ExerciseSet({ weight: 125, rep_goal: 2, reps_completed: 5}));
        expect(exercise.state.sets.length).toBe(1);
        exercise.addSet(new ExerciseSet({ weight: 125, rep_goal: 2, reps_completed: 5}));
        expect(exercise.state.sets.length).toBe(2)
    })
});

it("Exercise should have a name", function () {
	expect(getExerciseTestObject().props.exercise_name).toBe("squat");
})


it("ExcerciseSet should have weight, rep_goal and reps_completed attributes", function () {
	var testObject = getExerciseSetTestObject()
	expect(testObject.props.weight).toBe(125);
	expect(testObject.props.rep_goal).toBe(5);
	expect(testObject.props.reps_completed).toBe(5);
});

it("Exercise should update when input entered into #reps_completed-<id>", function () {
	let testObject = getExerciseSetTestObject();
    act(() => {
        render(testObject.render(), container)  ;    
    }, () => {
        const input = container.querySelector("tr > td > input");
        input.value = 4;
        Simulate.change(input);
        expect(testObject.state.reps_completed).toBe("4");
    })
})


it("WorkoutRoutine should render without any exercises", function () {
	var routine = getWorkoutRoutineTestObject();
	act(() => {
		render(routine.render(), container);
	}, () => {
		expect(routine).toBeDefined();
	})
	
});

it("WorkoutRoutine should be able to have exercises added", function () {
	var routine = getWorkoutRoutineTestObject();
	act(() => {
		render(routine.render(), container);
	}, () => {
		expect(routine.state.exercises.length).toBe(0);
		routine.addExercise(new Exercise({ id: 1, exercise_name: "rows"}));
		expect(routine.state.exercises.length).toBe(1);
	})

})


it("ExerciseModel should be constructed with an object that has exercise_name", function () {
	var testObject = getExerciseModelTestObject();
	expect(testObject.data.exercise_name).toBe("squat");

	expect(() => { new ExerciseModel({ id: 0 })}).toThrow(new Error("data.exercise_name must not be undefined"));
});
	




// describe("workout_app", function() {

	
// 	describe("ExerciseModel", function () {

// 	})
	
// 	describe("WorkoutRoutineModel", function () {
// 		function getModelTestObject() {
// 			return new presenters.WorkoutPresenter();		
// 		}
// 		it("should notify a Presenter when the data is manipulated", function () {
			
// 		})
		
// 		it("should contain a dynamic list of ExerciseModels", function () {
			
// 		})
// 	})
	
// 	describe("WorkoutRoutinePresenter", function () {
// 		function getModelTestObject() {
// 			return new presenters.WorkoutPresenter();		
// 		}
// 		describe("SubscribeToModel(_model)",function (){
// 			it("should create a WorkoutRoutineComponent if view does not exist", function () {
// 				var testObject = getModelTestObject();
// 				var data = { id: 0 };
// 				var model = new models.WorkoutRoutineModel(data);
// 				expect(testObject.view).toBe(undefined);
// 				testObject.SubscribeToModel(model);
// 				expect(testObject.view).toBeDefined();
// 			})
// 		}) 
// 	})
	
// 	// describe("Presenter", function () {
// 		// function getPresenterTestObject() {
// 			// return new presenters.Presenter();
// 		// }
		
// 		// it("should have a Model object subscribe to it", function () {
// 			// var model = new models.Model({dataA: "A", dataB: "B"});
// 			// var testObject = getPresenterTestObject();
// 			// testObject.SubscribeToModel(model);
// 			// expect(testObject).model.toEqual(new models.Model({dataA: "A", dataB: "B"}));
// 		// });
		
// 		// it("should create a view (React.Component) if it does not exist when calling UpdateView()", function () {
// 			// var model = new models.Model({dataA: "A", dataB: "B"});
// 			// var testObject = getPresenterTestObject();
// 			// testObject.SubscribeToModel(model);
// 			// testObject.UpdateView();
// 		// })
// 	// })
// });

