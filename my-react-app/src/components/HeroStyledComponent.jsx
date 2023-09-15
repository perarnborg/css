import { styled } from 'styled-components'

const Hero = styled.header`
  border: 1px dotted blue;
  padding: 40px 80px;
  margin-bottom: 40px;

  &:before {
    content: 'Styled components';
  }
`

const Title = styled.h1`
  margin: 0;
  font-size: 4em;
`

const Preamble = styled.p`
  margin-top: 100px;
  font-size: 2em;
`

const StyledLink = styled.a`
  color: blue;
`

export default function HeroStyledComponent() {
  return (
    <Hero>
      <Title>Snygg rubrik!</Title>
      <Preamble>
        Och så en liten uppföljande text med en <StyledLink href="">länk</StyledLink> i.
      </Preamble>
    </Hero>
  )
}
