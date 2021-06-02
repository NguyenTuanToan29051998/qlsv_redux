const type = {
	ADD_NEW_TEACHER: 'ADD_NEW_TEACHER',
	DELETE_TEACHER: 'DELETE_TEACHER',
	UPDATE_TEACHER: 'UPDATE_TEACHER',
}

const action = {
	addNEWTEACHER(teacher) {
		return {
			type: type.ADD_NEW_TEACHER,
			payload: {
				teacher: teacher,
			}
		}
	},
	deleteTEACHER(idTeacher) {
		return {
			type: type.DELETE_TEACHER,
			payload: {
				idTeacher: idTeacher,
			}
		}
	},
	updateTEACHER(idTeacher, teacher) {
		return {
			type: type.UPDATE_TEACHER,
			payload: {
				idTeacher: idTeacher,
				teacher: teacher,
			}
		}
	}
}
const exportedObject = {
	type,
	action
}
export default exportedObject;