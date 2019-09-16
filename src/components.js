var React = require('react');
class ExerciseSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Completed: false };
  }

  render() {
    var React = require('react');
    return React.createElement(
      'tr', null, [
        React.createElement('td', null, this.props.weight),
        React.createElement('td', null, this.props.rep_goal),
        React.createElement('td', null, this.props.reps_completed)
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
      var React = require('react');
      return React.createElement('div', {className: 'ui styled accordion'}, [
        React.createElement('div', {className:"active title"}, [
          React.createElement('i', {className: "dropdown icon"}),
          this.props.exercise_name
        ]),
        React.createElement('div', {className: "active content"},
          React.createElement('table', {className: "ui celled table"},
            React.createElement('thead', null, 
              React.createElement('tr', null, [
                React.createElement('th', null, 'Weight'),
                React.createElement('th', null, 'Rep Goal'),
                React.createElement('th', null, 'Reps Completed')
              ]
            )),
            React.createElement('tbody', null, this.props.sets.map(s => s.render()))
        )
      )
    ]);
  }
}

class WorkoutRoutine extends React.Component {
  constructor(props) {
    if (props == undefined) {
      props = {
        exercises: []
      };
    }
    else if (props.exercises == undefined) {
      props.exercises = [];
    }
    super(props);
  }

  addExercise(exercise)
  {
    this.props.exercises.push(exercise);
  }

  render() {
    return React.createElement('div', { className: "ui list", id: "workout-exercises-list"}, this.props.exercises.map(exercise => exercise.render()) )
  } 
}

// class AddExerciseButton extends React.Component
// {

// }

module.exports = {};
module.exports.Exercise = Exercise;
module.exports.ExerciseSet = ExerciseSet;
module.exports.WorkoutRoutine = WorkoutRoutine;




