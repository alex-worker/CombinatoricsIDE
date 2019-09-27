import React from 'react'
import { AutoSizer, List as VirtualList, CellMeasurerCache, CellMeasurer } from 'react-virtualized'
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

const _renderRow = (params) => {
  const { index, key, style, parent } = params
  return <CellMeasurer
    key={key}
    cache={_cache}
    parent={parent}
    columnIndex={0}
    rowIndex={index}>
    <div style={{
      ...style
    }}>
      <div>{list[index].name}</div>
      <div>{list[index].description}</div>
    </div>
  </CellMeasurer>
}

const MyList = (props) => {
  const { width, height, list } = props
  _cache.clearAll()
  return <VirtualList
    width={width}
    height={height}
    // autoHeight
    rowHeight={_cache.rowHeight}
    deferredMeasurementCache={_cache}
    rowRenderer={_renderRow}
    rowCount={list.length}
    overscanRowCount={3} />
}

const List = (props) => {
  const { list } = props
  return <AutoSizer>
    {({ width, height }) => {
      return <MyList
        list={list}
        width={width}
        height={height}
      />
    }}
  </AutoSizer>
}

export default List
