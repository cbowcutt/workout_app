const fs = require('fs');
// React = require('react');
// ReactDOM = require('react-dom');
import  { Exercise, ExerciseSet } from '../components.js';
// import * as models from '../models.js';
// import * as presenters from '../presenters.js';

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

function getExerciseTestObject() {
	return new Exercise({ id: "0", exercise_name: "squat" });
}
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