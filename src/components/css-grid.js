import styled from "styled-components"
import PropTypes from "prop-types"
import Box from "./box"
import device from "../device"

const CssGrid = styled(Box)`
  display: grid;
  height: ${props => props.height || "100%"};
  margin: ${props => props.margin || "0"};
  grid-template-columns: ${props => props.columns || "auto"};
  grid-gap: ${props => props.grid_gap || ""};
  grid-template-rows: ${props => props.rows || "auto"};
  grid-column-gap: ${props => props.column_gap || ""};
  grid-row-gap: ${props => props.row_gap || ""};
  align-items: ${props => props.align || "start"};
  justify-items: ${props => props.justify || "unset"};
  background-color: ${props => props.bgcolor || "none"};

  @media ${device.tabletL} {
    grid-template-columns: ${props =>
      props.tablet_columns ? props.tablet_columns : props.columns};
    grid-gap: ${props =>
      props.tablet_grid_gap ? props.tablet_grid_gap : props.grid_gap};
    grid-template-rows: ${props =>
      props.tablet_rows ? props.tablet_rows : props.rows};
    grid-column-gap: ${props =>
      props.tablet_column_gap ? props.tablet_column_gap : props.column_gap};
    grid-row-gap: ${props =>
      props.tablet_row_gap ? props.tablet_row_gap : props.row_gap};
  }
  @media ${device.tabletS} {
    grid-template-columns: ${props =>
      props.mobile_columns ? props.mobile_columns : props.columns};
    grid-gap: ${props =>
      props.mobile_grid_gap ? props.mobile_grid_gap : props.grid_gap};
    grid-template-rows: ${props =>
      props.mobile_rows ? props.mobile_rows : props.rows};
    grid-column-gap: ${props =>
      props.mobile_column_gap ? props.mobile_column_gap : props.column_gap};
    grid-row-gap: ${props =>
      props.mobile_row_gap ? props.mobile_row_gap : props.row_gap};
  }
`

export default CssGrid

CssGrid.propTypes = {
  align: PropTypes.string,
  bgcolor: PropTypes.string,
  column_gap: PropTypes.string,
  columns: PropTypes.string,
  justify: PropTypes.string,
  margin: PropTypes.string,
  row_gap: PropTypes.string,
}
