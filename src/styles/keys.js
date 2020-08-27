import { css } from 'styled-components'

export const keyCurve = css`
  :root {
    --ease-in: cubic-bezier(0.49, 0.025, 0.65, 0.65);
    --ease-out: cubic-bezier(0.28, 0.44, 0.49, 1);
    --ease-in-out: cubic-bezier(0.49, 0.025, 0.49, 1);
    --bounce: cubic-bezier(0.6, 0, 0.1, 1.4);
    --ease-in-soft: cubic-bezier(0.49, 0.025, 0.685, 1);
    --ease-out-soft: cubic-bezier(0.28, 0, 0.49, 1);
    --ease-in-out-soft: cubic-bezier(0.72, 0, 0.28, 1);
    --ease-in-out-hard: cubic-bezier(0.77, 0, 0.175, 1);
    --ease-garret: cubic-bezier(0.5, 0, 0, 1);
  }
`
