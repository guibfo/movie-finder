import styled, { css } from 'styled-components'

export const LoaderWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;

  .lds-ripple {
    height: 75px;
    position: relative;
    transform: translate(-37.5px, -37.5px) scale(0.375) translate(37.5px, 37.5px);
    width: 75px;

    div {
      animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
      border-radius: 50%;
      border-style: solid;
      border-width: 4px;
      box-sizing: content-box;
      opacity: 1;
      position: absolute;

      &:nth-child(1) {
        border-color: #020203;
      }

      &:nth-child(2) {
        animation-delay: -0.5s;
        border-color: #1b0b75;
      }
    }
  }

  ${props => props.small && css`
    .lds-ripple {
      height: 25px;
      width: 25px;
      transform: translate(-17.5px, -17.5px) scale(0.175) translate(17.5px, 17.5px);
    }
  `}

  @keyframes lds-ripple {

    0% {
      top: 96px;
      left: 96px;
      width: 0;
      height: 0;
      opacity: 1;
    }

    100% {
      top: 18px;
      left: 18px;
      width: 156px;
      height: 156px;
      opacity: 0;
    }
  }
`
