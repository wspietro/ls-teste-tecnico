'use client'

import Image from 'next/image'
import { HomeContainer, Description, ImageWrapper } from './styles'

import HomeBanner from '../../assets/user-banner.svg'

export default function User() {
  return (
    <HomeContainer>
      <Description>
        <h1>Pessoa Usuária</h1>
        <p>
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado
          por profissionais de qualidade e que atendam às suas necessidades de
          forma segura e acolhedora.
        </p>
      </Description>
      <ImageWrapper>
        <Image src={HomeBanner} alt="home user" quality={100} />
      </ImageWrapper>
    </HomeContainer>
  )
}
