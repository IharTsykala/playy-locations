import React, { useState, useEffect, useContext } from 'react'
import { graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import Context from '../../context/context'
import SingleAccordian from './singleAccordian'
import { setTheme, setNameTheme } from '../../context/themes/themes.action'
import themes from '../../services/themes'

import {
  Section,
  TopBar,
  TopBarUl,
  TopBarLi,
  Content,
  ContentUl,
  RadioButton,
} from './styles'

export const EaseOutSoft = 'ease: [0.28, 0, 0.49, 1]'

export const LocationsData = [
  {
    id: '1',
    location: 'View All',
  },
  {
    id: '2',
    location: 'Mumbai',
  },
  {
    id: '3',
    location: 'Dubai',
  },
  {
    id: '4',
    location: 'New York',
  },
]
export const DepartmentsData = [
  {
    id: '1',
    title: 'creative',
  },
  {
    id: '2',
    title: 'delivery',
  },
  {
    id: '3',
    title: 'marketing',
  },
  {
    id: '4',
    title: 'operations',
  },
  {
    id: '5',
    title: 'production',
  },
  {
    id: '6',
    title: 'strategy & growth',
  },
  {
    id: '7',
    title: 'technology',
  },
]

const ThemesBlock = ({ themesState, dispatch }) => {
  const handleToggleTheme = nameTheme => {
    // eslint-disable-next-line no-unused-expressions,no-sequences
    dispatch(setTheme(themes[nameTheme])),
      dispatch(setNameTheme(nameTheme)),
      localStorage.setItem('currentTheme', JSON.stringify(themes[nameTheme])),
      localStorage.setItem('nameCurrentTheme', nameTheme)
  }
  return (
    <TopBarLi>
      <RadioButton
        className={` ${
          themesState.nameCurrentTheme === 'dark' ? 'isChecked' : ''
        }`}
        onClick={() => handleToggleTheme('dark')}
      >
        dark
      </RadioButton>
      <RadioButton
        className={` ${
          themesState.nameCurrentTheme === 'light' ? 'isChecked' : ''
        }`}
        onClick={() => handleToggleTheme('light')}
      >
        light
      </RadioButton>
      <RadioButton
        className={` ${
          themesState.nameCurrentTheme === 'custom' ? 'isChecked' : ''
        }`}
        onClick={() => handleToggleTheme('custom')}
      >
        custom
      </RadioButton>
    </TopBarLi>
  )
}

const Locations = () => {
  const [condition, setCondition] = useState(false)
  return LocationsData.map(location => (
    <TopBarLi key={location.id}>
      <RadioButton
        className={` ${condition === location.id ? 'isChecked' : ''}`}
        onClick={() => setCondition(location.id)}
      >
        {location.location}
      </RadioButton>
    </TopBarLi>
  ))
}

const Departments = () => {
  return DepartmentsData.map(department => (
    <SingleAccordian key={department.id} department={department} />
  ))
}
const variants = {
  open: { opacity: 0 },
  closed: {
    opacity: 1,
    transition: { duration: 0.1 },
  },
  exit: { opacity: 0 },
}
const cardVariants = {
  open: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.3, EaseOutSoft },
  },
  closed: {
    height: '0',
    opacity: 0,
    transition: { duration: 0.3, EaseOutSoft },
  },
}

const Accordian = ({ data }) => {
  const { themesState, dispatch } = useContext(Context)
  return (
    <ThemeProvider theme={themesState.currentTheme}>
      <Section>
        <TopBar>
          <TopBarUl>
            <ThemesBlock themesState={themesState} dispatch={dispatch} />
          </TopBarUl>
          <TopBarUl>
            <Locations />
          </TopBarUl>
        </TopBar>
        <Content>
          <ContentUl>
            <Departments />
          </ContentUl>
        </Content>
      </Section>
    </ThemeProvider>
  )
}
export const query = graphql`
  query {
    jobs: allContentfulRecruitment(sort: { order: DESC, fields: ratingOrder }) {
      edges {
        node {
          title
          location
          department
          id
          overview
        }
      }
    }
  }
`
export default Accordian
