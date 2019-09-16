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
      this.state = { Completed: false, sets: []}
    }

    componentDidMount() {
      this.setState({ Completed: false, sets: []});
    }
    addSet(set) {
      var newSet = this.state.sets;
      this.setState(() => {
        
        if (newSet == undefined) {
          newSet = [];
        }
        newSet.push(set);
        return { sets: newSet};
      });
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
            React.createElement('tbody', null, this.state.sets.map(s => s.render()))
        )
      )
    ]);
  }
}

class WorkoutRoutine extends React.Component {

  constructor(props) {
    super(props);
    this.state = { exercises: [] }
  }

  addExercise(exercise)
  {
    var newExercises = this.state.exercises;
    newExercises.push(exercise);
    this.setState({ exercises: newExercises})

  }
  componentDidMount() {
    this.setState({ exercises: [] });
  }

  render() {
    return React.createElement('div', { className: "ui list", id: "workout-exercises-list"}, this.state.exercises.map(exercise => exercise.render()) )
  } 
}

class AddExerciseButton extends React.Component
{
  render() {
    return React.createElement('div', { className: "ui button "});
  }
}
class AddSetButton extends React.Component
{
  render() {
    return React.createElement('div', { className: "ui button "});
  }
}

class ExerciseSetForm extends React.Component()
{
  render() {
    return React.createElement('form', { onSubmit: () => {} }, [
      React.createElement('label', null, [
        "Weight",
        React.createElement("input", {type: "text"})
      ])
    ]);
  }
}

module.exports = {};
module.exports.Exercise = Exercise;
module.exports.ExerciseSet = ExerciseSet;
module.exports.WorkoutRoutine = WorkoutRoutine;
module.exports.AddExerciseButton = AddExerciseButton;




