import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {
  InputWrapper,
  Input,
  Submit
} from './styled'

const SearchBar = props => {
  // Search Input state
  const [query, setQuery] = useState('')

  // Set search query state
  const handleInputChange = e => {
    setQuery(encodeURIComponent(e.target.value))
  }

  const handleKeyDown = e => {
    // If user presses enter submit the form
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (query !== '') {
      props.history.push(`/search?title=${query}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputWrapper>
        <Input
          type="text"
          name="title"
          placeholder="Search movie"
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
        />
      </InputWrapper>
      <InputWrapper>
        <Submit
          type="submit"
          value="Search"
          onClick={handleSubmit}
        />
      </InputWrapper>
    </form>
  )
}

SearchBar.propTypes = {
  history: PropTypes.object
}

export default withRouter(SearchBar)
