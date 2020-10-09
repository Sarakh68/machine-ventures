import React from "react"
import styled from "styled-components"
import CssGrid from "../../components/css-grid"
import Flex from "../../components/flex"
import Image from "../../components/image"
import { Text } from "../../components/typography"
import { DataProducts } from "./_product-data"

const Section = styled.section`
  width: 100%;
`

export default function Products() {
  return (
    <Section>
      <Flex m="0 auto">
        <CssGrid
          columns="repeat(5, 30px)"
          rows="repeat(2, auto)"
          row_gap="40px"
          column_gap="200px"
          justify="center"
          align="center"
          tablet_columns="repeat(3, 10px)"
          mobile_column_gap="130px"
          mobile_columns="repeat(3, 10px)"
        >
          {DataProducts.map((product, idx) => (
            <Flex key={idx} fd="column" width="200px" jc="center" ai="center">
              <Image
                img_name={product.image}
                width="70px"
                height="70px"
              ></Image>
              <Text align="center" size="15px">
                {product.title}
              </Text>
            </Flex>
          ))}
        </CssGrid>
      </Flex>
    </Section>
  )
}
