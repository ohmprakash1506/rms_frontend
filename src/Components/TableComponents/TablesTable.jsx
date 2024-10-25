import React, { useEffect, useState } from 'react';
import TablesListData from './TablesListData';
import "../../Styles/tablesPage.css"
//import fetchClusters from "../../Services/fetchingClusters"
//import addCluster from '../../Services/addCluster';
//import updateClusterDetails from "../../Services/updateClusters"
//import  from "../../Services/deleteCluster"
//import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { addCluster, editCluster, deleteCluster } from "../../Redux/Action/clusters"
//import { getAllClusters } from "../Redux/Action/clusters";
import { useSelector } from "react-redux";




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
}*/

const clusterToUpdateData = {};

const tableDataForTable6 = [{
    id: 1,
    clusterPhoto: "https://demos.creative-tim.com/material-dashboard/assets/img/team-4.jpg",
    name: "clusterName",
    description: "Here is cluster description",
    clusterHeadID: "123",
    status: false,
}]

const updateClusterNone = {
    id: 0,
    name: "",
    description: "",
    clusterHeadID: ''
}

function handleUpdateClusterData(e) {
    if (!e.target.name) {
        Object.create(e.target.name)
    }
    clusterToUpdateData[e.target.name] = e.target.value;
}


function TablesTable() {

    const dialog1 = document.getElementsByTagName('dialog')[0]
    const loader = document.getElementById("projectAddLoader")
    const dispatch = useDispatch();
    const dialog = document.getElementsByTagName('dialog')
    const [initialClusters, loadAllClusters] = useState(tableDataForTable6)
    const [updateCluster, updateClusterData] = useState(updateClusterNone)
    const [deleteClusterid, updateDeleteCluster] = useState(null)
    const clusterData = useSelector(state => state.cluster.allClusters)



    useEffect(() => {
        if (clusterData)
            loadAllClusters(clusterData)
    }, [clusterData])


    async function handleAddCluster(e) {
        const addBtn = document.getElementById("projectAddBtn")
        e.preventDefault();
        const addClusterData = {
            name: e.target[0].value,
            description: e.target[1].value,
            clusterHeadID: e.target[2].value,
            status: 1
        }
        loader.style.display = "block"
        addBtn.style.display = "none"
        const responseState = dispatch(addCluster(addClusterData, loadAllClusters))
        if (responseState) {
            document.getElementsByTagName('form')[0].reset();
            dialog1.close()
            loader.style.display = "none"
            addBtn.style.display = "block"
        }
    }

    async function handleUpdateCluster(e, id) {
        e.preventDefault();
        const editBtn = document.getElementById('projectEditBtn')

        loader.style.display = "block"
        editBtn.style.display = "none"
        const responseState = await dispatch(editCluster(clusterToUpdateData, id, loadAllClusters))
        if (responseState) {
            document.getElementsByTagName('form')[0].reset();
            dialog1.close()
            loader.style.display = "none"
            editBtn.style.display = "block"
        }
    }


    return (
        <div className='tablesBody mt-5'>
            <div className='fw-bold m-auto mb-5 position-relative tablePageHeader'>
                <h2 className=''>Cluster Table</h2>
                <button className='btn position-absolute addBtn fw-bold' onClick={() => {
                    updateClusterData(updateClusterNone)
                    dialog[0].showModal();
                }}>Add</button>

                <dialog className='border-0 rounded position-absolute dialogAddBox'>
                    <p className='position-absolute closeBoxBtn' onClick={() => {
                        document.getElementsByTagName('form')[0].reset();
                        dialog[0].close()
                    }}>X</p>

                    <form className='p-5' onSubmit={updateCluster.name === "" ? (e) => { handleAddCluster(e) } : (e) => { handleUpdateCluster(e, updateCluster.id) }}
                        onChange={(e) => {
                            if (updateCluster.name === "")
                                return;
                            handleUpdateClusterData(e)
                        }}
                        method="dialog">


                        <div className="form-group">
                            <small id="email" className="form-text text-muted">Enter Cluster name</small>
                            <input type="text" className="form-control" aria-describedby="clusterName" placeholder="Cluster Name" name={"name"} defaultValue={updateCluster.name} required={true} />
                        </div>

                        <div className="form-group">
                            <small id="description" className="form-text text-muted">Cluster Description</small>
                            <input type="text" className="form-control" aria-describedby="description" placeholder="Cluster Description" name={"description"} defaultValue={updateCluster.description} required={true} />

                        </div>
                        <div className="form-group">
                            <small id="clusterId" className="form-text text-muted">Cluster Head ID</small>
                            <input type="number" className="form-control" aria-describedby="clusterId" placeholder="Cluster ID" name={"clusterHeadID"} defaultValue={updateCluster.clusterHeadID} required={true} />

                        </div>

                        {updateCluster.name === "" ? <AddButton /> : <EditButton />}
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
                        <p className='p-2 fw-bold' style={{ fontSize: "1.5rem" }}>Are you sure you want to delete this cluster</p>
                        <div className='d-flex justify-content-evenly my-5'>
                            <button className='btn btn-danger' onClick={async () => {
                                const responseState = dispatch(deleteCluster(deleteClusterid, loadAllClusters))
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
                            <th scope='col' style={{ paddingLeft: "2em", borderBottomWidth: "1px", borderBottomColor: "inherit" }} className="border-bottom-1">PHOTO</th>
                            <th scope='col' className="border-0">CLUSTER</th>
                            <th scope='col' className="border-0">DESCRIPTION</th>
                            <th scope='col' className="border-0">CLUSTER ID</th>
                            <th scope='col' className="border-0">STATUS</th>
                            <th scope='col' className="border-0"></th>
                            <th scope='col' className="border-0"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            initialClusters.map(clusterData => (
                                <TablesListData tableDataForCluster={clusterData} key={clusterData.id} updateClusterData={updateClusterData} updateDeleteCluster={updateDeleteCluster} />
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div >
    )
}

export default TablesTable


function AddButton() {
    return (
        <button className='btn mx-auto' style={{
            backgroundImage: 'linear-gradient(195deg, #ec407a, #d81b60)',
            color: "white",
            display: "block"
        }} type={'submit'} id="projectAddBtn">Add Cluster</button>
    )
}


function EditButton() {
    return (
        <button className='btn mx-auto' style={{
            backgroundImage: 'linear-gradient(195deg, #ec407a, #d81b60)',
            color: "white",
            display: "block"
        }} type={'submit'} id="projectEditBtn">Edit Cluster</button>
    )
}