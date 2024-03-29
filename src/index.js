import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Axis from "./components/Axis"
import Bars from "./components/Bars"
import Grid from "./components/Grid"
import Labels from "./components/Labels"
import Points from "./components/Points"

const Svg = styled.svg`
  display: block;
  overflow: visible;
`

const UNIT_WIDTH = 1

function round(n) {
  return Math.round(n * 100) / 100
}

class LineChart extends React.Component {
  getMinX() {
    const {data} = this.props
    return data.length > 0 ? data[0].x : 0
  }

  getMaxX() {
    const {data} = this.props
    return data.length > 0 ? data[data.length - 1].x : 0
  }

  getMinY() {
    return 0
  }

  getMaxY() {
    const {data, labelsCountY} = this.props
    const yStep = labelsCountY > 0 ? labelsCountY : 1
    const maxY =
      data.length > 0
        ? data.reduce(
            (max, point) => (point.y > max ? point.y : max),
            data[0].y
          )
        : 0
    return maxY ? Math.ceil(maxY / yStep) * yStep : yStep
  }

  getSvgX(x) {
    const {viewBoxWidth} = this.props
    const minX = this.getMinX()
    const maxX = this.getMaxX()
    const paddingLeft = this.getLabelsYWidth()
    return round(
      (x - minX) / (maxX + 1 - minX) * (Math.abs(viewBoxWidth) - paddingLeft)
    )
  }

  getSvgY(y) {
    const {
      labelsVisible,
      viewBoxHeight,
      labelsOffsetX,
      labelsHeightX,
    } = this.props
    const paddingBottom = labelsVisible ? labelsHeightX + labelsOffsetX : 0
    const height = Math.abs(viewBoxHeight) - paddingBottom
    const maxY = this.getMaxY()
    return round(height - y / maxY * height)
  }

  getLabelsYWidth() {
    const {labelsVisible, labelsOffsetY, labelsCharacterWidth} = this.props
    const maxY = this.getMaxY()
    return labelsVisible
      ? maxY.toString().length * labelsCharacterWidth + labelsOffsetY
      : 0
  }

  render() {
    const {viewBoxHeight, viewBoxWidth, ...props} = this.props

    const minX = this.getMinX()
    const maxX = this.getMaxX()
    const maxY = this.getMaxY()
    const minY = this.getMinY()

    const commonProps = {
      getX: this.getSvgX.bind(this),
      getY: this.getSvgY.bind(this),
      maxX: maxX,
      maxY: maxY,
      minX: minX,
      minY: minY,
      round: round,
      labelsWidthY: this.getLabelsYWidth(),
      unitWidth: UNIT_WIDTH,
    }

    return (
      <Svg viewBox={`0 0 ${Math.abs(viewBoxWidth)} ${Math.abs(viewBoxHeight)}`}>
        <g transform={`translate(${this.getLabelsYWidth()}, 0)`}>
          <Grid {...props} {...commonProps} />
          <Axis {...props} {...commonProps} />
          <Bars {...props} {...commonProps} />
          <Labels {...props} {...commonProps} />
          <Points {...props} {...commonProps} />
        </g>
      </Svg>
    )
  }
}

LineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    })
  ).isRequired,
  viewBoxHeight: PropTypes.number,
  viewBoxWidth: PropTypes.number,
  ...Bars.propTypes,
  ...Grid.propTypes,
  ...Axis.propTypes,
  ...Points.propTypes,
  ...Labels.propTypes,
}

LineChart.defaultProps = {
  data: [],
  viewBoxHeight: 300,
  viewBoxWidth: 800,
  ...Bars.defaultProps,
  ...Grid.defaultProps,
  ...Axis.defaultProps,
  ...Points.defaultProps,
  ...Labels.defaultProps,
}

export default LineChart
