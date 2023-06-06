import styled from 'styled-components'
import Link from 'next/link'

export const HeaderContainer = styled.header`
  padding: 0.5rem 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${(p) => p.theme.colors['light-gray']};

  @media ${(p) => p.theme.queries.laptopAndSmaller} {
    padding: 0.5rem 2rem;
  }

  @media ${(p) => p.theme.queries.phoneAndSmaller} {
    flex-direction: column;
    padding: 0.5rem 1rem;
  }
`

export const Logo = styled(Link)`
  all: unset;
  font-size: 2rem;
  color: ${(p) => p.theme.colors.primary};
  font-weight: 700;

  transition: opacity 0.2s ease 0s;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;

  @media ${(p) => p.theme.queries.phoneAndSmaller} {
    gap: 1rem;
  }
`

interface IsActiveLink {
  $active: boolean
}

export const NavLinks = styled(Link)<IsActiveLink>`
  all: unset;
  font-size: 1rem;
  font-weight: 700;
  color: ${(p) => (p.$active ? p.theme.colors.primary : p.theme.colors.black)};

  transition: all 0.2s ease 0s;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media ${(p) => p.theme.queries.phoneAndSmaller} {
    font-size: 0.875rem;
  }
`
