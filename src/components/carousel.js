import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import Swiper from "react-id-swiper"
import { Helmet } from "react-helmet"

const Item = ({ children, ...props }) => <div {...props}>{children}</div>

Item.propTypes = {
  children: PropTypes.node,
}
const params = {
  lazy: true,
  slidesPerView: 2,
  spaceBetween: 80,
  loop: false,
  height: "100%",
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
