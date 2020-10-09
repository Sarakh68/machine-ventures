import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Carousel from "../../components/carousel"
import Flex from "../../components/flex"
import Image from "../../components/image"
import { Text } from "../../components/typography"

const Section = styled.section`
  width: 100%;
  padding: 20px;
  margin: 30px 0;
  border-top: 1px solid gray;
  overflow: hidden;
`
const NewCard = styled(Flex)`
  width: 250px;
  height: 260px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 5px 4px #e2e2e2;
`
const TextWrapper = styled(Flex)`
  border-bottom: 1px solid #dadada;
  height: 70px;
  width: 90%;
  margin: 5px auto;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #548fe8;
`
export default function News() {
  return (
    <Section>
      <Text size="20px" weight="bold" mb="0.5rem" as="h5">
        What's New
      </Text>
      <Carousel>
        <Carousel.Item>
          <NewCard fd="column" jc="flex-start">
            <Image img_name="new-bg-2.png" />
            <TextWrapper mb="5px" fd="column">
              <Text mb="5px" weight="bold">
                How to use the App
              </Text>
              <Text>Getting access to on-demand</Text>
            </TextWrapper>
            <StyledLink to="/">
              <Text mb="10px" mt="10px" weight="bold" align="center">
                Learn more
              </Text>
            </StyledLink>
          </NewCard>
        </Carousel.Item>
        <Carousel.Item>
          <NewCard fd="column" jc="flex-start">
            <Image img_name="new-bg-1.png" />
            <TextWrapper fd="column">
              <Text weight="bold">List your service on MyKuya</Text>
              <Text>Do you offer ManPow</Text>
            </TextWrapper>
            <StyledLink to="/">
              <Text mb="10px" mt="10px" weight="bold" align="center">
                Learn more
              </Text>
            </StyledLink>
          </NewCard>
        </Carousel.Item>
        <Carousel.Item>
          <div></div>
        </Carousel.Item>
      </Carousel>
    </Section>
  )
}
