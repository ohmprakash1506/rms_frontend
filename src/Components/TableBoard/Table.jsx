import React from 'react'
import TableHeader from './TableInner/TableHeader'
import TableBodyRow from './TableInner/TableBodyRow'


function Table(props) {
    let i = 0;
    const renderHeader = () =>
        props.tableHeaderContent.map(head => <TableHeader headerName={head.name} key={head.key} />)

    const renderBody = () =>
        props.tableBodyData.map(body => <TableBodyRow
            tableBodyData={body}
            headerData={props.tableHeaderContent}
            key={++i}
            setProjectData={props.setProjectData}
            addBtnLast={props.addBtnLast}
            updateAllTableData={props.updateAllTableData}
            setPage={props.setPage}
            setEditData={props.setEditData}
        />

        )



    return (
        <table className='tableBody'>
            <thead>
                <tr>
                    {renderHeader()}
                </tr>
            </thead>
            <tbody>
                {renderBody()}
            </tbody>
        </table>
    )
}

export default Table