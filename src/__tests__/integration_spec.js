const fs = require('fs');
// React = require('react');
// ReactDOM = require('react-dom');
import { Exercise, ExerciseSet, WorkoutRoutine } from '../components.js';
import { ExerciseModel, WorkoutRoutineModel } from '../models.js';
import { WorkoutRoutinePresenter} from '../presenters.js';

import { getWorkoutRoutinePresenterTestObject, getWorkoutRoutineModelTestObject, getWorkoutRoutineTestObject } from './get_test_object.js';

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

it("WorkoutRoutinePresenter should create a WorkoutRoutineComponent if view does not exist", function () {
	var testObject = getWorkoutRoutinePresenterTestObject();
	var data = { id: 0 };
	var workoutRoutineModel = getWorkoutRoutineModelTestObject();
	expect(testObject.view).toBe(undefined);
	testObject.SubscribeToModel(workoutRoutineModel);
	expect(testObject.view).toBeDefined();
})

it("WorkoutRoutinePresenter should be notified when its WorkoutRoutine component dispatches a 'change' event", function () {

    var presenter = getWorkoutRoutinePresenterTestObject();
    var model = getWorkoutRoutineModelTestObject();
    presenter.SubscribeToModel(model);
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