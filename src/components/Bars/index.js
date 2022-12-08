import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Labels from "../Labels"

function round(n) {
  return Math.round(n * 100) / 100
}

const BARS_MARGIN_DEFAULT = 0.1

const Bar = styled.rect`
  fill: ${props => props.color};
  opacity: ${props => props.opacity};
  stroke: none;
  cursor: ${props => (props.onClick ? "pointer" : "auto")};
`

Bar.displayName = "Bar"

class Bars extends React.Component {
  render() {
    const {
      barsOpacity,
      barsMargin,
      barsColor,
      data,
      onClick,
      onHover,
      getX,
      getY,
      minX,
      minY,
      unitWidth,
    } = this.props
    const margin =
      barsMargin >= 0 && barsMargin < unitWidth / 2
        ? barsMargin
        : BARS_MARGIN_DEFAULT
    const barsWidth = unitWidth - margin * 2
    return (
      <g>
        {data.map((point, i) => (
          <Bar
            key={i}
            color={barsColor}
            opacity={barsOpacity}
            x={getX(point.x + margin)}
            y={getY(point.y)}
            width={getX(barsWidth + minX)}
            height={round(getY(minY) - getY(point.y), 2)}
            onClick={e => onClick(point, e)}
            onMouseEnter={e => onHover(point, e)}
            onMouseLeave={() => onHover(null, null)}
          />
        ))}
      </g>
    )
  }
}

Bars.propTypes = {
  barsColor: PropTypes.string,
  barsMargin: PropTypes.number,
  barsOpacity: PropTypes.number,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    })
  ).isRequired,
  getX: PropTypes.func,
  getY: PropTypes.func,
  labelsHeightX: Labels.propTypes.labelsHeightX,
  labelsOffsetX: Labels.propTypes.labelsOffsetX,
  labelsOffsetY: Labels.propTypes.labelsOffsetY,
  labelsWidthY: PropTypes.number,
  minX: PropTypes.number.isRequired,
  minY: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  onHover: PropTypes.func,
  unitWidth: PropTypes.number,
}

Bars.defaultProps = {
  barsColor: "#34495e",
  barsMargin: BARS_MARGIN_DEFAULT,
  barsOpacity: 1,
  getX: x => x,
  getY: y => y,
  labelsHeightX: Labels.defaultProps.labelsHeightX,
  labelsOffsetX: Labels.defaultProps.labelsOffsetX,
  labelsOffsetY: Labels.defaultProps.labelsOffsetY,
  unitWidth: 1,
}

export default Bars
