const type = {
	ADD_NEW_CLASS: 'ADD_NEW_CLASS',
	UPDATE_CLASS: 'UPDATE_CLASS',
	DELETE_CLASS: 'DELETE_CLASS'
}
const action = {
	addNewClass(objClass) {
		return {
			type: type.ADD_NEW_CLASS,
			payload: {
				objClass: objClass,
			}
		}
	},
	deleteClass(idClass) {
		return {
			type: type.DELETE_CLASS,
			payload: {
				idClass: idClass
			}
		}
	},
	updateClass(idClass, objClass) {
		return {
			type: type.UPDATE_CLASS,
			payload: {
				idClass: idClass,
				objClass: objClass
			}
		}
	}

}
const exportedObject = {
	type,
	action
}
export default exportedObject;