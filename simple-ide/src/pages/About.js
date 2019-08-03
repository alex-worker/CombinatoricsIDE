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

const About = () => {
  return <div>
    <h1>'About'</h1>
      <WindowScroller >
        {({ height, isScrolling, onChildScroll, scrollTop, width }) => {
          _cache.clearAll()
            return <Table
              width={width}
              height={height}
              // headerHeight={20}
              rowHeight={30}
              rowCount={list.length}
              rowGetter={({ index }) => list[index]}
              // rowGetter={_rowGetter}
              // autoHeight
              // height={height}
              // isScrolling={isScrolling}
              // onScroll={onChildScroll}
              // rowCount={list.length}
              // rowHeight={_cache.rowHeight}
              // // deferredMeasurementCache={_cache}
              // rowRenderer={_renderRow}
              // scrollTop={scrollTop}
              // width={width}
            >
              <Column
                label='Name'
                dataKey='name'
                width={100}
              />
              <Column
                // width={width - 100}
                flexGrow={1}
                label='Description'
                dataKey='description'
              />
            </Table>
          }}
        </WindowScroller>
  </div>
}

export default About
