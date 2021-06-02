import crudReducerST from "./studentReducer";

import { combineReducers } from 'redux'
import crudReducerClass from "./classReducer";
import crudReducerTeacher from "./teacherReducer";

const rootReducer = combineReducers({
	st: crudReducerST,
	cl: crudReducerClass,
	tc: crudReducerTeacher

})
export default rootReducer