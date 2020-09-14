import React from 'react'
import Accordian from './accordian'
import { GlobalStyle } from '../styles/base'
import GlobalStateProvider from '../context/globalStateProvider'

const index = () => {
  return (
    <>
      <GlobalStateProvider>
        <GlobalStyle />
        <Accordian />
      </GlobalStateProvider>
    </>
  )
}

export default index
