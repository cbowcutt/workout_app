const fs = require('fs');
// React = require('react');
// ReactDOM = require('react-dom');
import  { ExerciseSet } from '../components.js';
// import * as models from '../models.js';
// import * as presenters from '../presenters.js';

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

function getExerciseSetTestObject() {
	return new ExerciseSet({ id: 0, weight: 125, rep_goal: 5, reps_completed: 5 })
}
it("ExcerciseSet should have weight, rep_goal and reps_completed attributes", function () {
	var testObject = getExerciseSetTestObject()
	expect(testObject.props.weight).toBe(125);
	expect(testObject.props.rep_goal).toBe(5);
	expect(testObject.props.reps_completed).toBe(5);
});

it("Exercise should update when input entered into #reps_completed-<id>", function () {
	let testObject = getExerciseSetTestObject();

    act(() => {
        render(testObject.render(), container)   
        const input = container.querySelector("tr > td > input");
        input.value = 4;
        Simulate.change(input);
    })
    expect(testObject.state.reps_completed).toBe("4");
    
    
	
})