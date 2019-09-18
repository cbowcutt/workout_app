
class Model {
	constructor(_data)
	{
		if (_data == undefined) {
			_data = { id: AssignNewID() };
		}
		else if (_data.id == undefined) {
			_data.id = { id: AssignNewID() };
		}
		this.data = _data;
	}
	
	

	
	OnModelUpdate() {
		this.dispatchEvent(ModelChanged);
	}
}

class WorkoutRoutineModel extends Model {
}

class ExerciseModel extends Model {
	constructor(data) {
		if (data.exercise_name == undefined)
		{
			throw new Error("data.exercise_name must not be undefined");
		}
		super(data);
	}

}

var id = 0;

function AssignNewID() {
	return id++;
}

module.exports = {};
module.exports.Model = Model;
module.exports.WorkoutRoutineModel = WorkoutRoutineModel;
module.exports.ExerciseModel = ExerciseModel;