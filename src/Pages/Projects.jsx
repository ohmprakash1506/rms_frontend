import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux';
import { getAllProjects } from "../Redux/Action/projectAction";
import { signOut } from "../Redux/Action/user";
import { useNavigate } from 'react-router-dom';
import MainTable from '../Components/TableBoard/MainTable';
import { useSelector } from "react-redux";
import AddProject from '../Components/TableBoard/AddPopUp/AddProject/AddProject';
import TableRowInfo from "../Components/TableBoard/TableInner/TableRowInfo";

export default function Billing() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const projectDataState = useSelector(state => state.projectReducer.allProjects);
    const [allTableData, updateAllTableData] = useState(null);
    const [projectData, setProjectData] = useState(null)
    const [page, setPage] = useState(1);
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        if (!sessionStorage.getItem("userToken")) {
            dispatch(signOut(navigate))
        }
        dispatch(getAllProjects())
    }, [])

    useEffect(() => {
        if (projectDataState) {
            updateAllTableData(projectDataState)
        }
    }, [projectDataState])

    const projectInnerInfo = [
        { name: 'Cluster Name', key: "name" },
        { name: "Total Resource", key: "resources" },
        { name: "Total Budget", key: "totalBudget" },
        { name: "Utilized Budget", key: "usedBudget" },
        { name: "Description", key: "projectDescription" }
    ]

    const tableHeaderContent = [

        { name: 'Project Name', key: "projectName" },
        { name: 'Description', key: "projectDescription" },
        { name: 'Project Type', key: "projectType" },
        { name: 'Start Date', key: "projectStartDate" },
        { name: 'Cluster ID', key: "clusterID" },
        { name: 'Total Budget', key: "totalBudget" },
        { name: 'Used Budget', key: "usedBudget" },
        { name: 'Resources', key: "resources" },
        { name: '', key: "action" }
    ]

    const clusterColor = "#31569C";

    const pageName = "Projects"

    const projectInnerTableHeader = [
        { name: "Resource name", key: "name" },
        { name: "Designation", key: "designation" },
        { name: "Total Hours", key: "resourceHours" },
        { name: "Total Budget", key: "resourceBudget" },
        { name: "Utilized Budget", key: "usedBudget" },
        { name: "Performance", key: "performance" },
        { name: "", key: "action" }
    ]

  

    const AddProjectPopUp = () => {
        return <AddProject updateAllTableData={updateAllTableData} editData={editData}
        />
    }
    if (page === 1) {
        return (
            <main>
                <MainTable
                    setPage={setPage}
                    tableHeaderContent={tableHeaderContent}
                    tableBodyData={allTableData}
                    AddPopUp={AddProjectPopUp}
                    updateAllTableData={updateAllTableData}
                    setProjectData={setProjectData}
                    setEditData={setEditData}

                />
            </main>
        )
    }
    if (page === 2) {
        return (
            <TableRowInfo
                setPage={setPage}
                projectData={projectData}
                resources={projectData.resources}
                bodyInnerInfo={projectInnerInfo}
                bodyInnerTableHeader={projectInnerTableHeader}
                headerColor={clusterColor}
                updateAllTableData={updateAllTableData}
                pageName={pageName}
            />
        )
    }
}
