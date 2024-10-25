import React from 'react'

function TablesListData(props) {
    let userState = props.tableDataForCluster.status;
    let color = "linear-gradient(195deg,#747b8a,#495361)"
    if (userState) {
        color = "linear-gradient(195deg,#66bb6a,#43a047)"
    }

    return (
        <tr className='my-1'>
            <td className='d-flex align-self-center ms-3 border-top-0'>
                <div className='me-5'>
                    <img src={props.tableDataForCluster.clusterPhoto ? props.tableDataForCluster.clusterPhoto : "https://imgs.search.brave.com/-HKS9Ih7B4WJ6yKWuWHzzPz8tw8Sk3yViNihJsKXyzQ/rs:fit:1200:1024:1/g:ce/aHR0cHM6Ly93d3cu/cHNkZ3JhcGhpY3Mu/Y29tL2ZpbGUvdXNl/ci1pY29uLmpwZw"} alt={props.tableDataForCluster.name} className="tableImage" />
                </div> </td>
            <td className='colorgrey pt-4'>{props.tableDataForCluster.name}</td>
            <td className='colorgrey pt-4'>
                {props.tableDataForCluster.description}
            </td>
            <td className='colorgrey pt-4'>{props.tableDataForCluster.clusterHeadID}</td>
            <td className='colorgrey'><div className='onOffline' style={{ backgroundImage: `${color}` }}>{props.tableDataForCluster.status ? "online" : "offline"}</div></td>

            <td className='colorgrey pt-4'><button className='btn edit-btn'
                onClick={() => {
                    const editDialog = document.getElementsByTagName('dialog')[0];
                    editDialog.showModal();
                    props.updateClusterData(props.tableDataForCluster)
                    //console.log(props.tableDataForCluster)
                }}
            >Edit</button></td>
            <td className='colorgrey pt-4'><button className='btn edit-btn' onClick={(e) => {
                document.getElementsByTagName('dialog')[1].showModal();
                props.updateDeleteCluster(props.tableDataForCluster.id)
            }}>Delete</button></td>
        </tr>
    )
}

export default TablesListData

