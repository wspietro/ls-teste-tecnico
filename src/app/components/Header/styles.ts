import styled from 'styled-components'
import Link from 'next/link'

export const HeaderContainer = styled.header`
  padding: 0.5rem 0rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled(Link)`
  all: unset;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;

  transition: all 0.2s ease 0s;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;
`

interface IsActiveLink {
  active: boolean
}

export const NavLinks = styled(Link)<IsActiveLink>`
  all: unset;
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.black};

  transition: all 0.2s ease 0s;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`
