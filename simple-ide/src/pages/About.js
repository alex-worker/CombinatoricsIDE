import React from 'react'
import { AutoSizer, List, Table, Column, CellMeasurerCache, CellMeasurer, WindowScroller } from 'react-virtualized'
import faker from 'faker'
import 'react-virtualized/styles.css'

var list = []

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

// const MyList = (props) => {
//   const { width, height } = props
//   _cache.clearAll()
//   return <List
//     width={width}
//     height={height}
//     rowHeight={_cache.rowHeight}
//     deferredMeasurementCache={_cache}
//     rowRenderer={_renderRow}
//     rowCount={list.length}
//     overscanRowCount={3} />
// }

const _rowGetter = ({ index }) => {
  return list[index]
}

const MyTablePlace = () => (
  <div style={{
    border: '1px dotted red',
    height: '100vh'
  }}>
    <AutoSizer>
      {({ width, height }) => (
        <Table
          width={width}
          height={height}
          rowHeight={50}
          rowGetter={_rowGetter}
          rowCount={list.length}
        >
          <Column
            dataKey='name'
            // width={90}
          />
        </Table>
      )}
    </AutoSizer>
  </div>
)

const About = () => {
  return <div>
    <h1>'About'</h1>
    <MyTablePlace />
  </div>
}

export default About
