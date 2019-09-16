var ReactDOM = require('react-dom');
var components = require('./components.js');

var workout = new components.WorkoutRoutine({ exercises: [
    new components.Exercise({exercise_name: "Squat", sets: [ new components.ExerciseSet({weight: 4, rep_goal: 5, reps_completed: 5})]}),
    new components.Exercise({exercise_name: "Deadlift", sets: [ new components.ExerciseSet({weight: 4, rep_goal: 5, reps_completed: 5})]}),
    new components.Exercise({exercise_name: "Bench Press", sets: [ new components.ExerciseSet({weight: 4, rep_goal: 5, reps_completed: 5})]})
  ]});
  var container = document.getElementById('workout-container')
  ReactDOM.render(workout.render(), container);
  
  
  $('.ui.accordion').accordion();
  
  $('#exercise-progress').progress({ percent: 55});