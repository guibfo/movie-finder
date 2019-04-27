import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Input = styled.input`
  background-color: #f0f0f0;
  border: 2px solid #f0f0f0;
  border-radius: 45px;
  margin-bottom: 16px;
  padding: 16px;
  transition: all 0.2s ease-in-out;
  width: 550px;

  &:hover,
  &:focus {
    border-color: #cbcbcb;
  }
`
