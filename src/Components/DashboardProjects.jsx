import React from 'react'
import DashboardTableBody from './DashboardTableBody'


const dashboardTableData1 = {
  company: {
    companyLogo: "https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-xd.svg",
    companyName: "Material XD Version"
  },
  members: ['https://demos.creative-tim.com/material-dashboard/assets/img/team-1.jpg', 'https://demos.creative-tim.com/material-dashboard/assets/img/team-1.jpg', 'https://demos.creative-tim.com/material-dashboard/assets/img/team-1.jpg'],
  budget: "$40000",
  completion: "75"
}

const dashboardTableData2 = {
  company: {
    companyLogo: "https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-atlassian.svg",
    companyName: "Add Progress Track"
  },
  members: ['https://demos.creative-tim.com/material-dashboard/assets/img/team-4.jpg', 'https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg'],
  budget: "$5000",
  completion: "100"
}

const dashboardTableData3 = {
  company: {
    companyLogo: "https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-spotify.svg",
    companyName: "Redesign New Online Shop"
  },
  members: ['https://demos.creative-tim.com/material-dashboard/assets/img/team-4.jpg', 'https://demos.creative-tim.com/material-dashboard/assets/img/team-1.jpg', 'https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg', 'https://demos.creative-tim.com/material-dashboard/assets/img/team-3.jpg'],
  budget: "$70000",
  completion: "50"
}

function DashboardProjects() {
  return (
    <div className='m-4 p-4 tableBox'>
      <div>
        <div>
          <h4>Projects</h4>
          <p><span className='fw-bold'>30 done</span>  this month </p>
        </div>
        <i></i>
      </div>


      <div className='sideScroll'>
        <table className='table'>
          <thead>
            <tr className='dashboardTableHeader'>
              <th scope="col" className='p-2' style={{ borderBottom: "1px solid grey" }}>COMPANIES</th>
              <th scope="col" className='p-2' style={{ borderBottom: "1px solid grey" }}>MEMBERS</th>
              <th scope="col" className='p-2' style={{ borderBottom: "1px solid grey" }}>BUDGET</th>
              <th scope="col" className='p-2' style={{ borderBottom: "1px solid grey" }}>COMPLETION</th>
            </tr>
          </thead>

          <tbody>

            <DashboardTableBody dashboardTableData={dashboardTableData1} />
            <DashboardTableBody dashboardTableData={dashboardTableData2} />
            <DashboardTableBody dashboardTableData={dashboardTableData3} />
            <DashboardTableBody dashboardTableData={dashboardTableData1} />
            <DashboardTableBody dashboardTableData={dashboardTableData2} />
            <DashboardTableBody dashboardTableData={dashboardTableData3} />

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DashboardProjects