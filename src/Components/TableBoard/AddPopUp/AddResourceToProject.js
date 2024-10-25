import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addprojectResource } from "../../../Redux/Action/projectAction.js"
import { searchResource } from "../../../Redux/Action/resourceAction";
import addProjectToResource from "../../../Assets/Project/addResourProj.svg";


function AddResourceToProject(props) {
    const dispatch = useDispatch();
    const [tableRow, updateTableRow] = useState([])

    function handleAddResourceToproject(e, d) {
        e.preventDefault();

        const data = {
            clientResourceID: props.resourceData.clientResourceID,
            resourceID: d.id,
            resourceHours: props.resourceData.resourceHours,
            designation: props.resourceData.designation,
            startDate: props.resourceData.clientStartDate,
            endDate: '01/12/1970'
        }

        
        dispatch(addprojectResource(data, props.updateAllTableData))
            .then(res => {
                // document.getElementById('addResToProj').style.display = "block"
                //document.getElementById('addResourceToprojectLoader').style.display = "none"
                //document.getElementById('addResource').reset();
                document.getElementById('addResourceToProject').close()
                props.setPage(1)

            })
            .catch(e => {
                //document.getElementsByTagName('dialog')[1].showModal();
                alert("error occured")
                console.log("Error occured \n", e)
            })
    }


    let tableRowData = []

    const loadResources = (data) => {
        let tr;
        data.map((d, i) => {
            tr = (<tr key={i}>
                <td>{d.name}</td>
                <td>{d.skills}</td>
                <td>{d.salary}</td>
                <td>{d.experience}</td>
                <td>{d.designation}</td>
                <td>
                    <img src={addProjectToResource} alt=""
                        style={{ width: "25px", cursor: "pointer" }}
                        className="d-block mx-auto"
                        onClick={(e) => handleAddResourceToproject(e, d)}
                    />
                </td>
            </tr>)
            tableRowData.push(tr);

        })
        updateTableRow(current => [tableRowData])
    }


    function handleFetchResource(e) {
        const p = document.getElementById("searchResource").value
        dispatch(searchResource(p))
            .then(res => {
                const data = res.data;
                loadResources(data)
            })
            .catch(e => {
                console.log(e)
            })

    }

    return (
        <dialog id="addResourceToProject" className='border-0 rounded dialogAddBox' style={{ width: '80%' }}>

            <p className='position-absolute closeBoxBtn' onClick={(e) => {
                document.getElementById('addResourceToProject').close()
                updateTableRow([])
                props.updateRdata(null)

            }} style={{ cursor: "pointer" }}>X</p>

            <div className="input-group d-flex justify-content-center mt-5" style={{ width: "100%" }}>

                <div className="form-outline">
                    <input type="search" id="searchResource" className="form-control p-relative" />

                </div>
                <button type="button" className="btn" style={{ backgroundColor: "#5E47D3", color: "white" }}
                    onClick={(e) => handleFetchResource(e)}
                >
                    <i className="fas fa-search"></i>
                    Search Resource
                </button>

            </div>

            <div>
                {tableRow.length > 0 ?
                    <table className="innerTable mt-5" style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Skills</td>
                                <td>Salary</td>
                                <td>Experience</td>
                                <td>Designation</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRow}
                        </tbody>
                    </table>
                    : <div className='fs-1 d-flex justify-content-center my-5'>Add Resources</div>}

            </div>


        </dialog>
    )




}

export default AddResourceToProject