var React = require('react');
var PresenterController = require('./PresenterController');
class ExerciseSet extends React.Component {
  constructor(props) {
    super(props);

    //this.onChange = controller.inputReceived.bind(this);
    this.state = { reps_completed: 0 };
  }

  componentDidMount() {
    console.log("YOO");
    //this.setState({ reps_completed: 0});
  }

  handleChange(e) {
    var newState = { reps_completed: e.target.value};
    console.log(newState);
    this.state = { reps_completed: e.target.value };

    this.render();
    e.preventDefault();
  }

  subscribeToPresenter(presenter)  {
    this.presenter = presenter;
  }

  render() {
    return React.createElement(
      'tr', { key: 'tr-' + this.props.id}, [
        React.createElement('td', { key: 'weight-' + this.props.id}, this.props.weight),
        React.createElement('td', { key: 'rep_goal-' + this.props.id}, this.props.rep_goal),
        React.createElement('td', { id: "reps_completed-" + this.props.id, key: 'reps_completed-' + this.props.id},
          React.createElement('div', {className: 'ui input'},
            React.createElement('input',{  onChange: (e) => { PresenterController.inputReceived(e, this.props.id) }})
          )
          
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
    componentDidMount() {
    }

    addSet(set) {
      var newSet = this.state.sets;
      newSet.push(set);
      this.setState(state => ({ Completed: false, sets: newSet}));
    }

    subscribeToPresenter(presenter)  {
      this.presenter = presenter;
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
            React.createElement('tbody', null, this.state.sets.map(s => { 
              return s.render()
            }))
        )
      ),
      new Button({ id: this.props.id + "-addNewExerciseSetButton", ownerId: this.props.id, behavior: "addNewExerciseSet"}).render()
    );
  }
}

class WorkoutRoutine extends React.Component {

  constructor(props) {
    super(props);
    this.state = { exercises: [] }
    this.onChange = this.handleChange.bind(this);
  }

  addExercise(exercise)
  {
    var newExercises = this.state.exercises;
    newExercises.push(exercise);
    this.setState({ exercises: newExercises});
    
  }
  componentDidMount() {
  }

  exerciseAdded(event) {
    console.log(event);
  }

  handleChange(event) {
    if (this.presenter == undefined) {
      return new Error("presenter not defined");
    }
    this.presenter.inputReceived(event);
  }

  subscribeToPresenter(presenter)  {
    this.presenter = presenter;
  }
  componentDidMount() {
  }

  render() {
    return React.createElement('div', { className: "ui list", id: this.props.id, onChange: this.handleChange.bind(this)}, this.state.exercises.map(exercise => exercise.render()) )
  } 
}

class AddExerciseButton extends React.Component
{
  render() {
    return React.createElement('div', { className: "ui button "});
  }
}
class AddExerciseSetButton extends React.Component
{
  constructor(props) {
    super(props)
  }
  render() {
    return React.createElement('div', { className: "ui button ", behavior: "addExercise", onClick: e => { PresenterController.buttonClicked(e, this); }});
  }
}

class Button extends React.Component
{
  // this.props.
  constructor(props) {
    super(props)
    // this.props.ownerId should be defined
    // this.props.behavior should be defined
  }
  render() {
    return React.createElement('div', { id: this.props.id, className: "ui button ", onClick: e => { PresenterController.buttonClicked(e, this.props) }});
  }
}

class ExerciseSetForm extends React.Component
{
  render() {
    return React.createElement('form', { onSubmit: () => {} }, [
      React.createElement('label', null, [
        "Weight",
        React.createElement("input", {id: this.props.id, type: "text"})
      ])
    ]);
  }
}

module.exports = {};
module.exports.Exercise = Exercise;
module.exports.ExerciseSet = ExerciseSet;
module.exports.WorkoutRoutine = WorkoutRoutine;
module.exports.AddExerciseButton = AddExerciseButton;
module.exports.Button = Button;



