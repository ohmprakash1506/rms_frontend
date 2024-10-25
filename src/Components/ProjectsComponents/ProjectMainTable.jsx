import React, { useState, useEffect } from 'react'

import ProjectRowData from './ProjectRowData';

import { useSelector, useDispatch } from "react-redux";
import { addProject, editProject, deleteProject, addprojectResource } from "../../Redux/Action/projectAction";
import ProjectDetails from './ProjectDetails';

const projectData = [{
    id: 0,
    projectID: 0,
    projectName: "github",
    projectBudget: 456000,
    description: "this is project",
    type: 34,
    resourceData: [1, 2, 3, 4, 5]
}]

const nullProjectData = {
    projectName: "",
    description: "",
    type: "",
    startDate: "",
    endDate: "",
    clusterID: ""
}

const projectUpdate = {}


function updateProjectDataChange(e) {
    if (!e.target.name) {
        Object.create(e.target.name)
    }
    projectUpdate[e.target.name] = e.target.value;
}


function ProjectMainTable() {
    const dialog1 = document.getElementsByTagName('dialog')[0]
    const loader = document.getElementById("projectAddLoader")


    const [projectPage, updateProjectPage] = useState(null)
    const [initialProjectData, fetchProjectData] = useState(projectData)
    const [projectsData, changeUpdateProjectData] = useState(nullProjectData)
    const [deleteProjectData, changeDeleteProjectData] = useState(null);
    const [resourceData, updateresourceData] = useState(null)

    const dispatch = useDispatch();
    const projectDataState = useSelector(state => state.projectReducer.allProjects)


    useEffect(() => {
        // console.log(projectDataState)
        if (projectDataState)
            fetchProjectData(projectDataState)
    }, [projectDataState])


    async function handleAddProjects(e) { //adding
        const addBtn = document.getElementById("projectAddBtn")

        e.preventDefault();
        const data = {
            name: e.target[0].value,
            description: e.target[1].value,
            type: e.target[2].value,
            startDate: e.target[3].value,
            enddate: e.target[4].value,
            clusterID: e.target[5].value,
            status: 1
        }

        loader.style.display = "block"
        addBtn.style.display = "none"

        const responseState = await dispatch(addProject(data, fetchProjectData))
        if (responseState) {
            document.getElementsByTagName('form')[0].reset();
            dialog1.close()
            loader.style.display = "none"
            addBtn.style.display = "block"
        }

    }


    async function handleUpdateProjects(e, updateData, updateId) { //editing
        e.preventDefault();
        const editBtn = document.getElementById('projectEditBtn')

        loader.style.display = "block"
        editBtn.style.display = "none"
        const responseState = await dispatch(editProject(updateData, updateId, fetchProjectData))
        if (responseState) {
            document.getElementsByTagName('form')[0].reset();
            dialog1.close()
            loader.style.display = "none"
            editBtn.style.display = "block"
        }
    }

    async function handleDeleteProjectData(id) {
        const responseState = dispatch(deleteProject(id, fetchProjectData))
        if (responseState) {
            document.getElementsByTagName('dialog')[1].close()
        }
    }

    if (!projectPage) {

        return (
            <section>
                <div className='tablesBody mt-5'>
                    <div className='fw-bold m-auto mb-5 pb-0 position-relative tablePageHeader'>

                        <h2 className=''>Projects Data</h2>
                        <button className='btn position-absolute addBtn fw-bold' onClick={() => {
                            changeUpdateProjectData(nullProjectData)
                            const d = document.getElementsByTagName('dialog')[0]
                            d.showModal();
                        }}>Add</button>

                        <div className='position-relative d-flex justify-content-end searchBox'>
                            <label htmlFor="search" className='me-4'>Search</label>
                            <input type="text" id='search' className='fw-normal' onChange={(e) => {
                                const tableData = document.getElementsByTagName('td')
                                for (let r of tableData) {
                                    if (e.target.value === '') {
                                        r.parentElement.style.display = "table-row"
                                    }
                                    r.parentElement.style.display = "none"
                                }
                                for (let r of tableData) {
                                    if ((r.textContent).toLowerCase().includes((e.target.value).toLowerCase())) {
                                        r.parentElement.style.display = "table-row"
                                    }
                                }
                            }

                            } />
                        </div>


                        <dialog className='border-0 rounded position-absolute dialogAddBox'>
                            <p className='position-absolute closeBoxBtn' onClick={() => {
                                document.getElementsByTagName('form')[0].reset();
                                const d = document.getElementsByTagName('dialog')[0]
                                d.close()
                            }}>X</p>

                            <form className='p-5' method="dialog"
                                onSubmit={(e) => { projectsData.projectName === '' ? handleAddProjects(e) : handleUpdateProjects(e, projectUpdate, projectsData.projectID) }}
                                onChange={(e) => {
                                    if (projectsData.projectName === '') {
                                        return;
                                    }
                                    updateProjectDataChange(e)
                                }}>

                                <div className="form-group">
                                    <small id="name" className="form-text text-muted">Project Name</small>
                                    <input type="text" className="form-control" aria-describedby="name" placeholder="Project Name" defaultValue={projectsData.projectName} name={'name'} required />

                                </div>

                                <div className="form-group">
                                    <small id="description" className="form-text text-muted">Project Description</small>
                                    <input type="text" className="form-control" aria-describedby="description" placeholder="Project Description" defaultValue={projectsData.description} name={'description'} required />

                                </div>
                                <div className="form-group">
                                    <small id="type" className="form-text text-muted">Project Type</small>
                                    <input type="Number" className="form-control" aria-describedby="type" placeholder="000" defaultValue={projectsData.type} name={'type'} required />

                                </div>
                                <div className="form-group">
                                    <small id="startDate" className="form-text text-muted">Project Start Date</small>
                                    <input type="date" className="form-control" aria-describedby="startDate" defaultValue={projectsData.startDate ? (projectsData.startDate).substring(0, 10) : ""} name={'startDate'} required />

                                </div>
                                <div className="form-group">
                                    <small id="endDate" className="form-text text-muted">Project End Date</small>
                                    <input type="date" className="form-control" aria-describedby="endDate" defaultValue={(projectsData.endDate ? (projectsData.endDate).substring(0, 10) : '')} name={'endDate'} required />

                                </div>
                                <div className="form-group">
                                    <small id="clusterID" className="form-text text-muted">cluster ID</small>
                                    <input type="number" className="form-control" aria-describedby="clusterID" placeholder="#0000" defaultValue={projectsData.clusterID} name={"clusterID"} required />

                                </div>

                                {projectsData.projectName === '' ? <AddProjectData /> : <UpdateProjectData />}

                                <div className="spinner-border mx-auto" role="status" id='projectAddLoader' style={{ display: "none" }}>
                                    <span className="sr-only">Loading...</span>
                                </div>


                            </form>
                        </dialog>
                    </div>


                    <div>
                        <dialog className='deleteDialogBox my-5'>
                            <div>
                                <p className='text-right'><strong onClick={() => {
                                    document.getElementsByTagName('dialog')[1].close()
                                }}>X</strong></p>
                                <p className='p-2 fw-bold' style={{ fontSize: "1.5rem" }}>Are you sure you want to delete resource</p>
                                <div className='d-flex justify-content-evenly my-5'>
                                    <button className='btn btn-danger' onClick={() => {
                                        handleDeleteProjectData(deleteProjectData)
                                    }}>Yes</button>
                                    <button className='btn btn-warning' onClick={() => {
                                        document.getElementsByTagName('dialog')[1].close()
                                    }}>No</button>
                                </div>
                            </div>
                        </dialog>

                        <AddResource
                            resourceData={resourceData}
                            changeUpdateProjectData={changeUpdateProjectData}
                            loader={loader}
                            dispatch={dispatch}
                            addBtn={""} />


                        <table className='table'>
                            <thead>
                                <tr className='colorgreyLight' style={{ fontSize: "1rem" }}>

                                    <th scope='col' className="border-0">PROJECT ID</th>
                                    <th scope='col' className="border-0">PROJECT NAME</th>
                                    <th scope='col' className="border-0">DESCRIPTION</th>
                                    <th scope='col' className="border-0">PROJECT TYPE</th>
                                    <th scope='col' className="border-0">TOTAL RESOURCES</th>
                                    <th scope='col' className="border-0">PROJECT BUDGET</th>
                                    <th scope='col' className="border-0"></th>
                                    <th scope='col' className="border-0"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {initialProjectData.map(project => (

                                    <ProjectRowData projectData={project}
                                        key={project.projectID}
                                        changeUpdateProjectData={changeUpdateProjectData}
                                        changeDeleteProjectData={changeDeleteProjectData}
                                        updateresourceData={updateresourceData}
                                        updateProjectPage={updateProjectPage} />
                                ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        )
    }
    if (projectPage) {

        return (
            <ProjectDetails projectDetails={projectPage} updateProjectPage={updateProjectPage} />
        )
    }
}

export default ProjectMainTable


function AddProjectData() {
    return (
        <button className='btn mx-auto' style={{
            backgroundImage: 'linear-gradient(195deg, #ec407a, #d81b60)',
            color: "white",
            display: "block"
        }} type={'submit'} id="projectAddBtn">Add Project</button>
    )
}

function UpdateProjectData() {
    return (
        <button className='btn mx-auto' style={{
            backgroundImage: 'linear-gradient(195deg, #ec407a, #d81b60)',
            color: "white",
            display: "block"
        }} type={'submit'} id="projectEditBtn">Update Project</button>
    )
}

function AddResource(props) {

    async function handleAddResource(e) {
        e.preventDefault();
        const resourceAddLoader = document.getElementById("resourceAddLoader")
        const addResourceBtn = document.getElementById("addResourceBtn")

        const data = {
            projectID: e.target[0].value,
            resourceID: e.target[1].value,
            resourceBudget: e.target[2].value,
            resourceUtility: e.target[3].value,
            designation: e.target[4].value,
            startDate: e.target[5].value,
            endDate: e.target[6].value
        }

        resourceAddLoader.style.display = "block"
        addResourceBtn.style.display = "none"

        const responseState = await props.dispatch(addprojectResource(data, props.changeUpdateProjectData))

        if (responseState) {
            document.getElementsByTagName('form')[0].reset();
            document.getElementById('addResource').close()

            resourceAddLoader.style.display = "none"
            addResourceBtn.style.display = "block"
        }
    }


    return (
        <dialog id="addResource" className='border-0'>
            <h2 className='text-center position-relative'>Add Resource <span className='position-absolute fs-3 fw-bold'
                onClick={() => {
                    document.getElementById('resourceAddForm').reset()
                    document.getElementById('addResource').close()
                }}
            >X</span></h2>
            <form onSubmit={e => handleAddResource(e)} id="resourceAddForm">
                <div className="mb-3">
                    <label htmlFor="projectID" className="form-label">Project ID</label>
                    <input type="Number" className="form-control" id="projectID"
                        aria-describedby="emailHelp"
                        name={"projectID"}
                        disabled={true}
                        defaultValue={props.resourceData} />

                </div>

                <div className="mb-3">
                    <label htmlFor="resourceID" className="form-label">Resource ID</label>
                    <input type="number" className="form-control" id="resourceID" aria-describedby="emailHelp" name={"resourceID"} />

                </div>

                <div className="mb-3">
                    <label htmlFor="resourceBudget" className="form-label">Resource Budget</label>
                    <input type="number" className="form-control" id="resourceBudget" aria-describedby="emailHelp" name={"resourceBudget"} />

                </div>

                <div className="mb-3">
                    <label htmlFor="resourceUtility" className="form-label">Resource Utility</label>
                    <input type="Number" className="form-control" id="resourceUtility" aria-describedby="emailHelp" name={"resourceUtility"} />

                </div>

                <div className="mb-3">
                    <label htmlFor="designation" className="form-label">Designation</label>
                    <input type="text" className="form-control" id="designation" aria-describedby="emailHelp" name={"designation"} />

                </div>

                <div className="mb-3">
                    <label htmlFor="startDate" className="form-label">Start Date</label>
                    <input type="date" className="form-control" id="startDate" aria-describedby="emailHelp" name={'startDate'} />
                </div>

                <div className="mb-3">
                    <label htmlFor="endDate" className="form-label">End Date</label>
                    <input type="date" className="form-control" id="endDate" aria-describedby="emailHelp" name={"endDate"} />
                </div>

                <button className='btn fw-bold mx-auto' type={"submit"} id="addResourceBtn" style={{ display: "block" }}>Add Resource</button>

                <div className="spinner-border mx-auto" role="status" id='resourceAddLoader' style={{ display: "none" }}>
                    <span className="sr-only">Loading...</span>
                </div>
            </form>
        </dialog>
    )

}