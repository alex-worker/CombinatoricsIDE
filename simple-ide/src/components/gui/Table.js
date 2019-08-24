import React from 'react'
import { AutoSizer, Table, Column, CellMeasurerCache, CellMeasurer } from 'react-virtualized'
import 'react-virtualized/styles.css'

const _cache = new CellMeasurerCache({
  fixedWidth: true,
  minHeight: 25
})

const MyTable = ({ width, height, list }) => {
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
        rowIndex={rowIndex}
      >
        <div
          style={{
            margin: '0 !important',
            padding: 0,
            whiteSpace: 'normal',
            borderBottom: '20px solid gray'
          }}
        >
          {content[dataKey]}
        </div>
      </CellMeasurer>
    )
  }

  return (
    <Table
      width={width}
      height={height}
      deferredMeasurementCache={_cache}
      rowGetter={_rowGetter}
      rowCount={list.length}
      rowHeight={_cache.rowHeight}
    >
      <Column
        dataKey='description'
        label='Name'
        cellRenderer={_columnCellRenderer}
        width={width}
      />
    </Table>
  )
}

const MyTablePlace = ({ list }) => (
  <AutoSizer>
    {({ width, height }) => {
      _cache.clearAll()
      return (
        <div
          className='AppList'
          style={{
            width,
            height
          }}
        >
          <MyTable list={list} width={width} height={height} />
        </div>
      )
    }}
  </AutoSizer>
)

export default MyTablePlace
