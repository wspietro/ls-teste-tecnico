import { styled } from 'styled-components'
import Link from 'next/link'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 0px 4rem;
  padding: 2rem 0px 0.5rem;

  border-top: 1px solid ${(p) => p.theme.colors.secondary};

  @media ${(p) => p.theme.queries.laptopAndSmaller} {
    margin: 0px 2rem;
  }

  @media ${(p) => p.theme.queries.phoneAndSmaller} {
    margin: 0px 1rem;
    padding-top: 1rem;
    gap: 0.875rem;
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;

  @media ${(p) => p.theme.queries.phoneAndSmaller} {
    flex-direction: column;
    gap: 0.25rem;
  }
`

interface IsActiveLink {
  $active: boolean
}

export const NavLinks = styled(Link)<IsActiveLink>`
  all: unset;
  cursor: pointer;

  display: flex;

  color: ${(p) => p.theme.colors.black};
  font-weight: ${(p) => p.$active && 700};
  transition: opacity 0.2s ease 0s;

  &:hover {
    opacity: 0.7;
  }

  @media ${(p) => p.theme.queries.phoneAndSmaller} {
    font-size: 0.875rem;
  }
`

export const IconsGroup = styled.div`
  display: flex;
  gap: 2rem;
`

export const IconsLink = styled(Link)`
  all: unset;
  cursor: pointer;
  transition: opacity 0.2s ease 0s;

  svg {
    color: ${(p) => p.theme.colors.primary};
  }

  &:hover {
    opacity: 0.7;
  }
`

export const FootNote = styled.p`
  font-size: 0.75rem;
  color: ${(p) => p.theme.colors['dark-gray']};
`
