import {mount, shallow} from "enzyme"
import React from "react"
import Points from "./index"

const onHover = jest.fn()
const point1 = {x: 1, y: 2, active: true}
const commonProps = {
  data: [point1, {x: 2, y: 3}, {x: 3, y: 0}, {x: 4, y: 6}, {x: 5, y: 2}],
  minX: 1,
  maxX: 5,
  minY: 0,
  maxY: 6,
  onHover: onHover,
  pointsRadius: 4,
  pointFill: "#34495e",
}
const PointsFixture = <Points {...commonProps} pointsVisible={true} />
const ZonesFixture = (
  <Points {...commonProps} pointsVisible={true} pointsIsHoverOnZone />
)
const NoPointsFixture = <Points {...commonProps} pointsVisible={false} />

describe("Points", () => {
  it("renders", () => {
    mount(PointsFixture)
    mount(ZonesFixture)
    mount(NoPointsFixture)
  })

  it("calls onHover when mouse enter on point", () => {
    const points = shallow(PointsFixture)
    points
      .find("Point")
      .first()
      .simulate("mouseEnter")

    expect(onHover).toHaveBeenCalled()
    expect(onHover).toHaveBeenCalledTimes(1)
    expect(onHover).toHaveBeenCalledWith(point1, undefined)
  })

  it("calls onHover when mouse leave point", () => {
    const points = shallow(PointsFixture)
    points
      .find("Point")
      .first()
      .simulate("mouseLeave")

    expect(onHover).toHaveBeenCalled()
    expect(onHover).toHaveBeenCalledTimes(2)
  })

  it("calls onHover when mouse enter on zone", () => {
    const points = shallow(ZonesFixture)
    points
      .find("Zone")
      .first()
      .simulate("mouseEnter")

    expect(onHover).toHaveBeenCalled()
    expect(onHover).toHaveBeenCalledTimes(3)
    expect(onHover).toHaveBeenCalledWith(point1, undefined)
  })

  it("calls onHover when mouse leave zone", () => {
    const points = shallow(ZonesFixture)
    points
      .find("Zone")
      .first()
      .simulate("mouseLeave")

    expect(onHover).toHaveBeenCalled()
    expect(onHover).toHaveBeenCalledTimes(4)
  })
})
