
class Model {
	constructor(_data)
	{
		if (_data.id == undefined) {
			throw new Error("_data.id must not be undefined");
		}
		this.data = _data;
		// this.ModelChanged = new Event("ModelChanged", {
			// data: this.data
		// })
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

module.exports = {};
module.exports.Model = Model;
module.exports.WorkoutRoutineModel = WorkoutRoutineModel;
module.exports.ExerciseModel = ExerciseModel;