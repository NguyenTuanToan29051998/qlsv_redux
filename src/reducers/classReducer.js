import actions from "../actions/classAction"
const data = {
	listClass: [
		{
			ma_lop: 12,
			ten_lop: 'CNPM'
		},
		{
			ma_lop: 13,
			ten_lop: 'CNPM'
		}
	]
}
const crudReducerClass = (state = data, action) => {
	switch (action.type) {
		case actions.type.ADD_NEW_CLASS:
			let newListClass = state.listClass;
			newListClass.push(action.payload.objClass)
			return {
				listClass: [...newListClass],
			}
		case actions.type.DELETE_CLASS: {
			let newState = { ...state };
			let position = newState.listClass.find(x => x.ma_lop === action.payload.idClass);
			let index = newState.listClass.indexOf(position);
			newState.listClass.splice(index, 1);
			return newState
		}
		case actions.type.UPDATE_CLASS: {
			let newState = { ...state };
			let position = newState.listClass.find(x => x.ma_lop === action.payload.idClass);
			position.ten_lop = action.payload.objClass.ten_lop;
			return {
				...newState
			}
		}
		default:
			return {
				...state
			}
	}
}
export default crudReducerClass