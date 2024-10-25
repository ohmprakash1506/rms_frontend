import React from 'react'
import deleteIcon from "../../../Assets/rowIcons/remove.svg";
import editIcon from "../../../Assets/rowIcons/edit.svg";
import viewIcon from "../../../Assets/rowIcons/view.svg"

function ActionsUi(props) {
    return (
        <div className='position-absolute tableActionUi'>
            <div className='d-flex' onClick={() =>{ 
                props.setEditData(props.tableBodyData)
                // console.log(props.tableBodyData.resources)
                document.getElementsByTagName('dialog')[0].showModal();
            }}>
                <img src={editIcon} alt="" />
                <p>Edit</p>
            </div>
            <div className='d-flex'>
                <img src={deleteIcon} alt="" />
                <p>Delete</p>
            </div>
            <div className='d-flex'>
                <img src={viewIcon} alt="" />
                <p>View</p>
            </div>
        </div>

    )
}

export default ActionsUi