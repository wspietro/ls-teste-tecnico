'use client'

import Image from 'next/image'
import {
  HomeContainer,
  Description,
  ActionGroup,
  ButtonPrimary,
  ButtonSecondary,
  ImageWrapper,
} from './styles'

import HomeBanner from '../assets/home-banner.svg'

export default function Home() {
  return (
    <HomeContainer>
      <Description>
        <h1>Boas vindas a Lacrei Saúde</h1>
        <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
        <ActionGroup>
          <ButtonPrimary href="/user">Pessoa Usuária</ButtonPrimary>
          <ButtonSecondary href="/professional">
            Pessoa profissional
          </ButtonSecondary>
        </ActionGroup>
      </Description>
      <ImageWrapper>
        <Image src={HomeBanner} alt="home banner" quality={100} />
      </ImageWrapper>
    </HomeContainer>
  )
}
