var ReactDOM = require('react-dom');
var components = require('./components.js');
var models = require('./models.js');
var presenters = require('./presenters.js');
var WorkoutRoutine = components.WorkoutRoutine;
var Exercise = components.Exercise;
var ExerciseSet = components.ExerciseSet;

global.appContainer = document.getElementById('workout-container')
window.workoutModel = new models.WorkoutRoutineModel({id: "myWorkout"});
global.rendered = workoutModel.presenter.view.render()
global.updateWorkoutRoutineView = function() {
  ReactDOM.render(rendered, global.appContainer);
}
workoutModel.addExercise({ id: "exercise-squat",exercise_name: "squat"});
workoutModel.data.exercises[0].addExerciseSet({ weight: 120, rep_goal: 10 })
 

// var workout = new WorkoutRoutine({id: "myWorkout"});
// workout.addExercise(new Exercise({ id: "exercise-squat",exercise_name: "squat"}));
// workout.state.exercises[0].addSet(new components.ExerciseSet({ id: "set", weight: 3, rep_goal: 5, reps_completed: 5 }));






global.updateWorkoutRoutineView();

  
  $('.ui.accordion').accordion();
  $('#exercise-progress').progress({ percent: 55});