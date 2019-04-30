import styled from 'styled-components'

export const Section = styled.section`
  flex: 1;
  margin-top: 120px;
  max-width: 100%;

  @media (max-height: 516px) {
    margin-top: 20px;
  }
`

export const MainTitle = styled.h1`
  font-size: 64px;
  font-weight: normal;
  text-align: center;

  @media (max-height: 420px) {
    margin: 2rem 0;
  }
`
