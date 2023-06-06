import { usePathname } from 'next/navigation'
import {
  FootNote,
  FooterContainer,
  IconsGroup,
  IconsLink,
  Nav,
  NavLinks,
} from './styles'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'

export function Footer() {
  const pathName = usePathname()

  return (
    <FooterContainer>
      <Nav>
        <NavLinks href="/" $active={pathName === '/'}>
          Home
        </NavLinks>
        <NavLinks href="/user" $active={pathName === '/user'}>
          Pessoa Usuária
        </NavLinks>
        <NavLinks href="/professional" $active={pathName === '/professional'}>
          Profissional
        </NavLinks>
      </Nav>
      <IconsGroup>
        <IconsLink
          target="_blank"
          href="https://www.instagram.com/lacrei.saude/"
        >
          <InstagramLogo size={32} />
        </IconsLink>
        <IconsLink target="_blank" href="https://www.facebook.com/lacrei.saude">
          <FacebookLogo size={32} />
        </IconsLink>
        <IconsLink
          target="_blank"
          href="https://www.linkedin.com/company/lacrei/"
        >
          <LinkedinLogo size={32} />
        </IconsLink>
      </IconsGroup>
      <FootNote>Desafio Front-end Lacrei</FootNote>
    </FooterContainer>
  )
}
