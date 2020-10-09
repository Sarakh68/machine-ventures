import { css } from "styled-components"
import { size } from "../device"

const Margins = ({ m, mt, ml, mr, mb }) => css`
  margin: ${m ? m : 0};
  margin-top: ${mt ? mt : null};
  margin-right: ${mr ? mr : null};
  margin-bottom: ${mb ? mb : null};
  margin-left: ${ml ? ml : null};
`
const Paddings = ({ p, pt, pl, pr, pb }) => css`
  padding: ${p ? p : null};
  padding-top: ${pt ? pt : null};
  padding-bottom: ${pb ? pb : null};
  padding-right: ${pr ? pr : null};
  padding-left: ${pl ? pl : null};
`

export const mediaqueries = Object.keys(size)
  .sort(function (a, b) {
    return size[b] - size[a]
  })
  .reduce((accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${size[label]}px) {
        ${css(...args)};
      }
    `
    return accumulator
  }, {})

export const generateResponsiveStyles = stylesGenerator => props => {
  return Object.keys(mediaqueries).reduce((rules, mq) => {
    if (!props[mq]) return rules
    const styles = mediaqueries[mq]`        
        ${stylesGenerator(props[mq])}
        `
    return [...rules, styles]
  }, [])
}

export const baseStyles = ({
  m,
  mt,
  ml,
  mr,
  mb,
  p,
  pt,
  pl,
  pr,
  pb,
}) => css`
  ${Margins({ m, mt, ml, mr, mb })}
  ${Paddings({ p, pt, pl, pr, pb })}
`

export const responsiveStyles = generateResponsiveStyles(baseStyles)
