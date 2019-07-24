import React from 'react'
import { AutoSizer, List, CellMeasurerCache, CellMeasurer } from 'react-virtualized'
import faker from 'faker'
import 'react-virtualized/styles.css'

var list = []

// const rowHeight = 50

for (let index = 0; index < 100; index++) {
  const fakeData = {
    name: faker.name.findName(),
    description: faker.lorem.paragraph()
  }
  list.push(fakeData)
}

const _cache = new CellMeasurerCache({
  fixedWidth: true,
  minHeight: 25
})

const _renderRow = ({ index, key, style, parent }) => {
  return <CellMeasurer
    key={key}
    cache={_cache}
    parent={parent}
    columnIndex={0}
    rowIndex={index}>
    <tr style={{
      ...style
      // height: 35,
      // whiteSpace: 'nowrap'
    }}>
      <td>{list[index].name}</td>
      <td>{list[index].description}</td>
    </tr>
  </CellMeasurer>
}

const MyList = (props) => {
  const { width, height } = props
  _cache.clearAll()

  return <List
    width={width}
    height={height}
    rowHeight={_cache.rowHeight}
    deferredMeasurementCache={_cache}
    rowRenderer={_renderRow}
    rowCount={list.length}
    overscanRowCount={3} />
}

const About = () => {
  return <div>
    <h1>'About'</h1>
    <table style={{ height: '400px' }}>
      <tbody style={{ height: '400px' }}>
        <AutoSizer>
          {({ height, width }) => {
            return <MyList width={width} height={height} />
          }}
        </AutoSizer>
      </tbody>
    </table>
  </div>
}

export default About
