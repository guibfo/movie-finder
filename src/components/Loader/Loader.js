import React from 'react'
import { LoaderWrapper } from './styled'

const Loader = () => {
  return (
    <LoaderWrapper class="lds-css ng-scope">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </LoaderWrapper>
  )
}

export default Loader
