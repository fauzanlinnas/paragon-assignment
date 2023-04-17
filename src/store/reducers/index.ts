import { Reducer, combineReducers } from "redux";
import authReducer, { AuthState } from "./authReducer";

export interface RootState {
  auth: AuthState;
  // other reducers and their states
}

const rootReducer: Reducer<RootState> = combineReducers({
  auth: authReducer,
});

export default rootReducer;
