import { ActionTypes } from './themes.action'
import themes from '../../services/themes'

export const initialState = {
  currentTheme: JSON.parse(localStorage.getItem('currentTheme')) || themes.dark,
  nameCurrentTheme: localStorage.getItem('nameCurrentTheme') || 'dark',
}

export function themesReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_THEME:
      return {
        ...state,
        currentTheme: action.payload,
      }
    case ActionTypes.SET_NAME_THEME:
      return {
        ...state,
        nameCurrentTheme: action.payload,
      }
    default: {
      throw new Error(` Unhandled action type: ${action.type}`)
    }
  }
}
