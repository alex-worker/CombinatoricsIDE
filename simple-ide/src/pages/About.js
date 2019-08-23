import React from 'react'
import { AutoSizer, List, Table, Column, CellMeasurerCache, CellMeasurer, WindowScroller } from 'react-virtualized'
import faker from 'faker'
import 'react-virtualized/styles.css'

var list = []

for (let index = 0; index < 1000; index++) {
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

// const _renderRow = ({ index, key, style, parent }) => {
//   return <CellMeasurer
//     key={key}
//     cache={_cache}
//     parent={parent}
//     columnIndex={0}
//     rowIndex={index}>
//     <tr style={{
//       ...style
//       // height: 35,
//       // whiteSpace: 'nowrap'
//     }}>
//       <td>{list[index].name}</td>
//       <td>{list[index].description}</td>
//     </tr>
//   </CellMeasurer>
// }

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

const _columnCellRenderer = ({ dataKey, parent, rowIndex }) => {
  const content = list[rowIndex]
  return (
    <CellMeasurer
      cache={_cache}
      columnIndex={0}
      key={dataKey}
      parent={parent}
      rowIndex={rowIndex}>
      <div
        // className={styles.tableColumn}
        style={{
          whiteSpace: 'normal',
        }}>
        {content[dataKey]}
      </div>
    </CellMeasurer>
  )
}

const MyTablePlace = () => (
  <AutoSizer>
    {({ width, height }) => {
      return (
        <div
          style={{
            width,
            height,
            border: '5px red dashed'
          }}
        >
          {width} x {height}
        </div>
      )
    }}
  </AutoSizer>
)

const About = () => {
  return (
    <>
      <div><h1>'About'</h1></div>
      <div className='AppPage'>
        <MyTablePlace />
      </div>
    </>
  )
}

export default About
