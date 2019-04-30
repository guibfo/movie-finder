import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Input = styled.input`
  background-color: #f0f0f0;
  border: none;
  border-radius: 45px;
  margin-bottom: 16px;
  max-width: 100%;
  padding: 16px;
  transition: all 0.2s ease-in-out;
  width: 550px;

  &:hover,
  &:focus {
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  }

  ${props => props.alt && css`
    margin-bottom: 0;
    margin-right: 32px;
    width: 145px;
  `}
`

export const Submit = styled.input`
  border: none;
  border-radius: 5px;
  color: #222222;
  cursor: pointer;
  margin-top: 16px;
  padding: 8px 16px;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  }

  ${props => props.alt && css`
    margin-top: 0;
  `}
`

export const Form = styled.form`
  ${props => props.alt && css`
    align-items: center;
    display: flex;
    left: 50%;
    position: absolute;
    top: 85px;
    transform: translateX(-50%);
  `}
`
