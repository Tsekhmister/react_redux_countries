import { SET_THEME } from "./theme_action";

export const themeReducer = (state = 'light', {type, payload}) => {
  switch(type) {
    case SET_THEME : 
      return payload;

    default: 
      return state;
  }
}