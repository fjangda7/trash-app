import authReducer from "./authReducer";
import binReducer from "./binReducer";
import { combineReducers } from "redux";
import {firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: authReducer,
    bin: binReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;