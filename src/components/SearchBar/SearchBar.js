import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {
  InputWrapper,
  Input,
  Submit,
  Form
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
    <Form onSubmit={handleSubmit} alt={props.alt}>
      <InputWrapper>
        <Input
          type="text"
          name="title"
          placeholder="Search movie"
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          alt={props.alt}
        />
      </InputWrapper>
      <InputWrapper>
        <Submit
          type="submit"
          value="Search"
          onClick={handleSubmit}
          alt={props.alt}
        />
      </InputWrapper>
    </Form>
  )
}

SearchBar.propTypes = {
  history: PropTypes.object,
  alt: PropTypes.bool
}

export default withRouter(SearchBar)
