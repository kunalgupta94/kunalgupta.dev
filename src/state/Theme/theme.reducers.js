import { TOGGLE_THEME } from './theme.ActionTypes';

const initialState = {
  value: 'light'
}

const themes = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      return {
        ...state,
        value: action.value
      };
    }
    default: {
      return state;
    }
  }
};

export default themes;
