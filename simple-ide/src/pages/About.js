import React, { useEffect } from 'react'
import { Column, Table, AutoSizer, List, CellMeasurerCache, CellMeasurer } from 'react-virtualized'
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

// const _columnCellRenderer = ({ dataKey, parent, rowIndex }) => {
//   const content = list[rowIndex][dataKey]
//   return <CellMeasurer
//     cache={_cache}
//     // columnIndex={0}
//     key={dataKey}
//     parent={parent}
//     rowIndex={rowIndex}>
//     <div
//       // className={styles.tableColumn}
//       style={{
//         whiteSpace: 'normal'
//       }}>
//       {content}
//     </div>
//   </CellMeasurer>
// }

const _renderRow = ({ index, key, style, parent }) => {
  return <CellMeasurer
    key={key}
    cache={_cache}
    parent={parent}
    columnIndex={0}
    rowIndex={index}>
    <div style={{
      ...style
      // height: 35,
      // whiteSpace: 'nowrap'
    }}>
      <div>{list[index].name}</div>
      <div>{list[index].description}</div>
    </div>
  </CellMeasurer>
}

const _unmount = () => {
  console.log('unmount')
}

const MyList = () => {
  useEffect(() => {
    _cache.clear()
    console.log('clear')
    return _unmount
  })

  return <AutoSizer>
    {({ height, width }) => {
      return <List
        width={width}
        height={height}
        rowHeight={_cache.rowHeight}
        deferredMeasurementCache={_cache}
        rowRenderer={_renderRow}
        rowCount={list.length}
        overscanRowCount={3} />
    }}
  </AutoSizer>
}

const About = () => {
  return <div>
    <h1>'About'</h1>
    <div style={{ height: '400px' }}>
      <MyList />
    </div>
  </div>
}

export default About
