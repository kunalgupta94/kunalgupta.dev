import { TOGGLE_THEME } from "./theme.ActionTypes";

export const toggleTheme = (value) => {
    window.localStorage.setItem('theme', value);
    return({
        type: TOGGLE_THEME,
        value
    })
};