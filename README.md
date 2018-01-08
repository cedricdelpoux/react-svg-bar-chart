# react-svg-bar-chart

[![npm package][npm-badge]][npm] [![Travis][build-badge]][build]
[![Codecov][codecov-badge]][codecov] ![Module formats][module-formats]

A lightweight responsive bar chart component for React using SVG

## Getting started

[![react-svg-bar-chart](https://nodei.co/npm/react-svg-bar-chart.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-svg-bar-chart/)

You can download `react-svg-bar-chart` from the NPM registry via the `npm` or
`yarn` commands

```shell
yarn add react-svg-bar-chart
npm install react-svg-bar-chart --save
```

If you don't use package manager and you want to include `react-svg-bar-chart`
directly in your html, you could get it from the UNPKG CDN

```html
https://unpkg.com/react-svg-bar-chart/umd/react-svg-bar-chart.js
```

## Demo

See [Demo page][github-page]

## Usage

```js
import React from "react"
import BarChart from "react-svg-bar-chart"

const data = []

for (let x = 1; x <= 30; x++) {
    data.push({x: x, y: Math.floor(Math.random() * 100)})
}

const MyComponent = () => (
    <BarChart data={data} onHover={this.handlePointHover} />
)
```

### Props

| Name                 | PropType              | Description                                                                       | Default              |
| -------------------- | --------------------- | --------------------------------------------------------------------------------- | -------------------- |
| areaColor            | String                | Area color (hex, rgb...)                                                          | "#34495e"            |
| areaOpacity          | Number                | Area opacity                                                                      | .5                   |
| areaVisible          | Boolean               | Area visibility                                                                   | false                |
| axisColor            | Number                | Axis color                                                                        | "#34495e"            |
| axisOpacity          | Number                | Axis opacity                                                                      | .5                   |
| axisVisible          | Boolean               | Axis visibility                                                                   | true                 |
| axisWidth            | Number                | Axis width                                                                        | 1                    |
| barsColor            | String                | Bars color                                                                        | "#34495e"            |
| barsOpacity          | Number                | Bars opacity                                                                      | 1                    |
| barsMargin           | Number                | Bars margin left and right (> 0 && <= 0.5)                                        | 0.1                  |
| data                 | Array of data Objects | data is {x: number, y: number, active: bool})                                     | []                   |
| gridColor            | String                | Grid color                                                                        | "#34495e"            |
| gridOpacity          | Number                | Grid color                                                                        | .5                   |
| gridVisible          | Boolean               | Grid visibility                                                                   | true                 |
| gridWidth            | Number                | Grid width                                                                        | 1                    |
| labelsCharacterWidth | Number                | Labels character with (depending on your font) to calculate the width of Y labels | 10                   |
| labelsColor          | String                | Labels color                                                                      | "#34495e"            |
| labelsCountY         | Number                | Y labels count                                                                    | 5                    |
| labelsFormatX        | Function              | Custom X labels                                                                   | x => x               |
| labelsFormatY        | Function              | Custom Y labels                                                                   | y => y               |
| labelsHeightX        | Number                | X labels height (depending on your font)                                          | 12                   |
| labelsOffsetX        | Number                | X labels offset                                                                   | 15                   |
| labelsOffsetY        | Number                | Y labels offset                                                                   | 15                   |
| labelsStepX          | Number                | X labels step                                                                     | 1                    |
| labelsVisible        | Number                | Labels visibility                                                                 | true                 |
| pathWidth            | Number                | Path width                                                                        | 1                    |
| pointsColor          | String                | Points color                                                                      | "#fff"               |
| pointsIsHoverOnZone  | Boolean               | `onHover` function callback called on zone hover instead of points hover          | false                |
| onHover              | Function              | Callback when one point is hovered                                                | (point, event) => {} |
| pointsRadius         | Number                | Points radius                                                                     | 4                    |
| pointsStrokeColor    | String                | Points stroke color                                                               | "#34495e"            |
| pointsStrokeWidth    | Number                | Points stroke width                                                               | 2                    |
| pointsVisible        | Boolean               | Points visibility                                                                 | false                |
| viewBoxHeight        | Number                | SVG viewport height                                                               | 300                  |
| viewBoxWidth         | Number                | SVG viewport width                                                                | 800                  |

## Contributing

* ⇄ Pull/Merge requests and ★ Stars are always welcome.
* For bugs and feature requests, please [create an issue][github-issue].
* Pull requests must be accompanied by passing automated tests (`npm test`).

See [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines

## Changelog

See [changelog](./CHANGELOG.md)

## License

This project is licensed under the MIT License - see the
[LICENCE.md](./LICENCE.md) file for details

[npm-badge]: https://img.shields.io/npm/v/react-svg-bar-chart.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-svg-bar-chart
[build-badge]: https://img.shields.io/travis/xuopled/react-svg-bar-chart/master.svg?style=flat-square
[build]: https://travis-ci.org/xuopled/react-svg-bar-chart
[codecov-badge]: https://img.shields.io/codecov/c/github/xuopled/react-svg-bar-chart.svg?style=flat-square
[codecov]: https://codecov.io/gh/xuopled/react-svg-bar-chart
[module-formats]: https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg?style=flat-square
[github-page]: https://xuopled.github.io/react-svg-bar-chart/
[github-issue]: https://github.com/xuopled/react-svg-bar-chart/issues/new
