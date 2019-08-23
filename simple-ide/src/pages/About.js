import React from 'react'
import { AutoSizer, Table, Column, CellMeasurerCache, CellMeasurer } from 'react-virtualized'
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

const _rowGetter = ({ index }) => {
  return list[index]
}

const _columnCellRenderer = ({ dataKey, parent, rowIndex }) => {
  const content = list[rowIndex]
  // console.log( content[dataKey] )
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

const MyTable = ({ width, height }) => {
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

const MyTablePlace = () => (
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
          <MyTable width={width} height={height} />
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
