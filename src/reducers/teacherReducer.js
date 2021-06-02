import actions from "../actions/teacherAction"
const data = {
	listTeacher: [
		{
			ma_gv: 1,
			ten_gv: 'Nguyễn Văn Toàn',
			gioi_tinh: 'nam',
			que_quan: 'Quảng Ninh'
		},
		{
			ma_gv: 2,
			ten_gv: 'Nguyễn Tuấn Việt',
			gioi_tinh: 'nam',
			que_quan: 'Móng Cái'
		},
		{
			ma_gv: 3,
			ten_gv: 'Nguyễn Tuấn Hùng',
			gioi_tinh: 'nam',
			que_quan: 'Hạ Long'
		}

	],

}
const crudReducerTeacher = (state = data, action) => {
	switch (action.type) {
		case actions.type.ADD_NEW_TEACHER: {
			let newListTeacher = state.listTeacher;
			newListTeacher.push(action.payload.teacher);
			return {
				listTeacher: [...newListTeacher]
			}
		}
		case actions.type.DELETE_TEACHER: {
			let newState = { ...state };
			let posision = newState.listTeacher.find(x => x.ma_gv === action.payload.idTeacher);
			let index = newState.listTeacher.indexOf(posision);
			newState.listTeacher.splice(index, 1)
			console.log("index", newState);
			return newState
		}
		case actions.type.UPDATE_TEACHER: {
			let newState = { ...state };
			let posision = newState.listTeacher.find(x => x.ma_gv === action.payload.idTeacher);
			posision.ten_gv = action.payload.teacher.ten_gv;
			posision.gioi_tinh = action.payload.teacher.gioi_tinh;
			posision.que_quan = action.payload.teacher.que_quan;
			return newState
		}
		default:
			return {
				...state
			}
	}
}
export default crudReducerTeacher;