const fs = require('fs');
// React = require('react');
// ReactDOM = require('react-dom');
var app = require("./components.js");
var models = require("./models.js");
var presenters = require("./presenters.js");
//import ExerciseSet from './public/js/workout_app.js';

describe("workout_app", function() {

	describe("Excercise", function () {
		function getExerciseTestObject() {
			return new app.Exercise({ exercise_name: "squat" });
		}
		it("should render()", function () {
			var exercise = getExerciseTestObject();
			var rendered = exercise.render();
			expect(rendered).toBeDefined();
		})
		it("should be able to have ExcerciseSets added to it", function () {
			var exercise = getExerciseTestObject();
			expect(exercise.state.sets).toEqual([]);
			// exercise.addSet(new app.ExerciseSet({ weight: 125, rep_goal: 2, reps_completed: 5}));
			// expect(exercise.state.sets.length).toBe(1);
			// exercise.addSet(new app.ExerciseSet({ weight: 125, rep_goal: 2, reps_completed: 5}));
			// expect(exercise.state.sets.length).toBe(2);
		});
		it("should have a name", function () {
			expect(getExerciseTestObject().props.exercise_name).toBe("squat");
		})
	})
	describe("ExcerciseSet", function () {
		function getExerciseSetTestObject() {
			return new app.ExerciseSet({weight: 125, rep_goal: 5, reps_completed: 5 })
		}
		it("should have weight, rep_goal and reps_completed attributes", function () {
			var exerciseSet = getExerciseSetTestObject()
			expect(exerciseSet.props.weight).toBe(125);
			expect(exerciseSet.props.rep_goal).toBe(5);
			expect(exerciseSet.props.reps_completed).toBe(5);
		});
		it("should render", function () {
			var exerciseSet = getExerciseSetTestObject();
			expect(exerciseSet.render()).toBeDefined();
		});
	})

	describe("WorkoutRoutine", function () {
		function getWorkoutRoutineTestObject() {
			return new app.WorkoutRoutine()
		}
		it("should render without any exercises", function () {
			var routine = getWorkoutRoutineTestObject();
			expect(routine.render()).toBeDefined();
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

	describe("ExerciseSetForm", function () {
		function getAddExerciseButtonTestObject() {
			return new app.ExerciseSetForm();
		}
		it("should have input for weight", function () {
			fail("not yet implemented")
		})
		it("should have input for reps", function () {
			fail("not yet implemented")
		})
		it("should be used to create a new Exercise Set", () => {
			fail("not yet implemented")
		})
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

