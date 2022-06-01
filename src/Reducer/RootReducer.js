import { combineReducers } from "redux";

import ApiReducer from "./Reducer";

export default combineReducers({
    users: ApiReducer
})