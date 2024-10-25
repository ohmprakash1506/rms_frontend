import React from 'react'
import "../Styles/dashboardTable.css"

let keyNo = 0;

function DashboardTableBody(props) {
    let membersImage = [];
    let membersArr = props.dashboardTableData.members;
    let range = Number(props.dashboardTableData.completion);
    let rangeColor;
    for (let i of membersArr) {
        membersImage.push(<img src={i} alt={i} key={keyNo} className="tableImages" />)
        keyNo++;
    }

    if (Number(props.dashboardTableData.completion) === 100) {
        rangeColor = "linear-gradient(195deg,#66bb6a,#43a047)";
    } else {
        rangeColor = "linear-gradient(195deg,#49a3f1,#1a73e8)";
    }


    return (
        <>
            <tr >
                <td className='d-flex border-top-0'>
                    <img src={props.dashboardTableData.company.companyLogo} className="tableLogoImg m-0" />
                    <p className='fw-bold fs-4 tableContentMargin'>{props.dashboardTableData.company.companyName}</p>
                </td>

                <td className=''>
                    {membersImage}
                </td>

                <td className='fw-bold'>
                    {props.dashboardTableData.budget}
                </td>

                <td className='fw-bold'>

                    {`${props.dashboardTableData.completion}%`}
                    <div className='completionRange'><div className='rangePercent' style={{ width: `${range}%`, backgroundImage: `${rangeColor}` }}></div></div>
                </td>

            </tr>
        </>
    )
}

export default DashboardTableBody;