import { combineReducers } from "redux";

import { themeReducer } from "./theme/theme_reducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
});