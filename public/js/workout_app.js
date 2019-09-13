




const e = React.createElement;

class ExerciseSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Completed: false };
  }

  render() {
    return e(
      'tr', null, [
        e('td', null, this.props.weight),
        e('td', null, this.props.rep_goal),
        e('td', null, this.props.reps_completed)
      ]

    );
  }
}


class Exercise extends React.Component {
    constructor(props) {
      super(props);
      this.state = { Completed: false };
    }

    addSet(set) {
      this.props.sets.push(set);
    }


    render() {
      return e('div', {className: 'ui styled accordion'}, [
        e('div', {className:"active title"}, [
          e('i', {className: "dropdown icon"}),
          this.props.exercise_name
        ]),
        e('div', {className: "active content"},
          e('table', {className: "ui celled table"},
            e('thead', null, 
              e('tr', null, [
                e('th', null, 'Weight'),
                e('th', null, 'Rep Goal'),
                e('th', null, 'Reps Completed')
              ]
            )),
            e('tbody', null, this.props.sets.map(s => s.render()))
        )
      )
    ]);
  }
}

class WorkoutRoutine extends React.Component {
  constructor(props) {
    super(props);
  }

  addExercise(exercise)
  {
    this.exercises.push(exercise);
  }

  render() {
    return e('div', { className: "ui list", id: "workout-exercises-list"}, this.props.exercises.map(exercise => exercise.render()) )
  } 
}

var workout = new WorkoutRoutine({ exercises: [
  new Exercise({exercise_name: "Squat", sets: [ new ExerciseSet({weight: 4, rep_goal: 5, reps_completed: 5})]}),
  new Exercise({exercise_name: "Deadlift", sets: [ new ExerciseSet({weight: 4, rep_goal: 5, reps_completed: 5})]}),
  new Exercise({exercise_name: "Bench Press", sets: [ new ExerciseSet({weight: 4, rep_goal: 5, reps_completed: 5})]})
]});
var container = document.getElementById('workout-container')
// var list = document.getElementById("workout-exercises-list");
// var E = new Exercise({exercise_name: "Squat", sets: []});
// E.addSet(new ExerciseSet());
// E.addSet(new ExerciseSet({weight: 4, rep_goal: 5, reps_completed: 5}));
ReactDOM.render(workout.render(), container);


$('.ui.accordion').accordion();

$('#exercise-progress').progress({ percent: 55});
// const element = new ExerciseSet({weight: 4, rep_goal: 5, reps_completed: 5}).render();
// console.log(element);
// var container = document.getElementById('set_1');
// console.log(container);
// ReactDOM.render(element, container);
