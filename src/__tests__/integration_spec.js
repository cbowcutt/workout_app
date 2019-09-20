const fs = require('fs');
// React = require('react');
// ReactDOM = require('react-dom');
import { Exercise, ExerciseSet, WorkoutRoutine, Button } from '../components.js';
import { ExerciseModel, WorkoutRoutineModel } from '../models.js';
import { WorkoutRoutinePresenter} from '../presenters.js';

import { getButtonTestObject, getWorkoutRoutinePresenterTestObject, getExerciseSetModelTestObject, getExerciseModelTestObject ,getWorkoutRoutineModelTestObject, getWorkoutRoutineTestObject } from './get_test_object.js';

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

it("WorkoutRoutineModel should create a WorkoutRoutinePresenter when constructed", function () {
  var testObject = getWorkoutRoutineModelTestObject();
  expect(testObject.presenter).toBeDefined();
})

it("WorkoutRoutineModel should create a Workout component when constructed", function () {
  var testObject = getWorkoutRoutineModelTestObject();
  expect(testObject.presenter.view).toBeDefined();
})

it("ExerciseModel should create a ExercisePresenter when constructed", function () {
  var testObject = getExerciseModelTestObject();
  expect(testObject.presenter).toBeDefined();
})

it("ExerciseModel should create a Exercise component when constructed", function () {
  var testObject = getExerciseModelTestObject();
  expect(testObject.presenter.view).toBeDefined();
  expect(testObject.presenter.view.state).toEqual({ Completed: false, sets: [] });
})

it("ExerciseSetModel should create a ExerciseSetPresenter when constructed", function () {
  var testObject = getExerciseSetModelTestObject();
  expect(testObject.presenter).toBeDefined();
})

it("ExerciseSetModel should create a ExerciseSet component when constructed", function () {
  var testObject = getExerciseSetModelTestObject();
  expect(testObject.presenter.view).toBeDefined();
  expect(testObject.presenter.view.state).toEqual({ reps_completed: 0});
  expect(testObject.presenter.view.props).toEqual({ id: 10,  weight: 125, rep_goal: 5});
})


it("WorkoutRoutinePresenter should create a WorkoutRoutineComponent if view does not exist", function () {
	var testObject = getWorkoutRoutinePresenterTestObject();
	var data = { id: 0 };
	var workoutRoutineModel = getWorkoutRoutineModelTestObject();
	expect(testObject.view).toBe(undefined);
	testObject.subscribeToModel(workoutRoutineModel);
	expect(testObject.view).toBeDefined();
})

it("WorkoutRoutinePresenter should be notified when its WorkoutRoutine component dispatches a 'change' event", function () {

    var presenter = getWorkoutRoutinePresenterTestObject();
    var model = getWorkoutRoutineModelTestObject();
    presenter.subscribeToModel(model);
    var component = presenter.view;
    act(() => {
        render(component.render(), container);
    },() => {

      
    });
    expect(model.data.exercises.length).toBe(0);
    component.addExercise(new Exercise({exercise_name: "ex" }));
    expect(component.state.exercises[0].props.exercise_name).toBe("ex");
    Simulate.change(container.querySelector("#" + component.props.id));
    //console.log(component.state.exercises);

    expect(model.data.exercises[0].data.exercise_name).toBe("ex");
});

it("ExerciseSetModel should update when input entered into the associated compoent view", function () {
  var exerciseSetModel = getExerciseSetModelTestObject();
	act(() => {
		render(exerciseSetModel.presenter.view.render(), container);
  })
  const input = container.querySelector("input");
  input.value = 4
  Simulate.change(input);
  
  expect(exerciseSetModel.data.reps_completed).toBe("4");
  expect(exerciseSetModel.presenter.view.state.reps_completed).toBe("4");
})

it("AddExerciseSetButton adds a new ExerciseSet", function () {
  var exerciseModel = getExerciseModelTestObject();
})

it("Button should notify PresenterController when it is clicked", function (done){
  var PresenterController = require("../PresenterController");
  var button = getButtonTestObject();
  var mockPresenter = {
    buttonClicked: (event, behavior)  => {
      expect(behavior).toBe("behavior");
      done();
    }
  };
  PresenterController.registerPresenter(button.props.ownerId, mockPresenter);
  act(() => {
		render(button.render(), container);
  })
  var htmlButton = container.querySelector("#button");
  expect(htmlButton).toBeDefined();
  Simulate.click(htmlButton);
})