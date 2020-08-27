import React, { useState } from 'react'
import { motion } from 'framer-motion'

import {
  ContentLi,
  AccordianButton,
  RowCol,
  ContentH6,
  ContentFigure,
  AccordionPanel,
  AccordianPanelOl,
  AccordianLi,
  AccordianLink,
  AccordianCol,
  ListItemContent,
  ListItemH6,
  ListItemContentP,
} from './styles'

// image

import Plus from '../../assets/svg/plus'

export const EaseOutSoft = 'ease: [0.28, 0, 0.49, 1]'
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
const SingleAccordian = ({ department }) => {
  const [isOpen, setIsOpen] = React.useState(null)
  const toggleOpen = () => setIsOpen(!isOpen)
  return (
    <ContentLi isOpen={isOpen}>
      <AccordianButton onClick={toggleOpen}>
        <RowCol>
          <ContentH6>{department.title}</ContentH6>
        </RowCol>
        <RowCol text>(5 Open Roles)</RowCol>
        <ContentFigure>
          <Plus isOpen={isOpen} />
        </ContentFigure>
      </AccordianButton>
      <AccordionPanel
        variants={cardVariants}
        animate={isOpen ? 'open' : 'closed'}
        initial={false}
      >
        <AccordianPanelOl>
          <AccordianLi>
            <AccordianLink href="/careers/">
              <AccordianCol />
              <AccordianCol>
                <ListItemContent>
                  <ListItemH6>
                    <strong>Associate Creative Director</strong>
                    &nbsp;- Mumbai, MH
                  </ListItemH6>
                  <ListItemContentP>
                    You lead a PLaYY creative team in building and inspiring the
                    best campaigns and products for one of our major clients.
                    You...
                  </ListItemContentP>
                </ListItemContent>
              </AccordianCol>
            </AccordianLink>
          </AccordianLi>
        </AccordianPanelOl>
      </AccordionPanel>
    </ContentLi>
  )
}
export default SingleAccordian
