import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { graphql } from 'gatsby'
import SingleAccordian from './singleAccordian'
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
  return DepartmentsData.map((department, index) => (
    <SingleAccordian key={index} department={department} />
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
  return (
    <Section>
      <TopBar>
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
