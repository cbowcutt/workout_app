const fs = require('fs');
// React = require('react');
// ReactDOM = require('react-dom');
import { Exercise, ExerciseSet, WorkoutRoutine, AddExerciseSetButton, Button} from '../components.js';
import { ExerciseModel, WorkoutRoutineModel } from '../models.js';
import { WorkoutRoutinePresenter} from '../presenters.js';
import { getButtonTestObject, getExerciseTestObject, getExerciseSetTestObject, getWorkoutRoutineTestObject, getExerciseModelTestObject, getWorkoutRoutineModelTestObject } from './get_test_object.js';


import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";

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


it("Exercise contains an AddExerciseSetButton", function () {

    var exercise = getExerciseTestObject();
    act(() => {
        var rendered =  exercise.render()
        render(rendered, container);
    }, () => {
    })
});

// it("ExerciseSetButton.props.id should refer to the exercise set", function() {
//     var button = 
// })

it("Button props should have ownerId", function () {
    var button = getButtonTestObject();
    expect(button.props.ownerId).toBe("owner");
    expect(button.props.behavior).toBe("behavior");
})

it("Exercise should have a name", function () {
	expect(getExerciseTestObject().props.exercise_name).toBe("squat");
})





it("WorkoutRoutine should render without any exercises", function () {
    expect(container.querySelector("#test-workoutRoutine")).toBe(null);
	var routine = getWorkoutRoutineTestObject();
	act(() => {
		render(routine.render(), container);
	})
    expect(container.querySelector("#test-workoutRoutine")).toBeDefined();
	
});

it("WorkoutRoutine should be able to have exercises added", function () {
	var routine = getWorkoutRoutineTestObject();
	act(() => {
		render(routine.render(), container);
	}, () => {

    })
    expect(routine.state.exercises.length).toBe(0);
    routine.addExercise(new Exercise({ id: 1, exercise_name: "rows"}));
    expect(routine.state.exercises.length).toBe(1);
})


it("ExerciseModel should be constructed with an object that has exercise_name", function () {
	var testObject = getExerciseModelTestObject();
	expect(testObject.data.exercise_name).toBe("squat");

	expect(() => { new ExerciseModel({ id: 0 })}).toThrow(new Error("data.exercise_name must not be undefined"));
});