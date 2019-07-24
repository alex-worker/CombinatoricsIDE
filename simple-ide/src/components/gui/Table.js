import React from 'react'
import { AutoSizer, Table as VirtualTable, CellMeasurerCache, CellMeasurer } from 'react-virtualized'
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

const _rowGetter = ({ index }) => {
  return list.get(index % list.size)
}

const MyTable = (props) => {
//   const { width, height, list } = props
//   _cache.clearAll()
  return <VirtualTable
    // width={width}
    // height={height}
    rowHeight={_cache.rowHeight}
    rowGetter={_rowGetter}
    deferredMeasurementCache={_cache}
    rowCount={list.length}
  >
    'Table'
  </VirtualTable>
}

const Table = (props) => {
  const { list } = props
  return <AutoSizer>
    {({ width, height }) => {
      return <MyTable
        list={list}
        width={width}
        height={height}
      />
    }}
  </AutoSizer>
}

export default Table
