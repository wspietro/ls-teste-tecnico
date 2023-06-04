'use client'

import Link from 'next/link'
import styled from 'styled-components'

const Title = styled.h1`
  color: ${(p) => p.theme.white};
`

export default function Home() {
  return (
    <div>
      <Title>Lacrei teste tecnico</Title>
      <Link href="/user">Pessoa Usuária</Link>
      <Link href="/professional">Pessoa profissional</Link>
    </div>
  )
}
