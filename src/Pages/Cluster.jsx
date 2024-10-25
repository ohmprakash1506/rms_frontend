import React, { useEffect, useState } from 'react'


import { useDispatch, useSelector } from 'react-redux';
import { getAllClusters } from "../Redux/Action/clusters";
import { signOut } from "../Redux/Action/user";
import { useNavigate } from 'react-router-dom';
import MainTable from '../Components/TableBoard/MainTable';
import AddCluster from '../Components/TableBoard/AddPopUp/AddCluster';
import TableRowInfo from '../Components/TableBoard/TableInner/TableRowInfo';

export default function Cluster() {

    // const counter = useSelector(state => state.cluster?.allClusters?.data)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const clusterDataState = useSelector(state => state.cluster.allClusters)

    const [allTableData, updateAllTableData] = useState(null);
    const [page, setPage] = useState(1)
    const [clusterData, setClusterData] = useState(null)
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        if (!sessionStorage.getItem("userToken")) {
            dispatch(signOut(navigate))
        }
        dispatch(getAllClusters())

    }, [])

    useEffect(() => {
        if (clusterDataState) {
            updateAllTableData(clusterDataState)
        }
    }, [clusterDataState])

    const AddClusterPopUp = () => {
        return <AddCluster updateAllTableData={updateAllTableData} editData={editData}/>
    }

    const clusterHeadercontent = [
        { name: 'Cluster Name', key: "name" },
        { name: "Description", key: "description" },
        { name: "Total Projects", key: "noOfProject" },
        { name: '', key: "action" },
    ]

    const clusterColor = '#FF8A00';
    const pageName = "Clusters"
    const clusterInnerTableHeader = [
        { name: "Project Name", key: "projectName" },
        { name: "Total Resource", key: "resources" },
        { name: "Total Budget", key: "totalBudget" },
        { name: "Utilized Budget", key: "usedBudget" },
        { name: "Performance", key: "performance" },
        /* { name: "", key: "action" }*/
    ]

    const clusterInnerInfo = [
        { name: 'Cluster Name', key: "name" },
        { name: "Total Resource", key: "noOfProject" },
        { name: "Total Budget", key: "totalBudget" },
        { name: "Utilized Budget", key: "usedBudget" },
        { name: "Description", key: "description" }
    ]

    if (page === 1) {
        return (
            <>

                <main>
                    <section>
                        <MainTable
                            tableHeaderContent={clusterHeadercontent}
                            tableBodyData={allTableData}
                            AddPopUp={AddClusterPopUp}
                            setPage={setPage}
                            setProjectData={setClusterData}
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
                projectData={clusterData}
                resources={clusterData.projects}
                setPage={setPage}
                bodyInnerInfo={clusterInnerInfo}
                bodyInnerTableHeader={clusterInnerTableHeader}
                headerColor={clusterColor}
                pageName={pageName}
            />
        )
    }
}