const fs = require('fs');
// React = require('react');
// ReactDOM = require('react-dom');
import { Exercise, ExerciseSet, WorkoutRoutine } from '../components.js';
import { ExerciseModel, WorkoutRoutineModel } from '../models.js';
import { WorkoutRoutinePresenter} from '../presenters.js';
import { getExerciseTestObject, getExerciseSetTestObject, getWorkoutRoutineTestObject, getExerciseModelTestObject, getWorkoutRoutineModelTestObject } from './get_test_object.js';


import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("tbody");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("ExcerciseSet should have weight, rep_goal and reps_completed attributes", function () {
	var testObject = getExerciseSetTestObject()
	expect(testObject.props.weight).toBe(125);
	expect(testObject.props.rep_goal).toBe(5);
	expect(testObject.props.reps_completed).toBe(5);
});