var ReactDOM = require('react-dom');
var components = require('./components.js');
var WorkoutRoutine = components.WorkoutRoutine;
var Exercise = components.Exercise;
var ExerciseSet = components.ExerciseSet;
var workout = new WorkoutRoutine({id: "myWorkout"});
workout.addExercise(new Exercise({ id: "exercise-squat",exercise_name: "squat"}));
workout.state.exercises[0].addSet(new components.ExerciseSet({ id: "set", weight: 3, rep_goal: 5, reps_completed: 5 }));

  var container = document.getElementById('workout-container')
  ReactDOM.render(workout.render(), container);
  
  
  $('.ui.accordion').accordion();
  
  $('#exercise-progress').progress({ percent: 55});