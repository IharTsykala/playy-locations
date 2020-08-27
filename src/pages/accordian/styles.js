import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import Var from '../../styles/variables'

export const Section = styled(motion.section)`
  padding-left: var(--grid-padding);
  padding-right: var(--grid-padding);
  margin-top: var(--pages-section);
  margin-bottom: var(--pages-section);
  will-change: transform, visibility;
  position: relative;
  overflow: hidden;
  z-index: var(--z-section);
  ${props =>
    props.first &&
    css`
      margin-top: 0;
    `}
  ${props =>
    props.intro &&
    css`
      margin-bottom: 0;
    `}
    ${props =>
    props.overview &&
    css`
      margin-top: 0;
    `}
`
export const TopBar = styled.div`
  position: relative;
  padding-top: 3.5rem;
  ${Var.Device.MinLaptop} {
    padding-top: 0;
  }
`
export const TopBarUl = styled.ul`
  padding-bottom: calc(var(--grid-gutter) * 2);
  padding-left: var(--grid-padding);
  margin-left: calc(var(--grid-padding) * -1);
  margin-right: calc(var(--grid-padding) * -1);
  display: flex;
  overflow-x: scroll;
  ${Var.Device.MinMobile} {
    padding-left: 0;
    margin-left: 0;
    margin-right: 0;
    overflow-x: hidden;
  }
  ${Var.Device.MinLaptop} {
    justify-content: flex-end;
  }
`

export const TopBarLi = styled.li`
  &:last-child {
    padding-right: var(--grid-padding);
    ${Var.Device.MinLaptop} {
      padding-right: 0;
    }
  }
  & + li {
    margin-left: 3rem;
    ${Var.Device.MinLaptop} {
      margin-left: 6rem;
    }
  }
`

export const Content = styled.div`
  position: relative;
  :before {
    content: '';
    width: 100%;
    height: 0.1rem;
    background-color: currentColor;
    position: absolute;
    left: 0;
    top: 0;
  }
`

export const ContentUl = styled.ul``

export const ContentH6 = styled.h6`
  font-size: var(--font-size-h6);
  line-height: var(--line-height-h6);
  font-weight: var(--font-weight-h6);
  letter-spacing: var(--letter-spacing-h6);
`

export const ContentLi = styled.li`
  position: relative;
  :after {
    content: '';
    width: 100%;
    height: 0.1rem;
    background-color: currentColor;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  &:hover ${ContentH6} {
    text-decoration: underline;
  }
  & svg path:nth-child(2) {
    opacity: ${props => (props.isOpen ? 0 : 1)};
  }
`
export const AccordianButton = styled(motion.button)`
  width: 100%;
  padding: 3.25rem 0;
  text-align: left;
  position: relative;
  ${Var.Device.MinLaptop} {
    display: flex;
    justify-content: space-between;
  }
  &.isOpen {
  }
`
export const RadioButton = styled.button`
  padding-left: 2.4rem;
  padding-top: 0.2rem;
  font-size: var(--font-size-small);
  line-height: 1.4rem;
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  position: relative;
  ${Var.Device.MinLaptop} {
    padding-left: 3rem;
    line-height: 1.8rem;
  }
  &:before {
    border: 0.1rem solid;
  }
  &:after {
    background-color: currentColor;
    opacity: 0;
    transform: scale3d(0.25, 0.25, 1);
  }
  &:focus:after,
  &:hover:after {
    opacity: 1;
    transform: scale3d(0.5, 0.5, 1);
  }
  &:after,
  &:before {
    content: '';
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    transition: opacity 0.3s var(--ease-out-soft),
      transform 0.3s var(--ease-out-soft);
    ${Var.Device.MinLaptop} {
      width: 2rem;
      height: 2rem;
    }
  }
  &.isChecked {
    transition: opacity 0.3s var(--ease-out-soft),
      transform 0.3s var(--ease-out-soft);
    &:before {
      opacity: 0;
    }
    &:after {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`
export const RowCol = styled.div`
  ${Var.Device.MinLaptop} {
    flex: 0 0
      calc(
        (var(--grid-width) + var(--grid-gutter) - var(--grid-padding) * 2) /
          var(--grid-column-count) * 6 - var(--grid-gutter)
      );
  }
  ${props =>
    props.grid &&
    css`
      &:first-child h2 {
        max-width: 32rem;
      }
    `}
  ${props =>
    props.text &&
    css`
      font-size: var(--font-weight-large);
      font-weight: var(--font-weight-medium);
      text-decoration: none;
      display: block;
      position: relative;
    `}
`

export const ContentFigure = styled.figure`
  width: 1.4rem;
  height: 1.4rem;
  position: absolute;
  right: 0;
  top: calc(50% - 0.7rem);
  ${Var.Device.MinLaptop} {
    width: 2rem;
    height: 2rem;
    top: calc(50% - 1rem);
  }
`
export const AccordionPanel = styled(motion.div)`
  height: auto;
  overflow: hidden;
`
export const AccordianPanelOl = styled.ol`
  width: 100%;
  padding-bottom: 8.4rem;
  counter-reset: item;
  & a {
    transition: color 0.25s var(--ease-out-soft);
    &:hover {
      color: red;
    }
  }
  &:hover h6 {
    text-decoration: none;
  }
`
export const AccordianLi = styled.li``

export const AccordianLink = styled.a`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  ${Var.Device.MinLaptop} {
    display: flex;
    justify-content: space-between;
  }
`
export const AccordianCol = styled.div`
  ${Var.Device.MinLaptop} {
    flex: 0 0
      calc(
        (var(--grid-width) + var(--grid-gutter) - var(--grid-padding) * 2) /
          var(--grid-column-count) * 6 - var(--grid-gutter)
      );
  }
  ${props =>
    props.grid &&
    css`
      &:first-child h2 {
        max-width: 32rem;
      }
    `}
  &:first-child {
    width: calc(
      (var(--grid-width) + var(--grid-gutter) - var(--grid-padding) * 2) /
        var(--grid-column-count) * 1
    );
    &:before {
      content: counter(item, decimal-leading-zero) ' ';
      display: inline-block;
      counter-increment: item;
      padding: 3.25rem 0;
    }
    ${Var.Device.MinLaptop} {
      width: calc(
        (var(--grid-width) + var(--grid-gutter) - var(--grid-padding) * 2) /
          var(--grid-column-count) * 6 - var(--grid-gutter)
      );
    }
  }
  &:nth-child(2) {
    width: calc(
      (var(--grid-width) + var(--grid-gutter) - var(--grid-padding) * 2) /
        var(--grid-column-count) * 5 - var(--grid-gutter)
    );
    ${Var.Device.MinLaptop} {
      width: calc(
        (var(--grid-width) + var(--grid-gutter) - var(--grid-padding) * 2) /
          var(--grid-column-count) * 6 - var(--grid-gutter)
      );
    }
  }
`
export const ListItemContent = styled.div`
  padding: 3.25rem 0;
  position: relative;
  :before {
    content: '';
    width: 100%;
    height: 0.1rem;
    background-color: currentColor;
    position: absolute;
    left: 0;
    top: 0;
  }
`
export const ListItemH6 = styled(ContentH6)`
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
`
export const ListItemContentP = styled.p`
  max-width: none;
  margin-top: 2rem;
  ${Var.Device.MinMobile} {
    max-width: calc(
      (var(--grid-width) + var(--grid-gutter) - var(--grid-padding) * 2) /
        var(--grid-column-count) * 4 - var(--grid-gutter)
    );
    margin-top: 2.5rem;
  }
`
