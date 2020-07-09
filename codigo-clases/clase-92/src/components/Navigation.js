import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledNavLink = styled(NavLink)`
  margin: 0 10px;
  &.selected {
    color: red;
    font-weight: bold;
  }
`
const Navigation = () => {
  return (
    <div>
      <StyledNavLink exact activeClassName='selected' to='/'>
        Home
      </StyledNavLink>
      <StyledNavLink exact activeClassName='selected' to='/categories'>
        Categories
      </StyledNavLink>
      <StyledNavLink
        exact
        activeClassName='selected'
        to='/products?price=500&category=celulares'
      >
        Products
      </StyledNavLink>
      <StyledNavLink exact activeClassName='selected' to='/login'>
        Login
      </StyledNavLink>
      <StyledNavLink exact activeClassName='selected' to='/account'>
        My account
      </StyledNavLink>
    </div>
  )
}

export default Navigation
