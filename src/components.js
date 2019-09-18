var React = require('react');
class ExerciseSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Completed: false, reps_completed: this.props.reps_completed };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log(e.target);
    var reps = e.target.value;
    this.state = { Completed: false, reps_completed: e.target.value}
  }

  render() {
    return React.createElement(
      'tr', { key: 'tr-' + this.props.id}, [
        React.createElement('td', { key: 'weight-' + this.props.id}, this.props.weight),
        React.createElement('td', { key: 'rep_goal-' + this.props.id}, this.props.rep_goal),
        React.createElement('td', { id: "reps_completed-" + this.props.id, key: 'reps_completed-' + this.props.id},
          React.createElement('input',{onChange: this.onChange, value: this.state.reps_completed})
        )
      ]

    );
  }
}

class Exercise extends React.Component {
    constructor(props) {
      super(props);
      this.state = { Completed: false, sets: []}
    }

    addSet(set) {
      var newSet = this.state.sets;
      newSet.push(set);
      this.setState((({ sets: newSet})));
    }

    render() {
      return React.createElement('div', {className: 'ui styled accordion' , key: "container-" + this.props.id}, 
        React.createElement('div', {className:"active title", key: 'title-' + this.props.id }, [
          React.createElement('i', {className: "dropdown icon", key: 'icon-' + this.props.id}),
            React.createElement('p', {  key: 'name-' + this.props.id}, this.props.exercise_name)
        ]),
        React.createElement('div', {className: "active content"},
          React.createElement('table', {className: "ui celled table"},
            React.createElement('thead', null, 
              React.createElement('tr', null, [
                React.createElement('th', {key: this.props.id + "-weight"}, 'Weight'),
                React.createElement('th', {key: this.props.id + "-goal"}, 'Rep Goal'),
                React.createElement('th', {key: this.props.id + "-completed"}, 'Reps Completed')
              ]
            )),
            React.createElement('tbody', null, this.state.sets.map(s => s.render()))
        )
      )
    );
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

class ExerciseSetForm extends React.Component
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




