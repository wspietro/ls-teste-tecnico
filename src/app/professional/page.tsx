'use client'

import Image from 'next/image'
import { HomeContainer, Description, ImageWrapper } from './styles'

import HomeBanner from '../../assets/professional-banner.svg'

export default function Professional() {
  return (
    <HomeContainer>
      <Description>
        <h1>Profissional</h1>
        <p>
          Buscamos recrutar pessoas profissionais da saúde que entendam as
          necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+
        </p>
      </Description>
      <ImageWrapper>
        <Image src={HomeBanner} alt="home banner" quality={100} />
      </ImageWrapper>
    </HomeContainer>
  )
}
