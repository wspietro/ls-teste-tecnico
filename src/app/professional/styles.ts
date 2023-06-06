import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  justify-content: space-between;

  background-color: ${(p) => p.theme.colors.white};
  padding: 4rem 4rem 0rem;
  flex: 1;

  @media ${(p) => p.theme.queries.laptopAndSmaller} {
    flex-direction: column;
    align-items: center;
    justify-content: unset;
    padding: 2rem 2rem 0rem;
  }

  @media ${(p) => p.theme.queries.phoneAndSmaller} {
    padding: 1rem 1rem 0rem;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 33.75rem;

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
    padding-left: 1rem;

    border-left: 5px solid ${(p) => p.theme.colors.primary};

    @media ${(p) => p.theme.queries.laptopAndSmaller} {
      font-size: 1rem;
      margin-top: 1rem;
      line-height: 1.5rem;
    }
  }
`

export const ImageWrapper = styled.div`
  max-width: 33.75rem;

  img {
    width: 100%;
  }
`
