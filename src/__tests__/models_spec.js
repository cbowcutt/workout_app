import { ExerciseModel, WorkoutRoutineModel, ExerciseSetModel, Model } from '../models.js';

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

it("assigns an id using an incrementing counter", function () {
    var m = new Model();
    expect(m.data.id).toBe(0);
    var m2 = new Model();
    expect(m2.data.id).toBe(1);
})