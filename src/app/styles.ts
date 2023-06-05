import Link from 'next/link'
import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  justify-content: space-between;

  background-color: ${(p) => p.theme.colors.white};
  padding: 64px 64px 0px;

  @media ${(p) => p.theme.queries.laptopAndSmaller} {
    padding: 32px 32px 0px;
  }

  @media ${(p) => p.theme.queries.phoneAndSmaller} {
    padding: 32px 32px 0px;
  }
`

export const Description = styled.div`
  max-width: 540px;

  h1 {
    color: ${(p) => p.theme.colors.black};
    font-size: 48px;
  }

  p {
    color: ${(p) => p.theme.colors['dark-gray']};
    font-size: 24px;

    margin-top: 32px;
  }
`

export const ActionGroup = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 453px;
  margin-top: 48px;
`

const Button = styled(Link)`
  all: unset;

  width: 11.75rem;
  padding: 0.75rem 0rem;
  font-size: 1.125rem;
  font-weight: 700;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  text-align: center;
  transition: all 0.2s ease 0s;
  border: 2px solid transparent;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export const ButtonPrimary = styled(Button)`
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.white};
`

export const ButtonSecondary = styled(Button)`
  background-color: ${(p) => p.theme.colors.white};
  color: ${(p) => p.theme.colors.primary};
  border-color: ${(p) => p.theme.colors.primary};
`

export const ImageWrapper = styled.div`
  max-width: 540px;

  img {
    width: 100%;
  }
`
