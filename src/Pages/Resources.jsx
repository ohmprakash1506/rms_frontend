import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllResources } from "../Redux/Action/resourceAction";
import { signOut } from "../Redux/Action/user";
import { useNavigate } from 'react-router-dom';
import MainTable from '../Components/TableBoard/MainTable';
import AddResources from '../Components/TableBoard/AddPopUp/AddResources';
import TableRowInfo from '../Components/TableBoard/TableInner/TableRowInfo';


export default function Tables() {

    let resourceDataState = useSelector(state => state.resourceReducer.resourceData);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [allTableData, updateAllTableData] = useState(null);
    const [page, setPage] = useState(1)
    const [resourceData, setResourceData] = useState(null)
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        if (!sessionStorage.getItem("userToken")) {
            dispatch(signOut(navigate))
        }

        dispatch((getAllResources()))
    }, [])

    useEffect(() => {
        if (resourceDataState) {
            updateAllTableData(resourceDataState)
        }
    }, [resourceDataState])


    const resourceHeaderContent = [

        { name: 'Name', key: "name" },
        { name: 'Email', key: "email" },
        { name: 'Designation', key: "designation" },
        { name: 'Roll', key: "role" },
        { name: 'Phone', key: "phone" },
        { name: 'Experience', key: "experience" },
        { name: 'Salary', key: "salary" },
        { name: 'DOJ', key: "dateOfJoining" },
        { name: 'Skills', key: "skills" },
        { name: 'Projects', key: "projects" },
        { name: '', key: "action" }
    ]

    const AddResourcePopUp = () => {
        return <AddResources updateAllTableData={updateAllTableData} editData={editData}/>
    }

    const clusterColor = '#5E47D3';
    const pageName="Resources"
    const resourceInnerTableHeader = [
        { name: "Project Name", key: "name" },
        { name: "Working hours", key: "resourceHours" }
    ]

    const resourceInnerInfo = [
        { name: 'Cluster Head', key: "name" },
        { name: "Designation", key: "designation" },
        { name: "Email", key: "email" },
        { name: "Phone Number", key: "phone" },
        { name: "Annual Salary", key: "salary" },
        { name: "Total Project", key: "projects" },
        { name: "Experience", key: "experience" },
        { name: "DOJ", key: "dateOfJoining" },
        { name: "Skill", key: "skills" },
        { name: "Total Utilization", key: "budgetUsed" }
    ]



    if (page === 1) {
        return (
            <>

                <main>
                    <section>
                        <MainTable
                            tableHeaderContent={resourceHeaderContent}
                            tableBodyData={allTableData}
                            AddPopUp={AddResourcePopUp}
                            setProjectData={setResourceData}
                            setPage={setPage}
                            setEditData={setEditData}
                        />
                    </section>
                </main>


            </>

        )
    }
    if (page === 2) {
        return (
            <TableRowInfo
                projectData={resourceData}
                resources={resourceData.projects}
                setPage={setPage}
                bodyInnerInfo={resourceInnerInfo}
                bodyInnerTableHeader={resourceInnerTableHeader}
                headerColor={clusterColor}
                pageName={pageName}
            />
        )
    }
}

