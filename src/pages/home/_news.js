import React from "react"
import styled from "styled-components"
import Carousel from "../../components/carousel"
import Flex from "../../components/flex"
import Image from "../../components/image"
import { Text, Header } from "../../components/typography"

const Section = styled.section`
  width: 100%;
  padding: 20px;
  margin: 30px 0;
  border-top: 1px solid gray;
`
const NewCard = styled(Flex)`
  width: 230px;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 5px 4px #e2e2e2;
`
export default function News() {
  return (
    <Section>
      <Header mb="0.5rem" as="h5">What's New</Header>
      <Carousel>
        <Carousel.Item>
          <NewCard fd="column" jc="flex-start">
            <Image img_name="new-bg-2.png" />
            <Text weight="bold" pl="7px">
              How to use the App
            </Text>
            <Text pl="7px">Getting access to on-demand</Text>
          </NewCard>
        </Carousel.Item>
        <Carousel.Item>
          <NewCard fd="column" jc="flex-start">
            <Image img_name="new-bg-1.png" />
            <Text weight="bold" pl="7px">
              List your service on MyKuya
            </Text>
            <Text pl="7px">Do you offer ManPow</Text>
          </NewCard>
        </Carousel.Item>
        <Carousel.Item>
          <div></div>
        </Carousel.Item>
      </Carousel>
    </Section>
  )
}
