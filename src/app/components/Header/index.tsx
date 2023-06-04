'use client'

import { usePathname } from 'next/navigation'
import { HeaderContainer, Logo, Nav, NavLinks } from './styles'

export function Header() {
  const pathName = usePathname()

  console.log(pathName === '/')

  return (
    <HeaderContainer>
      <Logo href="/">Lacrei</Logo>
      <Nav>
        <NavLinks href="/" active={pathName === '/'}>
          Home
        </NavLinks>
        <NavLinks href="/user" active={pathName === '/user'}>
          Pessoa Usuária
        </NavLinks>
        <NavLinks href="/professional" active={pathName === '/professional'}>
          Profissional
        </NavLinks>
      </Nav>
    </HeaderContainer>
  )
}
