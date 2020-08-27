import { css } from 'styled-components'

// prettier-ignore
export const keyFrames = css`
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes translate-up-0 {
  0% {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes translate-up-25 {
  0% {
    transform: translateY(25%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes translate-up-0-masked {
  0% {
    transform: translateY(103%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes translate-up-100 {
  0% {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}

@keyframes translate-down-0 {
  0% {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes translate-down-100 {
  0% {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}
@keyframes push-arrow {
  0% {
    transform: none;
  }
  50% {
    transform: translateX(100%);
  }
  50.1% {
    transform: translateX(-100%);
  }
  to {
    transform: none;
  }
}
`;
