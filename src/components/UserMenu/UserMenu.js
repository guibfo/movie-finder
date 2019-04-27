import React from 'react'
import {
  Header,
  List,
  LinkItem,
  StyledLink as Link
} from './styled'

const UserMenu = () => {
  return (
    <Header>
      <nav>
        <List>
          <LinkItem>
            <Link to="/">Search</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/my-favorites">My favorites</Link>
          </LinkItem>
        </List>
      </nav>
    </Header>
  )
}

export default UserMenu
