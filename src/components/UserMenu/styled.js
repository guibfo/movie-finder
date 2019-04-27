import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = styled.header`
  border-bottom: 1px solid #eee;
  padding: 16px 32px;
`

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
`

export const LinkItem = styled.li`
  margin: 0 16px;
`

export const StyledLink = styled(Link)`
  font-size: 13px;
  text-decoration: none;
`
