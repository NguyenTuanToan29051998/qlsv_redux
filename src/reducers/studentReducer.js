import actions from "../actions/studentAction";


const data = {
	listStudent: [
		{
			ma_sv: 1,
			ten_sv: 'Nguyễn Tuấn Toàn',
			gioi_tinh: 'nam',
			que_quan: 'Quảng Ninh'
		},
		{
			ma_sv: 2,
			ten_sv: 'Nguyễn Tuấn Việt',
			gioi_tinh: 'nam',
			que_quan: 'Móng Cái'
		},
		{
			ma_sv: 3,
			ten_sv: 'Nguyễn Tuấn Hùng',
			gioi_tinh: 'nam',
			que_quan: 'Hạ Long'
		}

	],

}
const crudReducerST = (state = data, action) => {
	switch (action.type) {
		case actions.type.ADD_NEW_STUDENT:
			let newListStudent = state.listStudent;
			newListStudent.push(action.payload.student);
			return {
				...state,
				listStudent: [...newListStudent]
			}
		case actions.type.DELETE_STUDENT: {
			let newState = { ...state };
			let position = newState.listStudent.find(x => x.ma_sv === action.payload.id);
			let index = newState.listStudent.indexOf(position);
			newState.listStudent.splice(index, 1);
			return newState
		}
		case actions.type.UPDATE_STUDENT: {
			let newState = { ...state };
			let position = newState.listStudent.find(x => x.ma_sv === action.payload.id);

			position.ten_sv = action.payload.student.ten_sv;
			position.gioi_tinh = action.payload.student.gioi_tinh;
			position.que_quan = action.payload.student.que_quan;
			return {
				...newState
			}
		}
		default:
			return {

				...state,
			}
	}
}

export default crudReducerST;
