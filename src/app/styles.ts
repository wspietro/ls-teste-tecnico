import Link from 'next/link'
import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  justify-content: space-between;

  background-color: ${(p) => p.theme.colors.white};
  padding: 4rem 4rem 0rem;

  @media ${(p) => p.theme.queries.laptopAndSmaller} {
    flex-direction: column;
    align-items: center;
    padding: 2rem 2rem 0rem;
  }

  @media ${(p) => p.theme.queries.phoneAndSmaller} {
    padding: 2rem 2rem 0rem;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 33.75rem;

  @media ${(p) => p.theme.queries.phoneAndSmaller} {
    align-items: center;
  }

  h1 {
    color: ${(p) => p.theme.colors.black};
    font-size: 3rem;

    @media ${(p) => p.theme.queries.laptopAndSmaller} {
      font-size: 2rem;
    }
  }

  p {
    color: ${(p) => p.theme.colors['dark-gray']};
    font-size: 1.5rem;

    margin-top: 2rem;

    @media ${(p) => p.theme.queries.laptopAndSmaller} {
      font-size: 1rem;
      margin-top: 1rem;
      line-height: 1.5rem;
    }
  }
`

export const ActionGroup = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 28.3125rem;
  margin-top: 3rem;

  @media ${(p) => p.theme.queries.phoneAndSmaller} {
    flex-direction: column;
    justify-content: unset;
    gap: 1rem;
  }
`

const Button = styled(Link)`
  all: unset;

  width: 188px;
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
  max-width: 33.75rem;

  img {
    width: 100%;
  }
`
