'use client'

import { Nunito } from 'next/font/google'

import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import styled, { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import StyledComponentsRegistry from './lib/registry'
const nunito = Nunito({ weight: ['400', '700'], subsets: ['latin'] })

export const metadat: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const Container = styled.div`
  padding: 0rem 4rem;
  max-width: 74rem;
  display: flex;
  flex-direction: column;
  block-size: 100vh;

  @media ${(p) => p.theme.queries.laptopAndSmaller} {
    padding: 0rem 2rem;
  }

  @media ${(p) => p.theme.queries.phoneAndSmaller} {
    padding: 0rem 1rem;
  }
`

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={nunito.className}>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Container>
              <Header />
              {children}
              <Footer />
            </Container>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
