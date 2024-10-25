import React, { useState } from 'react'
import TableTop from './TableTop'
import Table from './Table'
import "../../Styles/tableBoard.css"


function MainTable(props) {


    if (props.tableBodyData) {

        return (
            <div >
                <TableTop AddPopUp={props.AddPopUp} setEditData={props.setEditData} />

                <div className='tableSetting'>
                    <Table
                        setPage={props.setPage}
                        tableHeaderContent={props.tableHeaderContent}
                        tableBodyData={props.tableBodyData}
                        addBtnLast={props.addBtnLast}
                        updateAllTableData={props.updateAllTableData}
                        setProjectData={props.setProjectData}
                        setEditData={props.setEditData}
                    />
                </div>
            </div>
        )
    }
    else {

        return (
            <div>Loading......</div>
        )
    }
}

export default MainTable