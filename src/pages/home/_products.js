import React from "react"
import styled from "styled-components"
import Image from "../../components/image"
import Flex from "../../components/flex"

export default function Products() {
  return (
    <Flex width="400px" fd="column">
      <Flex>
        <Image img_name="2-icon.png" width="100px" height="100px"></Image>
        <Image img_name="3-icon.png" width="100px" height="100px"></Image>
        <Image img_name="4-icon.png" width="100px" height="100px"></Image>
      </Flex>
      <Flex>
        <Image img_name="6-icon.png" width="100px" height="100px"></Image>
        <Image img_name="9-icon.png" width="100px" height="100px"></Image>
        <Image img_name="9-icon.png" width="100px" height="100px"></Image>
      </Flex>
      <Flex>
        <Image img_name="10-icon.png" width="100px" height="100px"></Image>
        <Image img_name="12-icon.png" width="100px" height="100px"></Image>
        <Image img_name="13-icon.png" width="100px" height="100px"></Image>
      </Flex>
      <Flex>
        <Image img_name="14-icon.png" width="100px" height="100px"></Image>
        <Image img_name="15-icon.png" width="100px" height="100px"></Image>
        <Image img_name="16-icon.png" width="100px" height="100px"></Image>
      </Flex>
      <Flex>
        <Image img_name="17-icon.png" width="100px" height="100px"></Image>
        <Image img_name="23-icon.png" width="100px" height="100px"></Image>
        <Image img_name="24-icon.png" width="100px" height="100px"></Image>
      </Flex>
      <Flex>
        <Image img_name="25-icon.png" width="100px" height="100px"></Image>
        <Image img_name="26-icon.png" width="100px" height="100px"></Image>
        <Image img_name="27-icon.png" width="100px" height="100px"></Image>
      </Flex>
      <Flex>
        <Image img_name="28-icon.png" width="100px" height="100px"></Image>
      </Flex>
    </Flex>
  )
}
