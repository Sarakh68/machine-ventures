import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"
import Swiper from "react-id-swiper"

const Item = ({ children, ...props }) => <div {...props}>{children}</div>

Item.propTypes = {
  children: PropTypes.node,
}
const params = {
  lazy: true,
  slidesPerView: 2,
  spaceBetween: 90,
  loop: false,
  height: "100%",
  overflow: "initial",
}
const Carousel = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" type="text/css" href="/css/swiper.css" />
      </Helmet>

      <Swiper {...params}>{children}</Swiper>
    </>
  )
}
Carousel.propTypes = {
  children: PropTypes.node,
}

Carousel.Item = Item

export default Carousel
