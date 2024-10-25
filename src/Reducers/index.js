import { combineReducers } from "redux";

import auth from './auth'
import cluster from "./cluster"
import resourceReducer from "./resource";
import projectReducer from "./project";

export default combineReducers({
    auth,
    cluster,
    resourceReducer,
    projectReducer
})