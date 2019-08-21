import React from 'react'
import { FixedSizeList as List } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
// import AutoSizer from 'react-virtualized-auto-sizer'

// ok try this https://medium.com/@joedister/using-react-virtualized-infiniteloader-autosizer-and-table-with-material-ui-styles-react-76d3596b6c93

const vars = [
  { name: 'var_act', default: '0', comment: 'Current action' },
  { name: 'var_ret', default: '0', comment: 'Script return value' },
  { name: 'var_pos_y', default: '0', comment: 'Pos X' },
  { name: 'var_pos_x', default: '0', comment: 'Pos Y' },
  { name: 'item_id', default: '0', comment: 'Active item id' },
  { name: 'game_over', default: '0', comment: 'Game over type, 0 - game not ending.' }
]

// const systemVarOffset = 10

const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    maxWidth: '150px'
  },
  {
    Header: 'Default',
    accessor: 'default',
    maxWidth: '50px'
  },
  {
    Header: 'Comment',
    accessor: 'comment',
    style: { 'white-space': 'unset' }
  }
]

const MyRow = () => {
  return <div>'Row'</div>
}

const MyInfiniteList = () => {
  return <InfiniteLoader>
    {({ onItemsRendered, ref }) => {
      return <List
        className='List'
        height={150}
        itemCount={1000}
        itemSize={30}
        onItemsRendered={onItemsRendered}
        ref={ref}
        width={300}
      >
        {MyRow}
      </List>
    }}
  </InfiniteLoader>
}

const Variables = () => {
  return <div>
    <h1>'Variables'</h1>
    <MyInfiniteList />
  </div>
}

export default Variables
