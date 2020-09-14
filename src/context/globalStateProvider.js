import React, { useReducer } from 'react'
import Context from './context'
import { initialState, themesReducer } from './themes/themes.reducer'

const GlobalStateProvider = ({ children }) => {
  const [themesState, dispatch] = useReducer(themesReducer, initialState)
  return (
    <Context.Provider value={{ themesState, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export default GlobalStateProvider
