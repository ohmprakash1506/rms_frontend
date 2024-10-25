import React, { useState } from 'react'
import addProjectToResource from "../../../Assets/Project/addResourProj.svg";
import AddResourceToProject from "../AddPopUp/AddResourceToProject";
import ActionsUi from './ActionsUi';
import actions from "../../../Assets/actions.svg";

function TableRowInfo(props) {

    const [rData, updateRdata] = useState(null)

    const addEditBtn = () => {
        return (
            <div>
                <img src={actions} alt="" className='tableActions' />
                <ActionsUi />
            </div>
        )
    }

    // console.log(props.resources, props.bodyInnerTableHeader)

    const addResourceToProject = (data) => {
        return (
            <div>
                <img src={addProjectToResource}
                    style={{ width: "25px", cursor: "pointer" }}
                    onClick={(e) => {
                        updateRdata(data)
                        document.getElementById('addResourceToProject').showModal();
                    }}
                    className="d-block mx-auto"
                />
            </div>
        )
    }


    const topHeader = () => props.bodyInnerInfo.map(data => {

        if (!props.projectData[data.key]) {
            return (
                <div className='descriptionBox'>
                    <h5 className='fs-5'>{data.name}</h5>
                    <p className='fs-4 '>No data</p>
                </div>
            )
        }

        if (typeof (props.projectData[data.key]) === "object") {

            return (
                <div className='descriptionBox'>
                    <h5 className='fs-5'>{data.name}</h5>
                    <p className='fs-4 '>{props.projectData[data.key].length}</p>
                </div>
            )
        }
        else {
            return (
                <div className='descriptionBox'>
                    <h5 className='fs-5'>{data.name}</h5>
                    <p className='fs-4 '>{props.projectData[data.key]}</p>
                </div>
            )
        }

    })

    const tableHeader = () => props.bodyInnerTableHeader.map(data => {

        return (
            <th key={data.key} scope="col">{data.name}</th>
        )
    })

    const tableBodyRow = () => props.resources.map((data, index) => {

        return (
            <tr key={index}>{tableBodyData(data)}</tr>
        )
    })

    const performance = (resourceBudget, usedBudget) => {
        if (!resourceBudget) {
            return '0 %'
        }
        if (!usedBudget) {
            return '100%'
        }
        return `${((usedBudget / resourceBudget) * 100).toFixed(2)} %`
    }

    const tableBodyData = (data) => {
        let td = [];
        props.bodyInnerTableHeader.map((rd, index) => {

            if (rd.key === "action") {

                td.push(<td key={index}>{data["name"] ? addEditBtn() : addResourceToProject(data)}</td>)
            } else
                if (rd.key === "performance") {
                    td.push(<td key={index}>
                        {performance(data['resourceBudget'] || data["totalBudget"], data['usedBudget'])
                    /*hard coded for cluster and project */}
                    </td>)
                } else
                    if (!data[rd.key]) {
                        td.push(<td key={index}>--</td>)
                    } else
                        if (typeof (data[rd.key]) === "object") {
                            td.push(<td key={index}>{data[rd.key].length}</td>)
                        }
                        else {
                            td.push(<td key={index}>{data[rd.key]}</td>)
                        }
        })
        return td;
    }

    document.getElementsByTagName('header')[0].getElementsByTagName('h1')[0].style.display = "none"


    return (
        <div>
            <p onClick={() => {
                props.setPage(1)
            }
            } style={{ cursor: "pointer", color: "#848FAC" }}>{`Dashboard /${props.pageName}`}</p>

            <AddResourceToProject
                resourceData={rData}
                updateRdata={updateRdata}
                updateAllTableData={props.updateAllTableData}
                setPage={props.setPage}
            />

            <div className='innerTopBox'>
                <h2 className='py-3 px-5 fs-2'
                    style={{ backgroundColor: `${props.headerColor}` }}>
                    {/*Hard coded for clusters and projects page */}
                    {props.projectData.projectName || props.projectData['name']}
                </h2>
                <div className='descriptContainer px-5'>
                    {topHeader()}
                </div>
            </div>

            <table className='innerTable'>
                <thead><tr>{tableHeader()}</tr></thead>
                <tbody>{tableBodyRow()}</tbody>
            </table>

            {props.projectData.resources ? props.projectData.resources.length > 0 ? '' : <div className='fs-2 fw-bold mt-5 mx-auto'>No Resource Budget Here!!!!</div> : ""}

        </div>
    )
}

export default TableRowInfo;