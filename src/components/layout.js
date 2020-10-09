import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Nav } from "./nav"
import HomeHeader from "../images/svg/home-header.svg"
import { Text } from "./typography"
import { DataProducts } from "../pages/home/_product-data"
import Image from "./image"
import Flex from "./flex"

const Main = styled.main`
  padding-top: 2rem;
  padding-bottom: 4rem;
  background: white;
  height: 100%;
  position: relative;
`
const FeatureWrapper = styled.div`
  position: relative;
  height: 220px;
`
const Feature = styled.div`
  position: absolute;
  width: 90%;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  background-color: white;
  padding: 10px;
  box-shadow: 0px 5px 4px #e2e2e2;
  margin-bottom: 10px;
`
const Layout = ({ children }) => {
  return (
    <>
      <FeatureWrapper>
        <HomeHeader></HomeHeader>
        <Feature>
          <Text size="20px" weight="bold">
            Featured
          </Text>
          <Flex>
            {DataProducts.map(
              (product, idx) =>
                product.is_featured && (
                  <Flex
                    key={idx}
                    fd="column"
                    width="200px"
                    jc="center"
                    ai="center"
                  >
                    <Image
                      img_name={product.image}
                      width="70px"
                      height="70px"
                    ></Image>
                    <Text align="center" size="15px">
                      {product.title}
                    </Text>
                  </Flex>
                )
            )}
          </Flex>
        </Feature>
      </FeatureWrapper>

      <Nav />
      <Main>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
