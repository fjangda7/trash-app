import authReducer from "./authReducer";
import binReducer from "./binReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: authReducer,
    bin: binReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;