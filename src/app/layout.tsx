'use client'

import { Nunito } from 'next/font/google'

import { ReactNode } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import StyledComponentsRegistry from './lib/registry'
const nunito = Nunito({ weight: ['400', '700'], subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={nunito.className}>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
