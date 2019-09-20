var ReactDOM = require('react-dom');
var components = require('./components.js');
var models = require('./models.js');
var presenters = require('./presenters.js');
var WorkoutRoutine = components.WorkoutRoutine;
var Exercise = components.Exercise;
var ExerciseSet = components.ExerciseSet;

window.workoutModel = new models.WorkoutRoutineModel({id: "myWorkout"});
workoutModel.addExercise({ id: "exercise-squat",exercise_name: "squat"});
workoutModel.data.exercises[0].addExerciseSet({ weight: 120, rep_goal: 10 })
 

// var workout = new WorkoutRoutine({id: "myWorkout"});
// workout.addExercise(new Exercise({ id: "exercise-squat",exercise_name: "squat"}));
// workout.state.exercises[0].addSet(new components.ExerciseSet({ id: "set", weight: 3, rep_goal: 5, reps_completed: 5 }));

window.appContainer = document.getElementById('workout-container')
  ReactDOM.render(workoutModel.presenter.view.render(), appContainer);
  
  $('.ui.accordion').accordion();
  $('#exercise-progress').progress({ percent: 55});