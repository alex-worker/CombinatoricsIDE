import React from 'react'
import { AutoSizer, Table, Column, CellMeasurerCache, CellMeasurer } from 'react-virtualized'
import Draggable from 'react-draggable'
import 'react-virtualized/styles.css'

/*
const itemSizeSumm = (accumulator, item) => {
  let currentValue
  if ('width' in item) {
    currentValue = item.width
  } else {
    currentValue = 1
  }
  return accumulator + currentValue
}

const _cache = new CellMeasurerCache({
  fixedWidth: true,
  minHeight: 25
})

const MyTable = ({ width, height, list, columns }) => {
  _cache.clearAll()
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
            whiteSpace: 'normal',
            border: '1px solid gray'
          }}
        >
          {content[dataKey]}
        </div>
      </CellMeasurer>
    )
  }

  const listColumns = ({ columns, width }) => {
    const sumColumnWidth = columns.reduce(itemSizeSumm, 0) // сумма всех условных ширин колонок
    const calcItemWidth = (_width) => {
      if (_width === undefined) {
        _width = 1
      }
      return width * _width / sumColumnWidth // ширину таблицы умножаем на условную ширину колонки и делим на сумму условных ширин колонок
    }
    const myList = columns.map((item, index) => {
      return (
        <Column
          className='tableColumn'
          key={index}
          dataKey={item.key}
          label={item.label}
          // cellRenderer={_columnCellRenderer}
          // width={calcItemWidth(item.width)}
          width={200}
        />
      )
    })
    return myList
  }

  return (
    <Table
      className='tableTable'
      width={width}
      height={height}
      headerHeight={20}
      rowClassName='tableRow'
      deferredMeasurementCache={_cache}
      rowGetter={_rowGetter}
      rowCount={list.length}
      rowHeight={_cache.rowHeight}
    >
      {listColumns({ columns, width })}
    </Table>
  )
}

const MyTablePlace = ({ list, columns }) => (
  <AutoSizer>
    {({ width, height }) => {
  //     _cache.clearAll()
      return (
  //       <div
  //         className='AppList'
  //         style={{
  //           width,
  //           height
  //         }}
  //       >
          <MyTable list={list} columns={columns} width={width} height={height} />
        // </div>
      )
    }}
  </AutoSizer>
)
*/

/* <Column
        label='Name'
        dataKey='name'
        width={100}
      />
      <Column
        cellRenderer={_columnCellRenderer}
        label='Description'
        dataKey='description'
        width={width - 100}
      /> */

// const _resizeRow = ({ dataKey, deltaX }) => {

// }

// const _headerRenderer = ({
//   columnData,
//   dataKey,
//   disableSort,
//   label,
//   sortBy,
//   sortDirection
// }) => {
//   return (
//     <React.Fragment key={dataKey}>
//       <div className='ReactVirtualized__Table__headerTruncatedText'>
//         {label}
//       </div>
//       <Draggable
//         axis='x'
//         defaultClassName='DragHandle'
//         defaultClassNameDragging='DragHandleActive'
//         onDrag={(event, { deltaX }) => _resizeRow({ dataKey, deltaX })}
//         position={{ x: 0 }}
//         zIndex={999}
//       >
//         <span className='DragHandleIcon'>⋮</span>
//       </Draggable>
//     </React.Fragment>
//   )
// }

const _onClick = (row, key, data) => {
  console.log(row, key, data)
}

const _cellRenderer = ({
  cellData,
  columnData,
  columnIndex,
  dataKey,
  isScrolling,
  rowData,
  rowIndex
}) => {
  return <div onClick={() => _onClick(rowIndex, dataKey, rowData)}>{cellData}</div>
}

const columnMaker = (columns, width) => {
  const columnList = columns.map((item, index) => {
    const colWidth = (typeof item.width === 'function') ? item.width(width) : item.width
    return (
      <Column
        // headerRenderer={_headerRenderer}
        key={index}
        label={item.label}
        dataKey={item.key}
        width={colWidth}
        cellRenderer={_cellRenderer}
      />
    )
  })
  return columnList
}

  // const _columnCellRenderer = ({ dataKey, parent, rowIndex }) => {
  //   const content = list[rowIndex]
  //   return (
  //     <CellMeasurer
  //       cache={_cache}
  //       columnIndex={0}
  //       key={dataKey}
  //       parent={parent}
  //       rowIndex={rowIndex}
  //     >
  //       <div
  //         style={{
  //           whiteSpace: 'normal'
  //           // border: '1px solid gray'
  //         }}
  //       >
  //         {content[dataKey]}
  //       </div>
  //     </CellMeasurer>
  //   )
  // }

const MyTable = ({ width, height, list, columns }) => {
  // column width calculated array
  // let fixedWidthSum = 0 // summ of fixed cols
  // let unfixedColsNum = 0 // count of resized columns
  // const columnWidth = columns.map((item, index) => {
  //   if ('width' in item) {
  //     fixedWidthSum += item.width
  //     return item.width
  //   }
  //   return 0
  // })
  // console.log(columnWidth, fixedWidthSum)
  _cache.clearAll()
  return <div>
    <Table
      rowClassName='tableRow'
      headerHeight={40}
      width={width}
      height={height}
      rowHeight={_cache.rowHeight}
      rowCount={list.length}
      rowGetter={({ index }) => list[index]}
    >
      {columnMaker(columns, width)}
    </Table>
  </div>
}

const _cache = new CellMeasurerCache({
  fixedWidth: true,
  minHeight: 25
})

const MyTablePlace = ({ list, columns }) => (
  <AutoSizer>
    {({ width, height }) => {
      _cache.clearAll()
      // console.log('_cache clear')
      return <MyTable list={list} columns={columns} width={width} height={height} />
    }}
  </AutoSizer>
)

export default MyTablePlace
