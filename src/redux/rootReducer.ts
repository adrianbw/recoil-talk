import { combineReducers } from "@reduxjs/toolkit";
import toggleSliceReducer from "./rtkExample";

const rootReducer = combineReducers({
  toggleDiv: toggleSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
