import React, { useEffect } from 'react';
import { useState } from 'react';
import addBudgetIcon from "../../../../Assets/Project/addBudgetIcon.svg"
import { findDOMNode } from 'react-dom';
import { useDispatch } from 'react-redux';
import { addprojectBudget } from "../../../../Redux/Action/projectAction"

function AddProjectBudget(props) {


    let projectId = (props.editData.projectID)
    const dispatch = useDispatch();
    const [row, rowUpdate] = useState([])
    function handleSubmitBudget(e) {
        e.preventDefault();

        let budgetArr = []
        const allInputRow = document.getElementsByClassName('projectBudgetBody')
        for (let row of allInputRow) {
            let obj = {}
            const inputData = row.getElementsByTagName('input')
            for (let input of inputData) {
                let name = input.name;
                let value = input.value;
                obj[name] = value;
            }
            budgetArr.push(obj)
        }

        // console.log(budgetArr)

        for (let i of budgetArr) {
            dispatch(addprojectBudget(i, props.updateAllTableData))
                .then(res => {
                    //alert('success', res)
                    document.getElementsByTagName('dialog')[0].close();
                })
                .catch(e => {
                    console.log(e)
                    let a = document.getElementsByTagName('dialog')[1].showModal();
                    if (a) {
                        return;
                    }
                })
        }
        props.updatePopupState(1)

    }//ends here


    useEffect(() => {

        let initial = [];

        props.editData.resources.length > 0 ? props.editData.resources.map((data, id) =>
            initial.push(<BudgetInput rowData={data} no={id} />)) :
            initial.push(<BudgetInput rowUpdate={rowUpdate} no={row.length} projectId={projectId} />)

        rowUpdate(initial)
    }, [])

    function addRowHandler(e) {
        e.preventDefault();

        let element = <BudgetInput rowUpdate={rowUpdate} no={row.length} projectId={projectId} />

        rowUpdate(current => ([...current, element]))
    }



    const rows = row.map((element, key) => <div key={key}>{element}</div>)



    return (
        <form className='d-block py-5' method="dialog" onSubmit={(e) => handleSubmitBudget(e)}>
            <div className='d-flex'>
                <h2 className='fs-2 fw-bold mt-0 mb-4'>Add Resource Budget</h2>
                <img src={addBudgetIcon} alt="" style={{ width: "250px", height: "70px" }} className="mx-auto" />
            </div>

            <div className='d-flex justify-content-between mt-3 projectBudgetHeader'>
                <label htmlFor="projectId" className="form-label pt-3">Project ID</label>
                <label htmlFor="month" className="form-label pt-3">Month</label>
                <label htmlFor="designation" className="form-label pt-3">Designation</label>
                <label htmlFor="rBudget" className="form-label pt-3">Resource Budget</label>
                <label htmlFor="rHours" className="form-label pt-3">Resource Hours</label>
                <label htmlFor="startDate" className="form-label pt-3">Start Date</label>
                <label htmlFor="endDate" className="form-label pt-3">End Date</label>
                <button className='btn m-4' onClick={(e) => addRowHandler(e)}>Add</button>
            </div>

            <div>
                {rows}
            </div>
            <button className='btn d-block ms-auto mt-5'
                style={{ backgroundColor: "#5E47D3", color: "white", width: "150px" }}
            >Save</button>
        </form>
    )
}

export default AddProjectBudget;


function BudgetInput(props) {
    function handleDelete(e) {
        e.preventDefault();
        const dRow = findDOMNode(e.target.parentElement.parentElement)
        findDOMNode(e.target.parentElement.parentElement.parentElement.removeChild(dRow))

    }


    return (
        <div className='projectBudgetBody'
            style={{ display: "flex" }}
        >
            <input type="number" name="projectID" required defaultValue={props.rowData ? props.rowData.clientResourceID : props.projectId} />
            <input type="number" min={1} max={12} name="month" required defaultValue={props.rowData ? props.rowData.month : ''} />
            <input type="text" name="designation" required defaultValue={props.rowData ? props.rowData.designation : ''} />
            <input type="number" name="resourceBudget" required defaultValue={props.rowData ? props.rowData.resourceBudget : ''} />
            <input type="number" name="resourceHours" required defaultValue={props.rowData ? props.rowData.resourceHours : ''} />
            <input type="date" name="startDate" required defaultValue={props.rowData ? (props.rowData.clientStartDate).slice(0, 10) : ''} />
            <input type="date" name="endDate" required />
            <button className='btn my-2 d-block mx-auto'
                onClick={(e) => handleDelete(e)}>Cancel</button>
        </div>
    )
}