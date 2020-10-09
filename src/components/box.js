import styled from "styled-components"
import { baseStyles, responsiveStyles } from "./responsive-style"

const Box = styled.div`
  width: ${props => (props.width ? props.width : "")};
  height: ${props => (props.height ? props.height : "")};
  min-height: ${props => (props.min_height ? props.min_height : "")};
  max-width: ${props => (props.max_width ? props.max_width : "")};
  position: ${props => (props.position ? props.position : "")};
  background: ${props =>
    props.background || props.bg ? props.background || props.bg : ""};
  border: ${props => (props.border ? props.border : "")};
  ${baseStyles}
  ${responsiveStyles}
`
export default Box
