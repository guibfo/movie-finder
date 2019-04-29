import React from 'react'
import PropTypes from 'prop-types'
import { Loader } from '../../components'
import { ButtonWrapper, Button } from './styled'

const LoadMore = props => {
  return (
    <ButtonWrapper>
      <Button onClick={props.click}>
        {props.loading ? <Loader small /> : 'Load More'}
      </Button>
    </ButtonWrapper>
  )
}

LoadMore.propTypes = {
  click: PropTypes.func,
  loading: PropTypes.bool
}

export default LoadMore
