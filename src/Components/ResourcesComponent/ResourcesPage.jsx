import React, { useState, useEffect } from 'react';
import "../../Styles/tablesPage.css";
import FetchResourceData from "../ResourcesComponent/ResourcesTableRow"
//import fetchResourcesData from "../../Services/fetchResources"
//import addResourcedata from "../../Services/addResource.js"
//import updateUserResources from "../../Services/updateResource"
//import deleteResourceData from '../../Services/deleteResource';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { addResource, editResource, deleteResource } from '../../Redux/Action/resourceAction';

/*const tableDataForTable1 = {
    authorName: {
        photo: "https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg",
        name: "John Michael",
        email: "john@creative-tim.com"
    },
    autherTitle: {
        titleName: "Manager",
        titleType: "Organization"
    },
    status: false,
    date: "23/04/18"
}

const tableDataForTable2 = {
    authorName: {
        photo: "https://demos.creative-tim.com/material-dashboard/assets/img/team-3.jpg",
        name: "Alexa Liras",
        email: "alexa@creative-tim.com"
    },
    autherTitle: {
        titleName: "Programator",
        titleType: "Developer"
    },
    status: true,
    date: "11/01/19"
}

const tableDataForTable3 = {
    authorName: {
        photo: "https://demos.creative-tim.com/material-dashboard/assets/img/team-4.jpg",
        name: "Laurent Perrier",
        email: "laurent@creative-tim.com"
    },
    autherTitle: {
        titleName: "Executive",
        titleType: "Projects"
    },
    status: true,
    date: "19/09/17"
}

const tableDataForTable4 = {
    authorName: {
        photo: "https://demos.creative-tim.com/material-dashboard/assets/img/team-3.jpg",
        name: "Alexa Liras",
        email: "alexa@creative-tim.com"
    },
    autherTitle: {
        titleName: "Programator",
        titleType: "Developer"
    },
    status: false,
    date: "11/01/19"
}

const tableDataForTable5 = {
    authorName: {
        photo: "https://demos.creative-tim.com/material-dashboard/assets/img/team-4.jpg",
        name: "Laurent Perrier",
        email: "laurent@creative-tim.com"
    },
    autherTitle: {
        titleName: "Executive",
        titleType: "Projects"
    },
    status: true,
    date: "19/09/17"
}

const tableDataForTable6 = {
    authorName: {
        photo: "https://demos.creative-tim.com/material-dashboard/assets/img/team-4.jpg",
        name: "Laurent Perrier",
        email: "laurent@creative-tim.com"
    },
    autherTitle: {
        titleName: "Executive",
        titleType: "Projects"
    },
    status: false,
    date: "19/09/17"
}
*/





const resourceData1 = [{
    id: 0,
    url: "https://demos.creative-tim.com/material-dashboard/assets/img/team-4.jpg",
    name: "name",
    designation: "designation",
    email: "email",
    phone: "phone",
    experience: "experience",
    salary: "salary",
    skills: "skills",
    project: "project",
    status: "status",
    dateOfJoining: "dateOfJoining"
}]

const nullUserData = {
    name: '',
    designation: '',
    email: '',
    phone: '',
    experience: '',
    salary: '',
    skills: '',
    project: '',
    status: '',
    dateOfJoining: ''
}
let updateData = {}



function updateDataChange(e) {
    if (!e.target.name) {
        Object.create(e.target.name)
    }
    updateData[e.target.name] = e.target.value;
}

