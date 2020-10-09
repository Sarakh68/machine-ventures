import React from "react"
import styled, { css } from "styled-components"
import { baseStyles, responsiveStyles } from "./responsive-style"

const createElement = React.createElement

export const BaseElement = css`
  text-align: ${props => props.align || "left"};
  color: ${props => props.color || ""};
  line-height: ${props => props.lh || "1.5"};
  max-width: ${props => props.max_width || ""};
  min-width: ${props => props.min_width || ""};

  ${baseStyles}
  ${responsiveStyles}
`
export const Text = styled.p`
  ${BaseElement}
  font-weight: ${props => props.weight || "normal"};
  font-size: ${props => props.size || "16px"};
  width: ${props => props.width || "auto"};
`

export const Header = styled(({ as = "h1", children, ...props }) =>
  createElement(as, props, children)
)`
  ${BaseElement}
  font-weight: ${props => props.weight || "bold"};
  font-size: ${props => {
    if (props.size) return props.size
    if (props.as === "h1") return "6.4rem"
    if (props.as === "h2") return "4.8rem"
    if (props.as === "h3") return "3.2rem"
    if (props.as === "h4") return "2.4rem"
    if (props.as === "h5") return "2rem"
  }};
  width: ${props => props.width || "100%"};
`