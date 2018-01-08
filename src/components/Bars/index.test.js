import {mount, shallow} from "enzyme"
import React from "react"
import Bars from "./index"

const onHover = jest.fn()
const data1 = {x: 1, y: 2, active: true}
const commonProps = {
  data: [data1, {x: 2, y: 3}, {x: 3, y: 0}, {x: 4, y: 6}, {x: 5, y: 2}],
  minX: 1,
  maxX: 5,
  minY: 0,
  maxY: 6,
  onHover: onHover,
}
const BarsFixture = <Bars {...commonProps} />
const BarsBarMarginFixture = <Bars {...commonProps} barsMargin={2} />

describe("Bars", () => {
  it("renders", () => {
    mount(BarsFixture)
    mount(BarsBarMarginFixture)
  })

  it("calls onHover when mouse enter on point", () => {
    const points = shallow(BarsFixture)
    points
      .find("Bar")
      .first()
      .simulate("mouseEnter")

    expect(onHover).toHaveBeenCalled()
    expect(onHover).toHaveBeenCalledTimes(1)
    expect(onHover).toHaveBeenCalledWith(data1, undefined)
  })

  it("calls onHover when mouse leave point", () => {
    const points = shallow(BarsFixture)
    points
      .find("Bar")
      .first()
      .simulate("mouseLeave")

    expect(onHover).toHaveBeenCalled()
    expect(onHover).toHaveBeenCalledTimes(2)
  })
})