function TablesTable() {
    const [resourceData, updateResourceData] = useState(resourceData1)
    const [userData, updateUserData] = useState(nullUserData)
    const [deleteUser, updateDeleteUser] = useState(null)
    const dialog = document.getElementsByTagName('dialog')
    const dispatch = useDispatch();
    const resourceDataState = useSelector(state => state.resourceReducer.resourceData)
    const dialog1 = document.getElementsByTagName('dialog')[0]

    const loader = document.getElementById("projectAddLoader")


    useEffect(() => {
        if (resourceDataState) {
            updateResourceData(resourceDataState)
        }
    }, [resourceDataState])


    async function handleAddForm(e) {
        e.preventDefault();
        const addBtn = document.getElementById("projectAddBtn")

        const addResourceData = {
            name: e.target[0].value,
            designation: e.target[1].value,
            email: e.target[2].value,
            phone: Number(e.target[3].value),
            experience: Number(e.target[4].value),
            salary: Number(e.target[5].value),
            dateOfJoining: e.target[6].value,
            roll: Number(e.target[7].value),
            skills: e.target[8].value,
            project: e.target[9].value,
            status: 1
        }
        loader.style.display = "block"
        addBtn.style.display = "none"
        const responseState = await dispatch(addResource(addResourceData, updateResourceData))
        if (responseState) {
            document.getElementsByTagName('form')[0].reset();
            dialog1.close()
            loader.style.display = "none"
            addBtn.style.display = "block"
        }
    }

    function handleUpdateData(e, data, id) {
        e.preventDefault();
        const editBtn = document.getElementById('projectEditBtn')

        loader.style.display = "block"
        editBtn.style.display = "none"
        const responseState = dispatch(editResource(data, id, updateResourceData))
        if (responseState) {
            document.getElementsByTagName('form')[0].reset();
            dialog1.close()
            loader.style.display = "none"
            editBtn.style.display = "block"
        }
    }

    let displayRoll = "block";
    if (userData.name) {
        displayRoll = "none"
    }

    return (
        <div className='tablesBody mt-5'>
            <div className='fw-bold m-auto mb-5 py-1 position-relative tablePageHeader'>

                <h2 className=''>Resource Table</h2>
                <button className='btn position-absolute addBtn fw-bold' onClick={() => {
                    updateUserData(nullUserData)
                    dialog[0].showModal();
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
                        dialog[0].close()
                    }}>X</p>

                    <form className='p-5' method="dialog"
                        onSubmit={(e) => { userData.name === '' ? handleAddForm(e) : handleUpdateData(e, updateData, userData.id) }}
                        onChange={(e) => {
                            if (userData.name === '') {
                                return;
                            }
                            updateDataChange(e)
                        }}>

                        {/*<div className='form-inline mb-md-3 row g-2'>
                            <div className="form-group bg-primary col-auto">
                                <small id="name" className="form-text text-muted ">Enter your full name</small>
                                <br />
                                <input type="text" className="form-control" aria-describedby="name" placeholder="Enter Name" defaultValue={userData.name} name={'name'} />


                            </div>
                            <div className="form-group ms-md-0 col-auto">
                                <small id="designation" className="form-text text-muted">Enter your Designation</small>
                                <br />
                                <input type="text" className="form-control" aria-describedby="designation" placeholder="Designation" defaultValue={userData.designation} name={'designation'} />


                            </div>
                    </div>*/}
                        <div className="form-group ">
                            <small id="name" className="form-text text-muted ">Enter your full name</small>
                            <br />
                            <input type="text" className="form-control" aria-describedby="name" placeholder="Enter Name" defaultValue={userData.name} name={'name'} />
                        </div>

                        <div className="form-group ms-md-0 col-auto">
                            <small id="designation" className="form-text text-muted">Enter your Designation</small>
                            <br />
                            <input type="text" className="form-control" aria-describedby="designation" placeholder="Designation" defaultValue={userData.designation} name={'designation'} />
                        </div>


                        <div className="form-group">
                            <small id="email" className="form-text text-muted">Enter your Email</small>
                            <input type="email" className="form-control" aria-describedby="email" placeholder="Enter Email" defaultValue={userData.email} name={'email'} />

                        </div>

                        <div className="form-group">
                            <small id="number" className="form-text text-muted">Enter your Phone Number</small>
                            <input type="Number" className="form-control" aria-describedby="number" placeholder="Phone Number" defaultValue={userData.phone} name={'phone'} />

                        </div>
                        <div className="form-group">
                            <small id="Experience" className="form-text text-muted">Enter your Experience</small>
                            <input type="Number" className="form-control" aria-describedby="Experience" placeholder="Experience" defaultValue={userData.experience} name={'experience'} />

                        </div>
                        <div className="form-group">
                            <small id="salary" className="form-text text-muted">Enter your Salary</small>
                            <input type="Number" className="form-control" aria-describedby="salary" placeholder="Salary" defaultValue={userData.salary} name={'salary'} />

                        </div>
                        <div className="form-group">
                            <small id="doj" className="form-text text-muted">Enter Date of joining</small>
                            <input type="date" className="form-control" aria-describedby="doj" placeholder="01/01/1990" defaultValue={(userData.dateOfJoining).substring(0, 10)} name={'dateOfJoining'} />

                        </div>
                        <div className={`form-group d-${displayRoll}`}>
                            <small id="roll" className="form-text text-muted">Roll</small>
                            <input type="number" className="form-control" aria-describedby="roll" placeholder="roll" defaultValue={userData.roll} name={"roll"} />
                        </div>
                        <div className="form-group">
                            <small id="skills" className="form-text text-muted">Enter your Skills</small>
                            <input type="text" className="form-control" aria-describedby="skills" placeholder="Skills" defaultValue={userData.skills} name={"skills"} />

                        </div>

                        {/*<div className="form-group">
                            <small id="project" className="form-text text-muted">Enter your Project</small>
                            <input type="text" className="form-control" aria-describedby="project" placeholder="Project" defaultValue={userData.project} name={"project"} />
            </div>*/}

                        {userData.name === '' ? <AddButton /> : <UpdateButton />}

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
                                const responseState = dispatch(deleteResource(deleteUser, updateResourceData))
                                if (responseState) {
                                    document.getElementsByTagName('dialog')[1].close()
                                }
                            }}>Yes</button>
                            <button className='btn btn-warning' onClick={() => {
                                document.getElementsByTagName('dialog')[1].close()
                            }}>No</button>
                        </div>
                    </div>
                </dialog>



                <table className='table'>
                    <thead>
                        <tr className='colorgreyLight' style={{ fontSize: "1rem" }}>
                            <th scope='col' style={{ paddingLeft: "2em", borderBottomWidth: "1px", borderBottomColor: "inherit" }} className="border-bottom-1">PROFILE PHOTO</th>
                            <th scope='col' className="border-0">NAME</th>
                            {/*<th scope='col' className="border-0">DESIGNATION</th>*/}
                            <th scope='col' className="border-0">EMAIL</th>
                            <th scope='col' className="border-0">PHONE</th>
                            <th scope='col' className="border-0">EXPERIENCE</th>
                            <th scope='col' className="border-0">SALARY</th>
                            <th scope='col' className="border-0">SKILLS</th>
                            {/*<th scope='col' className="border-0">PROJECTS</th>*/}
                            { /*<th scope='col' className="border-0">STATUS</th>*/}
                            <th scope='col' className="border-0">DOJ</th>

                            <th scope='col' className="border-0"></th>
                            <th scope='col' className="border-0"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {resourceData.map(resource => (
                            <FetchResourceData resourceData={resource} key={resource.id} updateUserData={updateUserData} deleteUserData={updateDeleteUser} />
                        ))}

                    </tbody>
                </table>
            </div>

        </div>
    )
}

function AddButton() {
    return (
        <>
            <button className='btn mx-auto' style={{
                backgroundImage: 'linear-gradient(195deg, #ec407a, #d81b60)',
                color: "white",
                display: "block"
            }} type={'submit'} id="projectAddBtn">Add Data</button>
        </>
    )
}

function UpdateButton() {
    return (
        <>
            <button className='btn mx-auto' style={{
                backgroundImage: 'linear-gradient(195deg, #ec407a, #d81b60)',
                color: "white",
                display: "block"
            }} type={'submit'} id="projectEditBtn">Update</button>
        </>
    )
}

export default TablesTable