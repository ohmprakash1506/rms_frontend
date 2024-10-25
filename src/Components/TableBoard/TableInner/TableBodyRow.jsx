import React from 'react';
import actions from "../../../Assets/actions.svg";
import ActionsUi from './ActionsUi';

function TableBodyRow(props) {
    const { headerData, tableBodyData } = props;

    let i = 0;

    const addEditBtn = () => {
        return (
            <div>
                <img src={actions} alt="" className='tableActions' />
                <ActionsUi tableBodyData={tableBodyData} setEditData={props.setEditData}/>
            </div>
        )
    }


    const renserHeade = () => headerData.map(data => {
        let td;
        if (data.key == 'action')
            td = <td key={i} className="position-relative" onClick={(e) => {
                e.stopPropagation();
                const ui = e.currentTarget;
                let a = ui.getElementsByClassName('tableActionUi')[0]
                a.classList.toggle("displayUi")
                const b = document.getElementsByClassName('displayUi')[1]
                if (b) {
                    a.classList.toggle("displayUi")
                }

            }} >{addEditBtn()}
            </td>
        else {
            if (typeof (tableBodyData[data.key]) === 'object') {
                td = <td key={i}>{tableBodyData[data.key].length}</td>

            } else {
                td = <td key={i} >{tableBodyData[data.key]}</td>
            }
        }

        if (data.key === "dateOfJoining" || data.key === "projectStartDate") {
            td = <td key={i} >{(tableBodyData[data.key]).slice(0, 10)}</td>
        }
        i++;
        return td;
    })


    return (
        <tr className='tableInnerInfo' onClick={() => {
            props.setPage(2)
            props.setProjectData(tableBodyData)
        }}>
            {renserHeade()}

        </tr>
    )
}

export default TableBodyRow;
