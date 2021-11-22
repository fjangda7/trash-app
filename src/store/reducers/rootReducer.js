import authReducer from "./authReducer";
import binReducer from "./binReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    bin: binReducer
});

export default rootReducer;