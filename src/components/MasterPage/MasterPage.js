import React from 'react'
import { UserMenu, Footer } from '../../components'
import Routes from '../../routes'
import { Wrapper } from './styled'

const MasterPage = () => {
  return (
    <>
      <UserMenu />
      <Wrapper>
        <Routes />
      </Wrapper>
      <Footer />
    </>
  )
}

export default MasterPage
