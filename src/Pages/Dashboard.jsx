import React, { useEffect, useState } from 'react'

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signOut } from "../Redux/Action/user"
import { useNavigate } from 'react-router-dom';
import DashboardTopBoxes from "../Components/Dashboard/DashboardTopBox.jsx";
import { getAllClusters } from "../Redux/Action/clusters";
import MainTable from '../Components/TableBoard/MainTable';

import "../Styles/dashboard.css";

const dtData = {
  title: "title",
  name: "name",
  totalBudget: "50000",
  utiliezedBudget: "10000",
  onProjects: 23,
  totalResources: "5",
  percent: "20"
}

const dashboardHeader = [
  { name: "Project Name", key: "projectName" },
  { name: "Project Type", key: "projectType" },
  { name: "Cluster", key: "name" },
  { name: "Project Start Date", key: "projectStartDate" },
  { name: "Total Resource", key: "resources" },
  { name: "Monthley Total Budget", key: "totalBudget" },
  { name: "Monthley Utilized Budget", key: "utilizedBudget" },
  { name: "", key: "action" },

]

export default function Dashboard() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const counter = useSelector(state => state)
  const [dashboardClusters, updateDashboardClusters] = useState(null)
  const clusterDataState = useSelector(state => state.cluster.allClusters)

  useEffect(() => {
    if (!sessionStorage.getItem("userToken")) {
      dispatch(signOut(navigate))
    }
  }, [])



  useEffect(() => {
    dispatch(getAllClusters())
  }, [])


  useEffect(() => {
    if (clusterDataState) {
      updateDashboardClusters(clusterDataState)
    }
  }, [clusterDataState])


  if (dashboardClusters) {
    return <MainDashboard dtData={dtData} dashboardClusters={dashboardClusters} />
  } else {
    return <Loader />
  }

}



function MainDashboard(props) {
  const cardsColor = ['#31569C', '#9B3C2B', '#5DA691', '#FF8A00', '#60319C', '#848FAC', '#2E9ECE']
  const { dtData, dashboardClusters } = props;

  let allTableData = [];

  dashboardClusters.forEach(element => {
    let data = {}
    element.projects.forEach(project => {
      if (!data['totalBudget'])
        data['totalBudget'] = project.totalBudget;
      else
        data.totalBudget = data.totalBudget + project.totalBudget;

      if (!data["utilizedBudget"]) {
        data['utilizedBudget'] = project.usedBudget;
      }
      else
        data.utilizedBudget = data.utilizedBudget + project.usedBudget

      if (!data['resources']) {
        data['resources'] = project.resources.length
      }
      else {
        data.resources = data.resources + project.resources.length
      }

      if (!data['projectType']) {
        data['projectType'] = project.projectType
      }
      else {
        data.projectType = data.projectType
      }

      if (!data['projectStartDate']) {
        data['projectStartDate'] = project.projectStartDate
      } else {
        data.projectStartDate = data.projectStartDate
      }

      if (!data['projectName']) {
        data['projectName'] = project.projectName
      } else {
        data.projectName = project.projectName
      }

    })



    if (element.projects.length === 0) {
      data['totalBudget'] = 0
      data["utilizedBudget"] = 0
      data['resources'] = 0
      data['projectType'] = 0
      data["projectStartDate"] = "00/00/0000"
    }

    data['name'] = element.name;
    data['noOfProject'] = element.noOfProject;
    allTableData.push(data)

  });

  const allBoxes = () => (
    allTableData.map((box, index) => <DashboardTopBoxes dtData={box}
      className="col" key={index} colors={cardsColor[Math.floor(Math.random() * 7)]} />
    ))



  return (
    <div>

      <section className="mb-5" style={{ width: "100%" }} >
        <div className="mt-3 dashboardCard">
          {allBoxes()}
        </div>
      </section>

      <section style={{ marginTop: "5em", width: "100%" }} >
        <div style={{ width: "100%" }} className="graphGrid">

        </div>
      </section>

      <MainTable
        tableHeaderContent={dashboardHeader}
        tableBodyData={allTableData}
        className='d-md-flex'
      />

    </div>
  )
}

function Loader() {
  return (
    <div>
      <div>Loading.....</div>
    </div>

  )
}