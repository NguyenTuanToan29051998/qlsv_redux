
const type = {
	ADD_NEW_STUDENT: 'ADD_NEW_STUDENT',
	UPDATE_STUDENT: 'UPDATE_STUDENT',
	DELETE_STUDENT: 'DELETE_STUDENT',
}

const action = {
	addNewStudent(student) {
		console.log('student', student);
		return {
			type: type.ADD_NEW_STUDENT,
			payload: {
				student: student,
			}
		}
	},
	updateStudent(sId, student) {
		return {
			type: type.UPDATE_STUDENT,
			payload: {
				id: sId,
				student: student,
			}
		}
	},
	deleteStudent(sId) {
		return {
			type: type.DELETE_STUDENT,
			payload: {
				id: sId,
			}
		}
	}
}
const exportedObject = {
	type,
	action
}
export default exportedObject;