import React from 'react'
import {
  InputWrapper,
  Input
} from './styled'

const SearchBar = () => {
  return (
    <form>
      <InputWrapper>
        <Input
          type="text"
          name="user"
          placeholder="Search your movie name"
        />
      </InputWrapper>
      <input type="submit" value="Search" />
    </form>
  )
}

export default SearchBar
