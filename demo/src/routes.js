import React from "react"
import ReactSvgBarChart from "../../src"

import demoHtml from "./demo.md"
import readmeHtml from "../../README.md"

const data = []

for (let x = 2; x <= 30; x++) {
  data.push({x: x, y: Math.floor(Math.random() * 90)})
}

const routes = [
  {
    path: "/",
    exact: true,
    demo: {
      component: (
        <ReactSvgBarChart
          data={data}
          pointsStrokeColor="#44B39D"
          pathColor="#44B39D"
          areaColor="#44B39D"
          barsColor="#44B39D"
          areaVisible
          gridVisible
          axisVisible
          labelsVisible
          onHover={(point, e) =>
            point &&
            // eslint-disable-next-line
            console.log("Point:" + point.x + "," + point.y, "Event:", e)
          }
        />
      ),
      hiddenProps: [
        "data",
        "getX",
        "getY",
        "labelsCharacterWidth",
        "labelsFormatX",
        "labelsFormatY",
        "labelsHeightX",
        "labelsOffsetX",
        "labelsOffsetY",
        "pathSmoothing",
        "pointsIsHoverOnZone",
        "onHover",
      ],
      displayName: "ReactSvgBarChart",
      html: demoHtml,
    },
    label: "Demo",
  },
  {
    path: "/readme",
    html: readmeHtml,
    label: "Read me",
  },
]

export default routes
