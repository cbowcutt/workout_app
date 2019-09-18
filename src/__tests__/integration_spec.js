const fs = require('fs');
// React = require('react');
// ReactDOM = require('react-dom');
import { Exercise, ExerciseSet, WorkoutRoutine } from '../components.js';
import { ExerciseModel, WorkoutRoutineModel } from '../models.js';
import { WorkoutRoutinePresenter} from '../presenters.js';

import { getWorkoutRoutinePresenterTestObject, getWorkoutRoutineModelTestObject } from './get_test_object.js';

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

it("WorkoutRoutinePresenter should create a WorkoutRoutineComponent if view does not exist", function () {
	var testObject = getWorkoutRoutinePresenterTestObject();
	var data = { id: 0 };
	var workoutRoutineModel = getWorkoutRoutineModelTestObject();
	expect(testObject.view).toBe(undefined);
	testObject.SubscribeToModel(workoutRoutineModel);
	expect(testObject.view).toBeDefined();
})