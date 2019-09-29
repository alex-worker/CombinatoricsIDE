import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'

import Table from './Table'

const Grid = ({name, columns, list}) => {
    return <div>
        <h1>{name}</h1>
        <Table columns={columns} list={list} />
    </div>
}

export default Grid