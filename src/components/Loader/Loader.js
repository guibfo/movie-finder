import React from 'react'
import PropTypes from 'prop-types'
import { LoaderWrapper } from './styled'

const Loader = props => {
  return (
    <LoaderWrapper small={props.small}>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </LoaderWrapper>
  )
}

Loader.propTypes = {
  small: PropTypes.bool
}

export default Loader
