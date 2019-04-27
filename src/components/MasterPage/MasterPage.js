import React from 'react'
import { UserMenu } from '../../components'
import Routes from '../../routes'
import { Wrapper } from './styled'

const MasterPage = () => {
  return (
    <>
      <UserMenu />
      <Wrapper>
        <Routes />
      </Wrapper>
    </>
  )
}

export default MasterPage
